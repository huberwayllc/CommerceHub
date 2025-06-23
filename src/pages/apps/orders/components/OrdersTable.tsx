import React, { useState } from 'react';
import { Table, Button, Form, Dropdown } from 'react-bootstrap';
import { FaChevronRight, FaChevronDown } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { Order } from './types';
import { IoIosArrowDown } from "react-icons/io";

interface OrdersTableProps {
  orders: Order[];
}


const OrderTable: React.FC<OrdersTableProps> = ({ orders }) => {
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [selectAll, setSelectAll] = useState(false);
  const navigate = useNavigate();

const toggleSelectAll = () => {
  setSelected(selectAll ? new Set() : new Set(orders.map(p => p.id)));
  setSelectAll(!selectAll);
};

const toggleSelect = (id: string) => {
  const newSet = new Set(selected);
  newSet.has(id) ? newSet.delete(id) : newSet.add(id);
  setSelected(newSet);
};

const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Mese parte da 0
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
};

const getOrderTotal = (order: Order): number => {
  const itemsTotal = order.items.reduce((sum, item) => {
    return sum + item.unitPrice * item.quantity;
  }, 0);
  const shippingCost = order.shipping?.price || 0;
  return itemsTotal + shippingCost;
};


  return (
    <div>
      <div className="mb-4 d-flex align-items-center gap-3">
        <div style={{border: "1px solid #171f2c"}} 
        className="d-flex align-items-center gap-3 p-1 px-2 rounded-2 bg-white border-0 boxShadow">
          <Form.Check
            type="checkbox"
            className="big-checkbox m-0 "
            style={{ position: 'relative', bottom: '2px' }}
            checked={selectAll}
            onChange={toggleSelectAll}
          />
          <FaChevronDown />
        </div>
                <Dropdown>
                    <Dropdown.Toggle style={{ height: '33px', fontSize: "11px" }} 
          className="fw-semibold text-black bg-white text-black d-flex align-items-center gap-1 border-0 boxShadow">
            <div className='d-flex align-items-center'>
              aggiornamento di massa 
              <FaChevronDown className='ms-2'/>
            </div>

                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item className='fw-semibold' style={{height: "40px"}} href="#importa">Stampa selezionato</Dropdown.Item>
                        <Dropdown.Item className='fw-semibold' style={{height: "40px"}} href="#esporta">Modifica lo stato di pagamento per gli ordini selezioani</Dropdown.Item>
                        <Dropdown.Item className='fw-semibold' style={{height: "40px"}} href="#esporta">Modifica lo stato di evasione per gli ordini selezionati</Dropdown.Item>
                        <Dropdown.Item className='fw-semibold' style={{height: "40px"}} href="#esporta">Esporta</Dropdown.Item>
                        <Dropdown.Item className='fw-semibold' style={{height: "40px"}} href="#esporta">Cancella i selezionati</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
        <div>
            <p style={{fontSize: "12px"}} className='mb-0 fw-semibold'>VISUALIZZANDO TUTTI GLI ORDINI<span style={{color: "#275ce0", fontWeight: "600", cursor: "pointer"}}> RICARICA</span></p>
        </div>
      </div>

       <Table hover className="custom-table">
        <tbody>
          {orders.map((order, index) => (
            <tr key={order.id}>
              {/* Checkbox */}
              <td style={{ width: 40 }}>
                <Form.Check
                  type="checkbox"
                  checked={selected.has(order.id)}
                  onChange={() => toggleSelect(order.id)}
                  className="big-checkbox"
                />
              </td>

              <td>
                <div className='d-flex align-items-center gap-3'>
                  <h4 style={{fontSize: "18px"}} className='m-0'>#{index +1}</h4>
                  <h4 style={{color: "#607385", fontSize: "18px"}} className='m-0 fw-normal'>{formatDate(order.createdAt)}</h4>
                </div>
                <div className='mt-2 d-flex align-items-center gap-3'>
                  <div className='d-flex align-items-center gap-1'>
                    <p className='fw-bold m-0' style={{color: "#f9a650"}}>In attesa del pagamento</p>
                    <IoIosArrowDown style={{color: "#f9a650", fontSize: "14px"}}/>
                  </div>
                   <div className='d-flex align-items-center gap-1'>
                    <p className='colorPrimary fw-bold m-0'>In attesa di elaborazione</p>
                    <IoIosArrowDown style={{fontSize: "14px"}} className='colorPrimary'/>
                   </div>
                  
                </div>
                <div className="mt-2  gap-3">
                  <div className='d-flex align-items-center gap-2'>
                    <p className='fw-semibold m-0' style={{fontSize: "12px"}}>{order.customer.name}</p>
                    <p style={{fontSize: "12px"}} className='colorPrimary fw-semibold m-0'>{order.customer.email}</p>
                  </div>
                  {order.customer.phone &&<p style={{fontSize: "12px"}} className='fw-semibold m-0'>Telefono: {order.customer.phone}</p>}
                </div>
               <div className="mt-3 d-flex flex-column gap-2">
                  {order.items.map((item, idx) => (
                    <div key={idx} className="d-flex align-items-start gap-2">
                      <div>
                        <img
                          style={{ width: '36px' }}
                          src={item.image}
                          alt={item.title}
                        />
                      </div>
                      <div style={{ bottom: '4px' }} className="position-relative">
                        <p style={{ fontSize: '12px' }} className="m-0 fw-bold">{item.title}</p>
                        <p style={{ fontSize: '12px' }} className="m-0">{item.quantity} x €{item.unitPrice}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </td>

              {/* Prezzo */}
              <td style={{ width: 100 }} className="text-end">
                <p className="mb-0 fw-bold fs-5">
                  € {getOrderTotal(order).toFixed(2)}
                </p>
              </td>

              {/* Bottone Modifica */}
              <td style={{ width: 130 }} className="text-end">
                <Button
                  variant="outline-primary"
                  onClick={() => navigate(`/apps/orders/edit/${order.id}`)}
                >
                Aggiorna
                </Button>
              </td>

              {/* Freccia per dettaglio/edit */}
              <td style={{ width: 60 }} className="text-end">
                <Button
                  variant="link"
                  onClick={() => navigate(`/apps/orders/edit/${order.id}`)}
                >
                  <FaChevronRight />
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <div className="text-end">
        Elementi
      </div>
    </div>
  );
};

export default OrderTable;
