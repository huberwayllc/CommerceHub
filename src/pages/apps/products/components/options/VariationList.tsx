import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
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
  onBulkUpdatePrice: (indexes: number[], newPrice: number) => void;
  onBulkUpdateImage: (indexes: number[], file: File) => void;
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
  onAutoGenerate,
  onBulkUpdateImage,
  onBulkUpdatePrice
}: Props) => {
  const [selected, setSelected] = useState<Set<number>>(new Set());
  const [filters, setFilters] = useState<Record<string, string>>({});

  const [bulkType, setBulkType] = useState<"price"|"image"|"modify" | "">("");
  const [showBulkModal, setShowBulkModal] = useState(false);
  const [bulkValue, setBulkValue] = useState<string>("");
  const [bulkFile, setBulkFile] = useState<File | null>(null);

  const handleBulkChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
  const type = e.target.value as "modify"|"price"|"image"|"";
  if (!type) return;
  setBulkType(type);
  setShowBulkModal(true);
  e.target.value = ""; // resetto la select
};

const handleBulkSubmit = () => {
  const indexes = Array.from(selected);
  if (bulkType === "price") {
    const parsed = parseFloat(bulkValue);
    if (!isNaN(parsed)) {
      onBulkUpdatePrice(indexes, parsed);
    }
  } else if (bulkType === "image" && bulkFile) {
    onBulkUpdateImage(indexes, bulkFile);
  }
  setShowBulkModal(false);
  setBulkValue("");
  setBulkFile(null);
};

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
    const toDelete = filtered
  .filter(item => selected.has(item.idx))
  .map(item => item.idx);
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
    <>
    <div className="card p-3">
      <h4 className="fw-bold">Opzioni e varianti del prodotto</h4>

      <div className="w-100 d-flex justify-content-between align-items-center mb-0 mt-2">
        <div className="d-flex pb-0 gap-4">
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
      </div>

      <div className="w-100 d-flex gap-2 mb-2 justify-content-between align-items-end">
        <div className="d-inline-flex gap-2 align-items-end">
          <Button onClick={onAdd} className="d-flex align-items-center px-2 gap-1">
            <FaPlus />
            Nuova combinazione
          </Button>
            <select
              className="input-product bg-transparent fw-normal"
              style={{ border: "1px solid black", width: "95px", height: "34px" }}
              onChange={handleBulkChange}
              disabled={selected.size === 0}
            >
              <option value="">Modifica</option>
              <option value="price">Prezzo</option>
              <option value="image">Immagine</option>
            </select>
          <Button
            onClick={handleDeleteSelected}
            disabled={selected.size === 0} // meglio che filtered.length === 0
            style={{
              border: "1px solid red",
              color: selected.size === 0 ? "red" : "red",
              cursor: selected.size === 0 ? "not-allowed" : "pointer",
              backgroundColor: "white",
              opacity: selected.size === 0 ? 0.7 : 1
            }}
            className="px-2"
          >
            Elimina
          </Button>
        </div>

        {options.length > 0 && (
          <div className="d-flex gap-2 mb-0 align-items-end">
            <h6 style={{margin: "9px 0px"}} className=" fw-semibold">Filtri:</h6>
            {options.map(opt => (
              <div key={opt.name}>
                <label className="me-2 fw-semibold">{opt.name}:</label>
                <select
                  className="input-product w-100 bg-transparent"
                  style={{height: "34px", border: "1px solid black", fontWeight: "400"}}
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

        <div className="d-inline-flex gap-2">
          <Button className="px-2" onClick={onAutoGenerate}>
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

    <Modal show={showBulkModal} onHide={() => setShowBulkModal(false)}>
      <Modal.Header closeButton>
        <Modal.Title>
          {bulkType === "price" ? "Modifica Prezzo di massa" : "Carica Immagine di massa"}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {bulkType === "price" && (
          <Form.Group>
            <p className="text-black mb-1 fw-semibold">Nuovo prezzo (€)</p>
            <input
              type="number"
              className="input-product w-100"
              value={bulkValue}
              onChange={e => setBulkValue(e.target.value)}
              placeholder="Inserisci prezzo"
            />
          </Form.Group>
        )}
        {bulkType === "image" && (
          <Form.Group>
            <Form.Label>Seleziona immagine</Form.Label>
            <Form.Control
              type="file"
              accept="image/*"
              onChange={e => setBulkFile((e.target as HTMLInputElement).files?.[0] || null)}
            />
          </Form.Group>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button className="bg-transparent text-black" onClick={() => setShowBulkModal(false)}>
          Annulla
        </Button>
        <Button
          variant="primary"
          onClick={handleBulkSubmit}
          disabled={
            bulkType === "price" ? bulkValue === "" :
            bulkType === "image" ? bulkFile === null :
            true
          }
        >
          Salva
        </Button>
      </Modal.Footer>
    </Modal>

  </>
  );
};

export default VariationList;
