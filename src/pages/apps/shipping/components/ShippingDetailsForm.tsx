// components/ShippingDetailsForm.tsx
import React, { useState, ChangeEvent } from "react";
import FloatingInput2 from "@/components/FloatingInput2";
import { ShippingInfo } from "./types";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

interface Props {
  shipping: ShippingInfo;
  setShipping: (s: ShippingInfo) => void;
}

const ShippingDetailsForm: React.FC<Props> = ({ shipping, setShipping }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleChange = (field: keyof ShippingInfo) => (e: ChangeEvent<HTMLInputElement>) => {
    setShipping({ ...shipping, [field]: e.target.value });
  };

  return (
    <div className='card p-3'>
      <div
        className="d-flex justify-content-between align-items-center cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
        style={{ cursor: "pointer" }}
      >
        <h4 className="m-0 fw-bold text-black" style={{ fontSize: "18px", userSelect: 'none' }}>
          Dettagli spedizione
        </h4>
        {isOpen ? <FaChevronUp size={18} /> : <FaChevronDown size={18} />}
      </div>

      {isOpen && (
        <>
        <div style={{ userSelect: 'none' }}>
          <div className="w-100 d-flex mt-3 gap-3">
            <div className="d-flex w-50 gap-3">
              <FloatingInput2
                placeholder="Numero di colli"
                type='number'
                value={shipping.parcels !== undefined ? String(shipping.parcels) : ''}
                onChange={e => setShipping({ ...shipping, parcels: e.target.value === '' ? undefined : Number(e.target.value) })}
              />
              <FloatingInput2
                placeholder="Peso del pacco (kg)"
                type='number'
                value={shipping.weight !== undefined ? String(shipping.weight) : ''}
                onChange={(e) => setShipping({ ...shipping, weight: Number(e.target.value) })}
              />
            </div>
            <div className='w-50'>
              <FloatingInput2
                placeholder="Numero ordine (facoltativo)"
                type='text'
                value={shipping.orderNumber || ''}
                onChange={(e) => setShipping({ ...shipping, orderNumber: e.target.value })}
              />
            </div>
          </div>

          <div className="w-100 d-flex mt-3 gap-3">
            <div className='w-50'>
              <FloatingInput2
                placeholder="Scatola"
                type='text'
                value={shipping.boxType || ''}
                onChange={(e) => setShipping({ ...shipping, boxType: e.target.value })}
              />
            </div>
            <div className='w-50 d-flex gap-3'>
              <FloatingInput2
                placeholder="Altezza (cm)"
                type='number'
                value={shipping.height !== undefined ? String(shipping.height) : ''}
                onChange={(e) => setShipping({ ...shipping, height: Number(e.target.value) })}
              />
              <FloatingInput2
                placeholder="Lunghezza (cm)"
                type='number'
                value={shipping.length !== undefined ? String(shipping.length) : ''}
                onChange={(e) => setShipping({ ...shipping, length: Number(e.target.value) })}
              />
              <FloatingInput2
                placeholder="Larghezza (cm)"
                type='number'
                value={shipping.width !== undefined ? String(shipping.width) : ''}
                onChange={(e) => setShipping({ ...shipping, width: Number(e.target.value) })}
              />
            </div>
          </div>

          </div>
        </>
      )}
    </div>
  );
};

export default ShippingDetailsForm;
