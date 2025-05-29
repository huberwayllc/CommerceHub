import { Button } from "react-bootstrap";



const OptionsTab = () => {

  return (
    <>
    <div className='w-100 card p-3'>
        <div className="d-flex align-items-start">
            <div style={{width: "60%"}}>
                <h4 className="fw-bold">Opzioni e varianti del prodotto</h4>
                <p>Aggiungi le opzioni del prodotto come taglia o colore tra le quali i clienti potranno scegliere nella pagina del prodotto. Puoi, inoltre, offrire servizi extra da aggiungere al prodotto, ad esempio, confezione regalo.
                </p>
                <Button style={{width: "250px", height: "40px"}}>Aggiungi opzione prodotto</Button>
            </div>
            <div style={{width: "40%"}} className="d-flex justify-content-end">
                <img style={{width: "100%", maxWidth: "350px"}}  src="https://d11s7fcxy18ubx.cloudfront.net/node/static/2025/2025-18162-gc2d0242a9ee05b/ru.cdev.xnext.backend.CP/816D48C86ECC24712733B1700C8A1B2E.cache.png"/>
            </div>
        </div>
    </div>

    <div className='w-100 card p-3'>
         <h4 className="fw-bold">Campi di immissione per clienti</h4>
         <p>Aggiungi dei campi di immissione se hai bisogno di raccogliere informazioni aggiuntive dai clienti oppure per permettere loro di personalizzare il prodotto che stanno acquistando.</p>
         <p className="fw-semibold mb-0">I campi di immissione per i clienti si possono usare per consentire ai clienti di:</p>
         <p>- Caricare un file, ad esempio, un design personalizzato per un prodotto. <br/>
            - Immettere un testo con cui personalizzare il prodotto. <br/>
            - Scegliere una data.
         </p>
    </div>


    </>
  );
};

export default OptionsTab;
