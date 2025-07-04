import React, { useState, useEffect } from "react";
import { FaCircleInfo } from "react-icons/fa6";
import { Button, Form } from "react-bootstrap";

const formats = ["A4", "A6"];
const printers = ["Salva come PDF"];

interface SectionSettings {
  printer: string;
  format: string;
  showOptions: boolean;
  copies: number;
  smartPrint?: boolean; // for customs
}

interface PrintSettings {
  labels: SectionSettings;
  returns: SectionSettings;
  customs: SectionSettings;
}

const defaultSettings: PrintSettings = {
  labels: { printer: "Salva come PDF", format: "A6", showOptions: false, copies: 1 },
  returns: { printer: "Salva come PDF", format: "A6", showOptions: false, copies: 1 },
  customs: { printer: "Salva come PDF", format: "A6", showOptions: false, copies: 1, smartPrint: false },
};

const PrintOptionsForm: React.FC = () => {
  // State for each card
  const [settings, setSettings] = useState<PrintSettings>(defaultSettings);

  // Load from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem("printSettings");
    if (stored) {
      try {
        setSettings(JSON.parse(stored));
      } catch {
        setSettings(defaultSettings);
      }
    }
  }, []);

  // Change handler
  const handleChange = (
    section: keyof PrintSettings,
    field: keyof SectionSettings,
    value: any
  ) => {
    setSettings((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value,
      },
    }));
  };

  // Save to localStorage on button click
  const handleSave = () => {
    localStorage.setItem("printSettings", JSON.stringify(settings));
    // optional: show a feedback, e.g. alert or toast
    console.log("Impostazioni salvate");
  };

  const renderCard = (
    title: string,
    sectionKey: keyof PrintSettings,
    showSmart?: boolean
  ) => {
    const section = settings[sectionKey];
    return (
      <div className="card p-3">
        <h5 className="fw-bold">{title}</h5>
        <div className="d-flex align-items-start gap-3 mt-2">
          <div className="w-50">
            <h6 className="fw-bold">Stampante</h6>
            <Form.Select
              className="w-100 input-product"
              value={section.printer}
              onChange={(e) => handleChange(sectionKey, "printer", e.target.value)}
            >
              {printers.map((opt) => (
                <option key={opt}>{opt}</option>
              ))}
            </Form.Select>
            <div className="d-flex align-items-center gap-2 mt-2">
              <FaCircleInfo />
              <p className="m-0">I file verranno scaricati invece che stampati</p>
            </div>
          </div>
          <div className="w-50">
            <h6 className="fw-bold">Formato</h6>
            <Form.Select
              className="w-100 input-product"
              value={section.format}
              onChange={(e) => handleChange(sectionKey, "format", e.target.value)}
            >
              {formats.map((fmt) => (
                <option key={fmt}>{fmt}</option>
              ))}
            </Form.Select>
          </div>
        </div>
        <h6 className="mt-4 fw-bold">Panoramica delle opzioni di stampa</h6>
        <div className="d-flex align-items-center gap-2">
          <Form.Check
            type="checkbox"
            id={`${sectionKey}-show-options`}
            checked={section.showOptions}
            onChange={(e) => handleChange(sectionKey, "showOptions", e.target.checked)}
          />
          <p className="m-0">Mostra le opzioni di stampa prima di stampare</p>
        </div>
        {showSmart && (
          <>
            <h6 className="mt-4 fw-bold">Stampa intelligente doganale</h6>
            <div className="d-flex align-items-start gap-3">
              <div className="d-flex align-items-start w-50 gap-2">
                <Form.Check
                  type="checkbox"
                  id={`${sectionKey}-smart-print`}
                  checked={!!section.smartPrint}
                  onChange={(e) => handleChange(sectionKey, "smartPrint", e.target.checked)}
                />
                <div>
                  <p className="m-0">Stampa i documenti doganali con le etichette</p>
                  <p style={{ color: "#686868", fontSize: "12px" }}>
                    I documenti saranno stampati solo quando la spedizione richiede un documento doganale separato
                  </p>
                </div>
              </div>
              <div className="w-50">
                <h6 className="m-0 mb-1">Numero copie</h6>
                <Form.Control
                  className="input-product"
                  type="number"
                  min={1}
                  value={section.copies}
                  onChange={(e) => handleChange(sectionKey, "copies", Number(e.target.value))}
                />
              </div>
            </div>
          </>
        )}
      </div>
    );
  };

  return (
    <div className="mt-4">
      {renderCard("Etichette", "labels")}
      {renderCard("Etichette di reso", "returns")}
      {renderCard("Documenti doganali", "customs", true)}
      <Button className="mb-4" onClick={handleSave}>
        Aggiorna le impostazioni
      </Button>
    </div>
  );
};

export default PrintOptionsForm;
