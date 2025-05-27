import { PageBreadcrumb } from '@/components';
import { useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';
import { IoArrowBack } from "react-icons/io5";
import GeneralTab from './components/General';


const tabs = [
  { key: 'generale', label: 'Generale', component: <GeneralTab/> },
  { key: 'attributi', label: 'Attributi', component: <div>Attributi</div> },
  { key: 'opzioni', label: 'Opzioni', component: <div>Opzioni</div> },
  { key: 'files', label: 'Files', component: <div>Files</div> },
  { key: 'spedizione', label: 'Spedizione e ritiro', component: <div>Spedizione</div> },
  { key: 'tasse', label: 'Tasse', component: <div>Tasse</div> },
  { key: 'seo', label: 'SEO', component: <div>SEO</div> },
  { key: 'correlati', label: 'Prodotti correlati', component: <div>Correlati</div> },
  { key: 'incorpora', label: 'Incorpora prodotto', component: <div>Incorpora</div> },
];

const ProductForm = () => {
  const { mode, slug } = useParams();
  const isEditMode = mode === 'edit' && slug;
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState('generale');

  const handleGoBack = () => {
    navigate('/apps/products');
  };

  return (
    <>
      <div className="mt-3 mb-0">
        <button onClick={handleGoBack} className="btn btn-link text-decoration-none p-0">
          <div className='d-flex align-items-center gap-1'>
            <IoArrowBack size={20} />
            <span className='fw-semibold'>Indietro</span>
          </div>
        </button>
      </div>

      <PageBreadcrumb subName="Apps" title={isEditMode ? "Modifica prodotto" : "Nuovo prodotto"} />

      {/* Accordion tab bar */}
      <div className="product-tab-bar mt-4 mb-3 d-flex gap-2">
        {tabs.map(tab => (
          <button
            key={tab.key}
            className={`product-tab ${activeTab === tab.key ? 'active' : ''}`}
            onClick={() => setActiveTab(tab.key)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Active tab content */}
      <div className="mt-3">
        {tabs.find(tab => tab.key === activeTab)?.component}
      </div>
    </>
  );
};

export default ProductForm;
