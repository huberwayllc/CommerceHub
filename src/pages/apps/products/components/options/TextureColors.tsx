import React, { useState } from "react";
import { TextureColor } from "./types";
import { Button, Form, InputGroup } from "react-bootstrap";
import { Plus, Trash2 } from "lucide-react";

interface TextureColorsProps {
  colors: TextureColor[];
  onAddColor: (c: Omit<TextureColor, "id">) => void;
  onDeleteColor: (id: string) => void;
  onReorderColors: (newColors: TextureColor[]) => void;
}

export const TextureColors: React.FC<TextureColorsProps> = ({
  colors,
  onAddColor,
  onDeleteColor,
  onReorderColors
}) => {
  const [flagAddColor, setFlagAddColor] = useState(false);
  const [newColorName, setNewColorName] = useState("");
  const [newColorHex, setNewColorHex] = useState("#aabbcc");
  const [newColorPrice, setNewColorPrice] = useState("");
  const [editingColorId, setEditingColorId] = useState<string | null>(null);
  const [editColorName, setEditColorName] = useState("");
  const [editColorHex, setEditColorHex] = useState("#aabbcc");
  const [editColorPrice, setEditColorPrice] = useState("");
  const [editColorIsDefault, setEditColorIsDefault] = useState(false);
  const [dragIndex,  setDragIndex]  = useState<number | null>(null);
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  const [newColorIsDefault, setNewColorIsDefault] = useState(false);



const onDragStart = (index: number) => (e: React.DragEvent) => {
  setDragIndex(index);
  e.dataTransfer.effectAllowed = "move";
};

const onDragOver = (index: number) => (e: React.DragEvent) => {
  e.preventDefault();
  if (dragIndex !== null && dragIndex !== index) {
    setHoverIndex(index);
  }
};

const onDragLeave = (index: number) => () => {
  if (hoverIndex === index) {
    setHoverIndex(null);
  }
};

const onDrop = (index: number) => (e: React.DragEvent) => {
  e.preventDefault();
  if (dragIndex === null) return;
  const updated = [...colors];
  const [moved] = updated.splice(dragIndex, 1);
  updated.splice(index, 0, moved);
  onReorderColors(updated);
  setDragIndex(null);
  setHoverIndex(null);
};

const onDragEnd = () => {
  setDragIndex(null);
  setHoverIndex(null);
};


const handleAdd = () => {
  const baseColor = {
    name: newColorName.trim(),
    hex: newColorHex.trim(),
    price: parseFloat(newColorPrice) || 0,
    isDefault: newColorIsDefault,
  };

  if (newColorIsDefault) {
    const updatedColors = colors.map(c => ({ ...c, isDefault: false }));
    onReorderColors(updatedColors); // Reset predefinito prima
  }

  onAddColor(baseColor);

  setNewColorName("");
  setNewColorHex("#aabbcc");
  setNewColorPrice("");
  setNewColorIsDefault(false);
  setFlagAddColor(false);
};


const handleAddOrEdit = () => {
  const payload: Omit<TextureColor, "id"> & { id?: string } = {
    name: editingColorId ? editColorName.trim() : newColorName.trim(),
    hex: editingColorId ? editColorHex.trim() : newColorHex.trim(),
    price: parseFloat(editingColorId ? editColorPrice : newColorPrice) || 0,
    isDefault: editingColorId ? editColorIsDefault : newColorIsDefault,
    ...(editingColorId && { id: editingColorId }),
  };

  // Se stiamo editando
  if (editingColorId) {
    let updated = colors.map((c) =>
      c.id === editingColorId
        ? { ...c, ...payload as any }  // aggiorna solo quello
        : payload.isDefault
        ? { ...c, isDefault: false }    // se edit imposta default, resetta altri
        : c
    );
    onReorderColors(updated);
  } else {
    // Aggiungi nuovo colore
    if (payload.isDefault) {
      // resetta tutti gli altri
      onReorderColors(colors.map((c) => ({ ...c, isDefault: false })));
    }
    onAddColor(payload as Omit<TextureColor, "id">);
  }

  // Reset form
  setNewColorName("");
  setNewColorHex("#aabbcc");
  setNewColorPrice("");
  setNewColorIsDefault(false);
  setEditingColorId(null);
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
        {colors.map((color, index) => (
            <div 
            key={color.id}
            draggable
            onDragStart={onDragStart(index)}
            onDragOver={onDragOver(index)}
            onDragLeave={onDragLeave(index)}
            onDrop={onDrop(index)}
            onDragEnd={onDragEnd}
            onClick={() => {
            setEditingColorId(color.id);
            setFlagAddColor(true);
            setEditColorName(color.name);
            setEditColorHex(color.hex);
            setEditColorPrice(color.price?.toString() || "");
            setEditColorIsDefault(color.isDefault || false);
          }}
            className={
                "d-flex align-items-center justify-content-between border rounded p-2 mb-2" +
                (hoverIndex === index ? " bg-light" : "")
            }
            style={{ cursor: "move" }}
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
                {color.isDefault && <span className="badge bg-primary ms-2">Predefinito</span>}
              </span>
            </div>
            <Trash2
              className="text-danger"
              size={16}
              style={{ cursor: "pointer", fontSize: "10px" }}
               onClick={(e) => {
                  e.stopPropagation();      // ← previene il click sul padre
                  onDeleteColor(color.id);
                }}
            />
          </div>
        ))}
      </div>

{flagAddColor && (
  <div className="mb-4">
    <hr className="my-4" />
    <h6 className="fw-bold mb-3">
      {editingColorId ? "Modifica Colore" : "Aggiungi Nuovo Colore"}
    </h6>

    {/* RIGA DEGLI INPUT */}
    <div className="w-100 d-inline-flex align-items-center justify-content-between gap-3 mb-0">
      {/* Nome */}
      <div className="w-100">
        <Form.Group>
          <p className="text-black fw-semibold mb-1">Nome colore</p>
          <input
            type="text"
            className="input-product w-100"
            placeholder='Es. "Nero Opaco"'
            value={editingColorId ? editColorName : newColorName}
            onChange={(e) =>
              editingColorId
                ? setEditColorName(e.target.value)
                : setNewColorName(e.target.value)
            }
          />
        </Form.Group>
      </div>

      {/* Codice HEX */}
      <div className="w-100">
        <p className="text-black fw-semibold mb-1">Codice HEX</p>
        <div className="d-flex">
          <input
            type="text"
            className="input-product"
            value={editingColorId ? editColorHex : newColorHex}
            onChange={(e) =>
              editingColorId
                ? setEditColorHex(e.target.value)
                : setNewColorHex(e.target.value)
            }
            style={{
              width: "75%",
              borderTopRightRadius: 0,
              borderBottomRightRadius: 0,
              borderColor: /^#([0-9A-Fa-f]{3}){1,2}$/.test(
                editingColorId ? editColorHex : newColorHex
              )
                ? ""
                : "red",
            }}
          />
          <input
            type="color"
            value={editingColorId ? editColorHex : newColorHex}
            onChange={(e) =>
              editingColorId
                ? setEditColorHex(e.target.value)
                : setNewColorHex(e.target.value)
            }
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

      {/* Prezzo */}
      <div className="w-100">
        <Form.Group>
          <p className="text-black fw-semibold mb-1">Prezzo aggiuntivo, €</p>
          <InputGroup>
            <input
              className="w-100 input-product"
              type="number"
              placeholder="0.00"
              value={editingColorId ? editColorPrice : newColorPrice}
              onChange={(e) =>
                editingColorId
                  ? setEditColorPrice(e.target.value)
                  : setNewColorPrice(e.target.value)
              }
              min="0"
              step="0.01"
            />
          </InputGroup>
        </Form.Group>
      </div>
    </div>

    {/* Checkbox Predefinito */}
    <Form.Group className="mb-4 mt-3">
      <Form.Check
        type="checkbox"
        id="default-color-checkbox"
        label="Imposta come colore predefinito"
        checked={
          editingColorId ? editColorIsDefault : newColorIsDefault
        }
        onChange={(e) =>
          editingColorId
            ? setEditColorIsDefault(e.target.checked)
            : setNewColorIsDefault(e.target.checked)
        }
      />
    </Form.Group>

    {/* Pulsanti Salva/Annulla */}
    <div className="d-inline-flex gap-2 justify-content-start">
      <Button
        onClick={handleAddOrEdit}
        disabled={
          !(editingColorId
            ? editColorName.trim()
            : newColorName.trim()) ||
          !/^#([0-9A-Fa-f]{3}){1,2}$/.test(
            editingColorId ? editColorHex : newColorHex
          )
        }
        className="d-flex align-items-center gap-2"
      >
        {editingColorId ? "Salva Modifice" : <><Plus /> Aggiungi Colore</>}
      </Button>
      <Button
        onClick={() => {
          setFlagAddColor(false);
          setEditingColorId(null);
        }}
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
