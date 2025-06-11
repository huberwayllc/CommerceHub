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
  const [flagAddColor, setFlagAddColor] = useState<boolean>(false);

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
      <div className="w-100 d-inline-flex align-items-center justify-content-between mb-3">
        <h6 className="fw-bold my-0">Colori della Texture</h6>
        {flagAddColor === false &&
          <Button
            onClick={() => {setFlagAddColor(true)}}
            className="d-flex align-items-center gap-2 bg-transparent colorPrimary noHover"
            style={{cursor: "pointer"}}
          >
            <Plus /> Aggiungi Colore
          </Button>
        }
      </div>
      
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
            <Trash2 
              className="text-danger"
              size={16}
              style={{ cursor: "pointer", fontSize: "10px" }}
              onClick={() => handleDeleteColor(color.id)}
            />
          </div>
        ))}
      </div>

      {flagAddColor &&
      <div className=" mb-4">
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
                  onChange={(e) => {
                    const hexValue = e.target.value;
                    setNewColorHex(hexValue);
                  }}
                  style={{
                    width: "75%", borderTopRightRadius: "0px", borderBottomRightRadius: "0px",
                    borderColor: /^#([0-9A-Fa-f]{3}){1,2}$/.test(newColorHex) ? '' : 'red'
                  }}
                />
                <input
                  type="color"
                  value={newColorHex}
                  onChange={(e) => setNewColorHex(e.target.value)}
                  className="w-25 input-product"
                  title="Scegli il colore dalla tavolozza"
                  style={{padding: '0', border: 'none', cursor: 'pointer', 
                    borderTopLeftRadius: "0px", borderBottomLeftRadius: "0px"
                   }}
                />
              </div>
          </div>
          <div className="w-100">
            <Form.Group>
              <p className="text-black fw-semibold mb-1">
                Prezzo aggiuntivo, €
              </p>
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

      <div className="d-inline-flex gap-2 justify-content-start ">
        <Button
          onClick={handleAddColor}
          disabled={!newColorName.trim() || !/^#([0-9A-Fa-f]{3}){1,2}$/.test(newColorHex)}
          className="d-flex align-items-center gap-2"
        >
          <Plus /> Aggiungi Colore
        </Button>
        <Button
        onClick={()=> {setFlagAddColor(false)}}
          className="d-flex align-items-center gap-2 bg-transparent colorPrimary noHover"
          style={{cursor: "pointer"}}
        >
          Annulla
        </Button>
      </div>
      </div>
      }


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
