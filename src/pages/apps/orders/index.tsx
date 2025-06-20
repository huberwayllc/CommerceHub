import { useParams } from 'react-router-dom';
import ProductList from '../ecommerce/ProductList';


const Orders = () => {
    const { mode, slug } = useParams();

  if ((mode === 'edit' && slug) || mode === 'new') {
    
  }

  return <ProductList />;

    
}

export default Orders