import { useState, useEffect } from "react";
import { Button, Dropdown } from "react-bootstrap";
import { FaChevronDown } from 'react-icons/fa';
import { TfiRulerAlt } from "react-icons/tfi";
import { MdInvertColors } from "react-icons/md";
import { FaRegTrashCan, FaPlus } from "react-icons/fa6";

interface OptionValue {
  id: number;
  value: string;
}

interface ProductOption {
  name: string;
  type: string;
  values: OptionValue[];
}

interface Product {
  options: ProductOption[];
}

const OptionsTab = () => {
  const [flag, setFlag] = useState(false);
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [optionName, setOptionName] = useState("");
  const [optionType, setOptionType] = useState("Taglia");
  const [optionValues, setOptionValues] = useState<OptionValue[]>([{ id: Date.now(), value: "" }]);
  const [product, setProduct] = useState<Product>({ options: [] });

  // Check duplicate names excluding current editing
  const isDuplicateName = optionName.trim()
    ? product.options.some((opt, idx) => opt.name === optionName.trim() && idx !== editingIndex)
    : false;

  // Prepopulate form when editing
  useEffect(() => {
    if (editingIndex !== null) {
      const opt = product.options[editingIndex];
      setOptionName(opt.name);
      setOptionType(opt.type);
      setOptionValues(opt.values.length ? opt.values : [{ id: Date.now(), value: "" }]);
      setFlag(true);
    }
  }, [editingIndex]);

  const handleSelectType = (type: string) => {
    setOptionType(type);
    if (editingIndex === null) {
      setOptionName(type);
    }
  };

  // Value fields
  const addValueField = () => setOptionValues(prev => [...prev, { id: Date.now(), value: "" }]);
  const handleValueChange = (id: number, newValue: string) =>
    setOptionValues(prev => prev.map(v => v.id === id ? { ...v, value: newValue } : v));
  const removeValueField = (id: number) => setOptionValues(prev => prev.filter(v => v.id !== id));

  // Add or update option
  const handleAddOption = () => {
    if (!optionName.trim() || isDuplicateName) return;
    const values = optionValues.filter(v => v.value.trim());
    const newOption: ProductOption = { name: optionName.trim(), type: optionType, values };
    setProduct(prev => {
      const opts = [...prev.options];
      if (editingIndex !== null) opts[editingIndex] = newOption;
      else opts.push(newOption);
      return { options: opts };
    });
    resetForm();
  };

  const handleCancel = () => resetForm();

  const resetForm = () => {
    setOptionName("");
    setOptionType("Taglia");
    setOptionValues([{ id: Date.now(), value: "" }]);
    setEditingIndex(null);
    setFlag(false);
  };

  // Delete an option
  const removeOption = (index: number) => {
    setProduct(prev => ({
      options: prev.options.filter((_, i) => i !== index)
    }));
  };

  // Open edit
  const handleOptionClick = (index: number) => setEditingIndex(index);

  return (
    <>
      {/* Options List */}
      {!flag && product.options.length > 0 && (
        <div className='w-100 card p-3'>
          <h4 className="fw-bold">Opzioni e varianti del prodotto</h4>
          <h5 className="mt-3 mb-0 colorPrimary fw-bold borderBottomGray pb-3">
            Opzioni ({product.options.length})
          </h5>
          {product.options.map((opt, i) => (
            <div key={i} style={{padding: "12px 5px"}} className="borderBottomGray d-flex align-items-center px-2">
              <div
                style={{ width: "30%", cursor: 'pointer' }}
                className="d-flex align-items-center gap-2"
                onClick={() => handleOptionClick(i)}
              >
                {opt.type === 'Taglia' ? <TfiRulerAlt style={{ fontSize: "20px" }} /> : <MdInvertColors style={{ fontSize: "20px" }} />}
                <p className="fw-bold mb-0">{opt.name}</p>
              </div>
              <div onClick={() => handleOptionClick(i)} style={{ width: "65%" }} className="d-flex align-items-center gap-2">
                {opt.values.map(v => (
                  <div key={v.id} className="borderGray p-1 px-3 rounded-5">
                    <p className="mb-0 fw-semibold">{v.value}</p>
                  </div>
                ))}
              </div>
              <FaRegTrashCan
                className="colorPrimary"
                style={{ fontSize: "18px", cursor: 'pointer' }}
                onClick={() => removeOption(i)}
              />
            </div>
          ))}
          <Button
            className="mt-3 bg-transparent text-black d-flex align-items-center gap-2 fw-semibold"
            style={{ maxWidth: "250px", height: "40px", border: "1px solid black" }}
            onClick={() => setFlag(true)}
          >
            <FaPlus style={{ fontSize: "18px" }} />
            Aggiungi opzione prodotto
          </Button>
        </div>
      )}


      {!flag && product.options.length === 0 &&
        <div className='w-100 card p-3'>
          <div className="d-flex align-items-start">
            <div style={{ width: "60%" }}>
              <h4 className="fw-bold">Opzioni e varianti del prodotto</h4>
              <p>Aggiungi le opzioni del prodotto come taglia o colore tra le quali i clienti potranno scegliere nella pagina del prodotto. Puoi, inoltre, offrire servizi extra da aggiungere al prodotto, ad esempio, confezione regalo.</p>
              <Button onClick={() => { setFlag(true); }} style={{ width: "250px", height: "40px" }}>Aggiungi opzione prodotto</Button>
            </div>
            <div style={{ width: "40%" }} className="d-flex justify-content-end">
              <img style={{ width: "100%", maxWidth: "350px" }} src="https://d11s7fcxy18ubx.cloudfront.net/node/static/2025/2025-18419-g2ab23470539bf4/ru.cdev.xnext.backend.CP/816D48C86ECC24712733B1700C8A1B2E.cache.png" />
            </div>
          </div>
        </div>
      }

      {/* Form */}
      {flag && (
        <div className='w-100 card p-3'>
          <h4 className="fw-bold">{editingIndex !== null ? 'Modifica opzione prodotto' : 'Aggiungi opzione prodotto'}</h4>
          <div className="d-flex align-items-start gap-3">
            <div style={{ width: "70%" }}>
              <p className="mb-1 fw-semibold">Nome opzione</p>
              <input
                className="input-product w-100 fw-semibold"
                placeholder='per esempio, "Taglia"'
                value={optionName}
                onChange={e => setOptionName(e.target.value)}
              />
              {isDuplicateName && <small className="text-danger">Nome opzione già utilizzato</small>}
            </div>
            <div style={{ width: "30%" }}>
              <p className="mb-1 fw-semibold">Tipo opzione</p>
              <Dropdown onSelect={k => handleSelectType(k || 'Taglia')}>
                <Dropdown.Toggle
                  style={{ height: '40px', border: "1px solid #7f90aa", backgroundColor: "#ECEEF0" }}
                  className="w-100 d-flex align-items-center justify-content-between gap-1 text-black"
                >
                  <div className="d-flex gap-2 align-items-center fw-semibold">
                    {optionType === 'Taglia' ? <TfiRulerAlt style={{ fontSize: "20px" }} /> : <MdInvertColors style={{ fontSize: "20px" }} />}
                    {optionType}
                  </div>
                  <FaChevronDown />
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item eventKey="Taglia"><TfiRulerAlt /> Taglia</Dropdown.Item>
                  <Dropdown.Item eventKey="Colore"><MdInvertColors /> Colore</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </div>

          <div style={{ marginTop: "35px" }}>
            <p className="fw-bold pb-2 mb-0 borderBottomGray">Valori opzione</p>
            {optionValues.map(val => (
              <div key={val.id} className="mt-3 pb-3 borderBottomGray d-flex justify-content-between align-items-center px-2">
                <input
                  className="input-product w-50 fw-semibold"
                  placeholder={optionType === 'Taglia' ? 'Ad esempio, "S" per la taglia' : 'Codice esadecimale o nome colore'}
                  value={val.value}
                  onChange={e => handleValueChange(val.id, e.target.value)}
                />
                <FaRegTrashCan
                  style={{ fontSize: "18px", cursor: "pointer" }}
                  onClick={() => removeValueField(val.id)}
                  className="colorPrimary"
                />
              </div>
            ))}
            <Button
              className="bg-transparent colorPrimary border-0 fw-semibold d-flex align-items-center gap-1 mt-2 noHover"
              style={{ cursor: 'pointer' }}
              onClick={addValueField}
            >
              <FaPlus style={{ fontSize: "18px" }} /> Aggiungi valore
            </Button>
          </div>

          <div className="mt-4 d-flex gap-3">
            <Button
              style={{ maxWidth: "250px", height: "40px" }}
              onClick={handleAddOption}
              disabled={!optionName.trim() || isDuplicateName}
            >
              {editingIndex !== null ? 'Salva modifica' : 'Aggiungi opzione'}
            </Button>
            <Button
              className="bg-transparent border-0 colorPrimary noHover fw-semibold"
              style={{ maxWidth: "150px", height: "40px", cursor: 'pointer' }}
              onClick={handleCancel}
            >
              Cancella
            </Button>
          </div>
        </div>
      )}

      {/* Debug */}
      <pre>{JSON.stringify(product, null, 2)}</pre>

      <div className='w-100 card p-3'>
        <h4 className="fw-bold">Campi di immissione per clienti</h4>
        <p>Aggiungi dei campi di immissione ...</p>
      </div>
    </>
  );
};

export default OptionsTab;
