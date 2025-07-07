// src/apps/shipments/components/RulesTable.tsx
import React, { useState, useEffect } from 'react';
import { Table, Button, Form, Dropdown } from 'react-bootstrap';
import { FaChevronRight, FaChevronDown, FaTrash } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

export interface ShippingRule {
  id: string;
  name: string;
  conditions: any[];
  actions: any[];
  enabled: boolean;
}

interface RulesTableProps {
  rules: ShippingRule[];
  onDelete: (id: string) => void;
  onToggle: (id: string, enabled: boolean) => void;
}

const RulesTable: React.FC<RulesTableProps> = ({ rules, onDelete, onToggle }) => {
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [selectAll, setSelectAll] = useState(false);
  const navigate = useNavigate();

  const toggleSelectAll = () => {
    setSelected(selectAll ? new Set() : new Set(rules.map(r => r.id)));
    setSelectAll(!selectAll);
  };

  const toggleSelect = (id: string) => {
    const copy = new Set(selected);
    copy.has(id) ? copy.delete(id) : copy.add(id);
    setSelected(copy);
  };

  return (
    <div>
      {/* Tabella */}
      <div style={{ overflowX: "auto" }}>
        <Table hover className="custom-table">
          <thead>
            <tr>
              <th><Form.Check type="checkbox" checked={selectAll} onChange={toggleSelectAll} /></th>
              <th>Attiva</th>
              <th>Nome regola</th>
              <th className="text-end">Azioni</th>
            </tr>
          </thead>
          <tbody>
            {rules.map(rule => (
              <tr key={rule.id}>
                <td>
                  <Form.Check
                    type="checkbox"
                    checked={selected.has(rule.id)}
                    onChange={() => toggleSelect(rule.id)}
                  />
                </td>
                <td>
                  <Form.Check
                    type="switch"
                    checked={rule.enabled}
                    onChange={e => onToggle(rule.id, e.currentTarget.checked)}
                  />
                </td>
                <td>{rule.name}</td>
                <td className="text-end">
                  <Button
                    variant="outline-primary"
                    size="sm"
                    className="me-2"
                    onClick={() => navigate(`/shipments/rules/edit/${rule.id}`)}
                  >
                    Modifica
                  </Button>
                  <Button
                    variant="outline-danger"
                    size="sm"
                    className="me-2"
                    onClick={() => onDelete(rule.id)}
                  >
                    <FaTrash />
                  </Button>
                  <Button
                    variant="link"
                    onClick={() => navigate(`/shipments/rules/edit/${rule.id}`)}
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
        <small>{rules.length} regole</small>
      </div>
    </div>
  );
};

export default RulesTable;
