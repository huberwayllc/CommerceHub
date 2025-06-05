import { useState } from "react";
import { ChangeEvent } from "react";
import { Form } from 'react-bootstrap';

interface PriceTabProps {
  price: number;
  onPriceChange: (newPrice: number) => void;
}

const PriceTab: React.FC<PriceTabProps> = ({ price, onPriceChange }) => {

    const handlePriceInput = (e: ChangeEvent<HTMLInputElement>) => {
    const val = Number(e.target.value);
    onPriceChange(isNaN(val) ? 0 : val);
  };

    const [isSelected, setIsSelected] = useState(false);

  return (
    <>
        <div className="card p-3 h-100">
            <h4 className="fw-bold">Prezzi</h4>

            <div className="mt-0" style={{ backgroundColor: "#ECEEF0", height: "55px", maxWidth: "250px" }}>
              <div
                className="d-flex align-items-center border border-secondary rounded"
                style={{ overflow: "hidden",  backgroundColor: "#ECEEF0" }}
              >
                <input
                  type="number"
                  className="form-control border-0 rounded-0"
                  placeholder="0.00"
                   value={price.toString()}
                  onChange={handlePriceInput}
                  style={{
                    boxShadow: "none",
                    outline: "none",
                    backgroundColor: "#ECEEF0",
                    height: "50px",
                    fontSize: "20px",
                  }}
                />
                <div
                  className="px-2 border-start border-secondary d-flex align-items-center"
                  style={{  backgroundColor: "#ECEEF0" }}
                >
                  €
                </div>
              </div>
            </div>
            <p className="mt-1" style={{fontSize: "11px"}}>Tutti i prezzi includono tasse</p>
            <p className="mt-2 fw-semibold" style={{color: "#2563EB", marginBottom: "2px", cursor: "pointer"}}>Gestisci le opzioni del prezzo</p>
          </div>

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

    </>
  );
};

export default PriceTab;
