import { useState, useEffect } from "react";
import { Button, Dropdown } from "react-bootstrap";
import { FaChevronDown } from 'react-icons/fa';
import { TfiRulerAlt } from "react-icons/tfi";
import { MdInvertColors } from "react-icons/md";
import { FaRegTrashCan, FaPlus } from "react-icons/fa6";
import { ProductOption, OptionValue } from "./types";

interface Props {
  initial?: ProductOption;
  existingNames: string[];
  onSave: (opt: ProductOption) => void;
  onCancel: () => void;
}

const OptionForm = ({ initial, existingNames, onSave, onCancel }: Props) => {
  const [name, setName] = useState(initial?.name || '');
  const [type, setType] = useState(initial?.type || 'Taglia');
  const [values, setValues] = useState<OptionValue[]>(initial?.values || [{ id: Date.now() }]);
  const duplicate = name && existingNames.includes(name) && name !== initial?.name;

  useEffect(() => {
    if (!initial) setName(type);
  }, [type]);

  const addField = () => setValues(vs => [...vs, { id: Date.now() }]);
  const changeField = (id: number, field: keyof OptionValue, val: string) =>
    setValues(vs => vs.map(v => v.id === id ? { ...v, [field]: val } : v));
  const removeField = (id: number) => setValues(vs => vs.filter(v => v.id !== id));

  const save = () => {
    const filtered = values.filter(v => v.name?.trim());
    onSave({ name: name.trim(), type, values: filtered });
  };

  return (
    <div className='w-100 card p-3'>
      <h4 className="fw-bold">{initial ? 'Modifica opzione prodotto' : 'Aggiungi opzione prodotto'}</h4>
      <p>Usare il tipo di opzione che consenta di mostrare al meglio il prodotto: gli elenchi a discesa permettono ai clienti di scegliere tra le varie opzioni disponibili, i pulsanti di opzione sono perfetti per effettuare una scelta singola e le caselle di controllo nel caso in cui bisogna fare più selezioni. L'aggiunta di colori e taglie è tra le opzioni di personalizzazione più comuni.</p>

      {/* Nome + Tipo */}
      <div className="d-flex align-items-start gap-3">
        <div style={{ width: '70%' }}>
          <p className="mb-1 fw-semibold">Nome opzione</p>
          <input value={name} onChange={e => setName(e.target.value)} className="input-product w-100 fw-semibold" />
          {duplicate && <small className="text-danger">Nome opzione già utilizzato</small>}
        </div>
        <div style={{ width: '30%' }}>
          <p className="mb-1 fw-semibold">Tipo opzione</p>
          <Dropdown onSelect={k => setType(k || 'Taglia')}>
            <Dropdown.Toggle style={{ height: '40px', border: '1px solid #7f90aa', backgroundColor: '#ECEEF0' }} className="w-100 d-flex align-items-center justify-content-between gap-1 text-black">
              <div className="d-flex gap-2 align-items-center fw-semibold">
                {type === 'Taglia' && <TfiRulerAlt /> } 
                {type === 'Colore' && <MdInvertColors /> } 
                {type}
              </div>
              <FaChevronDown />
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item className="py-2" style={{fontSize: "14px"}} eventKey="Taglia"><TfiRulerAlt /> Taglia</Dropdown.Item>
              <Dropdown.Item className="py-2" style={{fontSize: "14px"}} eventKey="Colore"><MdInvertColors /> Colore</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>

      {/* Valori */}
      <div style={{ marginTop: '35px' }}>
        <p className="fw-bold pb-2 mb-0 borderBottomGray">Valori opzione</p>
        {values.map(v => (
          <div key={v.id} className="mt-3 pb-3 borderBottomGray d-flex align-items-center justify-content-between gap-2 px-2">
            {type === 'Colore' &&
              <> 
              <div className="w-100 d-flex align-items-center gap-2">
                  <input
                    type="color" 
                    value={v.hex || ''}
                    onChange={e => changeField(v.id, 'hex', e.target.value)}
                    className=""
                  />
                <input placeholder="Nome colore" value={v.name || ''} onChange={e => changeField(v.id, 'name', e.target.value)} className="input-product fw-semibold w-100" />
                <input placeholder="URL immagine" value={v.imageUrl || ''} onChange={e => changeField(v.id, 'imageUrl', e.target.value)} className="input-product w-100" />
              </div>   
              </>
            }
            {type === 'Taglia' &&
              <input placeholder="Es: 'S'" value={v.name || ''} onChange={e => changeField(v.id, 'name', e.target.value)} className="input-product w-50 fw-semibold" />
            }
            <FaRegTrashCan className="colorPrimary" onClick={() => removeField(v.id)} style={{ cursor: 'pointer', fontSize: "16px" }} />
          </div>
        ))}
        <Button className="bg-transparent colorPrimary border-0 fw-semibold d-flex align-items-center gap-1 mt-2 noHover" onClick={addField}>
          <FaPlus /> Aggiungi valore
        </Button>
      </div>

      {/* Azioni */}
      <div className="mt-4 d-flex gap-3">
        <Button onClick={save} disabled={!!(!name.trim() || duplicate)}>{initial ? 'Salva modifica' : 'Aggiungi opzione'}</Button>
        <Button variant="link" onClick={onCancel}>Cancella</Button>
      </div>
    </div>
  );
};

export default OptionForm;