import { Button } from "react-bootstrap";


const PackAndGoList: React.FC = () => {


  return (
    <div className='mt-4'>
        <div className="card p-3 py-5 d-flex flex-column align-items-center text-center">
            <div className="mt-5" style={{maxWidth: "600px"}}>
                <img src="https://app.sendcloud.com/img/pack-go-scanner-empty-state-L7fueWoH.svg"/>
                <h4 className="mb-3 fw-semibold">Imballaggio 3 volte più veloce con Pack & Go</h4>
                <p>Scopri tutto il potenziale di Pack & Go, la nostra funzionalità progettata per aiutarti a imballare fino a 3 volte più velocemente e con meno errori. Immagina di ridurre 1 ora di imballaggio a soli 20 minuti!</p>
                <p>Questa funzionalità rivoluzionaria non è disponibile col tuo piano di abbonamento attuale. Esegui l'upgrade ora per iniziare a risparmiare tempo, ridurre i costi e ottimizzare immediatamente il tuo processo di imballaggio.</p>
                <div className="w-100 pt-4 d-inline-flex gap-3 justify-content-center borderTopGray">
                    <Button style={{height: "45px"}}>Informazioni su Pack & Go</Button>
                    <Button className="bg-transparent text-black">Confronta i piani</Button>
                </div>
            </div>
        </div>
    </div>
  );
};

export default PackAndGoList;
