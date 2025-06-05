import { Button, Form } from "react-bootstrap";
import { Variation } from "./types";
import { ProductOption } from "./types";
import { FaRegTrashCan } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import { MdOutlineEdit } from "react-icons/md";
type TabKey = "OPTIONS" | "VARIATIONS";

interface Props {
  options: ProductOption[];
  variations: Variation[];
  onEdit: (index: number) => void;  activeTab: TabKey;
  setActiveTab: React.Dispatch<React.SetStateAction<TabKey>>;
}

const gridTemplate = {
  display: 'grid',
  gridTemplateColumns: '50px 2fr 1fr 0.8fr 1fr 0.8fr 60px',
  gap: '8px',
  alignItems: 'center'
};

const VariationList = ({ options, variations, onEdit, activeTab, setActiveTab }: Props) => (
  <div className="card p-3">
    <h4 className="fw-bold">Opzioni e varianti del prodotto</h4>
    <div className="d-flex mt-1 pb-3 gap-4">
      <h5 onClick={() => {setActiveTab("OPTIONS")}} style={{cursor: "pointer"}} className={`mb-0 ${ activeTab === "OPTIONS" ? "colorPrimary" : "text-black"} fw-bold`}>
        Opzioni ({options.length})
      </h5>
      <h5 onClick={() => {setActiveTab("VARIATIONS")}} style={{cursor: "pointer"}} className={`mb-0 ${ activeTab === "VARIATIONS" ? "colorPrimary" : "text-black"} fw-bold`}>
        Varianti ({variations.length})
      </h5>
    </div>
    <div className="d-inline-flex gap-2 mb-2">
      <Button className="d-flex align-items-center gap-1">
        <FaPlus/>
        Nuova combinazione
      </Button>
      <Button style={{border: "1px solid black"}} className="bg-white text-black disabled">
        Modifica
      </Button>
      <Button style={{border: "1px solid black"}} className="bg-white text-black disabled">
        Elimina
      </Button>
    </div>

    <div style={{ ...gridTemplate, backgroundColor: "#808F9D" }} className="align-items-center text-white p-1 fw-semibold mt-1">
      <span>
        <Form.Check
          type="checkbox"
          className="big-checkbox"
        />
      </span>
      <span>Opzioni</span>
      <span>Cod. Art.</span>
      <span>Peso, kg</span>
      <span>Magazzino</span>
      <span>Prezzo, €</span>
      <span>Azioni</span>
    </div>
     {variations.map((v, index) => (
       <div key={v.id} style={gridTemplate} className="py-3 borderBottomGray px-1">
         <span>
           <Form.Check type="checkbox" className="big-checkbox" />
         </span>
         <div className="d-flex align-items-center gap-2">
           <img
             style={{ width: "50px", position: "relative", right: "7px" }}
             src="https://d11s7fcxy18ubx.cloudfront.net/node/static/2025/2025-18963-g963d82ffd3aa6d/icons/product-default.svg"
           />
           <div className="d-flex flex-column">
             {Object.entries(v.options).map(([k, val]) => (
               <span key={k}>
                 <strong>{k}:</strong> {val}
               </span>
             ))}
           </div>
         </div>
         <span>{v.itemCode}</span>
         <span>{v.weight}</span>
         <span>{v.stock}</span>
         <span>{v.price}</span>
         <div className="d-flex flex-column gap-2">
           <FaRegTrashCan style={{ fontSize: "16px", cursor: "pointer" }} />
           <MdOutlineEdit
             style={{ fontSize: "18px", cursor: "pointer" }}
             onClick={() => onEdit(index)}
           />
         </div>
       </div>
     ))}
  </div>
);

export default VariationList;
