// src/apps/customers/CustomersList.tsx
import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { FaPlus, FaSearch } from 'react-icons/fa';
import { IoFilter } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
import FloatingInput from '@/components/FloatingInput';
import { CustomerInfo } from './components/types';
import CustomersTable from './components/CustomersTable';

const STORAGE_CUSTOMERS = "customers_list_v1";

const CustomersList: React.FC = () => {
  const navigate = useNavigate();

  const [search, setSearch] = useState('');
  const [customers, setCustomers] = useState<CustomerInfo[]>([]);

  useEffect(() => {
    const raw = localStorage.getItem(STORAGE_CUSTOMERS) || "[]";
    setCustomers(JSON.parse(raw));
  }, []);

  // Filtra per nome o email
  const filtered = customers.filter(c =>
    c.name.toLowerCase().includes(search.toLowerCase()) ||
    c.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <div className="mt-4 pt-1 d-inline-flex align-items-center gap-2 mb-4">
        <Button
          className='boxShadow'
          style={{ height: '45px', border: "0px" }}
          onClick={() => navigate('/apps/customers/new')}
        >
          <div className='d-flex align-items-center gap-1'>
            <FaPlus /> Aggiungi un nuovo cliente
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
          placeholder="Cerca per nome o email"
          icon={<FaSearch />}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Tabella clienti */}
      <CustomersTable customers={filtered} />


      <div style={{ marginTop: "200px" }}></div>
    </>
  );
};

export default CustomersList;
