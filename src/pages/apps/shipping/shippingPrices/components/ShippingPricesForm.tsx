import { Button } from "react-bootstrap";




const ShippingPricesForm = () => {
  return (
    <>
      <div className="mt-4 mb-4">

        <div className="card p-3">
            <h6 className="fw-bold">Indirizzo di spedizione</h6>

        <div className="mt-3 d-flex gap-3">
            <div className="w-50">
                <h6 className="m-0 mb-1 fw-bold">Paese di partenza</h6>
                <input className="input-product w-100" placeholder="Italia"/>
                <h6 className="m-0 mb-1 fw-bold mt-3">Corriere</h6>
                <input className="input-product w-100" placeholder="Poste Italiane Delivery"/>
                <h6 className="m-0 mb-1 fw-bold mt-3">Peso</h6>
                <div className="d-flex gap-3 align-items-center">
                    <p className="m-0">Specifico</p>
                    <input className="input-product w-100" />
                </div>
                <div className="w-100 d-flex gap-3 align-items-center mt-3">
                    <p className="m-0">Fascia</p>
                    <div className="w-100 d-flex gap-3">
                        <input className="input-product w-100" placeholder="min: 0,001 kg"/>
                        <input className="input-product w-100" placeholder="max: 999 kg"/>
                    </div>
                </div>
            </div>


            <div className="w-50">
                <h6 className="m-0 mb-1 fw-bold">Paese di destinazione</h6>
                <input className="input-product w-100" placeholder="Italia"/>
                <h6 className="m-0 mb-1 fw-bold mt-3">Dimensioni del collo L x L x A</h6>
                <div className="d-flex gap-2">
                    <input className="input-product w-100" placeholder="Lunghezza"/>
                    <input className="input-product w-100" placeholder="Larghezza"/>
                    <input className="input-product w-100" placeholder="Altezza"/>
                </div>
            </div>

        </div>
        <div className="d-inline-flex mt-5">
            <Button>Mostra listino</Button>
        </div>
        
        </div>
      </div>
    </>
  );
};

export default ShippingPricesForm;