import React, { useState, useEffect, useRef } from "react";
import { Texture, TextureColor } from "./types";
import { Button, Form } from "react-bootstrap";
import { Save, Trash2 } from "lucide-react";
import { IoIosAdd } from "react-icons/io";
import { ChevronDown, ChevronUp } from "lucide-react";
import { TextureColors } from "./TextureColors";

interface Props {
  initial?: Texture;
  onSave: (t: Texture) => void;
  onCancel?: () => void;
}

const TextureForm: React.FC<Props> = ({ initial, onSave, onCancel }) => {
  const [open, setOpen] = useState(true);
  const [name, setName] = useState(initial?.name || "");
  const [isDefault, setIsDefault] = useState(initial?.isDefault || false);
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

  const baseDragCounter   = useRef(0);
  const normalDragCounter = useRef(0);
  const roughDragCounter  = useRef(0);

  // Nuovi stati per evidenziare il drop-target
  const [baseDrag, setBaseDrag] = useState(false);
  const [normalDrag, setNormalDrag] = useState(false);
  const [roughDrag, setRoughDrag] = useState(false);

  useEffect(() => {
    if (initial) {
      setName(initial.name);
      setBaseColorFile(initial.baseColorFile || null);
      setNormalMapFile(initial.normalMapFile || null);
      setRoughnessMapFile(initial.roughnessMapFile || null);
      setColors(initial.colors || []);
    } else {
      setName("");
      setBaseColorFile(null);
      setNormalMapFile(null);
      setRoughnessMapFile(null);
      setColors([]);
    }
  }, [initial]);

  // Apri file picker al click
  const handleImageSelect =
    (setter: React.Dispatch<React.SetStateAction<string | null>>) =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (!file) return;
      setter(URL.createObjectURL(file));
    };

  // Handler riutilizzabili di drag/drop
const handleDragEnter =
  (
    counter: React.MutableRefObject<number>,
    setter: React.Dispatch<React.SetStateAction<boolean>>
  ) =>
  (e: React.DragEvent) => {
    e.preventDefault();
    counter.current += 1;       
    setter(true);
  };
const handleDragLeave =
  (
    counter: React.MutableRefObject<number>,
    setter: React.Dispatch<React.SetStateAction<boolean>>
  ) =>
  (e: React.DragEvent) => {
    e.preventDefault();
    counter.current -= 1;  
    if (counter.current === 0)  
      setter(false);
  };
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
  };
const handleDrop =
  (
    setterFile: React.Dispatch<React.SetStateAction<string | null>>,
    setterDrag: React.Dispatch<React.SetStateAction<boolean>>,
    counter: React.MutableRefObject<number>
  ) =>
  (e: React.DragEvent) => {
    e.preventDefault();
    counter.current = 0;        // reset contatore
    setterDrag(false);
    const file = e.dataTransfer.files[0];
    if (file?.type.startsWith("image/")) {
      setterFile(URL.createObjectURL(file));
    }
  };


  // Cancellazione immagine
  const clearBase = () => setBaseColorFile(null);
  const clearNormal = () => setNormalMapFile(null);
  const clearRough = () => setRoughnessMapFile(null);

  const handleAddColor = (c: Omit<TextureColor, "id">) => {
    setColors([...colors, { ...c, id: Date.now().toString() }]);
  };
  const handleDeleteColor = (id: string) =>
    setColors(colors.filter((col) => col.id !== id));

  const save = () => {
    if (!name.trim() || !baseColorFile) return;
    onSave({
      id: initial?.id || Date.now().toString(),
      name: name.trim(),
      baseColorFile,
      isDefault,
      normalMapFile: normalMapFile || "",
      roughnessMapFile: roughnessMapFile || "",
      colors,
    });
    if (!initial && onCancel) {
      setName("");
      setBaseColorFile(null);
      setNormalMapFile(null);
      setRoughnessMapFile(null);
      setColors([]);
    }
  };

  return (
    <div className="texture-form">
      {/* Accordion Header */}
      <div
        className="d-flex align-items-center justify-content-between mb-3 mt-1"
        style={{ cursor: "pointer" }}
        onClick={() => setOpen((o) => !o)}
      >
        <h6 className="fw-bold my-0">
          {initial ? "Modifica Texture" : "Aggiungi Texture"}
        </h6>
        {open ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
      </div>

      {/* Accordion Content: Nome + Upload */}
      {open && (
        <>
          <Form.Group className="mb-2">
            <div className="d-flex align-items-center gap-3">
              <div className="flex-grow-1">
                <p className="text-black mb-1 fw-semibold">Nome texture</p>
                <input
                  type="text"
                  className="w-100 input-product"
                  placeholder="Es. Pelle Lux"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <Form.Check
                type="checkbox"
                id="default-checkbox"
                label="Predefinita"
                checked={isDefault}
                onChange={(e) => setIsDefault(e.target.checked)}
                className="mt-4"
              />
            </div>
          </Form.Group>
          
          <h6 className="text-black mb-3 fw-bold mt-4">
            Inserisci i file (.jpg/.png)
          </h6>
          <div className="d-flex gap-5 mb-4">
            {/* ——— Base Color */}
            <Form.Group className="mb-0 position-relative">
              <p className="text-black fw-semibold mb-2">Base Color</p>
              <div
                className="texture-upload-box position-relative"
                style={{
                  border: baseDrag ? "2px dashed #007bff" : undefined,
                  backgroundColor: baseDrag ? "#e9f5ff" : undefined,
                  cursor: "pointer",
                  width: 130,
                  height: 130,
                }}
                onClick={() =>
                  document.getElementById("baseColorInput")?.click()
                }
                onDragEnter={handleDragEnter(baseDragCounter, setBaseDrag)}
                onDragLeave={handleDragLeave(baseDragCounter, setBaseDrag)}
                onDragOver={handleDragOver}
                onDrop={handleDrop(setBaseColorFile, setBaseDrag, baseDragCounter)}
              >
                {baseColorFile ? (
                  <>
                    <img
                      src={baseColorFile}
                      alt="preview base"
                      className="texture-upload-img"
                    />
                    <Button
                      variant="light"
                      size="sm"
                      className="position-absolute"
                      style={{ top: 4, right: 4, padding: "0.25rem" }}
                      onClick={(e) => { 
                        e.stopPropagation(); 
                        clearBase(); 
                      }}
                    >
                      <Trash2 size={14} />
                    </Button>
                  </>
                ) : (
                  <div className="d-flex flex-column justify-content-center align-items-center h-100 w-100">
                    <IoIosAdd size={48} color="#0d6efd" />
                    <p className="colorPrimary fw-semibold">
                      Trascina o clicca
                    </p>
                  </div>
                )}
                <input
                  id="baseColorInput"
                  type="file"
                  accept="image/png, image/jpeg"
                  hidden
                  onChange={handleImageSelect(setBaseColorFile)}
                />
              </div>
            </Form.Group>

            {/* ——— Normal Map */}
            <Form.Group className="mb-0 position-relative">
              <p className="text-black fw-semibold mb-2">Normal Map</p>
              <div
                className="texture-upload-box position-relative"
                style={{
                  border: normalDrag ? "2px dashed #007bff" : undefined,
                  backgroundColor: normalDrag ? "#e9f5ff" : undefined,
                  cursor: "pointer",
                  width: 130,
                  height: 130,
                }}
                onClick={() =>
                  document.getElementById("normalMapInput")?.click()
                }
                onDragEnter={handleDragEnter(normalDragCounter, setNormalDrag)}
                onDragLeave={handleDragLeave(normalDragCounter, setNormalDrag)}
                onDragOver={handleDragOver}
                onDrop={handleDrop(setNormalMapFile, setNormalDrag, normalDragCounter)}
              >
                {normalMapFile ? (
                  <>
                    <img
                      src={normalMapFile}
                      alt="preview normal"
                      className="texture-upload-img"
                    />
                    <Button
                      variant="light"
                      size="sm"
                      className="position-absolute"
                      style={{ top: 4, right: 4, padding: "0.25rem" }}
                        onClick={(e) => { 
                        e.stopPropagation(); 
                        clearNormal(); 
                      }}
                    >
                      <Trash2 size={14} />
                    </Button>
                  </>
                ) : (
                  <div className="d-flex flex-column justify-content-center align-items-center h-100 w-100">
                    <IoIosAdd size={48} color="#0d6efd" />
                    <p className="colorPrimary fw-semibold">
                      Trascina o clicca
                    </p>
                  </div>
                )}
                <input
                  id="normalMapInput"
                  type="file"
                  accept="image/png, image/jpeg"
                  hidden
                  onChange={handleImageSelect(setNormalMapFile)}
                />
              </div>
            </Form.Group>

            {/* ——— Roughness Map */}
            <Form.Group className="mb-0 position-relative">
              <p className="text-black fw-semibold mb-2">Roughness Map</p>
              <div
                className="texture-upload-box position-relative"
                style={{
                  border: roughDrag ? "2px dashed #007bff" : undefined,
                  backgroundColor: roughDrag ? "#e9f5ff" : undefined,
                  cursor: "pointer",
                  width: 130,
                  height: 130,
                }}
                onClick={() =>
                  document.getElementById("roughnessMapInput")?.click()
                }
                onDragEnter={handleDragEnter(roughDragCounter, setRoughDrag)}
                onDragLeave={handleDragLeave(roughDragCounter, setRoughDrag)}
                onDragOver={handleDragOver}
                onDrop={handleDrop(setRoughnessMapFile, setRoughDrag, roughDragCounter)}
              >
                {roughnessMapFile ? (
                  <>
                    <img
                      src={roughnessMapFile}
                      alt="preview roughness"
                      className="texture-upload-img"
                    />
                    <Button
                      variant="light"
                      size="sm"
                      className="position-absolute"
                      style={{ top: 4, right: 4, padding: "0.25rem" }}
                      onClick={(e) => {
                        e.stopPropagation();
                        clearRough();
                      }}
                    >
                      <Trash2 size={14} />
                    </Button>
                  </>
                ) : (
                  <div className="d-flex flex-column justify-content-center align-items-center h-100 w-100">
                    <IoIosAdd size={48} color="#0d6efd" />
                    <p className="colorPrimary fw-semibold">
                      Trascina o clicca
                    </p>
                  </div>
                )}
                <input
                  id="roughnessMapInput"
                  type="file"
                  accept="image/png, image/jpeg"
                  hidden
                  onChange={handleImageSelect(setRoughnessMapFile)}
                />
              </div>
            </Form.Group>
          </div>
        </>
      )}

      {/* Divider e colori */}
      <hr className="my-4" />
      <TextureColors
        colors={colors}
        onAddColor={handleAddColor}
        onDeleteColor={handleDeleteColor}
        onReorderColors={setColors}
      />

      {/* Salva / Annulla */}
      <div className="d-inline-flex gap-2 mt-3">
        <Button
          variant="primary"
          onClick={save}
          disabled={!name.trim() || !baseColorFile}
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
