import React, { useState } from "react";
import { ModelPart, Texture } from "./types";
import TextureForm from "./TextureForm";
import { FaRegTrashCan, FaPlus } from "react-icons/fa6";
import { Button } from "react-bootstrap";

interface Props {
  modelParts: ModelPart[];
  onModelPartsChange: (parts: ModelPart[]) => void;
}

type Editing = { texIdx?: number } | null;

const ModelPartManager: React.FC<Props> = ({ modelParts, onModelPartsChange }) => {
  const [selectedPartIdx, setSelectedPartIdx] = useState<number>(0);
  const [editing, setEditing] = useState<Editing>(null);
  const [draggedIndex, setDraggedIndex] = useState<number | null>(null);

  const handleDragStart = (index: number) => {
    setDraggedIndex(index);
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault(); 
  };

  const handleDrop = (index: number) => {
    if (draggedIndex === null || draggedIndex === index) return;
    const updatedParts = [...modelParts];
    const [movedPart] = updatedParts.splice(draggedIndex, 1);
    updatedParts.splice(index, 0, movedPart);
    onModelPartsChange(updatedParts);
    setSelectedPartIdx(index);
    setDraggedIndex(null);
  };

  const handleAddPart = () => {
    const name = prompt("Nome parte 3D (es. Seduta)");
    if (!name) return;
    onModelPartsChange([
      ...modelParts,
      { id: name.toLowerCase(), name, textures: [] }
    ]);
    setSelectedPartIdx(modelParts.length); // seleziona la nuova parte
  };

  const handleDeletePart = (idx: number) => {
    const newParts = modelParts.filter((_, i) => i !== idx);
    onModelPartsChange(newParts);
    if (selectedPartIdx >= newParts.length) setSelectedPartIdx(Math.max(0, newParts.length - 1));
  };

const handleSaveTexture = (texture: Texture) => {
  if (selectedPartIdx < 0) return;
  const updated = [...modelParts];
  const currentPart = updated[selectedPartIdx];
  let newTextures = [...currentPart.textures];
  if (editing && typeof editing.texIdx === "number") {
    newTextures[editing.texIdx] = texture;
  } else {
    newTextures.push(texture);
  }
  if (texture.isDefault) {
    newTextures = newTextures.map((t, idx) => {
      const isCurrent = editing && typeof editing.texIdx === "number" ? idx === editing.texIdx : t.id === texture.id;
      return { ...t, isDefault: isCurrent };
    });
  }
  updated[selectedPartIdx] = {
    ...currentPart,
    textures: newTextures,
  };

  onModelPartsChange(updated);
  setEditing(null);
};

  const handleDeleteTexture = (texIdx: number) => {
    const updated = [...modelParts];
    updated[selectedPartIdx].textures = updated[selectedPartIdx].textures.filter((_, idx) => idx !== texIdx);
    onModelPartsChange(updated);
  };

  const selectedPart = modelParts[selectedPartIdx];

  return (
    <div className="w-100">
      <div className="d-flex gap-3" style={{ minHeight: 350 }}>
        {/* Sidebar Parti */}
        <div className="card p-3" style={{ width: "30%" }}>
          <h4 className="fw-bold mb-3 mt-0">Parti 3D</h4>
          <div className="d-flex flex-column gap-2">
            {modelParts.map((part, i) => (
              <div
                key={part.id}
                className={`d-flex align-items-center justify-content-between px-2 py-2 rounded ${selectedPartIdx === i ? "backgroundGray borderGray" : ""}`}
                style={{ cursor: "move" }}
                draggable
                onDragStart={() => handleDragStart(i)}
                onDragOver={handleDragOver}
                onDrop={() => handleDrop(i)}
                onClick={() => {
                  setSelectedPartIdx(i);
                  setEditing(null);
                }}
              >
                <div className="d-flex align-items-center gap-2">
                  <span className="fw-bold" style={{ width: 24, display: "inline-block", textAlign: "center" }}>
                    {i + 1}
                  </span>
                  <span className="fw-bold">{part.name}</span>
                </div>
                <FaRegTrashCan
                  className="text-danger"
                  style={{ cursor: 'pointer' }}
                  onClick={e => {
                    e.stopPropagation();
                    handleDeletePart(i);
                  }}
                />
              </div>
            ))}
            <Button
              className="mt-2 d-flex align-items-center gap-2 fw-semibold"
              style={{ border: "1px solid #0d6efd", color: "#0d6efd", background: "transparent" }}
              onClick={handleAddPart}
            >
              <FaPlus /> Aggiungi Parte
            </Button>
          </div>
        </div>

        {/* Texture della parte selezionata */}
        <div className="card p-3" style={{ width: "70%"}}>
          <h4 className="fw-bold mb-3 mt-0">Texture</h4>
          {!selectedPart ? (
            <p className="text-muted">Nessuna parte selezionata.</p>
          ) : editing ? (
            <TextureForm
              initial={typeof editing.texIdx === "number" ? selectedPart.textures[editing.texIdx] : undefined}
              onSave={handleSaveTexture}
              onCancel={() => setEditing(null)}
            />
          ) : (
            <>
              <div className="w-100 d-inline-flex justify-content-between align-items-center mb-2">
                <h5 className="fw-bold my-0">Texture di {selectedPart.name}</h5>
                <Button
                  className="d-flex align-items-center gap-2"
                  style={{ border: "1px solid #0d6efd", color: "#0d6efd", background: "transparent" }}
                  onClick={() => setEditing({})}
                >
                  <FaPlus /> Aggiungi Texture
                </Button>
              </div>
                {selectedPart.textures.length === 0 ? (
                  <p className="text-muted">Nessuna texture. Premi "Aggiungi Texture".</p>
                ) : (
                  <div className="row g-3">
                    {selectedPart.textures.map((tex, ti) => (
                      <div key={tex.id} className="col-6 col-lg-4">
                        <div
                          className="backgroundGray borderGray rounded-2 h-100"
                          style={{ minHeight: "100%" }}
                        >
                          <div
                            className="border p-2 rounded position-relative h-100"
                            style={{ cursor: "pointer" }}
                            onClick={() => setEditing({ texIdx: ti })}
                          >
                            <div className="d-flex justify-content-between align-items-center mb-1">
                              <strong>{tex.name}</strong>
                              <FaRegTrashCan
                                className="text-danger"
                                style={{ cursor: 'pointer' }}
                                onClick={e => { e.stopPropagation(); handleDeleteTexture(ti); }}
                              />
                            </div>
                            {tex.isDefault && (
                              <p className="mb-0 fw-semibold">Predefinita</p>
                            )}
                            <p className="mb-0 text-sm">Colori: {tex.colors.length}</p>
                            <div className="d-flex flex-wrap gap-1 mt-1">
                              {tex.colors.map((color) => (
                                <div
                                  key={color.id}
                                  title={`${color.name} (${color.hex})`}
                                  className="borderGray"
                                  style={{
                                    width: 20,
                                    height: 20,
                                    backgroundColor: color.hex,
                                    borderRadius: 4
                                  }}
                                />
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ModelPartManager;