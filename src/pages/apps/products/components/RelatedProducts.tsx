import { Button } from "react-bootstrap";
import { FaPlus } from "react-icons/fa6";


const RelatedTab = () => {

  return (
    <>
    <div className='w-100 card p-3'>
        <div className="d-flex align-items-center">
           <div style={{width: "60%"}}>
            <div style={{maxWidth: "600px"}}>
                <h4 className="fw-bold">Prodotti correlati</h4>
                <p>Visualizza la sezione "Potrebbe anche interessarti" nelle pagine dei prodotti per promuovere altri articoli e aumentare le vendite. È possibile selezionare i prodotti correlati manualmente oppure impostare che vengano selezionati automaticamente in modo casuale.</p>
                <Button style={{width: "200px"}}><FaPlus /> Aggiungi prodotti</Button>
              </div>
           </div>
           <div style={{width: "40%"}} className="d-flex justify-content-end">
             <img style={{width: "100%", maxWidth: "350px"}}  src="https://d11s7fcxy18ubx.cloudfront.net/node/static/2025/2025-18943-gfb57b852e665b0/ru.cdev.xnext.backend.CP/12FBD6B19DD2F4A89CF2516CE18DE4BA.cache.png"/>
           </div>
        </div>

    </div>

    <div className='w-100 card p-3'>
        <div style={{maxWidth: "600px"}}> 
            <h4 className="fw-bold">Trucchi e suggerimenti</h4>
            <h6 className="fw-bold">Scegli correttamente i prodotti consigliati</h6>
            <p>Per sfruttare al massimo i prodotti correlati, è bene ideare delle tattiche e scegliere saggiamente i prodotti. Ci sono molti percorsi da seguire qui, ma due delle pratiche comuni che si adeguano specialmente bene ai prodotti sono upselling e vendita incrociata. Entrambi aumentano il totale del carrello, ma i modi in cui lo fanno sono un po' differenti.</p>
            <p>L'upselling consiste nel dare ai clienti l'opzione di comprare un articolo lievemente migliore di quello che stanno considerando. Ad esempio, offrire una borsa di medie dimensioni invece della sua versione più piccola. Per farlo, scegli prodotti comparabili e più preferibili di quelli selezionati, in ogni modo: in termini di dimensioni, funzionalità, servizio offerto, etc.</p>
            <p>La vendita incrociata significa offrire ai clienti articoli aggiuntivi che vanno bene con quello che stanno acquistando. Per esempio, i ristoranti di fast food che chiedono: "Vuoi le patatine con quello?". Per vendere in modo incrociato, scegli i prodotti che starebbero bene insieme: equipaggiamento necessario, accessori, dessert, etc.</p>
            <p>Impara di più sui prodotti correlati nel Centro di Supporto e potenzia significativamente le tue vendite.</p>
            <h6 className="fw-bold">Mostra prodotti consigliati nella pagina del carrello e nelle e-mail</h6>
            <p>È possibile mostrare i prodotti correlati anche nella pagina del carrello. Quando questa opzione è abilitata, nella pagina del carrello vengono visualizzati i prodotti complementari agli articoli nel carrello. Per abilitare la visualizzazione dei prodotti correlati nella pagina del carrello, andare aImpostazioni → Generale → Carrello e checkout.</p>
            <p>Un altro metodo semplice per promuovere i prodotti correlati è offrire ai clienti dei prodotti a cui potrebbero essere interessati nell'e-mail di conferma dell'ordine. Per abilitare l'invio delle e-mail di conferma dell'ordine con prodotti correlati, andare a Marketing → E-mail automatizzate.</p>
            <h6 className="fw-bold">Mostra i prodotti visualizzati di recente</h6>
            <p>È facile perdersi in una vetrina con un grande catalogo di offerta. Con l'app Recently Viewed Products (Prodotti visualizzati di recente) i clienti potranno tornare con facilità direttamente agli articoli che stavano guardando attraverso un comodo widget per la visualizzazione dei prodotti.</p>
        </div>
    </div>


    </>
  );
};

export default RelatedTab;
