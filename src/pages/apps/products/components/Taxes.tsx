import { useState } from "react";
import { Dropdown } from "react-bootstrap";
import { FaChevronDown } from 'react-icons/fa';


const TaxesTab = () => {
    const [flag, setFlag] = useState(false);

  return (
    <>
    {/* Product options section---------------------------- */}
    <div className='w-100 card p-3'>
      <div className='w-100 d-flex justify-content-between'>
        <h4 className="fw-bold">Dettagli delle tasse</h4>
      </div>
        <p>Le tasse per tutti i tuoi prodotti sono calcolate automaticamente in base alla posizione geografica del cliente. Se per questo prodotto è previsto un aumento, una riduzione o un'esenzione fiscale, imposta per esso un'aliquota differente. L'aliquota sarà applicata solo a questo prodotto.</p>

        <p className="mb-2" style={{fontWeight: "600"}}>Aliquota applicata: Aliquota standard 22%</p>

        {!flag &&
        <p onClick={() => {setFlag(true)}} className="fw-semibold" style={{color: "#2563EB", cursor: "pointer"}}>Cambia aliquota fiscale per questo prodotto</p>
        }
        
        {flag &&
        <Dropdown>
            <Dropdown.Toggle style={{ height: '45px', border: "1px solid #7f90aa" }} className="bg-white text-black d-flex align-items-center gap-1">
            Aliquota standard: 22% (default) <FaChevronDown />
            </Dropdown.Toggle>

            <Dropdown.Menu>
            <Dropdown.Item style={{ height: "40px" }} href="#importa">Aliquota ridotta: 10%</Dropdown.Item>
            <Dropdown.Item style={{ height: "40px" }} href="#importa">Aliquota ridotta: 5%</Dropdown.Item>
            <Dropdown.Item style={{ height: "40px" }} href="#importa">Aliquota ridotta: 4%</Dropdown.Item>
            <Dropdown.Item style={{ height: "40px" }} href="#importa">Aliquota zero: 0%</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
        }
        <p className="mt-1"><strong>Beni e servizi soggetti a questa aliquota:</strong> Gran parte dei beni e servizi tassabili.</p>
    </div>
    </>
  );
};

export default TaxesTab;
