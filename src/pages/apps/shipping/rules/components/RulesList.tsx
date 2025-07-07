// src/apps/shipments/RulesList.tsx
import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { FaPlus, FaSearch, FaUpload  } from 'react-icons/fa';
import { IoFilter } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
import FloatingInput from '@/components/FloatingInput';
import RulesTable, { ShippingRule } from './RulesTable';


const STORAGE_RULES = "shipping_rules_v1";

const RulesList: React.FC = () => {
  const navigate = useNavigate();

  const [search, setSearch] = useState('');
  const [rules, setRules] = useState<ShippingRule[]>([]);

  // Carica all'avvio
  useEffect(() => {
    const raw = localStorage.getItem(STORAGE_RULES) || "[]";
    setRules(JSON.parse(raw));
  }, []);

  // Filtra per nome della regola
  const filtered = rules.filter(r =>
    r.name.toLowerCase().includes(search.toLowerCase())
  );

  // Elimina una regola
  const handleDelete = (id: string) => {
    const updated = rules.filter(r => r.id !== id);
    setRules(updated);
    localStorage.setItem(STORAGE_RULES, JSON.stringify(updated));
  };

  // Attiva/disattiva
  const handleToggle = (id: string, enabled: boolean) => {
    const updated = rules.map(r =>
      r.id === id ? { ...r, enabled } : r
    );
    setRules(updated);
    localStorage.setItem(STORAGE_RULES, JSON.stringify(updated));
  };

  return (
    <>
      <div className="mt-4 pt-1 d-inline-flex align-items-center gap-2 mb-4">
        <Button
          className='boxShadow'
          style={{ height: '45px', border: "0px" }}
          onClick={() => navigate('/shipments/rules/new')}
        >
          <div className='d-flex align-items-center gap-1'>
            <FaPlus /> Crea una nuova regola
          </div>
        </Button>
        <Button
          className='boxShadow bg-transparent text-black'
          style={{ height: '45px', border: "1px solid black" }}
          
        >
          <div className='d-flex align-items-center gap-1'>
            <FaUpload /> Carica file
          </div>
        </Button>
      </div>

      <div className='d-flex align-items-center gap-2 mb-4'>
        <Button
          style={{ height: '45px', maxWidth: '90px', border: "0px" }}
          className='bg-white text-black flex-shrink-0 boxShadow'
        >
          <div className='d-flex align-items-center gap-1'>
            <IoFilter style={{ fontSize: "18px" }} /> Filtra
          </div>
        </Button>

        <FloatingInput
          placeholder="Cerca per nome regola"
          icon={<FaSearch />}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className='card p-3'>
        <p className='m-0 fw-semibold'>Le regole vengono applicate dall'alto verso il basso. Se le regole si sovrappongono, l'ultima regola ha la priorità</p>
      </div>

      {/* Tabella regole */}
      <RulesTable
        rules={filtered}
        onDelete={handleDelete}
        onToggle={handleToggle}
      />

      <div style={{ marginTop: "200px" }}></div>
    </>
  );
};

export default RulesList;
