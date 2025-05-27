import { Button, Dropdown } from 'react-bootstrap';
import { FaPlus, FaChevronDown, FaSearch } from 'react-icons/fa';
import { IoFilter } from 'react-icons/io5';
import ProductTable from './components/ProductTable';
import FeatureBoxGrid from './components/FeatureBox';
import { PageBreadcrumb } from '@/components';
import { useNavigate } from 'react-router-dom';

const ProductList = () => {
    const navigate = useNavigate();

  return (
    <>
    <PageBreadcrumb subName="Apps" title="Prodotti" />
      <div className="d-inline-flex align-items-center gap-2 mb-4">
        <Button style={{ height: '45px' }} onClick={() => navigate('/apps/products/new')}>
          <div className='d-flex align-items-center gap-1'>
            <FaPlus /> Nuovo prodotto
          </div>
        </Button>

        <Button style={{ height: '45px' }} className='bg-transparent text-black'>
          Modifica tutto in blocco
        </Button>

        <Dropdown>
          <Dropdown.Toggle style={{ height: '45px' }} className="bg-transparent text-black d-flex align-items-center gap-1">
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
          style={{ height: '45px', maxWidth: '90px' }}
          className='bg-transparent text-black flex-shrink-0'
        >
          <div className='d-flex align-items-center gap-1'><IoFilter style={{ fontSize: "18px" }} /> Filtra</div>
        </Button>

        <div className="position-relative flex-grow-1">
          <input
            type="text"
            className="form-control floating-input"
            placeholder=" "
            id="searchInput"
          />
          <label htmlFor="searchInput" className="floating-label">
            Nome del prodotto, Cod. Art., codice UPC
          </label>
          <FaSearch
            style={{
              position: 'absolute',
              top: '50%',
              left: '10px',
              transform: 'translateY(-50%)',
              color: '#6c757d'
            }}
          />
        </div>
      </div>

      <ProductTable />
      <FeatureBoxGrid />
    </>
  );
};

export default ProductList;
