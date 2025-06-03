import { Button } from "react-bootstrap";
import { Variation } from "./types";
import { ProductOption } from "./types";
import { FaPlus } from "react-icons/fa6";
type TabKey = "OPTIONS" | "VARIATIONS";

interface Props {
  options: ProductOption[];
  variations: Variation[];
  onEdit: (index: number) => void;  activeTab: TabKey;
  setActiveTab: React.Dispatch<React.SetStateAction<TabKey>>;
}

const VariationList = ({ options, variations, onEdit, activeTab, setActiveTab }: Props) => (
  <div className="card p-3">
    <h4 className="fw-bold">Opzioni e varianti del prodotto</h4>
    <div className="d-flex mt-1 pb-3 gap-4">
      <h5 onClick={() => {setActiveTab("OPTIONS")}} style={{cursor: "pointer"}} className={`mb-0 ${ activeTab === "OPTIONS" ? "colorPrimary" : "text-black"} fw-bold`}>
        Opzioni ({options.length})
      </h5>
      <h5 onClick={() => {setActiveTab("VARIATIONS")}} style={{cursor: "pointer"}} className={`mb-0 ${ activeTab === "VARIATIONS" ? "colorPrimary" : "text-black"} fw-bold`}>
        Varianti
      </h5>
    </div>
    <div className="d-inline-flex gap-2 mb-2">
      <Button>
        <FaPlus/>
        Nuova combinazione
      </Button>
      <Button style={{border: "1px solid black"}} className="bg-white text-black">
        Modifica
      </Button>
      <Button style={{border: "1px solid black"}} className="bg-white text-black">
        Elimina
      </Button>
    </div>
    {variations.map((v, i) => (
      <div key={v.id} className="d-flex justify-content-between borderBottomGray align-items-center py-3">
        <div>
          {Object.entries(v.options).map(([k, val]) => (
            <span key={k} className="me-3">
              <strong>{k}:</strong> {val}
            </span>
          ))}
        </div>
        <div className="d-flex gap-3 ms-4">
          <span><strong>Prezzo:</strong> {v.price}</span>
          <span><strong>Quantità disonibile:</strong> {v.stock}</span>
          
          
        </div>
        <button onClick={() => onEdit(i)} className="btn btn-sm btn-outline-primary">Modifica</button>
      </div>
    ))}
  </div>
);

export default VariationList;
