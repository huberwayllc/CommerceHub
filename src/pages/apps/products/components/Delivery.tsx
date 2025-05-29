import FloatingInput2 from '@/components/FloatingInput2';
import { useState } from 'react';
import { Form } from 'react-bootstrap';

type ShippingOption = 
  | 'storeMethods'
  | 'customList'
  | 'flatRate'
  | 'freeShipping';


const DeliveryTab = () => {
  const [selectedOption, setSelectedOption] = useState<ShippingOption>('storeMethods');
  const [isEnabled, setIsEnabled] = useState<boolean>(false);
  const [weight, setWeight] = useState<string>('');
  const [price, setPrice] = useState<string>('');

  const handleToggle = () => {
    setIsEnabled(!isEnabled);
  };

  return (
    <>
      {/* Product options section---------------------------- */}
      <div className='w-100 card p-3'>
        <div style={{borderBottom: "1px solid #7f90aa"}} className='w-100 d-flex align-items-center justify-content-between mb-3 pb-3'>
          <div style={{ width: "70%" }}>
            <h4 className="fw-bold">Questo prodotto richiede spedizione o ritiro</h4>
            <p>
              Attiva questa opzione se il prodotto necessita di essere consegnato ai clienti tramite spedizione o ritiro da parte del cliente stesso. Se il prodotto è un servizio o un articolo scaricabile e non richiede pertanto la consegna, tieni questa opzione disabilitata.
            </p>
          </div>
          <div style={{ width: "30%" }} className=" d-flex flex-column align-items-center">
              <Form.Check 
                type="switch"
                id="delivery-switch"
                checked={isEnabled}
                onChange={handleToggle}
                style={{ transform: "scale(2.2)" }}
              />
            <div className="mt-2">
                <p className='fw-bold' style={{position: "relative", right: "6px"}}>{isEnabled ? "Abilitato" : "Disabilitato"}</p>
            </div>
          </div>
        </div>

         <h4 className="fw-bold">Peso e Dimensioni</h4>
         <p>Specifica il peso e le dimensioni del prodotto per ottenere per il tuo cliente delle tariffe di spedizione precise, calcolate dallo spedizioniere. Per cambiare unità di misura consulta Impostazioni regionali.</p>
         <div style={{borderBottom: "1px solid #7f90aa"}}  className='d-flex align-items-start gap-4 mb-3'>
            <div style={{ width: "50%" }}>
                <FloatingInput2
                    placeholder="Peso, Kg"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                />
            </div>
            <div style={{ width: "50%" }} >
                <div className='d-flex justify-content-between gap-2'>
                    <FloatingInput2
                        placeholder="Lunghezza, cm"
                        value={weight}
                        onChange={(e) => setWeight(e.target.value)}
                    />
                    <FloatingInput2
                        placeholder="Larghezza, cm"
                        value={weight}
                        onChange={(e) => setWeight(e.target.value)}
                    />
                    <FloatingInput2
                        placeholder="Altezza, cm"
                        value={weight}
                        onChange={(e) => setWeight(e.target.value)}
                    />
                </div>
                <p className='mt-1' style={{fontSize: "11px"}}>Il calcolo dimensionale del peso è disponibile con la sottoscrizione a Business o di livello superiore</p>
            </div>
         </div>

         <h4 className="fw-bold">Tassi di spedizione</h4>
         <div className='mt-3'>
         <div onClick={() => {setSelectedOption('storeMethods')}} style={{cursor: "pointer"}} className='d-flex align-items-start gap-1 mb-2'>
            <div>
                <Form.Check
                    type="radio"
                    name="shipping"
                    id="opt-store-methods"
                    label=""
                    checked={selectedOption === 'storeMethods'}
                    onChange={() => setSelectedOption('storeMethods')}
                    style={{ transform: "scale(1.2)", position: "relative", top: "2px" }}
                />
            </div>
            <div>
                <p className='fw-bold mb-0'>Usa i metodi di spedizione del tuo store</p>
                <p>La spedizione per questo prodotto è stabilita secondo Impostazioni di spedizione . Il costo di spedizione è calcolato di conseguenza. Utilizza questa opzione se non ci sono tasse e condizioni speciali associate con la consegna di questo articolo. Puoi addebitare una tassa fissa per quantità di articoli in aggiunta al costo di spedizione. Aggiungi un costo fisso per articolo</p>
            </div>
         </div>

         <div onClick={() => {setSelectedOption('customList')}} style={{cursor: "pointer"}} className='d-flex align-items-start gap-1 mb-2'>
            <div>
                <Form.Check
                    type="radio"
                    name="shipping"
                    id="opt-custom-list"
                    label=""
                    checked={selectedOption === 'customList'}
                    onChange={() => setSelectedOption('customList')}
                    style={{ transform: "scale(1.2)", position: "relative", top: "2px" }}
                />
            </div>
            <div>
                <p className='fw-bold mb-0'>Specifica i metodi di spedizione per questo prodotto</p>
                <p>Personalizza l'elenco dei metodi di spedizione disponibili per questo prodotto. Inserisci nella lista bianca l'elenco abilitato. Escludi alcuni metodi di spedizione aggiungendoli all'elenco lista disabilitati.</p>
            </div>
         </div>

         <div onClick={() => {setSelectedOption('flatRate')}} style={{cursor: "pointer"}} className='d-flex align-items-start gap-1 mb-2'>
            <div>
                <Form.Check
                    type="radio"
                    name="shipping"
                    id="opt-flat-rate"
                    label=""
                    checked={selectedOption === 'flatRate'}
                    onChange={() => setSelectedOption('flatRate')}
                    style={{ transform: "scale(1.2)", position: "relative", top: "2px" }}
                />
            </div>
            <div>
                <p className='fw-bold mb-0'>Tariffa fissa per articolo</p>
                <p className='mb-0'>Addebita una tariffa fissa per la quantità di articoli. Utilizza questa opzione se il prodotto richiede un prezzo individuale di spedizione.</p>
                {selectedOption === 'flatRate' && 
                    <FloatingInput2
                        placeholder="Prezzo, €"
                        value={price}
                        type='number'
                        onChange={(e) => setPrice(e.target.value)}
                    />
                }
                <p style={{fontSize: "11px", width: "50%"}}>Al checkout, i clienti vedranno il titolo specificato. L'importo specificato è comprensivo di tasse.</p>
            </div>
         </div>

         <div onClick={() => {setSelectedOption('freeShipping')}} style={{cursor: "pointer"}} className='d-flex align-items-start gap-1 mb-2'>
            <div>
                <Form.Check
                    type="radio"
                    name="shipping"
                    id="opt-free-shipping"
                    label=""
                    checked={selectedOption === 'freeShipping'}
                    onChange={() => setSelectedOption('freeShipping')}
                    style={{ transform: "scale(1.2)", position: "relative", top: "2px" }}
                />
            </div>
            <div>
                <p className='fw-bold mb-0'>Spedizione gratuita</p>
                <p>Spedizione gratuita del prodotto a prescindere dalla quantità. È dimostrato che la spedizione gratuita incentiva i clienti a comprare di più e incrementa le vendite. Utilizza questa opzione se intendi coprire te i costi di spedizione.</p>
            </div>
         </div>
         </div>
      </div>

      <div className='w-100 card p-3'>
        <h6 className='fw-bold'>Tempi di preparazione del prodotto</h6>
        <p>Il tempo di preparazione dell'ordine è specificato nelle impostazioni del metodo di spedizione. Normalmente è lo stesso per tutti i prodotti in catalogo. Per i prodotti che richiedono più o meno tempo per essere preparati, cioè hanno un tempo di preparazione differente, è possibile specificarlo qui. Ciò influirà sul tempo di consegna stimato visualizzato nella pagina di dettaglio del prodotto e nella pagina di pagamento. Per specificare il tempo di preparazione dei prodotti, effettuare l'upgrade al piano Venture o superiore.</p>
      </div>
    </>
  );
};

export default DeliveryTab;
