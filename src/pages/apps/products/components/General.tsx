import React, { useState } from 'react';
import { GoPlus } from "react-icons/go";
import { Table, Button, Form, Image, Dropdown } from 'react-bootstrap';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';


const GeneralTab = () => {

  const [isSelected, setIsSelected] = useState(false);
  const [description, setDescription] = useState('');

  return (
    <>
    <div className="d-flex align-items-start gap-3" style={{ alignItems: "stretch" }}>
        <div style={{width: "70%"}} className=" card p-3">
          <div className="w-100 d-flex align-items-center justify-content-between">
            <h6 className="fw-bold">Galleria prodotti</h6>
            <h6 style={{color: "#2563EB"}} className="fw-semibold">Aggiungi Video</h6>
          </div>
            <div className="d-flex align-items-center gap-2">
            <div className="position-relative card shadow-none mb-0 p-2" style={{
              width: "130px",
              height: "130px",
              cursor: "pointer",
              backgroundColor: "#F1F5F9"
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
              <div className="card shadow-none mb-0 p-2" style={{width: "130px", height: "130px", backgroundColor: "#F1F5F9"}}>

              </div>
              <div className="card shadow-none mb-0 p-2" style={{width: "130px", height: "130px", backgroundColor: "#F1F5F9"}}>

              </div>
              <div className="card shadow-none mb-0 p-2" style={{width: "130px", height: "130px", backgroundColor: "#F1F5F9"}}>

              </div>
            </div>
        </div>


        <div style={{ width: "30%" }} className="card p-3 h-100">
          <h4 className="fw-semibold">Prezzi</h4>

          <div className="mt-0" style={{ backgroundColor: "#F1F5F9", height: "55px" }}>
            <div
              className="d-flex align-items-center border border-secondary rounded"
              style={{ overflow: "hidden",  backgroundColor: "#F1F5F9" }}
            >
              <input
                type="number"
                className="form-control border-0 rounded-0"
                placeholder="0.00"
                style={{
                  boxShadow: "none",
                  outline: "none",
                  backgroundColor: "#F1F5F9",
                  height: "55px",
                }}
              />
              <div
                className="px-2 border-start border-secondary d-flex align-items-center"
                style={{  backgroundColor: "#F1F5F9" }}
              >
                €
              </div>
            </div>
          </div>
          <p className="mt-1" style={{fontSize: "11px"}}>Tutti i prezzi includono tasse</p>
          <p className="mb-0 mt-2 fw-semibold" style={{color: "#2563EB"}}>Gestisci le opzioni del prezzo</p>
        </div>
    </div>



    <div className="d-flex align-items-start gap-3" style={{ alignItems: "stretch" }}>
      <div style={{width: "70%"}} className=" card p-3">
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
                <p style={{fontSize: "11px"}}>Richiede spedizione o ritiro</p> 
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

       <div style={{ width: "30%" }} >
        <div className="card p-3 h-100">
          <h6 className="fw-bold">Disponibilità del prodotto</h6>
          <Form.Check
            type="switch"
            label="Abilitato"
            checked={isSelected}
            readOnly
          />
        </div>

        <div className="card p-3 h-100">
          <h6 className="fw-bold">Controllo della Disponibilità</h6>
          <Form.Check
            type="switch"
            label="Abilitato"
            checked={isSelected}
            readOnly
          />
          <p className="mb-0 mt-3 fw-semibold" style={{color: "#2563EB"}}>Gestisci le opzioni del prezzo</p>
        </div>

        <div className="card p-3 h-100">
          <p className="mb-0 mt-3 fw-semibold" style={{color: "#2563EB"}}>Anteprima del prodotto</p>
        </div>
      
       </div>

    </div>
    </>
  );
};

export default GeneralTab;
