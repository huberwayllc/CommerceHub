import React, { useState, useEffect } from "react";
import { Modal, Button, Form, Image } from "react-bootstrap";
import { FaPlus, FaTrash } from "react-icons/fa6";
import { Product } from "./options/types";


const STORAGE_PRODUCTS = "products_list_v1";

interface RelatedTabProps {
  relatedIds: string[];
  onChangeRelatedIds: (ids: string[]) => void;
}

const RelatedTab: React.FC<RelatedTabProps> = ({ relatedIds, onChangeRelatedIds }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [allProducts, setAllProducts] = useState<Product[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [tempSelection, setTempSelection] = useState<Set<string>>(new Set());

  const removeRelated = (id: string) => {
  onChangeRelatedIds(relatedIds.filter(rid => rid !== id));
};

  useEffect(() => {
    const raw = localStorage.getItem(STORAGE_PRODUCTS) || "[]";
    setAllProducts(JSON.parse(raw));
  }, []);

  const openModal = () => {
    setTempSelection(new Set(relatedIds));
    setShowModal(true);
  };
  const confirmSelection = () => {
    onChangeRelatedIds(Array.from(tempSelection));
    setShowModal(false);
  };
  const toggleTemp = (id: string) => {
    const next = new Set(tempSelection);
    next.has(id) ? next.delete(id) : next.add(id);
    setTempSelection(next);
  };

  return (
    <>
    <div className='w-100 card p-3'>
        <div className="d-flex align-items-center">
           <div style={{width: "60%"}}>
            <div style={{maxWidth: "600px"}}>
                <h4 className="fw-bold">Prodotti correlati</h4>
                <p>Visualizza la sezione "Potrebbe anche interessarti" nelle pagine dei prodotti per promuovere altri articoli e aumentare le vendite. È possibile selezionare i prodotti correlati manualmente oppure impostare che vengano selezionati automaticamente in modo casuale.</p>
                <Button onClick={openModal} style={{width: "200px"}}><FaPlus /> Aggiungi prodotti</Button>
              </div>
           </div>
           {relatedIds.length < 0 && 
           <div style={{width: "40%"}} className="d-flex justify-content-end">
             <img style={{width: "100%", maxWidth: "350px"}}  src="https://d11s7fcxy18ubx.cloudfront.net/node/static/2025/2025-18943-gfb57b852e665b0/ru.cdev.xnext.backend.CP/12FBD6B19DD2F4A89CF2516CE18DE4BA.cache.png"/>
           </div>
           }
        </div>
        {relatedIds.length > 0 && (
          <div className="d-flex flex-wrap gap-2 mt-3">
            {relatedIds.map(id => {
              const p = allProducts.find(x => String(x.id) === String(id));
              if (!p) return null;
              return (
                <div
                  key={id}
                  className="borderGray rounded-2 p-2 text-center position-relative"
                  style={{ width: 100 }}
                >
                  <FaTrash
                    onClick={() => removeRelated(id)}
                    style={{
                      position: "absolute",
                      top: 4,
                      right: 4,
                      cursor: "pointer",
                      color: "#dc3545",
                      fontSize: "0.9rem",
                    }}
                    title="Rimuovi"
                  />
                  <Image
                    src={p.general.objUrl || p.images?.[0] || "/fallback.png"}
                    rounded
                    style={{ width: 60, height: 60, objectFit: "cover" }}
                  />
                  <div className="fw-semibold mt-1" style={{ fontSize: 12 }}>{p.general.title}</div>
                </div>
              );
            })}
          </div>
        )}
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

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Seleziona prodotti correlati</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ maxHeight: "60vh", overflowY: "auto" }}>
            <input
              type="text"
              placeholder="Cerca per nome"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="mb-3 input-product w-100"
            />

            {allProducts
              .filter((p) =>
                p.general.title.toLowerCase().includes(searchTerm.toLowerCase())
              )
              .map((p) => (
                <div key={p.id} className="d-flex align-items-center gap-3 mb-4">
                  <Form.Check
                    type="checkbox"
                    checked={tempSelection.has(p.id)}
                    onChange={() => toggleTemp(p.id)}
                    style={{ transform: "scale(1.2)" }}
                  />
                  <Image
                    src={p.general.objUrl || p.images?.[0] || "/fallback.png"}
                    rounded
                    style={{ width: 50, height: 50, objectFit: "cover" }}
                  />
                  <div className="d-flex align-items-start gap-3">
                    <div className="d-flex flex-column">
                      <span style={{ fontSize: "14px" }} className="fw-semibold">
                        {p.general.title}
                      </span>
                      <span style={{ fontSize: "10px" }} className="fw-semibold">
                        {p.general.price}€
                      </span>
                    </div>
                    <span
                      style={{ fontSize: "14px", color: "gray" }}
                      className="fw-semibold"
                    >
                      {p.general.itemCode}
                    </span>
                  </div>
                </div>
              ))}
          </Modal.Body>

        <Modal.Footer>
          <Button className="bg-transparent text-black" onClick={() => setShowModal(false)}>
            Annulla
          </Button>
          <Button variant="primary" onClick={confirmSelection}>
            Conferma
          </Button>
        </Modal.Footer>
      </Modal>

    </>
  );
};

export default RelatedTab;
