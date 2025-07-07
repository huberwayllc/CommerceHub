import React, { useEffect, useState, useRef } from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import { Button, Form, ListGroup, Card } from 'react-bootstrap';
import { FaChevronDown, FaChevronRight } from 'react-icons/fa';
import { Product } from '../products/components/options/types';
import { Category, CategoryFormData } from './components/types';
import { FaRegTrashAlt, FaPlus } from 'react-icons/fa';
import { FaSave } from 'react-icons/fa';
import { Modal, Image } from 'react-bootstrap';
import { FaTrash } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import ReactQuill from 'react-quill';
import { IoArrowBack } from 'react-icons/io5';

const addCategory = (list: Category[], newCat: Category, parentId: string): Category[] =>
  list.map(cat =>
    cat.id === parentId
      ? { ...cat, subcategories: [...cat.subcategories, newCat] }
      : { ...cat, subcategories: addCategory(cat.subcategories, newCat, parentId) }
  );

const STORAGE_CATEGORIES = 'categories_list_v1';
const STORAGE_PRODUCTS = 'products_list_v1';

const CategoriesList: React.FC = () => {
  const isInitialMount = useRef(true);
  const [products, setProducts] = useState<Product[]>([]);
  const navigate = useNavigate();
  const [isDirty, setIsDirty] = useState(false);
  const [allProducts, setAllProducts] = useState<Product[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [showProductModal, setShowProductModal] = useState(false);
  const [tempSelection, setTempSelection] = useState<Set<string>>(new Set());
  const [categories, setCategories] = useState<Category[]>([]);
  const [expandedIds, setExpandedIds] = useState<Set<string>>(new Set());
  const [activeTab, setActiveTab] = useState<'general'|'prodotti'|'seo'>('general');
  const [selected, setSelected] = useState<Category | null>(null);
  const [formData, setFormData] = useState<CategoryFormData>({
    name: '',
    available: true,
    description: '',
    productIds: [],
    parentCategoryId: undefined,
  });


  const handleToggle = (id: string) => {
  setExpandedIds(prev => {
    const next = new Set(prev);
    if (next.has(id)) next.delete(id);
    else next.add(id);
    return next;
  });
};

const getCategoryNameById = (id?: string): string => {
  if (!id) return '';
  const findRec = (list: Category[]): Category | undefined => {
    for (const cat of list) {
      if (cat.id === id) return cat;
      const found = findRec(cat.subcategories);
      if (found) return found;
    }
    return undefined;
  };

  const found = findRec(categories);
  return found?.name || '';
};

const collectAllCategoryIds = (cats: Category[]): Set<string> => {
  const ids = new Set<string>();
  const traverse = (list: Category[]) => {
    list.forEach(cat => {
      ids.add(cat.id);
      if (cat.subcategories.length > 0) {
        traverse(cat.subcategories);
      }
    });
  };
  traverse(cats);
  return ids;
};

const toggleTemp = (id: string) => {
  const next = new Set(tempSelection);
  next.has(id) ? next.delete(id) : next.add(id);
  setTempSelection(next);
};
const confirmProductSelection = () => {
  // aggiorna formData.productIds
  setFormData(prev => ({ ...prev, productIds: Array.from(tempSelection) }));
  setShowProductModal(false);
};
const removeProduct = (id: string) => {
  setFormData(prev => ({
    ...prev,
    productIds: prev.productIds.filter(pid => pid !== id)
  }));
};


 useEffect(() => {
  const savedProducts: Product[] = JSON.parse(localStorage.getItem(STORAGE_PRODUCTS) || '[]');
  setProducts(savedProducts);
  setAllProducts(savedProducts); 
  const savedCats: Category[] = JSON.parse(localStorage.getItem(STORAGE_CATEGORIES) || '[]');
  setCategories(savedCats);

  const allIds = collectAllCategoryIds(savedCats);
  setExpandedIds(allIds);
}, []);


  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      localStorage.setItem(STORAGE_CATEGORIES, JSON.stringify(categories));
    }
  }, [categories]);


  const handleSelect = (cat: Category) => {
    setSelected(cat);
    setFormData({
      name: cat.name,
      available: cat.available,
      description: cat.description || '',
      productIds: cat.products.map(p => p.id.toString()),
      parentCategoryId: undefined,
    });
    setIsDirty(false);
  };


  const handleChange = (e: React.ChangeEvent<any>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
    setIsDirty(true);
  };


const handleSave = () => {
  if (!formData.name.trim()) return;

  if (formData.parentCategoryId || !selected) {
    const newCat: Category = {
      id: Date.now().toString(),
      name: formData.name,
      available: formData.available,
      description: formData.description,
      products: products.filter(p => formData.productIds.includes(p.id.toString())),
      subcategories: [],
    };
    if (formData.parentCategoryId) {
      setCategories(prev => addCategory(prev, newCat, formData.parentCategoryId!));
      setExpandedIds(prev => new Set(prev).add(formData.parentCategoryId!));
    } else {
      setCategories(prev => [...prev, newCat]);
    }

    setSelected(newCat);
    setFormData({
      name: newCat.name,
      available: newCat.available,
      description: newCat.description ?? '',
      productIds: newCat.products.map(p => p.id.toString()),
      parentCategoryId: undefined,
    });

  } else {
    const updateRec = (list: Category[]): Category[] =>
      list.map(cat => {
        if (cat.id === selected!.id) {
          return {
            ...cat,
            name: formData.name,
            available: formData.available,
            description: formData.description,
            products: products.filter(p => formData.productIds.includes(p.id.toString())),
          };
        }
        return { ...cat, subcategories: updateRec(cat.subcategories) };
      });

    setCategories(prev => updateRec(prev));
  }

  setIsDirty(false);
};


useEffect(() => {
  const onKeyDown = (e: KeyboardEvent) => {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 's') {
      e.preventDefault();
      handleSave();
    }
  };
  window.addEventListener('keydown', onKeyDown);
  return () => window.removeEventListener('keydown', onKeyDown);
}, [formData, selected, handleSave]);


  const handleDelete = () => {
    if (!selected) return;
    const removeRec = (list: Category[]): Category[] =>
      list.filter(cat => cat.id !== selected.id)
          .map(cat => ({ ...cat, subcategories: removeRec(cat.subcategories) }));

    setCategories(removeRec(categories));
    setSelected(null);
    setFormData({ name: '', available: true, description: '', productIds: [], parentCategoryId: undefined });
  };


const renderCategoryItems = (cats: Category[], level = 0) =>
  cats.map(cat => (
    <React.Fragment key={cat.id}>
      <div  onClick={() => handleSelect(cat)}
      className="d-inline-flex align-items-center py-1 rounded-3" style={{ paddingLeft: `${level * 20}px`, backgroundColor: selected?.id === cat.id ? '#EEF2FF' : 'transparent', }}>
        <div style={{ width: '20px' }}>
          {cat.subcategories.length > 0 ? (
            <Button
              variant="link"
              size="sm"
              onClick={() => handleToggle(cat.id)}
              className="p-0"
            >
              {expandedIds.has(cat.id)
                ? <FaChevronDown />
                : <FaChevronRight />}
            </Button>
          ) : (
            <span style={{ display: 'inline-block', width: '16px' }}></span>
          )}
        </div>
        <div
          
          style={{
            cursor: 'pointer',
            userSelect: 'none'
          }}
        >
          <span  className={
            selected?.id === cat.id
              ? 'text-primary fw-bold'
              : ''
          }>
            {cat.name}
          </span>
        </div>
      </div>
      {expandedIds.has(cat.id)
        && renderCategoryItems(cat.subcategories, level + 1)}
    </React.Fragment>
  ));


  return (  
    <>
    {isDirty && (
        <div
            style={{
            position: "sticky",
            top: 0,
            left: 0,
            height: "65px",
            marginRight: "-16px",
            marginLeft: "-16px",
            backgroundColor: "#D4DEF9",
            zIndex: 2000,
            padding: "10px 20px",
            boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            }}
        >
            <div>
            <button onClick={() => window.history.back()} className="btn btn-link text-decoration-none p-0 me-3">
                <div className='d-flex align-items-center gap-1'>
                <IoArrowBack size={20} style={{ color: "#2563EB" }} />
                <span style={{ color: "#2563EB" }} className='fw-semibold'>Indietro</span>
                </div>
            </button>
            <span style={{ fontWeight: 500, color: "#333" }}>
                In questa pagina ci sono modifiche non salvate.
            </span>
            </div>
            <div>
            <button style={{ fontSize: "13px" }} onClick={() => { handleSave(); window.history.back(); }} className="btn btn-sm bg-transparent me-2 fw-semibold colorPrimary">
                Salva e Chiudi
            </button>
            <button
                onClick={handleSave}
                className="btn btn-sm btn-primary px-3 fw-semibold"
                title="Ctrl+S"
                style={{ height: "40px", fontSize: "14px" }}
            >
                Salva (Ctrl+S)
            </button>
            </div>
        </div>
        )}

      <div className="mt-4 pt-1 d-inline-flex gap-2 mb-4">
        <Button
          className="boxShadow"
          style={{ height: '45px', border: '0px' }}
         onClick={() => {
            setSelected(null);
            setFormData({
                name: '',
                available: true,
                description: '',
                productIds: [],
                parentCategoryId: undefined,
            });
            }}
        >
          <FaPlus /> Nuova categoria root
        </Button>
        <Button
          className="boxShadow bg-white text-black"
          style={{ height: '45px', border: '0px' }}
          disabled={!selected}
          onClick={() => {
            setSelected(null);
            setFormData({
                name: '',
                available: true,
                description: '',
                productIds: [],
                parentCategoryId: selected!.id,
            });
            }}
        >
          <FaPlus /> Nuova sottocategoria
        </Button>
        <button
          className="boxShadow bg-white redColor fw-semibold rounded-1 px-3"
          style={{ height: '45px', border: '0px' }}
          disabled={!selected}
          onClick={handleDelete}
        >
          <FaRegTrashAlt /> Elimina
        </button>
      </div>

      <div className="w-100 d-flex gap-3">
        <Card style={{ width: '25%' }} className="p-3">
          <h5 className="fw-semibold m-0">Categorie</h5>
          <ListGroup variant="flush" className="mt-3">
            {renderCategoryItems(categories)}
          </ListGroup>
        </Card>

        <Card style={{ width: '75%' }} className="p-3">
          <div className="d-inline-flex justify-content-between align-items-center mb-3">
            <h3>
            {selected
                ? `Modifica Categoria "${selected.name}"`
                : formData.parentCategoryId
                ? `Nuova Sottocategoria di "${getCategoryNameById(formData.parentCategoryId)}"`
                : 'Nuova Categoria'}
            </h3>
            <Button style={{ height: '45px' }} onClick={handleSave}>
              <FaSave /> Salva
            </Button>
          </div>

          <Tabs
            activeKey={activeTab}
            onSelect={(k) => setActiveTab(k as any)}
            className="custom-tabs mb-3 fw-bold"
            style={{fontSize: "14px"}}
            variant="tabs"
            >
            <Tab eventKey="general" title="Generale">
                <Form>
                    <Form.Group className="mb-3">
                    <p className='fw-bold mb-1'>Nome Categoria</p>
                    <Form.Control
                        required
                        className='input-product'
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                    />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="available">
                    <Form.Check
                        className='fw-bold'
                        type="checkbox"
                        label="Disponibile"
                        name="available"
                        checked={formData.available}
                        onChange={handleChange}
                    />
                    </Form.Group>

                    <Form.Group className="mb-3">
                   <p className='fw-bold mb-1'>Descrizione</p>
                    <textarea
                      className="form-control mb-3 input-product"
                      rows={5}
                      value={formData.description}
                      onChange={e => {
                        setFormData(prev => ({ ...prev, description: e.target.value }));
                        setIsDirty(true);
                      }}
                    />
                    </Form.Group>
                </Form>
            </Tab>

            <Tab eventKey="prodotti" title="Prodotti della categoria">
                <div className='w-100'>
                    <div className="d-flex align-items-center justify-content-between mb-3">
                    <div className="d-inline-flex gap-2">
                        <Button variant="primary" onClick={() => {
                        setTempSelection(new Set(formData.productIds));
                        setShowProductModal(true);
                        }}>
                         Aggiungi prodotti ad una categoria
                        </Button>
                        <Button className='bg-transparent text-black' onClick={() => navigate('/apps/products/new')}>
                            Crea nuovo prodotto
                        </Button>
                    </div>
                    </div>
                    {formData.productIds.length > 0 ? (
                    <div className="d-flex flex-wrap gap-2">
                        {formData.productIds.map(id => {
                        const p = allProducts.find(x => String(x.id) === id);
                        if (!p) return null;
                        return (
                            <div key={id} className="border rounded p-2 text-center position-relative" style={{ width: 100 }}>
                            <FaTrash
                                onClick={() => removeProduct(id)}
                                style={{ position: 'absolute', top: 4, right: 4, cursor: 'pointer', color: '#dc3545', fontSize: '0.9rem' }}
                            />
                            <Image
                                src={p.general.objUrl || p.images?.[0] || '/fallback.png'}
                                rounded
                                style={{ width: 60, height: 60, objectFit: 'cover' }}
                            />
                            <div className="fw-semibold mt-1" style={{ fontSize: 12 }}>{p.general.title}</div>
                            </div>
                        );
                        })}
                    </div>
                    ) : (
                    <p>Seleziona o crea una categoria per amministrare i prodotti associati.</p>
                    )}
                </div>

                {/* ----- Modal di selezione prodotti ----- */}
                <Modal show={showProductModal} onHide={() => setShowProductModal(false)}>
                    <Modal.Header closeButton>
                    <Modal.Title>Seleziona prodotti</Modal.Title>
                    </Modal.Header>
                    <Modal.Body style={{ maxHeight: '60vh', overflowY: 'auto' }}>
                    <input
                        type="text"
                        placeholder="Cerca per nome"
                        value={searchTerm}
                        onChange={e => setSearchTerm(e.target.value)}
                        className="mb-3 w-100 form-control"
                    />
                    {allProducts
                        .filter(p => p.general.title.toLowerCase().includes(searchTerm.toLowerCase()))
                        .map(p => (
                        <div key={p.id} className="d-flex align-items-center gap-3 mb-3">
                            <Form.Check
                            type="checkbox"
                            checked={tempSelection.has(p.id.toString())}
                            onChange={() => toggleTemp(p.id.toString())}
                            style={{ transform: 'scale(1.2)' }}
                            />
                            <Image
                            src={p.general.objUrl || p.images?.[0] || '/fallback.png'}
                            rounded
                            style={{ width: 50, height: 50, objectFit: 'cover' }}
                            />
                            <div>
                            <div className="fw-semibold" style={{ fontSize: 14 }}>{p.general.title}</div>
                            <div className="text-muted" style={{ fontSize: 12 }}>{p.general.price}€</div>
                            </div>
                        </div>
                        ))}
                    </Modal.Body>
                    <Modal.Footer>
                    <Button className='bg-transparent text-black' onClick={() => setShowProductModal(false)}>Annulla</Button>
                    <Button variant="primary" onClick={confirmProductSelection}>Conferma</Button>
                    </Modal.Footer>
                </Modal>
                </Tab>


            <Tab eventKey="seo" title="SEO">
                <h5 className='fw-bold'>Ecco come la tua categoria appare su Google</h5>
                <div className='borderGray p-3 rounded-2'>
                        <p style={{fontSize: "15px", color: "#1a0dab"}} className='m-0 fw-semibold'>Uomo</p>
                        <p style={{fontSize: "13px", color: "#006621"}} className='m-0'>https://demo.esdra.eu/#!/Uomo/c/183625253</p>
                        <p style={{color: "#607385 "}} className='m-0'>Descrizione della categoria</p>
                </div>
                <div className='mt-4'>
                  <h6 className="fw-bold">Personalizza il titolo della pagina e la meta descrizione‍</h6>
                  <p>Ecwid genera i metadati in base al nome e alla descrizione della categoria. I motori di ricerca mostrano un numero limitato di caratteri, perciò a volte è meglio cambiare il titolo e la meta description della pagina. Utilizza i campi qui sotto per affinare i metadati della categoria e per descrivere ciò che offri in modo più preciso.</p>
                </div>
                 <div className='mt-4'>
                  <h6 className="fw-bold">Come usare la SEO per promuovere il proprio negozio</h6>
                  <p>L'ottimizzazione per i motori di ricerca (Search engine optimization o SEO) è un processo volto a migliorare il posizionamento di un sito web nei risultati dei motori di ricerca, al fine di ottenere traffico gratuito. È una parte essenziale del marketing che consente di aumentare notevolmente la visibilità del proprio sito web e di portare i visitatori interessati nel negozio. Consulta il nostro Centro assistenza per informazioni sui vari modi di promuovere il negozio e attirare più visitatori con l'aiuto della SEO.</p>
                </div>
            </Tab>
            </Tabs>

        </Card>
      </div>
    </>
  );
};

export default CategoriesList;