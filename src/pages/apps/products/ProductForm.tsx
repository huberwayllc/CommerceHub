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
import { Category } from '../categories/components/types';

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

//const STORAGE_KEY = "product_draft";
const STORAGE_PRODUCTS = "products_list_v1";
const STORAGE_CATEGORIES = 'categories_list_v1';


interface SavedProduct {
  id: string;
  general: GeneralInfo;
  attributes: Attributes;
  shipping: ShippingInfo;
  images: string[];
  categories: { id: string; name: string }[];
  options: ProductOption[];
  variations: Variation[];
  modelParts: ModelPart[];
  relatedIds: string[]; 
}

const ProductForm = () => {
  const [images, setImages] = useState<string[]>([]);
  const [allCategories, setAllCategories] = useState<Category[]>([]);
  const [selectedCategoryIds, setSelectedCatIds]  = useState<string[]>([]);
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
  const [relatedIds, setRelatedIds] = useState<string[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<Category[]>([]);
  const [modelParts, setModelParts] = useState<ModelPart[]>([]);
  const { mode, slug } = useParams();
  const isEditMode = mode === "edit" && Boolean(slug);
  const [currentId, setCurrentId] = useState<string | null>(slug || null);
  const tabsContainerRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState('generale');
  const [isDirty, setIsDirty] = useState<boolean>(false);

  //le tab per cambiare i vari componenti
  const tabs = [
  {
    key: "generale",
    label: "Generale",
    component: (
      <GeneralTab
        data={general}
        images={images}
        onImagesChange={(imgs) => { setImages(imgs); setIsDirty(true); }}
        onChange={(g) => { setGeneral(g); setIsDirty(true); }}
        categories={allCategories}
        selectedCategoryIds={selectedCategories.flatMap(cat => [
          cat.id,
          ...cat.subcategories.map(sub => sub.id)
        ])}
        onCategoriesChange={(cats: Category[]) => {
          setSelectedCategories(cats);
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
  { key: 'correlati', label: 'Prodotti correlati', component: 
  <RelatedTab
    relatedIds={relatedIds}
    onChangeRelatedIds={ids => { setRelatedIds(ids); setIsDirty(true); }}
    /> },
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

  //per la modalità se sta in edit oppure in creazione
  useEffect(() => {
  if (mode === "new" && !currentId) {
    setCurrentId(Date.now().toString());
  }
}, [mode, currentId]);


//riguarda le categorie
function mapSavedCategoriesToFull(
  saved: { id: string; name: string; subcategories?: { id: string; name: string }[] }[],
  all: Category[]
): Category[] {
  return saved.map(cat => {
    const fullCat = all.find(c => c.id === cat.id);
    if (!fullCat) return null;
    let subcategories: Category[] = [];
    if (cat.subcategories && cat.subcategories.length > 0) {
      subcategories = cat.subcategories
        .map(sub => fullCat.subcategories.find(s => s.id === sub.id))
        .filter(Boolean) as Category[];
    }
    return {
      ...fullCat,
      subcategories
    };
  }).filter(Boolean) as Category[];
}


//per la funzione edit
//qui bisogna fare la fetch per ottenere i dati del prodotto tramite id
useEffect(() => {
  if (!isEditMode || !slug) return;
  const all = loadProducts();          
  const found = all.find(p => p.id === slug);
  if (found) {
    setGeneral(found.general);
    setAttributes(found.attributes);
    setShipping(found.shipping);
    setImages(found.images);
    setOptions(found.options);
    setVariations(found.variations);
    setModelParts(found.modelParts);
    setRelatedIds(found.relatedIds || []);
  } else {
    navigate("/apps/products");
  }
}, [isEditMode, slug, navigate]);


//questo riguarda per l'inserimento delle categorie
useEffect(() => {
  if (!isEditMode || !slug || allCategories.length === 0) return;
  const savedCats = loadProducts()
    .find(p => p.id === slug)
    ?.categories || [];
  const fullCats = mapSavedCategoriesToFull(savedCats, allCategories);
  setSelectedCategories(fullCats);
}, [isEditMode, slug, allCategories]);



  //questo serve per ottenere le categorie
  useEffect(() => {
    const raw = localStorage.getItem(STORAGE_CATEGORIES);
    if (raw) setAllCategories(JSON.parse(raw));
  }, []);

    //funzione per ottenere i prodotti presenti nel localStorage (tutta la lista dei prodotti)  
    function loadProducts(): SavedProduct[] {
    const raw = localStorage.getItem(STORAGE_PRODUCTS);
    return raw ? JSON.parse(raw) : [];
  }

  // Salva l’array completo
  function saveProducts(list: SavedProduct[]) {
    localStorage.setItem(STORAGE_PRODUCTS, JSON.stringify(list));
  }



  //salvataggio prodotto. Sia creazione sia per quanto riguarda la modifica
  //qui dentro si deve integrare le due fetch per quanto riguarda la creazione e la modifica del prodotto
const handleSave = useCallback(() => {
  if (!currentId) return; 

const prod: SavedProduct = {
  id: currentId,
  general,
  attributes,
  shipping,
  images,
  options,
  variations,
  modelParts,
  relatedIds,
  categories: selectedCategories.map(cat => ({
  id: cat.id,
  name: cat.name,
  subcategories: cat.subcategories.map(sub => ({
    id: sub.id,
    name: sub.name
  }))
}))
};

  const all = loadProducts();
  const updated = isEditMode
    ? all.map(p => (p.id === currentId ? prod : p))  //caso modifica
    : [...all, prod];                           //caso aggiornamento      

  saveProducts(updated);  //Salvataggio nel localStorage
  setIsDirty(false);

  if (!isEditMode) {
    navigate(`/apps/products/edit/${currentId}`, { replace: true });
  }
}, [
  currentId,
  isEditMode,
  general,
  attributes,
  shipping,
  images,
  options,
  variations,
  selectedCategoryIds,
  allCategories,
  modelParts,
  relatedIds,
  selectedCategories, 
  navigate
]);



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
    <div>


     {isDirty && (
        <div
          style={{
            position: "sticky",
            top: 0,
            left: 0,
            height: "65px",
            marginRight: "-16px",
            marginLeft: "-16px",
            backgroundColor: "#D4DEF9",
            borderBottom: "0px solid #f0e68c",
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



      <PageBreadcrumb
        subName="Apps"
        title={isEditMode ? (general.title || "Modifica prodotto") : "Nuovo prodotto"}
      />

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
