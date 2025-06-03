import { Variation } from "./types";
import { ProductOption } from "./types";

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
    <div className="d-flex mt-3 borderBottomGray pb-3 gap-4">
      <h5 onClick={() => {setActiveTab("OPTIONS")}} style={{cursor: "pointer"}} className={`mb-0 ${ activeTab === "OPTIONS" ? "colorPrimary" : "text-black"} fw-bold`}>
        Opzioni ({options.length})
      </h5>
      <h5 onClick={() => {setActiveTab("VARIATIONS")}} style={{cursor: "pointer"}} className={`mb-0 ${ activeTab === "VARIATIONS" ? "colorPrimary" : "text-black"} fw-bold`}>
        Varianti
      </h5>
    </div>
    {variations.map((v, i) => (
      <div key={v.id} className="d-flex justify-content-between align-items-center py-3 borderBottomGray">
        <div>
          {Object.entries(v.options).map(([k, val]) => (
            <span key={k} className="me-3">
              <strong>{k}:</strong> {val}
            </span>
          ))}
        </div>
        <button onClick={() => onEdit(i)} className="btn btn-sm btn-outline-primary">Modifica</button>
      </div>
    ))}
  </div>
);

export default VariationList;
