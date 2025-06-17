import { PageBreadcrumb } from '@/components';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useRef, useState, useCallback  } from 'react';
import { IoArrowBack } from "react-icons/io5";
import GeneralTab from './components/General';
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md";
import AttributeTab from './components/Attribute';
import DeliveryTab from './components/Delivery';
import TaxesTab from './components/Taxes';
import SeoTab from './components/Seo';
import EmbeddedTab from './components/EmbeddedProduct';
import RelatedTab from './components/RelatedProducts';
//import FilesTab from './components/Files';
import PriceTab from './components/Price';
import OptionsTab from './components/Options';
import { ProductOption, Variation, GeneralInfo, Attributes, ShippingInfo, ModelPart } from './components/options/types';

const emptyGeneral: GeneralInfo = {
  title: "",
  itemCode: 0,
  productType: "physical",
  price: 0,
  description: "",
  requiresShipping: false,
  isAvailable: true,
  objUrl: undefined,
  file: undefined,
};

const emptyAttributes: Attributes = {
  upc: "",
  brand: "",
};

const STORAGE_KEY = "product_draft";

const ProductForm = () => {
  const [images, setImages] = useState<string[]>([]);
  const [general, setGeneral] = useState<GeneralInfo>(emptyGeneral);
  const [attributes, setAttributes] = useState<Attributes>(emptyAttributes);
  const [shipping, setShipping] = useState<ShippingInfo>({
  requiresShipping: false,
  weight: 0,
  length: 0,
  width: 0,
  height: 0,
});
  const product = {
  general,
  attributes,
  shipping,
  images,
};
  const [options, setOptions] = useState<ProductOption[]>([]);
  const [variations, setVariations] = useState<Variation[]>([]);
  const [modelParts, setModelParts] = useState<ModelPart[]>([]);
  const { mode, slug } = useParams();
  const isEditMode = mode === 'edit' && slug;
  const tabsContainerRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState('generale');
  const [isDirty, setIsDirty] = useState<boolean>(false);

  const tabs = [
  {
    key: "generale",
    label: "Generale",
    component: (
      <GeneralTab
        data={general}
        images={images}
        onImagesChange={(imgs) => { setImages(imgs); setIsDirty(true); }}
        onChange={(newGen) => {
          setGeneral(newGen);
          setIsDirty(true);
        }}
      />
    ),
  },
  {
    key: "attributi",
    label: "Attributi",
    component: (
      <AttributeTab data={attributes}    
            onChange={(newAttr) => {
            setAttributes(newAttr);
            setIsDirty(true);
          }} />
    ),
  },
  { 
    key: 'opzioni',
    label: 'Opzioni',
    component: (
      <OptionsTab
        options={options}
        variations={variations}
           onOptionsChange={(newOpts) => {
            setOptions(newOpts);
            setIsDirty(true);
          }}
            onVariationsChange={(newVars) => {
            setVariations(newVars);
            setIsDirty(true);
          }}
        modelParts={modelParts}
        onModelPartsChange={(parts) => { setModelParts(parts); setIsDirty(true); }}
        productType={general.productType}
        product={product}
      />
    )
  },
  // { key: 'files', label: 'Files', component: <FilesTab/> },
  {
    key: 'spedizione',
    label: 'Spedizione e ritiro',
    component: (
      <DeliveryTab
        shipping={shipping}       
        onChange={(newShipping) => {
          setShipping(newShipping);
          setIsDirty(true);
        }}
      />
    )
  },
  { key: 'tasse', label: 'Tasse', component: <TaxesTab/> },
  { key: 'seo', label: 'SEO', component: <SeoTab title={general.title} description={general.description} /> },
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

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (parsed.modelParts) setModelParts(parsed.modelParts);
        if (parsed.images) setImages(parsed.images);
        if (parsed.general) setGeneral(parsed.general);
        if (parsed.attributes) setAttributes(parsed.attributes);
        if (parsed.options) setOptions(parsed.options);
        if (parsed.variations) setVariations(parsed.variations);
        if (parsed.shipping)   setShipping(parsed.shipping);
      } catch {
      }
    }
  }, []);



  const handleSave = useCallback(() => {
    const toSave = { general, attributes, options, variations, shipping, images, modelParts };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(toSave));
    setIsDirty(false);
    console.log("✅ Draft salvato in localStorage:", toSave);
    // fetch("/api/products", {...}) backend
  }, [general, attributes, options, variations, shipping, images, modelParts]);


  const handleSaveAndClose = () => {
    handleSave();
    navigate("/apps/products");
  };

  // ─── Ascolta Ctrl+S / Cmd+S per richiamare handleSave ───────────────
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "s") {
        e.preventDefault();
        handleSave();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [handleSave]);


  return (
    <>
    <div style={{maxWidth: "1350px"}}>


     {isDirty && (
        <div
          style={{
            position: "sticky",
            top: 0,
            left: 0,
            height: "60px",
            marginRight: "-16px",
            marginLeft: "-16px",
            backgroundColor: "#D4DEF9",
            borderBottom: "1px solid #f0e68c",
            zIndex: 2000,
            padding: "10px 20px",
            boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div>
            <button onClick={handleGoBack} className="btn btn-link text-decoration-none p-0 me-3">
              <div className='d-flex align-items-center gap-1'>
                <IoArrowBack size={20} style={{color: "#2563EB"}} />
                <span style={{color: "#2563EB"}} className='fw-semibold'>Indietro</span>
              </div>
            </button>
              <span style={{ fontWeight: 500, color: "#333" }}>
                In questa pagina ci sono modifiche non salvate.
              </span>
          </div>
          <div>
            <button style={{fontSize: "13px"}} onClick={handleSaveAndClose} className="btn btn-sm bg-transparent me-2 fw-semibold colorPrimary">
              Salva e Chiudi
            </button>
            <button
              onClick={handleSave}
              className="btn btn-sm btn-primary px-3 fw-semibold"
              title="Ctrl+S"
              style={{ height: "40px", fontSize: "14px" }}
            >
              Salva (Ctrl+S)
            </button>
          </div>
        </div>
      )}



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
          <PriceTab 
            price={general.price}
            isAvailable={general.isAvailable}
            onAvailabilityChange={(val) => {
              setGeneral({ ...general, isAvailable: val });
              setIsDirty(true);
            }}
            onPriceChange={(p) => {
              setGeneral({ ...general, price: p });
              setIsDirty(true);
            }}
          />
      </div>
      </div>
      </div>
    </>
  );
};

export default ProductForm;
