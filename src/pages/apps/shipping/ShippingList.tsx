import { Button, Nav } from 'react-bootstrap';
import { FaPlus, FaSearch } from 'react-icons/fa';
import { IoFilter } from 'react-icons/io5';
//import { PageBreadcrumb } from '@/components';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import FloatingInput from '@/components/FloatingInput';
import { Order } from '../orders/components/types';
import ShippingTable from './components/ShippingTable';


const STORAGE_ORDERS = "orders_list_v1";

const ShippingList = () => {
    const navigate = useNavigate();

    const [search, setSearch] = useState('');
    const [orders, setOrders] = useState<Order[]>([]);
    useEffect(() => {
      const saved: Order[] = JSON.parse(localStorage.getItem(STORAGE_ORDERS) || "[]");
      setOrders(saved);
    }, []);

  return (
    <>
     {/*<PageBreadcrumb subName="Apps" title="Prodotti" />*/}
      <div className="mt-4 pt-1 d-inline-flex align-items-center gap-2 mb-4">
        <Button className='boxShadow' style={{ height: '45px', border: "0px" }} onClick={() => navigate('/apps/shipments/new')}>
          <div className='d-flex align-items-center gap-1'>
            <FaPlus /> Nuova spedizione
          </div>
        </Button>


      </div>

      <div className='d-flex align-items-center gap-2 mb-4'>
        <Button
          style={{ height: '45px', maxWidth: '90px', border: "0px" }}
          className='bg-white text-black flex-shrink-0 boxShadow'
        >
          <div className='d-flex align-items-center gap-1'><IoFilter style={{ fontSize: "18px" }} /> Filtra</div>
        </Button>

          <FloatingInput
            placeholder="Ricerca..."
            icon={<FaSearch />}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
      </div>

      <ShippingTable orders={orders}/>

      <div style={{marginTop: "200px"}}></div>
    </>
  );
};

export default ShippingList;
