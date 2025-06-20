
import React, { useState, ChangeEvent, useEffect } from 'react';
import { PageBreadcrumb } from "@/components";
import FloatingInput2 from "@/components/FloatingInput2";
import { Button, Form, Image, Modal } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import { Order, CustomerInfo, OrderItem, ShippingInfo } from './types';
import { Product } from '../../products/components/options/types';

const STORAGE_ORDERS = 'orders_list_v1';
const STORAGE_PRODUCTS = 'products_list_v1';

const OrdersForm: React.FC = () => {
  const [customer, setCustomer] = useState<CustomerInfo>({
    name: '',
    email: '',
    phone: '',
    taxExempt: false,
  });
  const [items, setItems] = useState<OrderItem[]>([]);
  const [allProducts, setAllProducts] = useState<Product[]>([]);
  const [showProductModal, setShowProductModal] = useState(false);
  const [tempSelection, setTempSelection] = useState<Set<string>>(new Set());
  const [searchTerm, setSearchTerm] = useState("");
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

  const addDummyItem = () => {
    const next: OrderItem = {
      productId: `prod-${Date.now()}`,
      title: 'Articolo di esempio',
      quantity: 1,
      unitPrice: 10,
    };
    setItems([...items, next]);
  };

    useEffect(() => {
    const raw = localStorage.getItem(STORAGE_PRODUCTS) || "[]";
    setAllProducts(JSON.parse(raw));
    }, []);


    const openProductModal = () => {
        setTempSelection(new Set(items.map(i => i.productId)));
        setShowProductModal(true);
        };
        const toggleTemp = (id: string) => {
        const next = new Set(tempSelection);
        next.has(id) ? next.delete(id) : next.add(id);
        setTempSelection(next);
        };
        const confirmProductSelection = () => {
        const nextItems = Array.from(tempSelection).map(pid => {
            const p = allProducts.find(x => x.id === pid)!;
            return { productId: pid, title: p.general.title, quantity: 1, unitPrice: p.general.price };
        });
        setItems(nextItems);
        setShowProductModal(false);
        };


  const subtotal = items.reduce((sum, i) => sum + i.quantity * i.unitPrice, 0);
  const total = subtotal + shipping.price - discount;

  const createOrder = () => {
    const newOrder: Order = {
      id: Date.now().toString(),
      createdAt: new Date().toISOString(),
      customer,
      items,
      shipping,
      ...(discount > 0 ? { discount: { amount: discount } } : {}),
    };
    saveOrders([newOrder, ...loadOrders()]);
    alert('Ordine creato con ID: ' + newOrder.id);
    navigate("/apps/orders")
  };

  return (
    <>
      <PageBreadcrumb subName="Apps" title="Crea Ordine" />

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
            <h4 className="m-0 mb-4 fw-bold text-black" style={{ fontSize: "18px" }}>Articoli ordine</h4>
            <ul className="mt-2">
                {items.map(i => (
                    <li key={i.productId}>
                    {i.title} — {i.quantity}×{i.unitPrice.toFixed(2)}€
                    </li>
                ))}
                </ul>
            <div className="d-inline-flex gap-3">
              <Button
                style={{ border: "1px solid black" }}
                className="bg-transparent text-black"
                onClick={openProductModal}
                >
                Seleziona prodotti
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
        <div style={{ width: "30%" }}>
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

            <Button className="mt-2" onClick={createOrder}>Crea ordine</Button>
          </div>
        </div>
      </div>


      <Modal show={showProductModal} onHide={() => setShowProductModal(false)}>
        <Modal.Header closeButton><Modal.Title>Seleziona prodotti</Modal.Title></Modal.Header>
        <Modal.Body style={{ maxHeight: '60vh', overflowY: 'auto' }}>
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
                <Form.Check
                    className="me-2"
                    checked={tempSelection.has(p.id)}
                    onChange={() => toggleTemp(p.id)}
                />
                <Image
                    src={p.images?.[0] || "/fallback.png"}
                    rounded
                    style={{ width: 40, height: 40, objectFit: "cover" }}
                    className="me-2"
                />
                <div>
                    <div>{p.general.title}</div>
                    <small>{p.general.price.toFixed(2)}€</small>
                </div>
                </div>
            ))
            }
        </Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowProductModal(false)}>Annulla</Button>
            <Button onClick={confirmProductSelection}>Conferma</Button>
        </Modal.Footer>
        </Modal>

    </>
  );
};

export default OrdersForm;
