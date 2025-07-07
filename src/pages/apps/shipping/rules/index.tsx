import { useParams } from 'react-router-dom';
import RulesList from './components/RulesList';
import RulesForm from './components/RulesForm';



const Rules = () => {
    const { mode, slug } = useParams();

  if ((mode === 'edit' && slug) || mode === 'new') {
    return <RulesForm/>
  }

  return <RulesList />; 
}

export default Rules