import { useParams } from 'react-router-dom';
import ShippingForm from './ShippingForm';
import ShippingList from './ShippingList';


const Shipping = () => {
    const { mode, slug } = useParams();

  if ((mode === 'edit' && slug) || mode === 'new') {
    return <ShippingForm/>
  }

  return <ShippingList />; 
}

export default Shipping