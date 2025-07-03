// src/apps/boxes/components/BoxesTable.tsx
import React, { useState } from 'react';
import { Table, Button, Form, Dropdown } from 'react-bootstrap';
import { FaChevronRight, FaChevronDown } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { Box } from './types';

interface BoxesTableProps {
  boxes: Box[];
  onEdit?: (box: Box) => void;
}

const BoxesTable: React.FC<BoxesTableProps> = ({ boxes, onEdit }) => {
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [selectAll, setSelectAll] = useState(false);
  const navigate = useNavigate();

  const toggleSelectAll = () => {
    setSelected(selectAll ? new Set() : new Set(boxes.map(b => b.id)));
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
             className="d-flex align-items-center gap-3 border-0 p-1 px-2 rounded-2 bg-white boxShadow">
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
                           className="fw-semibold text-black bg-white d-flex border-0 align-items-center gap-1 boxShadow">
            Aggiornamento di massa <FaChevronDown className='ms-2' />
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item className='fw-semibold' style={{ height: "40px" }}>
              Esporta scatole selezionate
            </Dropdown.Item>
            <Dropdown.Item className='fw-semibold' style={{ height: "40px" }}>
              Elimina scatole selezionate
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>

      {/* Tabella Scatole */}
      <div style={{ overflowX: "auto" }}>
        <Table hover className="custom-table">
          <tbody>
            {boxes.map((b) => (
              <tr key={b.id}>
                <td>
                  <Form.Check
                    type="checkbox"
                    className="m-0"
                    checked={selected.has(b.id)}
                    onChange={() => toggleSelect(b.id)}
                  />
                </td>
                <td>{b.nomeScatola}</td>
                <td>{`${b.lunghezza}cmx${b.larghezza}cmx${b.altezza}cm`}</td>
                <td>
                  <Form.Check type="checkbox" checked={b.default} disabled />
                </td>
                <td className="text-end">
                  {onEdit ? (
                    <>
                      <Button variant="outline-primary" size="sm" onClick={() => onEdit(b)}>
                        Modifica
                      </Button>{' '}
                      <Button variant="link" onClick={() => onEdit(b)}>
                        <FaChevronRight />
                      </Button>
                    </>
                  ) : (
                    <>
                      <Button
                        variant="outline-primary"
                        size="sm"
                        onClick={() => navigate(`/apps/boxes/edit/${b.id}`)}
                      >
                        Modifica
                      </Button>{' '}
                      <Button
                        variant="link"
                        onClick={() => navigate(`/apps/boxes/edit/${b.id}`)}
                      >
                        <FaChevronRight />
                      </Button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>

      <div className="text-end">
        <small>{boxes.length} scatole</small>
      </div>
    </div>
  );
};

export default BoxesTable;