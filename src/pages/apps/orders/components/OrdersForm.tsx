
import React, { useState, ChangeEvent, useEffect } from 'react';
import { PageBreadcrumb } from "@/components";
import FloatingInput2 from "@/components/FloatingInput2";
import { Button, Form, Image, Modal } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import { Order, CustomerInfo, OrderItem, ShippingInfo } from './types';
import { FaRegTrashCan } from "react-icons/fa6";
import { OptionValue, Product } from '../../products/components/options/types';
import { useParams } from 'react-router-dom';

const STORAGE_ORDERS = 'orders_list_v1';
const STORAGE_PRODUCTS = 'products_list_v1';


interface TempSelection {
  key: string;               
  productId: string;
  quantity: number;
  selectedOptions: Record<string, OptionValue>;
}

const OrdersForm: React.FC = () => {
  const [customer, setCustomer] = useState<CustomerInfo>({
    name: '',
    email: '',
    phone: '',
    taxExempt: false,
  });
  const [items, setItems] = useState<OrderItem[]>([]);
  const [allProducts, setAllProducts] = useState<Product[]>([]);
  const { mode, slug } = useParams<{ mode: string; slug: string }>();
  const isEditMode = mode === "edit" && Boolean(slug);
  const [showProductModal, setShowProductModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentSelection, setCurrentSelection] = useState<TempSelection | null>(null);
  const [shipping, setShipping] = useState<ShippingInfo>({
    method: '',
    name: '',
    price: 0,
    address: {
      firstName: '',
      phone: '',
      country: '',
      state: '',
      city: '',
      postalCode: '',
    },
  });
  const [discount, setDiscount] = useState<number>(0);
  const navigate = useNavigate();

  const loadOrders = (): Order[] => {
    const raw = localStorage.getItem(STORAGE_ORDERS);
    return raw ? JSON.parse(raw) : [];
  };
  const saveOrders = (list: Order[]) => {
    localStorage.setItem(STORAGE_ORDERS, JSON.stringify(list));
  };


    useEffect(() => {
    const raw = localStorage.getItem(STORAGE_PRODUCTS) || "[]";
    setAllProducts(JSON.parse(raw));
    }, []);


     useEffect(() => {
      if (!isEditMode || !slug) return;
      const all = loadOrders();
      const found = all.find(o => o.id === slug);
      if (!found) {
        alert("Ordine non trovato");
        navigate("/apps/orders");
        return;
      }
      setCustomer(found.customer);
      setItems(found.items);
      setShipping(found.shipping);
      setDiscount(found.discount?.amount || 0);
    }, [isEditMode, slug, navigate]);


    const openProductModal = () => {
      setCurrentSelection(null);
      setShowProductModal(true);
    };


  

        const confirmProductSelection = () => {
          if (!currentSelection) return;
          const p = allProducts.find(x => x.id === currentSelection.productId)!;
          const newItem: OrderItem = {
            productId: currentSelection.productId,
            title: p.general.title,
            quantity: currentSelection.quantity,
            unitPrice: p.general.price,
            image: p.images?.[0] || "/fallback.png",
            options: Object.entries(currentSelection.selectedOptions).map(
              ([name, optVal]) => ({ name, value: optVal.name! })
            )
          };
          setItems(prev => [...prev, newItem]);
          setShowProductModal(false);
        };




  const subtotal = items.reduce((sum, i) => sum + i.quantity * i.unitPrice, 0);
  const total = subtotal + shipping.price - discount;

  const saveOrder = () => {
    const newOrder: Order = {
      id: isEditMode && slug ? slug : Date.now().toString(),
      createdAt: isEditMode && slug
        ? loadOrders().find(o => o.id === slug)!.createdAt
        : new Date().toISOString(),
      customer,
      items,
      shipping,
      ...(discount > 0 ? { discount: { amount: discount } } : {}),
    };
    const all = loadOrders();
    const updated = isEditMode
      ? all.map(o => (o.id === newOrder.id ? newOrder : o))
      : [newOrder, ...all];

    saveOrders(updated);
    alert(isEditMode ? "Ordine modificato!" : "Ordine creato!");
    navigate("/apps/orders");
  };


  return (
    <>
      <PageBreadcrumb subName="Apps" title={isEditMode ?"Modifica Ordine" : "Crea Ordine"} />

      <div className="w-100 d-flex align-items-start gap-3">
        {/* Left side */}
        <div style={{ width: "70%" }}>
          {/* Cliente */}
          <div className="card p-3">
            <h4 className="m-0 mb-2 fw-bold text-black" style={{ fontSize: "18px" }}>Cliente</h4>
            <FloatingInput2
              placeholder="Nome"
              value={customer.name}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setCustomer({ ...customer, name: e.target.value })
              }
            />
            <div className="w.100 d-flex mt-2 gap-2">
              <div className="w-50">
                <FloatingInput2
                  placeholder="Indirizzo e-mail"
                  value={customer.email}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setCustomer({ ...customer, email: e.target.value })
                  }
                />
              </div>
              <div className="w-50">
                <FloatingInput2
                  placeholder="Numero di telefono"
                  value={customer.phone}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setCustomer({ ...customer, phone: e.target.value })
                  }
                />
              </div>
            </div>
            <p className="mt-3 fw-bold mb-0">
              <Form.Check
                type="checkbox"
                label="Contrassegna l'ordine del cliente come esente da tasse"
                checked={customer.taxExempt}
                onChange={() =>
                  setCustomer({ ...customer, taxExempt: !customer.taxExempt })
                }
              />
            </p>
          </div>

          {/* Articoli ordine */}
          <div className="card p-3 mt-3">
              <h4 className="m-0 mb-4 fw-bold text-black" style={{ fontSize: "18px" }}>
                Articoli ordine
              </h4>

              {items.map((item, idx) => (
                <div
                  key={idx}
                  className="d-flex align-items-start justify-content-between mb-3"
                  style={{
                    borderBottom: "1px solid #e0e0e0",
                    paddingBottom: "12px",
                  }}
                >
                  {/* SX: immagine e dettagli */}
                  <div className="w-100 d-inline-flex justify-content-between align-items-start gap-2">
                    <div className='d-flex gap-2 align-items-start'>
                      <img
                        src={item.image}
                        alt={item.title}
                        style={{
                          width: 80,
                          height: 80,
                          objectFit: "cover",
                          borderRadius: 4,
                        }}
                      />
                      <div style={{bottom: "6px"}} className='position-relative'>
                        <p style={{fontSize: "20px"}} className="m-0 fw-semibold">{item.title}</p>
                        {item.options?.map((opt, i) => (
                          <p key={i} className="m-0" style={{ fontSize: 12 }}>
                            {opt.name}: <strong>{opt.value}</strong>
                          </p>
                        ))}
                      </div>
                    </div>

                    <div className='d-flex gap-4 position-relative' style={{ bottom: "6px" }}>
                      <p className="m-0 " style={{ fontSize: "16px"}}>
                        qt: <strong>{item.quantity}</strong>
                      </p>
                      <p className='m-0' style={{ fontSize: "16px"}}>
                       Prezzo: <strong>€{(item.quantity * item.unitPrice).toFixed(2)}</strong>
                      </p>
                      <Button
                        variant="link"
                        className="p-0 text-danger"
                        onClick={() => {
                          setItems(prev => prev.filter((_, i) => i !== idx));
                        }}
                      >
                        <FaRegTrashCan size={18} />
                      </Button>
                    </div>
                   </div>
                </div>
              ))}

              <div className="d-inline-flex gap-3 mt-3">
                <Button
                  style={{ border: "1px solid black" }}
                  className="bg-transparent text-black"
                  onClick={openProductModal}
                >
                  Aggiungi prodotto
                </Button>
              </div>
            </div>

          {/* Spedizione */}
          <div className="card p-3 mt-3">
            <h4 className="m-0 mb-2 fw-bold text-black" style={{ fontSize: "18px" }}>Spedizione e consegna</h4>
            <div className="w.100 d-flex mt-0 gap-2">
              <div className="w-50">
                <FloatingInput2
                  placeholder="Metodo"
                  value={shipping.method}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setShipping({ ...shipping, method: e.target.value })
                  }
                />
                <div className="mt-2">
                  <FloatingInput2
                    placeholder="Nome spedizione"
                    value={shipping.name}
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                      setShipping({ ...shipping, name: e.target.value })
                    }
                  />
                </div>
              </div>
              <div className="w-50">
                <FloatingInput2
                  placeholder="Price"
                  value={shipping.price.toString()}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setShipping({ ...shipping, price: Number(e.target.value) })
                  }
                />
              </div>
            </div>
            <p className="mb-1 mt-4 fw-bold">Indirizzo</p>
            <div className="w.100 d-flex mt-0 gap-2">
              <div className="w-50">
                <FloatingInput2
                  placeholder="Nome"
                  value={shipping.address.firstName}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setShipping({
                      ...shipping,
                      address: { ...shipping.address, firstName: e.target.value },
                    })
                  }
                />
              </div>
              <div className="w-50">
                <FloatingInput2
                  placeholder="Numero telefonico"
                  value={shipping.address.phone}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setShipping({
                      ...shipping,
                      address: { ...shipping.address, phone: e.target.value },
                    })
                  }
                />
              </div>
            </div>
            <div className="w.100 d-flex mt-2 gap-2">
              <div className="w-50">
                <FloatingInput2
                  placeholder="Paese"
                  value={shipping.address.country}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setShipping({
                      ...shipping,
                      address: { ...shipping.address, country: e.target.value },
                    })
                  }
                />
              </div>
              <div className="w-50">
                <FloatingInput2
                  placeholder="Stato"
                  value={shipping.address.state}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setShipping({
                      ...shipping,
                      address: { ...shipping.address, state: e.target.value },
                    })
                  }
                />
              </div>
            </div>
            <div className="w.100 d-flex mt-2 gap-2">
              <div className="w-50">
                <FloatingInput2
                  placeholder="Città"
                  value={shipping.address.city}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setShipping({
                      ...shipping,
                      address: { ...shipping.address, city: e.target.value },
                    })
                  }
                />
              </div>
              <div className="w-50">
                <FloatingInput2
                  placeholder="Codice postale"
                  value={shipping.address.postalCode}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setShipping({
                      ...shipping,
                      address: { ...shipping.address, postalCode: e.target.value },
                    })
                  }
                />
              </div>
            </div>
          </div>

          {/* Sconti e supplementi */}
          <div className="card p-3 mt-3">
            <h4 className="m-0 mb-4 fw-bold text-black" style={{ fontSize: "18px" }}>Sconti e supplementi</h4>
            <div style={{ width: "300px" }}>
              <FloatingInput2
                placeholder="Sconto, €"
                value={discount.toString()}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setDiscount(Number(e.target.value))
                }
              />
            </div>
          </div>
        </div>

        {/* Right side: Riepilogo */}
        <div style={{ width: "30%", position: "sticky", top: "80px", alignSelf: "flex-start" }}>
          <div style={{ position: "sticky", top: "0px" }} className="card p-3">
            <h4 className="m-0 fw-bold text-black" style={{ fontSize: "18px" }}>Riepilogo</h4>

            <div className="borderBottomGray pb-2 mt-4">
              <div className="d-flex justify-content-between">
                <p className="fw-semibold m-0">Subtotale</p>
                <p className="fw-semibold m-0">€{subtotal.toFixed(2)}</p>
              </div>
              <p style={{ color: "#607385" }}>{items.length} articoli</p>
            </div>

            <div className="mt-3 d-flex justify-content-between">
              <h5 className="fw-bold">Totale</h5>
              <p className="fw-semibold">€{total.toFixed(2)}</p>
            </div>

            <Button className="mt-2" onClick={saveOrder}>
              {isEditMode ? "Modifica ordine" : "Crea ordine"}
            </Button>
          </div>
        </div>
      </div>


      <Modal show={showProductModal} onHide={() => setShowProductModal(false)}>
        <Modal.Header closeButton><Modal.Title>Seleziona prodotti</Modal.Title></Modal.Header>
        <Modal.Body style={{ maxHeight: '60vh', overflowY: 'auto' }}>
          {!currentSelection ? (
            <>
              <Form.Control
                type="text"
                placeholder="Cerca per nome"
                className="mb-3"
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
              />
              {allProducts
                .filter(p => p.general.title.toLowerCase().includes(searchTerm.toLowerCase()))
                .map(p => (
                  <div key={p.id} className="d-flex align-items-center mb-3">
                    <Image
                      src={p.images?.[0] || "/fallback.png"}
                      rounded
                      style={{ width: 50, height: 50 }}
                      className="me-2"
                    />
                    <div style={{ flexGrow: 1 }}>
                      <div>{p.general.title}</div>
                      <small>€{p.general.price.toFixed(2)}</small>
                    </div>
                    <Button size="sm" onClick={() => {
                      // inizializza la selezione
                      const initialOptions = p.options.reduce<Record<string, OptionValue>>((acc, opt) => {
                        acc[opt.name] = opt.values[0];
                        return acc;
                      }, {});
                      setCurrentSelection({
                        key: `${p.id}_${Date.now()}`,
                        productId: p.id,
                        quantity: 1,
                        selectedOptions: initialOptions
                      });
                    }}>
                      Seleziona
                    </Button>
                  </div>
              ))}
            </>
          ) : (
            // configurazione del solo prodotto corrente
            (() => {
              const p = allProducts.find(x => x.id === currentSelection.productId)!;
              return (
                <div>
                  <h5>{p.general.title}</h5>
                  {/* Quantità */}
                  <Form.Group className="mt-3" style={{ maxWidth: 120 }}>
                    <Form.Label>Quantità</Form.Label>
                    <Form.Control
                      type="number"
                      min={1}
                      value={currentSelection.quantity}
                      onChange={e => {
                        const q = Math.max(1, Number(e.target.value));
                        setCurrentSelection(sel => sel && { ...sel, quantity: q });
                      }}
                    />
                  </Form.Group>
                  {/* Opzioni */}
                  {p.options.map(opt => (
                    <Form.Group key={opt.name} className="mt-3" style={{ maxWidth: 200 }}>
                      <Form.Label>{opt.name}</Form.Label>
                      <Form.Select
                        value={currentSelection.selectedOptions[opt.name].id}
                        onChange={e => {
                          const chosen = opt.values.find(v => v.id === +e.target.value)!;
                          setCurrentSelection(sel => sel && {
                            ...sel,
                            selectedOptions: {
                              ...sel.selectedOptions,
                              [opt.name]: chosen
                            }
                          });
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
              );
            })()
          )}
        </Modal.Body>

        <Modal.Footer>
            <Button className='bg-transparent text-black' onClick={() => setShowProductModal(false)}>Annulla</Button>
            <Button onClick={confirmProductSelection}>Conferma</Button>
        </Modal.Footer>
        </Modal>

    </>
  );
};

export default OrdersForm;
