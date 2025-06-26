import { useParams } from 'react-router-dom';
import OrdersForm from '../orders/components/OrdersForm';
import CustomersList from './CustomersList';
import CustomersForm from './CustomersFrom';



const Customers = () => {
    const { mode, slug } = useParams();

  if ((mode === 'edit' && slug) || mode === 'new') {
    return <CustomersForm/>
  }

  return <CustomersList />; 
}

export default Customers