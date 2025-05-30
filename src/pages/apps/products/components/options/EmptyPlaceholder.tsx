import { Button } from "react-bootstrap";

interface Props {
  onAdd: () => void;
}

const EmptyPlaceholder = ({ onAdd }: Props) => (
  <div className='w-100 card p-3'>
    <div className="d-flex align-items-start">
      <div style={{ width: "60%" }}>
        <h4 className="fw-bold">Opzioni e varianti del prodotto</h4>
        <p>
          Aggiungi le opzioni del prodotto come taglia o colore tra le quali i clienti potranno scegliere nella pagina del prodotto.
          Puoi, inoltre, offrire servizi extra da aggiungere al prodotto, ad esempio, confezione regalo.
        </p>
        <Button onClick={onAdd} style={{ width: "250px", height: "40px" }}>
          Aggiungi opzione prodotto
        </Button>
      </div>
      <div style={{ width: "40%" }} className="d-flex justify-content-end">
        <img
          style={{ width: "100%", maxWidth: "350px" }}
          src="https://d11s7fcxy18ubx.cloudfront.net/node/static/2025/2025-18419-g2ab23470539bf4/ru.cdev.xnext.backend.CP/816D48C86ECC24712733B1700C8A1B2E.cache.png"
          alt="Placeholder"
        />
      </div>
    </div>
  </div>
);

export default EmptyPlaceholder;
