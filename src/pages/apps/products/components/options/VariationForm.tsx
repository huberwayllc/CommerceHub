import { useState } from "react";
import { Button } from "react-bootstrap";
import { Variation } from "./types";

interface Props {
  initial: Variation;
  onSave: (v: Variation) => void;
  onCancel: () => void;
}

const VariationForm = ({ initial, onSave, onCancel }: Props) => {
  const [price, setPrice] = useState<number>(initial.price);
  const [stock, setStock] = useState<number>(initial.stock);
  const [imageUrl, setImageUrl] = useState<string>(initial.imageUrl || "");

  const save = () => {
    onSave({ ...initial, price, stock, imageUrl });
  };

  return (
    <div className="w-100 card p-3">
      <h4 className="fw-bold">Modifica variante</h4>

      {/* Mostra la combinazione */}
      <div className="mb-3">
        {Object.entries(initial.options).map(([k,v]) => (
          <span key={k} className="me-3">
            <strong>{k}:</strong> {v}
          </span>
        ))}
      </div>

      <div className="mb-3">
        <label className="form-label">Prezzo (€)</label>
        <input
          type="number"
          className="form-control"
          value={price}
          onChange={e => setPrice(parseFloat(e.target.value) || 0)}
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Disponibilità (stock)</label>
        <input
          type="number"
          className="form-control"
          value={stock}
          onChange={e => setStock(parseInt(e.target.value, 10) || 0)}
        />
      </div>

      <div className="mb-3">
        <label className="form-label">URL immagine (opzionale)</label>
        <input
          type="text"
          className="form-control"
          value={imageUrl}
          onChange={e => setImageUrl(e.target.value)}
        />
      </div>

      <div className="d-flex gap-2">
        <Button onClick={save}>Salva variante</Button>
        <Button variant="link" onClick={onCancel}>Annulla</Button>
      </div>
    </div>
  );
};

export default VariationForm;
