// components/ModelPartManager.tsx
import React, { useState } from "react";
import { ModelPart, Texture } from "./types";
import TextureForm from "./TextureForm";
import { FaRegTrashCan, FaPlus } from "react-icons/fa6";
import { MdOutlinePhotoSizeSelectActual } from "react-icons/md";
import { Button } from "react-bootstrap";

interface Props {
  modelParts: ModelPart[];
  onModelPartsChange: (parts: ModelPart[]) => void;
}

type Editing = { partIdx: number; texIdx?: number } | null;

const ModelPartManager: React.FC<Props> = ({ modelParts, onModelPartsChange }) => {
  const [editing, setEditing] = useState<Editing>(null);

  const handleAddPart = () => {
    const name = prompt("Nome parte 3D (es. Seduta)");
    if (!name) return;
    onModelPartsChange([
      ...modelParts,
      { id: name.toLowerCase(), name, textures: [] }
    ]);
  };

  const handleDeletePart = (idx: number) => {
    onModelPartsChange(modelParts.filter((_, i) => i !== idx));
  };

  const handleSaveTexture = (texture: Texture) => {
    if (!editing) return;
    const updated = [...modelParts];
    const { partIdx, texIdx } = editing;

    if (typeof texIdx === "number") {
      // modifica
      updated[partIdx].textures[texIdx] = texture;
    } else {
      // nuova
      updated[partIdx].textures.push(texture);
    }
    onModelPartsChange(updated);
    setEditing(null);
  };

  return (
    <div className="w-100 card p-3">
      <div className="d-inline-flex justify-content-between align-items-center mb-3">
        <h4 className="fw-bold">Parti 3D e Texture</h4>
        <button
          className="btn btn-outline-primary d-flex align-items-center gap-2"
          onClick={handleAddPart}
        >
          <FaPlus /> Aggiungi Parte
        </button>
      </div>

      {modelParts.length === 0 && (
        <p className="text-muted">Nessuna parte. Premi “Aggiungi Parte”.</p>
      )}

      {modelParts.map((part, i) => (
        <div key={part.id} className="mb-4 border-bottom pb-3">
          <div className="d-flex justify-content-between align-items-center mb-2">
            <div className="d-flex align-items-center gap-2">
              <MdOutlinePhotoSizeSelectActual className="fs-4" />
              <h5 className="my-0">{part.name}</h5>
            </div>
            <FaRegTrashCan
              className="text-danger"
              style={{ cursor: 'pointer' }}
              onClick={() => handleDeletePart(i)}
            />
          </div>

          {part.textures.length === 0 && (
            <p className="text-muted mb-2">Nessuna texture. Aggiungine una.</p>
          )}

          <div className="row g-3 mb-3">
            <h6 className="mb-0 fw-bold mt-4">Texture</h6>
            {part.textures.map((tex, ti) => (
              <div key={tex.id} className="col-6 col-md-4">
                <div className="border p-2 rounded position-relative">
                  <div style={{cursor: "pointer"}} onClick={() => setEditing({ partIdx: i, texIdx: ti })} className="d-flex justify-content-between align-items-center mb-1">
                    <strong>{tex.name}</strong>
                    <div className="d-flex gap-2">
                      <FaRegTrashCan
                        className="text-danger"
                        style={{ cursor: 'pointer' }}
                        onClick={() => {
                          const upd = [...modelParts];
                          upd[i].textures = upd[i].textures.filter((_, idx) => idx !== ti);
                          onModelPartsChange(upd);
                        }}
                      />
                    </div>
                  </div>
                  <p className="mb-0 text-sm">Colori: {tex.colors.length}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Form per nuova o modifica texture */}
          {editing?.partIdx === i && (
            <TextureForm
              initial={
                typeof editing.texIdx === "number"
                  ? part.textures[editing.texIdx]
                  : undefined
              }
              onSave={handleSaveTexture}
              onCancel={() => setEditing(null)}
            />
          )}

          {/* Bottone per aggiungere nuova texture */}
          {!editing && (
            <Button
              className="btn d-flex align-items-center gap-2"
              onClick={() => setEditing({ partIdx: i })}
            >
              <FaPlus /> Aggiungi Texture
            </Button>
          )}
        </div>
      ))}
    </div>
  );
};

export default ModelPartManager;
