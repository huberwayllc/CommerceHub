// VariationForm.tsx
import { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { Variation } from "./types";
import FloatingInput2 from "@/components/FloatingInput2";
import { FaSave } from "react-icons/fa";

interface Props {
  initial: Variation;
  show: boolean;
  onSave: (v: Variation) => void;
  onCancel: () => void;
}

const VariationForm = ({ initial, show, onSave, onCancel }: Props) => {
  const [price, setPrice] = useState<number>(initial.price);
  const [stock, setStock] = useState<number>(initial.stock);
  const [lowestPriceBeforeDiscount, setLowestPriceBeforeDiscount] = useState<number>(initial.lowestPriceBeforeDiscount);
  const [imageUrl, setImageUrl] = useState<string>(initial.imageUrl || "");
  const [upc, setUpc] = useState<number>(initial.upc);
  const [weight, setWeight] = useState<number>(initial.weight);
  const [length, setLength] = useState<number>(initial.length);
  const [width, setWidth] = useState<number>(initial.width);
  const [height, setHeight] = useState<number>(initial.height);
  const [itemCode, setItemCode] = useState<number>(initial.itemCode);
  const [brand, setBrand] = useState<string>(initial.brand);


  const save = () => {
    onSave({ ...initial, price, stock, imageUrl, lowestPriceBeforeDiscount, upc, weight, length, width, height, itemCode, brand });
  };

  return (
    <Modal show={show} onHide={onCancel} centered size="xl" dialogClassName="modal-custom">
      <Modal.Header closeButton className="align-items-center">
        <div className="w-100 d-inline-flex align-items-center justify-content-between">
          <div>
            <h4 className="fw-bold text-white mt-0">Modifica variante</h4>
            <div className="mb-0 text-white">
              {Object.entries(initial.options).map(([k, v]) => (
                <span key={k} className="me-3">
                  <strong>{k}:</strong> {v}
                </span>
              ))}
            </div>
          </div>
          <button style={{height: "40px", border: "none"}} className="bg-white colorPrimary fw-semibold me-4 rounded-1 px-2" onClick={save}>
            <div className="d-flex gap-2 align-items-center colorPrimary">
              <FaSave style={{fontSize: "16px"}}/>
              Salva
            </div>
          </button>
        </div>
        
      </Modal.Header>
      <Modal.Body className="p-0">
        <div className="w-100 p-3 d-flex gap-3">
          <div className="w-100">
            <div className="borderGray rounded-2 d-flex flex-column align-items-center justify-content-center p-2 gap-1">
              <img style={{width: "100%"}}
               src="https://d11s7fcxy18ubx.cloudfront.net/node/static/2025/2025-18963-g963d82ffd3aa6d/icons/product-default.svg"/>
              <Button className="bg-white text-black borderGray fw-semibold px-4">Cambia</Button>
            </div>
          </div>


          <div className="w-100 d-flex flex-column gap-2">
            <FloatingInput2
                placeholder="Cod. Art."
                value={itemCode.toString()}
                onChange={(e) => setItemCode(parseFloat(e.target.value) || 0)}
            />
            <FloatingInput2
                placeholder="Peso, Kg"
                value={weight.toString()}
                onChange={(e) => setWeight(parseFloat(e.target.value) || 0)}
            />
            <FloatingInput2
                placeholder="Lunghezza, cm"
                value={length.toString()}
                onChange={(e) => setLength(parseFloat(e.target.value) || 0)}
            />
            <FloatingInput2
                placeholder="Larghezza, cm"
                value={width.toString()}
                onChange={(e) => setWidth(parseFloat(e.target.value) || 0)}
            />
            <FloatingInput2
                placeholder="Altezza, cm"
                value={height.toString()}
                onChange={(e) => setHeight(parseFloat(e.target.value) || 0)}
            />
            <FloatingInput2
                placeholder="UPC"
                value={upc.toString()}
                onChange={(e) => setUpc(parseFloat(e.target.value) || 0)}
            />
            <FloatingInput2
                placeholder="Marca"
                value={brand}
                onChange={(e) => setBrand(e.target.value)}
            />
          </div>


          <div className="w-100">
            <div className="mb-3">
              <label style={{fontSize: "20px"}} className="form-label text-black fw-semibold">Prezzo (€)</label>
              <input
                type="number"
                style={{height: "45px", fontSize: "20px"}}
                className="form-control w-100 input-product fw-semibold"
                value={price.toString()}
                onChange={e => setPrice(parseFloat(e.target.value) || 0)}
              />
            </div>
            <div className="mb-3">
              <label className="form-label text-black fw-semibold">Prezzo più basso prima dello sconto</label>
              <input
                type="number"
                style={{height: "45px"}}
                className="form-control w-100 input-product fw-semibold"
                value={lowestPriceBeforeDiscount.toString()}
                onChange={e => setLowestPriceBeforeDiscount(parseInt(e.target.value, 10) || 0)}
              />
            </div>
            <div className="mb-3">
              <label className="form-label text-black fw-semibold">Disponibilità (stock)</label>
              <input
                type="number"
                style={{height: "45px"}}
                className="form-control w-100 input-product fw-semibold"
                value={stock.toString()}
                onChange={e => setStock(parseInt(e.target.value, 10) || 0)}
              />
            </div>
          </div>

        </div>
      </Modal.Body>
    </Modal>
  );
};

export default VariationForm;
