// TextureColors.tsx
import React, { useState } from "react";
import { TextureColor } from "./types";
import { Button, Form, InputGroup } from "react-bootstrap";
import { Plus, Trash2 } from "lucide-react";

interface TextureColorsProps {
  colors: TextureColor[];
  onAddColor: (c: Omit<TextureColor, "id">) => void;
  onDeleteColor: (id: string) => void;
}

export const TextureColors: React.FC<TextureColorsProps> = ({
  colors,
  onAddColor,
  onDeleteColor,
}) => {
  const [flagAddColor, setFlagAddColor] = useState(false);
  const [newColorName, setNewColorName] = useState("");
  const [newColorHex, setNewColorHex] = useState("#aabbcc");
  const [newColorPrice, setNewColorPrice] = useState("");

  const handleAdd = () => {
    onAddColor({
      name: newColorName.trim(),
      hex: newColorHex.trim(),
      price: parseFloat(newColorPrice) || 0,
    });
    // reset
    setNewColorName("");
    setNewColorHex("#aabbcc");
    setNewColorPrice("");
    setFlagAddColor(false);
  };

  return (
    <>
      <div className="w-100 d-inline-flex align-items-center justify-content-between mb-3">
        <h6 className="fw-bold my-0">Colori della Texture</h6>
        {!flagAddColor && (
          <Button
            onClick={() => setFlagAddColor(true)}
            className="d-flex align-items-center gap-2 bg-transparent colorPrimary noHover"
            style={{ cursor: "pointer" }}
          >
            <Plus /> Aggiungi Colore
          </Button>
        )}
      </div>

      {colors.length === 0 && <p className="text-muted">Nessun colore aggiunto. Aggiungine uno.</p>}

      <div className="mb-3">
        {colors.map((color) => (
          <div
            key={color.id}
            className="d-flex align-items-center justify-content-between border rounded p-2 mb-2"
          >
            <div className="d-flex align-items-center gap-2">
              <div
                style={{
                  width: "24px",
                  height: "24px",
                  backgroundColor: color.hex,
                  border: "1px solid #ccc",
                  borderRadius: "4px",
                }}
              ></div>
              <span>
                {color.name} ({color.hex})
                {(color.price ?? 0) > 0 && <span className="ms-2 text-muted">+{color.price ?? 0}€</span>}
              </span>
            </div>
            <Trash2
              className="text-danger"
              size={16}
              style={{ cursor: "pointer", fontSize: "10px" }}
              onClick={() => onDeleteColor(color.id)}
            />
          </div>
        ))}
      </div>

      {flagAddColor && (
        <div className="mb-4">
          <hr className="my-4" />
          <h6 className="fw-bold mb-3">Aggiungi Nuovo Colore</h6>
          <div className="w-100 d-inline-flex align-items-center justify-content-between gap-3 mb-3">
            <div className="w-100">
              <Form.Group>
                <p className="text-black fw-semibold mb-1">Nome colore</p>
                <input
                  type="text"
                  className="input-product w-100"
                  placeholder='Es. "Nero Opaco"'
                  value={newColorName}
                  onChange={(e) => setNewColorName(e.target.value)}
                />
              </Form.Group>
            </div>
            <div className="w-100">
              <p className="text-black fw-semibold mb-1">Codice HEX</p>
              <div className="d-flex">
                <input
                  type="text"
                  className="input-product"
                  value={newColorHex}
                  onChange={(e) => setNewColorHex(e.target.value)}
                  style={{
                    width: "75%",
                    borderTopRightRadius: 0,
                    borderBottomRightRadius: 0,
                    borderColor: /^#([0-9A-Fa-f]{3}){1,2}$/.test(newColorHex)
                      ? ""
                      : "red",
                  }}
                />
                <input
                  type="color"
                  value={newColorHex}
                  onChange={(e) => setNewColorHex(e.target.value)}
                  className="w-25 input-product"
                  title="Scegli il colore dalla tavolozza"
                  style={{
                    padding: 0,
                    border: "none",
                    cursor: "pointer",
                    borderTopLeftRadius: 0,
                    borderBottomLeftRadius: 0,
                  }}
                />
              </div>
            </div>
            <div className="w-100">
              <Form.Group>
                <p className="text-black fw-semibold mb-1">Prezzo aggiuntivo, €</p>
                <InputGroup>
                  <input
                    className="w-100 input-product"
                    type="number"
                    placeholder="0.00"
                    value={newColorPrice}
                    onChange={(e) => setNewColorPrice(e.target.value)}
                    min="0"
                    step="0.01"
                  />
                </InputGroup>
              </Form.Group>
            </div>
          </div>
          <div className="d-inline-flex gap-2 justify-content-start">
            <Button
              onClick={handleAdd}
              disabled={
                !newColorName.trim() ||
                !/^#([0-9A-Fa-f]{3}){1,2}$/.test(newColorHex)
              }
              className="d-flex align-items-center gap-2"
            >
              <Plus /> Aggiungi Colore
            </Button>
            <Button
              onClick={() => setFlagAddColor(false)}
              className="d-flex align-items-center gap-2 bg-transparent colorPrimary noHover"
              style={{ cursor: "pointer" }}
            >
              Annulla
            </Button>
          </div>
        </div>
      )}
    </>
  );
};
