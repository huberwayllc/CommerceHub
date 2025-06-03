import { Button, Dropdown } from 'react-bootstrap';
import { FaPlus, FaChevronDown, FaSearch } from 'react-icons/fa';
import { IoFilter } from 'react-icons/io5';
import ProductTable from './components/ProductTable';
import FeatureBoxGrid from './components/FeatureBox';
import { PageBreadcrumb } from '@/components';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import FloatingInput from '@/components/FloatingInput';

const ProductList = () => {
    const navigate = useNavigate();

    const [search, setSearch] = useState('');

  return (
    <>
    <PageBreadcrumb subName="Apps" title="Prodotti" />
      <div className="d-inline-flex align-items-center gap-2 mb-4">
        <Button className='boxShadow' style={{ height: '45px', background: "#2563EB", border: "0px" }} onClick={() => navigate('/apps/products/new')}>
          <div className='d-flex align-items-center gap-1'>
            <FaPlus /> Nuovo prodotto
          </div>
        </Button>

        <Button style={{ height: '45px', border: "0px" }} className='bg-white text-black boxShadow'>
          Modifica tutto in blocco
        </Button>

        <Dropdown>
          <Dropdown.Toggle style={{ height: '45px', border: "0px" }} className="bg-white text-black d-flex align-items-center gap-1 boxShadow">
            importa o esporta i prodotti <FaChevronDown />
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item style={{ height: "40px" }} href="#importa">Importa i prodotti</Dropdown.Item>
            <Dropdown.Item style={{ height: "40px" }} href="#esporta">Esporta tutto</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>

      <div className='d-flex align-items-center gap-2 mb-4'>
        <Button
          style={{ height: '45px', maxWidth: '90px', border: "0px" }}
          className='bg-white text-black flex-shrink-0 boxShadow'
        >
          <div className='d-flex align-items-center gap-1'><IoFilter style={{ fontSize: "18px" }} /> Filtra</div>
        </Button>

          <FloatingInput
            placeholder="Nome del prodotto, Cod. Art., codice UPC"
            icon={<FaSearch />}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
      </div>

      <ProductTable />
      <FeatureBoxGrid />

      <div style={{marginTop: "200px"}}></div>
    </>
  );
};

export default ProductList;
