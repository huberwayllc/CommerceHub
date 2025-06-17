// VariationForm.tsx
import { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { ProductOption, Variation } from "./types";
import FloatingInput2 from "@/components/FloatingInput2";
import { FaSave } from "react-icons/fa";

interface Props {
  options: ProductOption[];            
  existingVariations: Variation[]; 
  initial?: Variation;
  show: boolean;
  onSave: (v: Variation) => void;
  onCancel: () => void;
  productType: "physical" | "digital" | "3d_customizable";
}

export const defaultVariation: Variation = {
  id: "", options: {}, price:0, lowestPriceBeforeDiscount:0,
  upc:0, stock:0, weight:0, length:0, width:0,
  height:0, itemCode:0, brand:"", imageUrl:""
};

const VariationForm = ({ initial = defaultVariation, show, onSave, onCancel, productType, options, existingVariations }: Props) => {
  const isEdit = Boolean(initial && Object.keys(initial.options).length);
  const [selectedOptions, setSelectedOptions] = useState<Record<string, string>>(
    initial?.options ?? {}
  );
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


  const handleSelect = (optName: string, val: string) => {
    setSelectedOptions(prev => ({ ...prev, [optName]: val }));
  };

  const save = () => {
    if (!isEdit) {
      const exists = existingVariations.some(v =>
        Object.entries(v.options)
          .every(([k, val]) => selectedOptions[k] === val)
      );
      if (exists) {
        alert("Questa variante esiste già.");
        return;
      }
    }
    onSave({
      id: isEdit
        ? initial!.id
        : Object.values(selectedOptions).join("_"),
      options: selectedOptions,
      price, stock, imageUrl, lowestPriceBeforeDiscount,
      upc, weight, length, width, height,
      itemCode, brand
    });
  };

  return (
    <Modal show={show} onHide={onCancel} centered size="xl" dialogClassName="modal-custom">
      <Modal.Header closeButton className="align-items-center">
        <div className="w-100 d-inline-flex align-items-center justify-content-between">
          <div>
            <h4 className="fw-bold text-white mt-0">
              {isEdit ? "Modifica variante" : "Aggiungi variante"}
            </h4>

            {isEdit ? (
              <div className="mb-0 text-white">
                {Object.entries(initial!.options).map(([k, v]) => (
                  <span key={k} className="me-3">
                    {k}: <strong>{v}</strong>
                  </span>
                ))}
              </div>
            ) : (
              <div className="mb-0 d-flex gap-3">
                {options.map(opt => (
                  <div key={opt.name}>
                    <label className="text-white me-2">{opt.name}:</label>
                    <select
                      className="form-select"
                      value={selectedOptions[opt.name] || ""}
                      onChange={e => handleSelect(opt.name, e.target.value)}
                    >
                      <option value="" disabled>Seleziona</option>
                      {opt.values.map(v => (
                        <option key={v.name} value={v.name}>{v.name}</option>
                      ))}
                    </select>
                  </div>
                ))}
              </div>
            )}
          </div>
          <button style={{height: "40px", border: "none"}} className="bg-white colorPrimary fw-semibold me-4 rounded-1 px-2" onClick={save}>
            <div className="d-flex gap-2 align-items-center colorPrimary">
              <FaSave style={{fontSize: "16px"}}/>
              {isEdit ? "Salva" : "Crea"}
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
            {productType !== "digital" && (
            <>
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
                placeholder="Marca"
                value={brand}
                onChange={(e) => setBrand(e.target.value)}
            />
            </>
            )}
            <FloatingInput2
                placeholder="UPC"
                value={upc.toString()}
                onChange={(e) => setUpc(parseFloat(e.target.value) || 0)}
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
            <div className="mb-5">
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
