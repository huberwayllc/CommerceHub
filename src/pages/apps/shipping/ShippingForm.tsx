
import React, { useState, useEffect } from 'react';
import { PageBreadcrumb } from "@/components";
import { Button } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { Product } from '../products/components/options/types';
import { Order, OrderItem } from '../orders/components/types';
import AddOrderItems from './components/AddOrderItems';
import { CustomerInfoCard } from './components/CustomerInfoCard';
import { FaArrowRight } from "react-icons/fa6";
import { CustomerInfo, defaultCustomerInfo, defaultShippingInfo, Shipment, ShippingInfo } from './components/types';
import ShippingDetailsForm from './components/ShippingDetailsForm';
import ShippingMethod from './components/ShippingMethod';
import CourierContract from './components/CourierContract';
import HuberwayProtection from './components/HuberwayProtection';

const STORAGE_ORDERS = 'orders_list_v1';
const STORAGE_PRODUCTS = 'products_list_v1';
const STORAGE_SHIPMENTS = 'shipments_list_v1';

const ShippingForm: React.FC = () => {

  const [items, setItems] = useState<OrderItem[]>([]);
  const [allProducts, setAllProducts] = useState<Product[]>([]);
  const { mode, slug } = useParams<{ mode: string; slug: string }>();
  const isEditMode = mode === "edit" && Boolean(slug);
  const [customer, setCustomer] = useState<CustomerInfo>(defaultCustomerInfo);
  const [shipping, setShipping] = useState<ShippingInfo>(defaultShippingInfo);
  const [discount, setDiscount] = useState<number>(0);
  const navigate = useNavigate();

  const loadOrders = (): Order[] => {
    const raw = localStorage.getItem(STORAGE_ORDERS);
    return raw ? JSON.parse(raw) : [];
  };

  const createShipment = () => {
  const newShipment: Shipment = {
    id: Date.now().toString(),
    createdAt: new Date().toISOString(),
    customer,
    shipping,
    items,
    total,
  };

  const all = loadShipments();
  const updated = [newShipment, ...all];
  saveShipments(updated);
  navigate("/apps/shipments");
  alert("Spedizione creata!");
};


  const loadShipments = (): Shipment[] => {
  const raw = localStorage.getItem(STORAGE_SHIPMENTS);
  return raw ? JSON.parse(raw) : [];
};

const saveShipments = (list: Shipment[]) => {
  localStorage.setItem(STORAGE_SHIPMENTS, JSON.stringify(list));
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
  setCustomer({
    ...defaultCustomerInfo,
    ...found.customer,
  });
  setItems(found.items);
  setShipping({
    ...found.shipping,
    address: {
      address: (found.shipping.address as any).address || (found.shipping.address as any).street || "",
      phone: found.shipping.address.phone,
      country: found.shipping.address.country,
      state: found.shipping.address.state,
      city: found.shipping.address.city,
      postalCode: found.shipping.address.postalCode,
    },
  });
  setDiscount(found.discount?.amount || 0);
}, [isEditMode, slug, navigate]);


const subtotal = items.reduce((sum, i) => sum + i.quantity * i.unitPrice, 0);
const total = subtotal + shipping.price - discount;

  return (
    <>
      <PageBreadcrumb subName="Apps" title={isEditMode ?"Modifica spedizione" : "Crea nuova spedizione"} />

      <div className="w-100 d-flex align-items-start gap-3">
        {/* Left side */}
        <div style={{ width: "70%" }}>
          <CustomerInfoCard customer={customer} setCustomer={setCustomer} />

          <ShippingDetailsForm shipping={shipping} setShipping={setShipping} />

          <AddOrderItems
            allProducts={allProducts}
            items={items}
            setItems={setItems}
          />

        <ShippingMethod />
        <CourierContract />
        <HuberwayProtection />


        </div>


      {/* Right side: Riepilogo */}
      <div style={{ width: "30%", position: "sticky", top: "80px", alignSelf: "flex-start" }}>
        <div className="card p-3">
          <h4 className="m-0 fw-bold text-black" style={{ fontSize: "18px" }}>Riepilogo</h4>
            <div className='mt-3'>
            <p className='m-0 px-3' style={{color: "#686868", fontSize: "14px"}}>NUMERO ORDINE</p>
            <p className='m-0 px-3'>-</p>

            <div className='backgroundGray p-2 px-3 rounded-2 mt-2'>
              <p style={{color: "#4d5e81"}} className='m-0 mb-1'>Indirizzo sull'etichetta</p>
              <p style={{fontSize: "13px"}} className='fw-bold m-0'>Huberway di Gennaro Ereditata, Via Taormina 8, 80022, Napoli</p>
            </div>

            <p style={{color: "#4d5e81"}} className='m-0 mt-2 mb-1 px-3'>Indirizzo di destinazione</p>
            <p className='m-0 px-3'>-</p>

              <div className='backgroundGray p-2 px-3 rounded-2 mt-2'>
              <p style={{color: "#4d5e81"}} className='m-0 mb-1'>Metodo di spedizione</p>
              <p style={{fontSize: "13px"}} className='fw-bold m-0'>Cose a caso</p>
            </div>

            <p style={{color: "#4d5e81"}} className='m-0 mt-2 mb-1 px-3'>Numero di colli</p>
            <p className='m-0 px-3 fw-semibold'>1</p>

            <hr style={{ backgroundColor: '#1E293B', height: '3px', border: 'none' }} />

            <p style={{color: "#4d5e81"}} className='m-0 mt-2 mb-1 px-3'>Prezzi totali indicativi</p>
            <div className='d-flex justify-content-between align-items-center gap-3 px-3'>
              <div className='w-50 d-flex align-items-center gap-1'>
                <div>
                  <FaArrowRight style={{fontSize: "20px"}}/>
                </div> 
                <p style={{fontSize: "18px"}} className='m-0 fw-semibold'>Etichetta in uscita</p>
              </div>
              <div className='w-50 d-flex justify-content-end'>
                <p style={{fontSize: "16px"}}  className='m-0 fw-semibold'>0,00 €</p>
              </div>
            </div>
            </div>
        </div>

        <div className='card p-3'>
          <div className='d-flex align.items-center gap-3'>
            <Button className="mt-2" onClick={() => {     
              createShipment(); 
            }}>
              Crea etichetta
            </Button>
            <Button className="mt-2 bg-transparent text-black">
              Annulla
            </Button>
          </div>
      
        </div>
      </div>
      </div>

    </>
  );
};

export default ShippingForm;
