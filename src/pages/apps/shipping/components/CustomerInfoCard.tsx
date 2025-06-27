import React, { ChangeEvent, useState } from 'react';
import FloatingInput2 from '@/components/FloatingInput2';
import { CustomerInfo } from './types';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

interface CustomerInfoCardProps {
  customer: CustomerInfo;
  setCustomer: React.Dispatch<React.SetStateAction<CustomerInfo>>;
}

const CustomerInfoCard: React.FC<CustomerInfoCardProps> = ({ customer, setCustomer }) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="card p-3">
      <div
        className="d-flex justify-content-between align-items-center cursor-pointer"
        onClick={() => setIsOpen(prev => !prev)}
        style={{ cursor: 'pointer' }}
      >
        <h4 className="m-0 fw-bold text-black" style={{ fontSize: '18px', userSelect: 'none' }}>
          Informazioni sul cliente
        </h4>
        {isOpen ? <FaChevronUp size={18} /> : <FaChevronDown size={18} />}
      </div>

      {isOpen && (
        <>
        <div style={{ userSelect: 'none' }}>
          <p style={{ fontSize: '16px' }} className='m-0 mt-3 fw-bold'>Ricevitore</p>
          <p style={{ fontSize: '12px' }} className='m-0 mb-3'>Il destinatario - Chi riceverà l'ordine.</p>

          <div className="w-100 d-flex gap-3">
            <div className="w-50">
              <FloatingInput2
                placeholder="Nome"
                value={customer.name}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setCustomer(prev => ({ ...prev, name: e.target.value }))
                }
              />
            </div>
            <div className="w-50">
              <FloatingInput2
                placeholder="Ragione sociale (facoltativo)"
                value={customer.company || ''}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setCustomer(prev => ({ ...prev, company: e.target.value }))
                }
              />
            </div>
          </div>

          <div className="w-100 d-flex gap-3 mt-3">
            <div className="w-50">
              <FloatingInput2
                placeholder="Indirizzo e-mail"
                value={customer.email}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setCustomer(prev => ({ ...prev, email: e.target.value }))
                }
              />
            </div>
            <div className="w-50">
              <FloatingInput2
                placeholder="Numero di telefono"
                value={customer.phone}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setCustomer(prev => ({ ...prev, phone: e.target.value }))
                }
              />
            </div>
          </div>

          <div className="w-100 d-flex gap-3 mt-3">
            <div className="w-50">
              <FloatingInput2
                placeholder="Nome della via"
                value={customer.street}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setCustomer(prev => ({ ...prev, street: e.target.value }))
                }
              />
            </div>
            <div className="w-50">
              <FloatingInput2
                placeholder="Numero civico"
                value={customer.civicNumber}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setCustomer(prev => ({ ...prev, civicNumber: e.target.value }))
                }
              />
            </div>
          </div>

          <div className="w-100 d-flex gap-3 mt-3">
            <div className="w-50">
              <FloatingInput2
                placeholder="Indirizzo 2 / Note (facoltativo)"
                value={customer.address2 || ''}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setCustomer(prev => ({ ...prev, address2: e.target.value }))
                }
              />
            </div>
            <div className="w-50">
              <FloatingInput2
                placeholder="Codice postale"
                value={customer.postalCode}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setCustomer(prev => ({ ...prev, postalCode: e.target.value }))
                }
              />
            </div>
          </div>

          <div className="w-100 d-flex gap-3 mt-3">
            <div className="w-50">
              <FloatingInput2
                placeholder="Città"
                value={customer.city}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setCustomer(prev => ({ ...prev, city: e.target.value }))
                }
              />
            </div>
            <div className="w-50">
              <FloatingInput2
                placeholder="Paese di destinazione"
                value={customer.destinationCountry}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setCustomer(prev => ({ ...prev, destinationCountry: e.target.value }))
                }
              />
            </div>
          </div>

          <div className="w-100 d-flex gap-3 mt-3">
            <div className="w-50 pe-2">
              <FloatingInput2
                placeholder="Provincia"
                value={customer.province}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setCustomer(prev => ({ ...prev, province: e.target.value }))
                }
              />
            </div>
          </div>
          </div>
        </>
      )}
    </div>
  );
};

export { CustomerInfoCard };
