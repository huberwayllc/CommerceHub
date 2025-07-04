import { useState } from "react";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";

const ShippingPricesForm = () => {
  const [selectedMode, setSelectedMode] = useState<"inUscita" | "resi">("inUscita");
  const [weightMode, setWeightMode] = useState<"specifico" | "fascia">("specifico");

  return (
    <>
      <div className="mt-4 mb-4">
        <div className="card p-3">
          {/* Modalità di selezione */}
          <div className="d-flex gap-3 align-items-center">
            <h6 className="fw-bold">Indirizzo di spedizione</h6>
            <div
              onClick={() => setSelectedMode("inUscita")}
              className={`p-2 rounded cursor-pointer ${selectedMode === "inUscita" ? "bg-primary text-white" : "bg-light"}`}
              style={{ cursor: "pointer" }}
            >
              In uscita
            </div>
            <div
              onClick={() => setSelectedMode("resi")}
              className={`p-2 rounded cursor-pointer ${selectedMode === "resi" ? "bg-primary text-white" : "bg-light"}`}
              style={{ cursor: "pointer" }}
            >
              Resi
            </div>
          </div>

          {/* Form dinamico in base alla modalità */}
          <div className="mt-3 d-flex gap-3 flex-wrap flex-md-nowrap">
            <div className="w-100 w-md-50">
              <h6 className="m-0 mb-1 fw-bold">
                {selectedMode === "inUscita" ? "Paese di partenza" : "Reso al Paese"}
              </h6>
              <input className="input-product w-100" placeholder="Italia" />

              <h6 className="m-0 mb-1 fw-bold mt-3">Corriere</h6>
              <input className="input-product w-100" placeholder="Poste Italiane Delivery" />

              <h6 className="m-0 mb-1 fw-bold mt-4">Peso</h6>
              {/* Scelta modalità peso */}
                <div className="d-flex gap-4 align-items-center mt-3">
                    <div className="d-flex gap-2">
                        <Form.Check
                            type="radio"
                            name="weightMode"
                            id="specifico"
                            style={{ transform: "scale(1.3)" }}
                            checked={weightMode === "specifico"}
                            onChange={() => setWeightMode("specifico")}
                        />
                        <p className="m-0">Specifico</p>
                    </div>
                    <div className="d-flex gap-2">
                    <Form.Check
                        type="radio"
                        name="weightMode"
                        id="fascia"
                        style={{ transform: "scale(1.3)" }}
                        checked={weightMode === "fascia"}
                        onChange={() => setWeightMode("fascia")}
                    />
                    <p className="m-0">Fascia</p>
                    </div>
                </div>

              {/* Input specifico o fascia */}
              {weightMode === "specifico" ? (
                <div className="mt-3 d-flex align-items-center gap-3">
                  <input className="input-product w-100" placeholder="Inserisci peso (kg)" />
                </div>
              ) : (
                <div className="mt-3 d-flex gap-3">
                  <input className="input-product w-50" placeholder="min: 0,001 kg" />
                  <input className="input-product w-50" placeholder="max: 999 kg" />
                </div>
              )}
            </div>

            <div className="w-100 w-md-50">
              <h6 className="m-0 mb-1 fw-bold">
                {selectedMode === "inUscita" ? "Paese di destinazione" : "Reso dal Paese"}
              </h6>
              <input className="input-product w-100" placeholder="Italia" />

              <h6 className="m-0 mb-1 fw-bold mt-3">Dimensioni del collo L x L x A</h6>
              <div className="d-flex gap-2">
                <input className="input-product w-100" placeholder="Lunghezza" />
                <input className="input-product w-100" placeholder="Larghezza" />
                <input className="input-product w-100" placeholder="Altezza" />
              </div>
            </div>
          </div>

          {/* Pulsante */}
          <div className="d-inline-flex mt-5">
            <Button>Mostra listino</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShippingPricesForm;
