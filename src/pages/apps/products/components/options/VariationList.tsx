import { Variation } from "./types";
interface Props {
  variations: Variation[];
  onEdit: (index: number) => void;
}

const VariationList = ({ variations, onEdit }: Props) => (
  <div className="card p-3 mt-4">
    <h5 className="fw-bold">Varianti</h5>
    {variations.map((v, i) => (
      <div key={v.id} className="d-flex justify-content-between align-items-center py-2 border-bottom">
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
