import { useParams } from 'react-router-dom';
import ProductList from './ProductList';
import ProductForm from './ProductForm';

const Products = () => {
	const { mode, slug } = useParams();

  if ((mode === 'edit' && slug) || mode === 'new') {
    return <ProductForm />;
  }

  return <ProductList />;

	
}

export default Products