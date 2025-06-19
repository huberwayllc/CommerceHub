import { useParams } from 'react-router-dom';
import CategoriesList from './CategoriesList';


const Categories = () => {
    const { mode, slug } = useParams();

  if ((mode === 'edit' && slug) || mode === 'new') {
    
  }

  return <CategoriesList />;

    
}

export default Categories