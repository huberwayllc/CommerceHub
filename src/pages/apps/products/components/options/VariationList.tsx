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
  const [selected, setSelected] = useState<Set<number>>(new Set());
  const [filters, setFilters] = useState<Record<string, string>>({});

  // Compute filtered variations with their original indexes
  const filtered = variations
    .map((v, idx) => ({ ...v, idx }))
    .filter(({ options: vOpts }) =>
      Object.entries(filters).every(([key, val]) =>
        val === "" || vOpts[key] === val
      )
    );

  const allSelected = filtered.length > 0 && filtered.every(item => selected.has(item.idx));

  const toggleAll = () => {
    if (allSelected) {
      setSelected(prev => {
        const next = new Set(prev);
        filtered.forEach(item => next.delete(item.idx));
        return next;
      });
    } else {
      setSelected(prev => {
        const next = new Set(prev);
        filtered.forEach(item => next.add(item.idx));
        return next;
      });
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
    const toDelete = filtered.map(item => item.idx);
    if (toDelete.length === 0) return;
    if (!window.confirm("Vuoi eliminare le varianti selezionate?")) return;
    onDeleteMultiple(toDelete);
    setSelected(prev => {
      const next = new Set(prev);
      toDelete.forEach(i => next.delete(i));
      return next;
    });
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

  const handleFilterChange = (optName: string, value: string) => {
    setFilters(prev => ({
      ...prev,
      [optName]: value
    }));
  };

  return (
    <div className="card p-3">
      <h4 className="fw-bold">Opzioni e varianti del prodotto</h4>

      <div className="w-100 d-flex mt-1 justify-content-between align-items-center mb-3">
        <div className="d-flex mt-1 pb-0 gap-4">
          <h5
            onClick={() => setActiveTab("OPTIONS")}
            style={{ cursor: "pointer" }}
            className={`mt-0 mb-0 ${activeTab === "OPTIONS" ? "colorPrimary" : "text-black"} fw-bold`}
          >
            Opzioni ({options.length})
          </h5>
          <h5
            onClick={() => setActiveTab("VARIATIONS")}
            style={{ cursor: "pointer" }}
            className={`mt-0 mb-0 ${activeTab === "VARIATIONS" ? "colorPrimary" : "text-black"} fw-bold`}
          >
            Varianti ({variations.length})
          </h5>
        </div>
        {options.length > 0 && (
          <div className="d-flex gap-3 mb-0 flex-wrap align-items-center">
            <h5 className="m-0">Filtri:</h5>
            {options.map(opt => (
              <div key={opt.name}>
                <label className="me-2 fw-semibold">{opt.name}:</label>
                <select
                  className="form-select"
                  value={filters[opt.name] || ""}
                  onChange={e => handleFilterChange(opt.name, e.target.value)}
                >
                  <option value="">Tutte</option>
                  {opt.values.map(val => (
                    <option key={val.name} value={val.name}>{val.name}</option>
                  ))}
                </select>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="w-100 d-flex gap-2 mb-2 justify-content-between align-items-center">
        <div className="d-inline-flex gap-2">
          <Button onClick={onAdd} className="d-flex align-items-center gap-1">
            <FaPlus />
            Nuova combinazione
          </Button>
          <Button  style={{ border: "1px solid black" }} className="bg-white text-black">
            Modifica
          </Button>
          <Button onClick={handleDeleteSelected} disabled={filtered.length === 0}
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

      {filtered.map(({ idx, ...v }) => (
        <div key={v.id} style={gridTemplate} className="py-3 borderBottomGray px-1">
          <span>
            <Form.Check
              type="checkbox"
              className="big-checkbox"
              checked={selected.has(idx)}
              onChange={() => toggleRow(idx)}
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
              onClick={() => handleDelete(idx)}
            />
            <MdOutlineEdit
              style={{ fontSize: "18px", cursor: "pointer" }}
              onClick={() => onEdit(idx)}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default VariationList;
