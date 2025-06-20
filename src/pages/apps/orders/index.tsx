import { useParams } from 'react-router-dom';
import OrdersList from './components/OrdersList';
import OrdersForm from './components/OrdersForm';


const Orders = () => {
    const { mode, slug } = useParams();

  if ((mode === 'edit' && slug) || mode === 'new') {
    return <OrdersForm/>
  }

  return <OrdersList />; 
}

export default Orders