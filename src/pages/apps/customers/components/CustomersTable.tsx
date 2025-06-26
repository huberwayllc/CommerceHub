// src/apps/customers/components/CustomersTable.tsx
import React, { useState } from 'react';
import { Table, Button, Form, Dropdown } from 'react-bootstrap';
import { FaChevronRight, FaChevronDown } from 'react-icons/fa';
import { IoIosArrowDown } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import { CustomerInfo } from '../components/types';

interface CustomersTableProps {
  customers: CustomerInfo[];
}

const CustomersTable: React.FC<CustomersTableProps> = ({ customers }) => {
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [selectAll, setSelectAll] = useState(false);
  const navigate = useNavigate();

  const toggleSelectAll = () => {
    setSelected(selectAll ? new Set() : new Set(customers.map(c => c.id)));
    setSelectAll(!selectAll);
  };

  const toggleSelect = (id: string) => {
    const copy = new Set(selected);
    copy.has(id) ? copy.delete(id) : copy.add(id);
    setSelected(copy);
  };

  return (
    <div>
      {/* Azioni di massa */}
      <div className="mb-4 d-flex align-items-center gap-3">
        <div style={{ border: "1px solid #171f2c" }}
             className="d-flex align-items-center gap-3 p-1 px-2 rounded-2 bg-white boxShadow">
          <Form.Check
            type="checkbox"
            className="m-0"
            checked={selectAll}
            onChange={toggleSelectAll}
          />
          <FaChevronDown />
        </div>

        <Dropdown>
          <Dropdown.Toggle style={{ height: '33px', fontSize: "11px" }}
                           className="fw-semibold text-black bg-white d-flex align-items-center gap-1 boxShadow">
            Aggiornamento di massa <FaChevronDown className='ms-2' />
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item className='fw-semibold' style={{ height: "40px" }}>
              Esporta clienti selezionati
            </Dropdown.Item>
            <Dropdown.Item className='fw-semibold' style={{ height: "40px" }}>
              Elimina clienti selezionati
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>

      {/* Tabella */}
      <div style={{ overflowX: "auto" }}>
        <Table hover className="custom-table">
          <tbody>
            {customers.map((c) => (
              <tr key={c.id}>
                <td>
                  <Form.Check
                    type="checkbox"
                    className="big-checkbox m-0 "
                    style={{ position: 'relative', bottom: '2px' }}
                    checked={selected.has(c.id)}
                    onChange={() => toggleSelect(c.id)}
                  />
                </td>
                <td>
                  <div className='d-flex flex-column'>
                    <strong>{c.name}</strong>
                    <p className='m-0 mt-2 colorPrimary fw-semibold'>{c.email}</p>
                    <p className='m-0'>{c.phone || '-'}</p>
                  </div>
                </td>

                <td className="text-end">
                  <Button
                    variant="outline-primary"
                    size="sm"
                    onClick={() => navigate(`/apps/customers/edit/${c.id}`)}
                  >
                    Modifica
                  </Button>
                  <Button
                    variant="link"
                    onClick={() => navigate(`/apps/customers/edit/${c.id}`)}
                  >
                    <FaChevronRight />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>

      <div className="text-end">
        <small>{customers.length} clienti</small>
      </div>
    </div>
  );
};

export default CustomersTable;
