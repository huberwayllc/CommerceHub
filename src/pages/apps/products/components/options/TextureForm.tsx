// components/TextureForm.tsx
import React, { useState, useEffect } from "react";
import { Texture } from "./types";
import { FaSave } from "react-icons/fa";
import { Button, Form } from "react-bootstrap";

interface Props {
  initial?: Texture;
  onSave: (t: Texture) => void;
  onCancel?: () => void;
}

const TextureForm: React.FC<Props> = ({ initial, onSave, onCancel }) => {
  const [name, setName] = useState(initial?.name || "");
  const [baseColorFile, setBaseColorFile] = useState<string | null>(initial?.baseColorFile || null);
  const [normalMapFile, setNormalMapFile] = useState<string | null>(initial?.normalMapFile || null);
  const [roughnessMapFile, setRoughnessMapFile] = useState<string | null>(initial?.roughnessMapFile || null);

  // Se cambio initial, aggiorno i campi
  useEffect(() => {
    if (initial) {
      setName(initial.name);
      setBaseColorFile(initial.baseColorFile || null);
      setNormalMapFile(initial.normalMapFile || null);
      setRoughnessMapFile(initial.roughnessMapFile || null);
    }
  }, [initial]);

  const handleImageSelect =
    (setter: React.Dispatch<React.SetStateAction<string | null>>) =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (!file) return;
      const url = URL.createObjectURL(file);
      setter(url);
    };

  const save = () => {
    if (!name.trim() || !baseColorFile) return;
    onSave({
      id: initial?.id || Date.now().toString(),
      name: name.trim(),
      baseColorFile,
      normalMapFile: normalMapFile || "",
      roughnessMapFile: roughnessMapFile || "",
      colors: initial?.colors || []
    });
    // se vogliamo resettare in modalità "add", possiamo farlo, 
    // altrimenti onCancel farà sparire il form
    if (!initial && onCancel) {
      setName(""); setBaseColorFile(null);
      setNormalMapFile(null); setRoughnessMapFile(null);
    }
  };

  return (
    <div className="border-top pt-3">
      <h6 className="fw-bold mb-3">{initial ? "Modifica Texture" : "Aggiungi Texture"}</h6>
      <Form.Group className="mb-2">
        <Form.Label className="text-black fw-semibold">Nome texture</Form.Label>
        <Form.Control
          type="text"
          placeholder="Es. Pelle Lux"
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </Form.Group>

    <div className="d-flex gap-5"> 
      <Form.Group className="mb-2">
        <Form.Label className="text-black fw-semibold mt-3">Base Color (JPG/PNG)</Form.Label>
        <Form.Control
          type="file"
          accept="image/png, image/jpeg"
          onChange={handleImageSelect(setBaseColorFile)}
        />
        {baseColorFile && (
          <img
            src={baseColorFile}
            alt="preview base color"
            className="mt-2"
            style={{ maxWidth: "100px", maxHeight: "100px" }}
          />
        )}
      </Form.Group>

      <Form.Group className="mb-2">
        <Form.Label className="text-black fw-semibold mt-3">Normal Map (JPG/PNG)</Form.Label>
        <Form.Control
          type="file"
          accept="image/png, image/jpeg"
          onChange={handleImageSelect(setNormalMapFile)}
        />
        {normalMapFile && (
          <img
            src={normalMapFile}
            alt="preview normal map"
            className="mt-2"
            style={{ maxWidth: "100px", maxHeight: "100px" }}
          />
        )}
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label className="text-black fw-semibold mt-3">Roughness Map (JPG/PNG)</Form.Label>
        <Form.Control
          type="file"
          accept="image/png, image/jpeg"
          onChange={handleImageSelect(setRoughnessMapFile)}
        />
        {roughnessMapFile && (
          <img
            src={roughnessMapFile}
            alt="preview roughness map"
            className="mt-2"
            style={{ maxWidth: "100px", maxHeight: "100px" }}
          />
        )}
      </Form.Group>
      </div>

      <div className=" d-inline-flex gap-2 mt-2">
        <Button
          variant="primary"
          onClick={save}
          disabled={!name.trim() || !baseColorFile}
          className="d-flex align-items-center gap-2"
        >
          <FaSave /> Salva
        </Button>
        {onCancel && (
          <Button variant="outline-secondary" onClick={onCancel}>
            Annulla
          </Button>
        )}
      </div>
    </div>
  );
};

export default TextureForm;
