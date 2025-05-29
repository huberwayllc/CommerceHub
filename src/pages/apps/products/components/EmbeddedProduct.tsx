import { Button } from "react-bootstrap";



const EmbeddedTab = () => {

  return (
    <>
    <div className='w-100 card p-3'>
        <div className="d-flex align-items-center">
            <div style={{width: "60%"}}>
                <h4 className="fw-bold">Incorpora questo prodotto nel tuo sito</h4>
                <p>Se vendi soltanto pochi prodotti, puoi aggiungerli alle pagine web tramite i Bottoni Acquista. I clienti potranno ordinare i prodotti dalle pagine servendosi dei bottoni acquista.
                    <br />
                    – Promuovi prodotti sul tuo blog, sulla barra laterale del sito, o letteralmente in qualsiasi altro posto. 
                    <br />
                    – Crea una vetrina completa che illustri tutti i vantaggi dei prodotti e proponga un modo per acquistarli online.
                </p>
                <Button style={{width: "200px", height: "40px"}}>Incorpora Prodotto</Button>
            </div>
            <div style={{width: "40%"}} className="d-flex justify-content-end">
                <img style={{width: "100%", maxWidth: "350px"}}  src="https://d11s7fcxy18ubx.cloudfront.net/node/static/2025/2025-18162-gc2d0242a9ee05b/ru.cdev.xnext.backend.CP/15FF9AF13DCCD25497C3C1B3B2F24C27.cache.png"/>
            </div>
        </div>
    </div>


    </>
  );
};

export default EmbeddedTab;
