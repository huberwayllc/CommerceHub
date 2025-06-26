
import React, { useState, ChangeEvent, useEffect } from 'react';
import { PageBreadcrumb } from "@/components";
import FloatingInput2 from "@/components/FloatingInput2";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { Order, CustomerInfo, OrderItem, ShippingInfo } from '../orders/components/types';

const STORAGE_ORDERS = 'orders_list_v1';




const CustomersForm: React.FC = () => {
  const [customer, setCustomer] = useState<CustomerInfo>({
    name: '',
    email: '',
    phone: '',
    taxExempt: false,
  });
  const [items, setItems] = useState<OrderItem[]>([]);
  const { mode, slug } = useParams<{ mode: string; slug: string }>();
  const isEditMode = mode === "edit" && Boolean(slug);
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
      <PageBreadcrumb subName="Apps" title={isEditMode ?"MOdifica cliente" : "Aggiungi nuovo cliente"} />

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

            <Button className="mt-2" onClick={saveOrder}>
              {isEditMode ? "Modifica ordine" : "Crea ordine"}
            </Button>
          </div>
        </div>
      </div>


    </>
  );
};

export default CustomersForm;
