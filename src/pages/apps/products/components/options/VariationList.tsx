import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Variation } from "./types";
import { ProductOption } from "./types";
import { FaRegTrashCan } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import { MdOutlineEdit } from "react-icons/md";

type TabKey = "OPTIONS" | "VARIATIONS";

interface Props {
  options: ProductOption[];
  variations: Variation[];
  onEdit: (index: number) => void;
  onAdd: () => void;
  onDelete: (index: number) => void;
  onDeleteMultiple: (indexes: number[]) => void;
  activeTab: TabKey;
  setActiveTab: React.Dispatch<React.SetStateAction<TabKey>>;
  onAutoGenerate: () => void;
}

const gridTemplate = {
  display: 'grid',
  gridTemplateColumns: '50px 2fr 1fr 0.8fr 1fr 0.8fr 60px',
  gap: '8px',
  alignItems: 'center'
};

const VariationList = ({
  options,
  variations,
  onEdit,
  onAdd,
  onDelete,
  onDeleteMultiple,
  activeTab,
  setActiveTab,
  onAutoGenerate
}: Props) => {
  // track selected rows
  const [selected, setSelected] = useState<Set<number>>(new Set());

  const allSelected = variations.length > 0 && selected.size === variations.length;

  const toggleAll = () => {
    if (allSelected) {
      setSelected(new Set());
    } else {
      setSelected(new Set(variations.map((_, i) => i)));
    }
  };

  const toggleRow = (i: number) => {
    setSelected(prev => {
      const next = new Set(prev);
      if (next.has(i)) next.delete(i);
      else next.add(i);
      return next;
    });
  };

  const handleDeleteSelected = () => {
    if (selected.size === 0) return;
    if (!window.confirm("Vuoi eliminare le varianti selezionate?")) return;
    onDeleteMultiple(Array.from(selected));
    setSelected(new Set());
  };

  const handleDelete = (index: number) => {
    if (window.confirm("Vuoi eliminare questa variante?")) {
      onDelete(index);
      setSelected(prev => {
        const next = new Set(prev);
        next.delete(index);
        return next;
      });
    }
  };

  return (
    <div className="card p-3">
      <h4 className="fw-bold">Opzioni e varianti del prodotto</h4>

      <div className="d-flex mt-1 pb-3 gap-4">
        <h5
          onClick={() => setActiveTab("OPTIONS")}
          style={{ cursor: "pointer" }}
          className={`mb-0 ${activeTab === "OPTIONS" ? "colorPrimary" : "text-black"} fw-bold`}
        >
          Opzioni ({options.length})
        </h5>
        <h5
          onClick={() => setActiveTab("VARIATIONS")}
          style={{ cursor: "pointer" }}
          className={`mb-0 ${activeTab === "VARIATIONS" ? "colorPrimary" : "text-black"} fw-bold`}
        >
          Varianti ({variations.length})
        </h5>
      </div>

      <div className="w-100 d-flex gap-2 mb-2 justify-content-between align-items-center">
        <div className="d-inline-flex gap-2">
          <Button onClick={onAdd} className="d-flex align-items-center gap-1">
            <FaPlus />
            Nuova combinazione
          </Button>
          <Button onClick={handleDeleteSelected} disabled={selected.size === 0} 
          style={{ border: "1px solid red", color: "red"}} className="bg-white">
            Elimina
          </Button>
        </div>

        <div className="d-inline-flex gap-2">
          <Button onClick={onAutoGenerate} style={{ border: "1px solid black" }} className="bg-white text-black">
            Genera tutte le variazioni
          </Button>
        </div>
      </div>

      <div style={{ ...gridTemplate, backgroundColor: "#808F9D" }} className="align-items-center text-white p-1 fw-semibold mt-1">
        <span>
          <Form.Check
            type="checkbox"
            className="big-checkbox"
            checked={allSelected}
            onChange={toggleAll}
          />
        </span>
        <span>Opzioni</span>
        <span>Cod. Art.</span>
        <span>Peso, kg</span>
        <span>Magazzino</span>
        <span>Prezzo, €</span>
        <span>Azioni</span>
      </div>

      {variations.map((v, index) => (
        <div key={v.id} style={gridTemplate} className="py-3 borderBottomGray px-1">
          <span>
            <Form.Check
              type="checkbox"
              className="big-checkbox"
              checked={selected.has(index)}
              onChange={() => toggleRow(index)}
            />
          </span>
          <div className="d-flex align-items-center gap-2">
            <img
              style={{ width: "50px", position: "relative", right: "7px" }}
              src={v.imageUrl || "https://d11s7fcxy18ubx.cloudfront.net/node/static/2025/2025-18963-g963d82ffd3aa6d/icons/product-default.svg"}
            />
            <div className="d-flex flex-column">
              {Object.entries(v.options).map(([k, val]) => (
                <span key={k}>
                  <strong>{k}:</strong> {val}
                </span>
              ))}
            </div>
          </div>
          <span>{v.itemCode}</span>
          <span>{v.weight}</span>
          <span>{v.stock}</span>
          <span>{v.price}</span>
          <div className="d-flex flex-column gap-2">
            <FaRegTrashCan
              style={{ fontSize: "16px", cursor: "pointer" }}
              onClick={() => handleDelete(index)}
            />
            <MdOutlineEdit
              style={{ fontSize: "18px", cursor: "pointer" }}
              onClick={() => onEdit(index)}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default VariationList;