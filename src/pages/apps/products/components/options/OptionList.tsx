import { FaRegTrashCan, FaPlus } from "react-icons/fa6";
import { TfiRulerAlt } from "react-icons/tfi";
import { MdInvertColors } from "react-icons/md";
import { ProductOption } from "./types";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

type TabKey = "OPTIONS" | "VARIATIONS";

interface Props {
  options: ProductOption[];
  onAdd: () => void;
  onEdit: (index: number) => void;
  onDelete: (index: number) => void;
  activeTab: TabKey;
  setActiveTab: React.Dispatch<React.SetStateAction<TabKey>>;
}

const OptionList = ({ options, onAdd, onEdit, onDelete, activeTab, setActiveTab }: Props) => (
  <div className='w-100 card p-3'>
    <h4 className="fw-bold">Opzioni e varianti del prodotto</h4>
    <div className="d-flex mt-3 borderBottomGray pb-3 gap-4">
      <h5 onClick={() => {setActiveTab("OPTIONS")}} style={{cursor: "pointer"}} className={`mb-0 ${ activeTab === "OPTIONS" ? "colorPrimary" : "text-black"} fw-bold`}>
        Opzioni ({options.length})
      </h5>
      <h5 onClick={() => {setActiveTab("VARIATIONS")}} style={{cursor: "pointer"}} className={`mb-0 ${ activeTab === "VARIATIONS" ? "colorPrimary" : "text-black"} fw-bold`}>
        Varianti
      </h5>
    </div>
    {options.map((opt, i) => (
      <div key={i} style={{ padding: '12px 5px' }} className="borderBottomGray d-flex align-items-center px-2">
        <div
          style={{ width: '30%', cursor: 'pointer' }}
          className="d-flex align-items-center gap-2"
          onClick={() => onEdit(i)}
        >
          {opt.type === 'Taglia'
            ? <TfiRulerAlt style={{ fontSize: '20px' }} />
            : <MdInvertColors style={{ fontSize: '20px' }} />}
          <p className="fw-bold mb-0">{opt.name}</p>
        </div>
        <div style={{ width: '65%', cursor: 'pointer' }} className="d-flex align-items-center gap-2" onClick={() => onEdit(i)}>
          {opt.values.map(v => (
            <div key={v.id} className="borderGray p-1 px-3 rounded-5">
              <p className="mb-0 fw-semibold">{opt.type === 'Colore' ? v.name : v.name}</p>
            </div>
          ))}
        </div>
        <FaRegTrashCan
          className="colorPrimary"
          style={{ fontSize: '18px', cursor: 'pointer' }}
          onClick={() => onDelete(i)}
        />
      </div>
    ))}
    <button
      className="mt-3 bg-transparent text-black d-flex align-items-center gap-2 fw-semibold"
      style={{ maxWidth: '250px', height: '40px', border: '1px solid black' }}
      onClick={onAdd}
    >
      <FaPlus style={{ fontSize: '18px' }} /> Aggiungi opzione prodotto
    </button>

    <div className="mt-4" style={{maxWidth: "700px"}}>
      <div onClick={() => setActiveTab("VARIATIONS")} className="d-flex align-items-center" style={{cursor: "pointer"}}>
        <h6 className="mb-0 colorPrimary fw-bold">
          Gestisci varianti
        </h6>
        <MdOutlineKeyboardArrowRight className="colorPrimary" style={{fontSize: "20px", position: "relative", top: "5px"}}/>
      </div>

      <p className="mb-0 mt-2">
        Usa le varianti del prodotto per gestire individualmente le scorte, le immagini, i codici articolo e i prezzi di ciascuna combinazione delle opzioni di prodotto.
      </p>
    </div>
  </div>
);

export default OptionList;