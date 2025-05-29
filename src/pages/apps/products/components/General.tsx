import { useState } from 'react';
import { GoPlus } from "react-icons/go";
import {Form, } from 'react-bootstrap';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import PriceTab from './Price';


const GeneralTab = () => {

  const [isSelected, setIsSelected] = useState(false);
  const [description, setDescription] = useState('');

  return (
    <>
      {/* Product image section--------------------------- */}
        <div className="w-100 card p-3">
          <div className="w-100 d-flex align-items-center justify-content-between">
            <h6 className="fw-bold">Galleria prodotti</h6>
            <h6 style={{color: "#2563EB"}} className="fw-semibold">Aggiungi Video</h6>
          </div>
            <div className="d-flex align-items-center gap-2">
            <div className="position-relative card shadow-none mb-0 p-2" style={{
              width: "130px",
              height: "130px",
              cursor: "pointer",
              backgroundColor: "#ECEEF0"
            }}>
              <div style={{
                position: "absolute",
                top: "37%",
                left: "50%",
                transform: "translate(-50%, -50%)"
              }}>
                <GoPlus style={{fontSize: "50px"}}/>
              </div>
              <p className="text-center text-black fw-semibold position-absolute" style={{
                fontSize: "10px",
                bottom: "0px",
                left: "50%",
                transform: "translateX(-50%)"
              }}>
                Carica immagine
              </p>
            </div>
              <div className="card shadow-none mb-0 p-2" style={{width: "130px", height: "130px", backgroundColor: "#ECEEF0"}}>

              </div>
              <div className="card shadow-none mb-0 p-2" style={{width: "130px", height: "130px", backgroundColor: "#ECEEF0"}}>

              </div>
              <div className="card shadow-none mb-0 p-2" style={{width: "130px", height: "130px", backgroundColor: "#ECEEF0"}}>

              </div>
            </div>
        </div>
        
        <div className='d-block d-md-none '>
          <PriceTab/>
        </div>
        
      
      {/* Product details section------------------------------ */}
    <div className='w-100 card p-3'>
      <div className="w-100 d-flex  gap-2">
        <div style={{width: "50%"}}>
          <h6 className="fw-bold">Nome</h6>
          <input className="input-product w-100"/>
        </div>
        <div style={{width: "30%"}}>
          <h6 className="fw-bold">Cod. Art.</h6>
          <input className="input-product w-100"/>
        </div>
        <div style={{width: "20%"}}>
          <h6 className="fw-bold">Peso, kg</h6>
          <input className="input-product w-100"/>
          <div className='d-flex align-items-start gap-2 mt-2'>
          <Form.Check
              type="checkbox"
              className=" m-0"
              style={{ position: 'relative', bottom: '2px' }}
              checked={isSelected}
              onChange={(e) => setIsSelected(e.target.checked)}
            />
            <p className='mb-0' style={{fontSize: "11px"}}>Richiede spedizione o ritiro</p> 
          </div>
        </div>
      </div>

      <div className='w-100'>
        <h6 className="fw-bold">Descrizione</h6>
        <ReactQuill
          theme="snow"
          value={description}
          onChange={setDescription}
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
