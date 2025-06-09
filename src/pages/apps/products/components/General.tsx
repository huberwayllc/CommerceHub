import { ChangeEvent } from "react";
import {Form, } from 'react-bootstrap';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import PriceTab from './Price';
import { GeneralInfo } from './options/types';
import ProductGallery from "./ProductGallery";

interface GeneralTabProps {
  data: GeneralInfo;
  onChange: (newData: GeneralInfo) => void;
  images: string[];                            
  onImagesChange: (newImages: string[]) => void;
}

const GeneralTab: React.FC<GeneralTabProps> = ({ data, onChange,  images, onImagesChange  }) => {
    const handleFieldChange = (
    e: ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value, type, checked } = e.target;

    let parsedValue: string | number | boolean;
    if (type === "checkbox") {
      parsedValue = checked;
    } else if (type === "number") {
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

  return (
    <>
      {/* Product image section--------------------------- */}
      <ProductGallery  images={images} onChange={onImagesChange}  />
        
        <div className='d-block d-md-none '>
          <PriceTab price={data.price}   onPriceChange={(newPrice) => onChange({ ...data, price: newPrice })}/>
        </div>
        
      
      {/* Product details section------------------------------ */}
    <div className='w-100 card p-3'>
      <div className="w-100 d-flex  gap-2">
        <div style={{width: "50%"}}>
          <h6 className="fw-bold">Nome</h6>
          <input className="input-product w-100" name="title"  value={data.title} onChange={handleFieldChange}/>
        </div>
        <div style={{width: "30%"}}>
          <h6 className="fw-bold">Cod. Art.</h6>
          <input className="input-product w-100" name="itemCode"  value={data.itemCode} onChange={handleFieldChange}/>
        </div>
        <div style={{width: "20%"}}>
          <h6 className="fw-bold">Peso, kg</h6>
          <input className="input-product w-100" name='weight' value={data.weight} onChange={handleFieldChange}/>
          <div className='d-flex align-items-start gap-2 mt-2'>
          <Form.Check
              type="checkbox"
              name='requiresShipping'
              className=" m-0"
              style={{ position: 'relative', bottom: '2px' }}
              checked={data.requiresShipping}
              onChange={handleFieldChange}
            />
            <p className='mb-0' style={{fontSize: "11px"}}>Richiede spedizione o ritiro</p> 
          </div>
        </div>
      </div>

      <div className='w-100'>
        <h6 className="fw-bold">Descrizione</h6>
        <ReactQuill
          theme="snow"
          value={data.description}
          onChange={handleDescriptionChange}
        />
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
    </>
  );
};

export default GeneralTab;
