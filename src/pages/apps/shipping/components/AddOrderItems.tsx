import React, { useState, ChangeEvent } from 'react';
import { Button, Modal, Form, Image, Card } from 'react-bootstrap';
import { OptionValue, Product } from '../../products/components/options/types';
import { OrderItem } from '../../orders/components/types';
import { FaRegTrashCan } from 'react-icons/fa6';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

interface TempSelection {
  productId: string;
  quantity: number;
  selectedOptions: Record<string, OptionValue>;
}

interface AddOrderItemsProps {
  allProducts: Product[];
  items: OrderItem[];
  setItems: React.Dispatch<React.SetStateAction<OrderItem[]>>;
}

const AddOrderItems: React.FC<AddOrderItemsProps> = ({ allProducts, items, setItems }) => {
  const [showModal, setShowModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentSelection, setCurrentSelection] = useState<TempSelection | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => {
    setCurrentSelection(null);
    setShowModal(true);
  };

  const confirmSelection = () => {
    if (!currentSelection) return;
    const p = allProducts.find(x => x.id === currentSelection.productId)!;
    const newItem: OrderItem = {
      productId: p.id,
      title: p.general.title,
      quantity: currentSelection.quantity,
      unitPrice: p.general.price,
      image: p.images?.[0] || '/fallback.png',
      options: Object.entries(currentSelection.selectedOptions).map(
        ([name, optVal]) => ({ name, value: optVal.name! })
      )
    };
    setItems(prev => [...prev, newItem]);
    setShowModal(false);
  };

  const removeItem = (index: number) => {
    setItems(prev => prev.filter((_, i) => i !== index));
  };

  return (
    <Card className="p-3 mt-3">
      <div
        className="d-flex justify-content-between align-items-center cursor-pointer"
        onClick={() => setIsOpen(prev => !prev)}
        style={{ cursor: 'pointer' }}
      >
        <h4
          className="m-0 fw-bold text-black"
          style={{ fontSize: '18px', userSelect: 'none' }}
        >
          Articoli
        </h4>
        {isOpen ? <FaChevronUp size={18} /> : <FaChevronDown size={18} />}
      </div>

      {isOpen && (
        <>
          {items.map((item, idx) => (
            <div
              key={idx}
              className="d-flex align-items-start justify-content-between mb-3"
              style={{ borderBottom: '1px solid #e0e0e0', paddingBottom: '12px' }}
            >
              <div className="d-flex gap-2 align-items-start">
                <img
                  src={item.image}
                  alt={item.title}
                  style={{ width: 80, height: 80, objectFit: 'cover', borderRadius: 4 }}
                />
                <div>
                  <p className="m-0 fw-semibold" style={{ fontSize: '20px' }}>
                    {item.title}
                  </p>
                  {item.options?.map((opt, i) => (
                    <p key={i} className="m-0" style={{ fontSize: 12 }}>
                      {opt.name}: <strong>{opt.value}</strong>
                    </p>
                  ))}
                </div>
              </div>

              <div className="d-flex gap-4 align-items-center">
                <p className="m-0" style={{ fontSize: '16px' }}>
                  qt: <strong>{item.quantity}</strong>
                </p>
                <p className="m-0" style={{ fontSize: '16px' }}>
                  Prezzo: <strong>€{(item.quantity * item.unitPrice).toFixed(2)}</strong>
                </p>
                <Button
                  variant="link"
                  className="p-0 text-danger"
                  onClick={() => removeItem(idx)}
                >
                  <FaRegTrashCan size={18} />
                </Button>
              </div>
            </div>
          ))}

          <div className="d-inline-flex gap-3 mt-3">
            <Button
              style={{ border: '1px solid black' }}
              className="bg-transparent text-black"
              onClick={openModal}
            >
              Aggiungi prodotto
            </Button>
          </div>
        </>
      )}

      {/* Modal prodotto */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Seleziona prodotti</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ maxHeight: '60vh', overflowY: 'auto' }}>
          {!currentSelection ? (
            <>
              <Form.Control
                type="text"
                placeholder="Cerca per nome"
                className="mb-3"
                value={searchTerm}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value)}
              />
              {allProducts
                .filter(p => p.general.title.toLowerCase().includes(searchTerm.toLowerCase()))
                .map(p => (
                  <div key={p.id} className="d-flex align-items-center mb-3">
                    <Image
                      src={p.images?.[0] || '/fallback.png'}
                      rounded
                      style={{ width: 50, height: 50 }}
                      className="me-2"
                    />
                    <div style={{ flexGrow: 1 }}>
                      <div>{p.general.title}</div>
                      <small>€{p.general.price.toFixed(2)}</small>
                    </div>
                    <Button
                      size="sm"
                      onClick={() => {
                        const initialOptions = p.options.reduce<Record<string, OptionValue>>((acc, opt) => {
                          acc[opt.name] = opt.values[0];
                          return acc;
                        }, {});
                        setCurrentSelection({ productId: p.id, quantity: 1, selectedOptions: initialOptions });
                      }}
                    >
                      Seleziona
                    </Button>
                  </div>
                ))}
            </>
          ) : (
            <div>
              <h5>{allProducts.find(x => x.id === currentSelection.productId)!.general.title}</h5>
              <Form.Group className="mt-3" style={{ maxWidth: 120 }}>
                <Form.Label>Quantità</Form.Label>
                <Form.Control
                  type="number"
                  min={1}
                  value={currentSelection.quantity}
                  onChange={e => {
                    const q = Math.max(1, Number(e.target.value));
                    setCurrentSelection(sel => (sel ? { ...sel, quantity: q } : sel));
                  }}
                />
              </Form.Group>
              {allProducts
                .find(x => x.id === currentSelection.productId)!
                .options.map(opt => (
                  <Form.Group key={opt.name} className="mt-3" style={{ maxWidth: 200 }}>
                    <Form.Label>{opt.name}</Form.Label>
                    <Form.Select
                      value={currentSelection.selectedOptions[opt.name].id}
                      onChange={e => {
                        const chosen = opt.values.find(v => v.id === +e.target.value)!;
                        setCurrentSelection(sel =>
                          sel
                            ? {
                                ...sel,
                                selectedOptions: { ...sel.selectedOptions, [opt.name]: chosen }
                              }
                            : sel
                        );
                      }}
                    >
                      {opt.values.map(v => (
                        <option key={v.id} value={v.id}>
                          {v.name || v.hex || v.id}
                        </option>
                      ))}
                    </Form.Select>
                  </Form.Group>
                ))}
            </div>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button className="bg-transparent text-black" onClick={() => setShowModal(false)}>
            Annulla
          </Button>
          <Button onClick={confirmSelection}>Conferma</Button>
        </Modal.Footer>
      </Modal>
    </Card>
  );
};

export default AddOrderItems;
