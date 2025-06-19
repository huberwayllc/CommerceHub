// src/apps/categories/CategoriesList.tsx
import React, { useEffect, useState, useRef } from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import { Button, Form, ListGroup, Card } from 'react-bootstrap';
import { FaChevronDown, FaChevronRight } from 'react-icons/fa';
import { Product } from '../products/components/options/types';
import { Category, CategoryFormData } from './components/types';
import { FaRegTrashAlt, FaPlus } from 'react-icons/fa';
import { FaSave } from 'react-icons/fa';
import ReactQuill from 'react-quill';

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


 useEffect(() => {
  const savedProducts: Product[] = JSON.parse(localStorage.getItem(STORAGE_PRODUCTS) || '[]');
  setProducts(savedProducts);

  const savedCats: Category[] = JSON.parse(localStorage.getItem(STORAGE_CATEGORIES) || '[]');
  setCategories(savedCats);

  // Espandi tutto
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
  };


  const handleChange = (e: React.ChangeEvent<any>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };


const handleSave = () => {
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
    } else {
      setCategories(prev => [...prev, newCat]);
    }
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
        return {
          ...cat,
          subcategories: updateRec(cat.subcategories),
        };
      });

    setCategories(prev => updateRec(prev));
  }

  setSelected(null);
  setFormData({
    name: '',
    available: true,
    description: '',
    productIds: [],
    parentCategoryId: undefined,
  });
};


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
      <div className="d-inline-flex align-items-center pt-2" style={{ paddingLeft: `${level * 20}px` }}>
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
          onClick={() => handleSelect(cat)}
          style={{ cursor: 'pointer' }}
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
        <Button
          className="boxShadow bg-white text-black"
          style={{ height: '45px', border: '0px' }}
          disabled={!selected}
          onClick={handleDelete}
        >
          <FaRegTrashAlt /> Elimina
        </Button>
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
                    <ReactQuill
                    theme="snow"
                    value={formData.description}
                    onChange={value => setFormData(prev => ({ ...prev, description: value }))}
                    />
                    </Form.Group>
                </Form>
            </Tab>

            <Tab eventKey="prodotti" title="Prodotti della categoria">
                {selected || formData.parentCategoryId ? (
                <ul>
                    { (selected
                        ? selected.products
                        : // se è nuova sottocategoria, partiamo da vuoto
                        []
                    ).map(p => (
                        <li key={p.id}>{p.general.title}</li>
                    ))
                    }
                </ul>
                ) : (
                <p>Seleziona o crea una categoria per vederne i prodotti.</p>
                )}
            </Tab>

            <Tab eventKey="seo" title="SEO">
                <p>Campi SEO (meta title, description, ecc.)</p>
            </Tab>
            </Tabs>

        </Card>
      </div>
    </>
  );
};

export default CategoriesList;