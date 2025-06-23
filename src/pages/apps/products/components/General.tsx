import { ChangeEvent, useState, useEffect  } from "react";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import PriceTab from './Price';
import { GeneralInfo } from './options/types';
import ProductGallery from "./ProductGallery";
import { Button, Modal, Form } from "react-bootstrap";
import { Category } from "../../categories/components/types";

interface GeneralTabProps {
  data: GeneralInfo;
  onChange: (newData: GeneralInfo) => void;
  images: string[];                            
  onImagesChange: (newImages: string[]) => void;
  categories: Category[];
  selectedCategoryIds: string[];
  onCategoriesChange: (cats: Category[]) => void;
}

const GeneralTab: React.FC<GeneralTabProps> = ({ data, onChange,  images, onImagesChange, categories, selectedCategoryIds, onCategoriesChange  }) => {

const [showCatModal, setShowCatModal] = useState(false);
const [tempSelection, setTempSelection] = useState<string[]>(selectedCategoryIds);

const handleFieldChange = (
  e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
) => {
  const { name, value, type } = e.target;

  let parsedValue: string | number | boolean;
   if (type === "number") {
    parsedValue = Number(value);
  } else {
    parsedValue = value;
  }

  onChange({
    ...data,
    [name]: parsedValue,
  });
};

  const handleDescriptionChange = (html: string) => {
    onChange({
      ...data,
      description: html,
    });
  };

    const openCatModal = () => {
    setTempSelection(selectedCategoryIds);
    setShowCatModal(true);
  };

  const gatherDescendants = (cat: Category): string[] => {
  return cat.subcategories.reduce<string[]>((acc, sub) => {
    return acc.concat(sub.id, gatherDescendants(sub));
  }, []);
};


const toggleItem = (id: string) => {
  setTempSelection(sel =>
    sel.includes(id)
      ? sel.filter(x => x !== id)
      : [...sel, id]
  );
};


useEffect(() => {
  if (showCatModal) {
    setTempSelection(selectedCategoryIds);
  }
}, [showCatModal, selectedCategoryIds]);


const gatherAncestors = (id: string, list: Category[], chain: string[] = []): string[] => {
  for (const cat of list) {
    if (cat.id === id) return chain;
    const res = gatherAncestors(id, cat.subcategories, [...chain, cat.id]);
    if (res.length) return res;
  }
  return [];
};


  return (
    <>
      {/* Product image section--------------------------- */}
      <ProductGallery  images={images} onChange={onImagesChange}  />
        
      <div className='d-block d-md-none '>
        <PriceTab 
        price={data.price}   
        onPriceChange={(newPrice) => onChange({ ...data, price: newPrice })}
        isAvailable={data.isAvailable}
          onAvailabilityChange={(newVal) => onChange({ ...data, isAvailable: newVal })}
          />
      </div>

      {data.productType === 'digital' && (
      <div className="w-100 card p-3 mt-3">
        <h6 className="fw-bold">Prodotto digitale</h6>
        <p>Carica qui il file per il prodotto digitale</p>
        <input
          type="file"
          onChange={e => {
            const file = e.target.files?.[0];
            if (!file) return;
            const url = URL.createObjectURL(file);
            onChange({ ...data, file: url });
          }}
        />
        {data.file && (
          <p className="mt-2" style={{ fontSize: '0.9rem' }}>
            File caricato: <strong>{data.file.split('/').pop()}</strong>
          </p>
        )}
      </div>
      )}

      {data.productType === '3d_customizable' && (
      <div className="w-100 card p-3 mt-3">
        <h6 className="fw-bold">Modello 3D (.obj)</h6>
        <p>Carica qui il file .obj del tuo prodotto</p>
        <input
          type="file"
          accept=".obj"
          onChange={e => {
            const file = e.target.files?.[0];
            if (!file) return;
            const url = URL.createObjectURL(file);
            onChange({ ...data, objUrl: url });
          }}
        />
        {data.objUrl && (
          <p className="mt-2" style={{ fontSize: '0.9rem' }}>
            File caricato: <strong>{data.objUrl.split('/').pop()}</strong>
          </p>
        )}
      </div>
      )}
        
      
      {/* Product details section------------------------------ */}
    <div className='w-100 card p-3'>
      <div className="w-100 d-flex  gap-2">
        <div style={{width: "50%"}}>
          <h6 className="fw-bold">Nome</h6>
          <input className="input-product w-100" name="title"  value={data.title} onChange={handleFieldChange}/>
        </div>
        <div style={{width: "25%"}}>
          <h6 className="fw-bold">Cod. Art.</h6>
          <input className="input-product w-100" name="itemCode"  value={data.itemCode} onChange={handleFieldChange}/>
        </div>
        <div style={{width: "25%"}}>
            <h6 className="fw-bold">Tipologia Prodotto</h6>
            <select
              className="input-product w-100"
              name="productType"
              value={data.productType}
              onChange={handleFieldChange}
            >
              <option value="physical">Fisico</option>
              <option value="digital">Digitale</option>
              <option value="3d_customizable">3D Personalizzabile</option>
            </select>
        </div>
      </div>

      <div className='w-100 mt-3'>
        <h6 className="fw-bold">Descrizione</h6>
        <ReactQuill
          theme="snow"
          value={data.description}
          onChange={handleDescriptionChange}
        />
      </div>
    </div>


    <div className='w-100 card p-3'>
      <h6 className="fw-bold">Categorie</h6>
      <div className="d-inline-flex borderBottomGray pb-2">
         <Button onClick={openCatModal}>Gestisci Categorie</Button>
         <div className="mb-2">
            {categories.map(cat => (
              <>
                {selectedCategoryIds.includes(cat.id) && (
                  <span key={cat.id} className="badge bg-secondary me-1">{cat.name}</span>
                )}
                {cat.subcategories.map(sub => (
                  selectedCategoryIds.includes(sub.id) && (
                    <span key={sub.id} className="badge bg-info me-1">{sub.name}</span>
                  )
                ))}
              </>
            ))}
          </div>
      </div>
    </div>

    {/* Product options section---------------------------- */}
    <div className='w-100 card p-3'>
      <h6 className="fw-bold">Aggiungi o modifica nastro</h6>
      <p>Inserire i nastri di testo personalizzabili come "Nuovo" o "Spedizione Gratuita" sull'immagine del prodotto principale per attrarre i clienti e portare maggiori vendite.</p>
    </div>

    {/* Product short description section--------------------- */}
    <div className='w-100 card p-3'>
      <h6 className="fw-bold">Aggiungi descrizione breve</h6>
      <p>Abbina l'immagine del tuo prodotto ad un breve testo che dia una descrizione o promozione extra per il prodotto. Il testo sarà mostrato sul tuo elenco dei prodotti e la pagina dei dettagli del prodotto.</p>
    </div>


    <Modal show={showCatModal} onHide={() => setShowCatModal(false)}>
      <Modal.Header closeButton><Modal.Title>Seleziona Categorie</Modal.Title></Modal.Header>
      <Modal.Body>
        {categories.map(cat => (
          <div key={cat.id} style={{ marginBottom: '0.5rem' }}>
            <Form.Check
              type="checkbox"
              id={`cat-${cat.id}`}
              label={cat.name}
              checked={tempSelection.includes(cat.id)}
              onChange={() => toggleItem(cat.id)}
            />

            <div style={{ paddingLeft: 20, marginTop: 2 }}>
              {cat.subcategories.map(sub => (
                <Form.Check
                  key={sub.id}
                  type="checkbox"
                  id={`sub-${sub.id}`}
                  label={sub.name}
                  checked={tempSelection.includes(sub.id)}
                  onChange={() => toggleItem(sub.id)}
                />
              ))}
            </div>
          </div>
        ))}
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={() => setShowCatModal(false)}>Annulla</Button>

        <Button variant="primary" onClick={() => {
          // Costruisci la struttura categoria → sottocategorie selezionate
          const selectedCats: Category[] = categories
            .map(cat => {
              // Sottocategorie selezionate
              const selectedSubs = cat.subcategories.filter(sub => tempSelection.includes(sub.id));
              // Se la categoria è selezionata o almeno una sottocategoria lo è
              if (tempSelection.includes(cat.id) || selectedSubs.length > 0) {
                return {
                  ...cat,
                  subcategories: selectedSubs
                };
              }
              return null;
            })
            .filter(Boolean) as Category[];
          onCategoriesChange(selectedCats);
          setShowCatModal(false);
        }}>Salva</Button>

      </Modal.Footer>
    </Modal>

    </>
  );
};

export default GeneralTab;
