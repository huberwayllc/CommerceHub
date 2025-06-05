import { PageBreadcrumb } from '@/components';
import { useNavigate, useParams } from 'react-router-dom';
import { useRef, useState } from 'react';
import { IoArrowBack } from "react-icons/io5";
import GeneralTab from './components/General';
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md";
import AttributeTab from './components/Attribute';
import DeliveryTab from './components/Delivery';
import TaxesTab from './components/Taxes';
import SeoTab from './components/Seo';
import EmbeddedTab from './components/EmbeddedProduct';
import RelatedTab from './components/RelatedProducts';
import FilesTab from './components/Files';
import PriceTab from './components/Price';
import OptionsTab from './components/Options';
import { ProductOption, Variation } from './components/options/types';


const ProductForm = () => {
  const [options, setOptions] = useState<ProductOption[]>([]);
  const [variations, setVariations] = useState<Variation[]>([]);
  const { mode, slug } = useParams();
  const isEditMode = mode === 'edit' && slug;
  const tabsContainerRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState('generale');

  const tabs = [
  { key: 'generale', label: 'Generale', component: <GeneralTab/> },
  { key: 'attributi', label: 'Attributi', component: <AttributeTab/> },
  { 
    key: 'opzioni',
    label: 'Opzioni',
    component: (
      <OptionsTab
        options={options}
        variations={variations}
        onOptionsChange={setOptions}
        onVariationsChange={setVariations}
      />
    )
  },
  { key: 'files', label: 'Files', component: <FilesTab/> },
  { key: 'spedizione', label: 'Spedizione e ritiro', component: <DeliveryTab/> },
  { key: 'tasse', label: 'Tasse', component: <TaxesTab/> },
  { key: 'seo', label: 'SEO', component: <SeoTab/> },
  { key: 'correlati', label: 'Prodotti correlati', component: <RelatedTab/> },
  { key: 'incorpora', label: 'Incorpora prodotto', component: <EmbeddedTab/> },
];


  const scrollTabs = (dir: 'left' | 'right') => {
    if (!tabsContainerRef.current) return;
    const { clientWidth } = tabsContainerRef.current;
    tabsContainerRef.current.scrollBy({
      left: dir === 'left' ? -clientWidth * 0.7 : clientWidth * 0.7,
      behavior: 'smooth'
    });
  };

  const handleGoBack = () => {
    navigate('/apps/products');
  };

  return (
    <>
    <div style={{maxWidth: "1350px"}}>
      <div className="mt-3 mb-0">
        <button onClick={handleGoBack} className="btn btn-link text-decoration-none p-0">
          <div className='d-flex align-items-center gap-1'>
            <IoArrowBack size={20} style={{color: "#2563EB"}} />
            <span style={{color: "#2563EB"}} className='fw-semibold'>Indietro</span>
          </div>
        </button>
      </div>

      <PageBreadcrumb subName="Apps" title={isEditMode ? "Modifica prodotto" : "Nuovo prodotto"} />

      {/* Accordion tab bar */}
      <div className="product-tab-wrapper">
        {/* freccia sinistra */}
        <button
          className="scroll-btn scroll-btn-left d-md-none bg-transparent p-0"
          onClick={() => scrollTabs('left')}
          aria-label="Scroll left"
        >
          <MdOutlineKeyboardArrowLeft size={24} />
        </button>

        <div
          className="product-tab-bar d-flex"
          ref={tabsContainerRef}
        >
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

        {/* freccia destra */}
        <button
          className="scroll-btn scroll-btn-right d-md-none bg-transparent p-0"
          onClick={() => scrollTabs('right')}
          aria-label="Scroll right"
        >
          <MdOutlineKeyboardArrowRight size={24} />
        </button>
      </div>



      <div className="mt-3 d-flex align-items-start gap-3" style={{ alignItems: "stretch" }}>
        {/* Left side: General tab content */}
        <div className="col-12 col-md-9">
          {tabs.find(tab => tab.key === activeTab)?.component}
        </div>

        {/*Right side: PREZZI DISP. CONTRO. Da tablet in su */}
        <div className="d-none d-md-block col-md-3 pe-3">
          <PriceTab />
      </div>
      </div>
      </div>
    </>
  );
};

export default ProductForm;
