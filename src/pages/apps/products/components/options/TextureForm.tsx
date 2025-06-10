import React, { useState, useEffect } from "react";
import { Texture, TextureColor } from "./types";
import { Button, Form, InputGroup, Col, Row } from "react-bootstrap";
import { Save, Plus, Trash2, PlusCircle } from "lucide-react";
import { IoIosAdd } from "react-icons/io";

interface Props {
  initial?: Texture;
  onSave: (t: Texture) => void;
  onCancel?: () => void;
}

const TextureForm: React.FC<Props> = ({ initial, onSave, onCancel }) => {
  const [name, setName] = useState(initial?.name || "");
  const [baseColorFile, setBaseColorFile] = useState<string | null>(
    initial?.baseColorFile || null
  );
  const [normalMapFile, setNormalMapFile] = useState<string | null>(
    initial?.normalMapFile || null
  );
  const [roughnessMapFile, setRoughnessMapFile] = useState<string | null>(
    initial?.roughnessMapFile || null
  );
  const [colors, setColors] = useState<TextureColor[]>(initial?.colors || []);
  const [newColorHex, setNewColorHex] = useState("#aabbcc");
  const [newColorName, setNewColorName] = useState("");
  const [newColorPrice, setNewColorPrice] = useState<string>("");

  // Se cambio initial, aggiorno i campi
  useEffect(() => {
    if (initial) {
      setName(initial.name);
      setBaseColorFile(initial.baseColorFile || null);
      setNormalMapFile(initial.normalMapFile || null);
      setRoughnessMapFile(initial.roughnessMapFile || null);
      setColors(initial.colors || []);
    } else {
      // Reset form when adding new texture
      setName("");
      setBaseColorFile(null);
      setNormalMapFile(null);
      setRoughnessMapFile(null);
      setColors([]);
    }
  }, [initial]);

  // Funzione per gestire la selezione delle immagini
  const handleImageSelect =
    (setter: React.Dispatch<React.SetStateAction<string | null>>) =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (!file) return;
      const url = URL.createObjectURL(file);
      setter(url);
    };

  // Funzione per aggiungere un nuovo colore
  const handleAddColor = () => {
    // Verifica che il nome e il valore HEX siano validi
    if (newColorHex.trim() && newColorName.trim()) {
      setColors([
        ...colors,
        {
          id: Date.now().toString(), // Genera un ID univoco
          name: newColorName.trim(),
          hex: newColorHex.trim(),
          price: parseFloat(newColorPrice) || 0, // Converte il prezzo in numero
        },
      ]);
      // Resetta i campi del nuovo colore
      setNewColorHex("#aabbcc");
      setNewColorName("");
      setNewColorPrice("");
    }
  };

  // Funzione per eliminare un colore
  const handleDeleteColor = (id: string) => {
    setColors(colors.filter((color) => color.id !== id));
  };

  // Funzione per salvare la texture
  const save = () => {
    // Verifica che il nome e il file base color siano presenti
    if (!name.trim() || !baseColorFile) return;
    onSave({
      id: initial?.id || Date.now().toString(),
      name: name.trim(),
      baseColorFile,
      normalMapFile: normalMapFile || "",
      roughnessMapFile: roughnessMapFile || "",
      colors: colors, // Includi i colori salvati
    });
    // Resetta i campi del form se si tratta di una nuova texture e c'è la funzione onCancel
    if (!initial && onCancel) {
      setName("");
      setBaseColorFile(null);
      setNormalMapFile(null);
      setRoughnessMapFile(null);
      setColors([]);
    }
  };

  return (
    <div className="">
      <hr className="mb-4 mt-0" />
      <h6 className="fw-bold mb-3 mt-0">
        {initial ? "Modifica Texture" : "Aggiungi Texture"}
      </h6>
      <Form.Group className="mb-2">
        <p className="text-black mb-1 fw-semibold">Nome texture</p>
        <input
          type="text"
          className="w-50 input-product"
          placeholder="Es. Pelle Lux"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </Form.Group>

      <h6 className="text-black mb-3 fw-bold mt-4">Inserisci i file (.jpg/.png)</h6>
      <div className="d-flex gap-5">
        <Form.Group className="mb-0">
          <p className="text-black fw-semibold mt-0 mb-2">
            Base Color
          </p>
          <div
            className="texture-upload-box"
            onClick={() => document.getElementById("baseColorInput")?.click()}
          >
            {baseColorFile ? (
              <img
                src={baseColorFile}
                alt="preview la base"
                className="texture-upload-img"
              />
            ) : (
            <div className="d-flex flex-column justify-content-center align-items-center h-100 w-100">
              <IoIosAdd size={48} color="#0d6efd" />
              <p className="colorPrimary fw-semibold">Aggiungi</p>
            </div>
            )}
            <input
              id="baseColorInput"
              type="file"
              accept="image/png, image/jpeg"
              style={{ display: "none" }}
              onChange={handleImageSelect(setBaseColorFile)}
            />
          </div>
        </Form.Group>

        <Form.Group className="mb-0">
          <p className="text-black fw-semibold mt-0 mb-2">
            Normal Map
          </p>
          <div
            className="texture-upload-box"
            onClick={() => document.getElementById("normalMapInput")?.click()}
          >
            {normalMapFile ? (
              <img
                src={normalMapFile}
                alt=".jgp/.png"
                className="texture-upload-img"
              />
            ) : (
              <div className="d-flex flex-column justify-content-center align-items-center h-100 w-100">
                <IoIosAdd size={48} color="#0d6efd" />
                <p className="colorPrimary fw-semibold">Aggiungi</p>
            </div>
            )}
            <input
              id="normalMapInput"
              type="file"
              accept="image/png, image/jpeg"
              style={{ display: "none" }}
              onChange={handleImageSelect(setNormalMapFile)}
            />
          </div>
        </Form.Group>

        <Form.Group className="mb-0">
            <p className="text-black fw-semibold mt-0 mb-2">
              Roughness Map
            </p>
            <div
              className="texture-upload-box"
              onClick={() => document.getElementById("roughnessMapInput")?.click()}
            >
              {roughnessMapFile ? (
                <img
                  src={roughnessMapFile}
                  alt="preview roughness map"
                  className="texture-upload-img"
                />
              ) : (
              <div className="d-flex flex-column justify-content-center align-items-center h-100 w-100">
                <IoIosAdd size={48} color="#0d6efd" />
                <p className="colorPrimary fw-semibold">Aggiungi</p>
              </div>
              )}
              <input
                id="roughnessMapInput"
                type="file"
                accept="image/png, image/jpeg"
                style={{ display: "none" }}
                onChange={handleImageSelect(setRoughnessMapFile)}
              />
            </div>
        </Form.Group>
      </div>

      <hr className="my-4" />

      {/* Sezione Colori */}
      <h6 className="fw-bold mb-3">Colori della Texture</h6>
      {colors.length === 0 && (
        <p className="text-muted">Nessun colore aggiunto. Aggiungine uno.</p>
      )}
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
                {(color.price ?? 0) > 0 && (
                  <span className="ms-2 text-muted">+{color.price}€</span>
                )}
              </span>
            </div>
            <Trash2 // Icona del cestino
              className="text-danger"
              style={{ cursor: "pointer" }}
              onClick={() => handleDeleteColor(color.id)}
            />
          </div>
        ))}
      </div>

      <div className=" mb-4">
        <hr className="my-4" />
        <h6 className="fw-bold mb-3">Aggiungi Nuovo Colore</h6>
        <Row className="g-3 mb-3 align-items-end">
          <Col md={4}>
            <Form.Group>
              <Form.Label className="text-black fw-semibold">Nome colore</Form.Label>
              <Form.Control
                type="text"
                placeholder='Es. "Nero Opaco"'
                value={newColorName}
                onChange={(e) => setNewColorName(e.target.value)}
              />
            </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Group>
              <Form.Label className="text-black fw-semibold">Codice HEX</Form.Label>
              <InputGroup>
                <Form.Control
                  type="text"
                  value={newColorHex}
                  onChange={(e) => {
                    const hexValue = e.target.value;
                    setNewColorHex(hexValue);
                  }}
                  style={{
                    borderColor: /^#([0-9A-Fa-f]{3}){1,2}$/.test(newColorHex) ? '' : 'red'
                  }}
                />
                <input
                  type="color"
                  value={newColorHex}
                  onChange={(e) => setNewColorHex(e.target.value)}
                  className="form-control form-control-color"
                  title="Scegli il colore dalla tavolozza"
                  style={{ width: '40px', height: '38px', padding: '0', border: 'none', cursor: 'pointer' }}
                />
              </InputGroup>
            </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Group>
              <Form.Label className="text-black fw-semibold">
                Prezzo aggiuntivo (opzionale)
              </Form.Label>
              <InputGroup>
                <Form.Control
                  type="number"
                  placeholder="0.00"
                  value={newColorPrice}
                  onChange={(e) => setNewColorPrice(e.target.value)}
                  min="0"
                  step="0.01"
                />
                <InputGroup.Text>€</InputGroup.Text>
              </InputGroup>
            </Form.Group>
          </Col>
        </Row>

        <Button
          variant="outline-primary"
          onClick={handleAddColor}
          disabled={!newColorName.trim() || !/^#([0-9A-Fa-f]{3}){1,2}$/.test(newColorHex)}
          className="d-flex align-items-center gap-2"
        >
          <Plus /> Aggiungi Colore
        </Button>
      </div>

      <div className=" d-inline-flex gap-2 mt-2">
        <Button
          variant="primary"
          onClick={save}
          disabled={!name.trim() || !baseColorFile}
          className="d-flex align-items-center gap-2"
        >
          <Save /> Salva
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
