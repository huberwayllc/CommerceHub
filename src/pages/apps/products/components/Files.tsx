import { Button } from "react-bootstrap";



const FilesTab = () => {

  return (
    <>
    <div className='w-100 card p-3 d-felx flex-column align-items-center'>
        <h4 className="fw-bold text-center">Vendi prodotti digitali</h4>
        <Button className="mt-3">Aggiorna Vendi prodotti digitali</Button>
        <p className="text-center">Disponibile con il piano Venture e superiori.</p>
        <img className="mt-4" style={{width: "60%"}} src="https://d11s7fcxy18ubx.cloudfront.net/node/static/2025/2025-18162-gc2d0242a9ee05b/ru.cdev.xnext.backend.CP/F95124958ED81910BC950E9C40C6A537.cache.png"/>
        <p style={{maxWidth: "600px"}} className="mt-2 text-center">Sia che tu venda e-book, video, musica in formato digitale o altri tipi di file scaricabili, sia che tu voglia aggiungere una copia digitale a complemento di un prodotto fisico, Ecwid renderà automatico il processo. Dovrai solo caricare i file e Ecwid li farà arrivare all'acquirente in modo sicuro, immediatamente dopo l'acquisto.</p>
    </div>


    </>
  );
};

export default FilesTab;
