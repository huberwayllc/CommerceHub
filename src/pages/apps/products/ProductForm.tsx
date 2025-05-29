import { PageBreadcrumb } from '@/components';
import { useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';
import { IoArrowBack } from "react-icons/io5";
import GeneralTab from './components/General';
import { Form } from 'react-bootstrap';
import AttributeTab from './components/Attribute';
import DeliveryTab from './components/Delivery';
import TaxesTab from './components/Taxes';


const tabs = [
  { key: 'generale', label: 'Generale', component: <GeneralTab/> },
  { key: 'attributi', label: 'Attributi', component: <AttributeTab/> },
  { key: 'opzioni', label: 'Opzioni', component: <div>Opzioni</div> },
  { key: 'files', label: 'Files', component: <div>Files</div> },
  { key: 'spedizione', label: 'Spedizione e ritiro', component: <DeliveryTab/> },
  { key: 'tasse', label: 'Tasse', component: <TaxesTab/> },
  { key: 'seo', label: 'SEO', component: <div>SEO</div> },
  { key: 'correlati', label: 'Prodotti correlati', component: <div>Correlati</div> },
  { key: 'incorpora', label: 'Incorpora prodotto', component: <div>Incorpora</div> },
];

const ProductForm = () => {
  const { mode, slug } = useParams();
  const isEditMode = mode === 'edit' && slug;
  const navigate = useNavigate();
  const [isSelected, setIsSelected] = useState(false);

  const [activeTab, setActiveTab] = useState('generale');

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
      <div className="product-tab-bar mt-1 mb-3 d-flex gap-1">
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

      <div className="mt-3 d-flex align-items-start gap-3" style={{ alignItems: "stretch" }}>
        {/* Left side: General tab content */}
        <div style={{width: "75%"}}>
          {tabs.find(tab => tab.key === activeTab)?.component}
        </div>

        {/*PREZZI DISP. CONTRO */}
        <div style={{ width: "25%" }}>
          <div className="card p-3 h-100">
            <h4 className="fw-bold">Prezzi</h4>

            <div className="mt-0" style={{ backgroundColor: "#ECEEF0", height: "55px", width: "250px" }}>
              <div
                className="d-flex align-items-center border border-secondary rounded"
                style={{ overflow: "hidden",  backgroundColor: "#ECEEF0" }}
              >
                <input
                  type="number"
                  className="form-control border-0 rounded-0"
                  placeholder="0.00"
                  style={{
                    boxShadow: "none",
                    outline: "none",
                    backgroundColor: "#ECEEF0",
                    height: "55px",
                    fontSize: "18px",
                  }}
                />
                <div
                  className="px-2 border-start border-secondary d-flex align-items-center"
                  style={{  backgroundColor: "#ECEEF0" }}
                >
                  €
                </div>
              </div>
            </div>
            <p className="mt-1" style={{fontSize: "11px"}}>Tutti i prezzi includono tasse</p>
            <p className="mt-2 fw-semibold" style={{color: "#2563EB", marginBottom: "2px"}}>Gestisci le opzioni del prezzo</p>
          </div>

          <div className="card p-3 h-100">
            <h6 className="fw-bold">Disponibilità del prodotto</h6>
            <Form.Check
              type="switch"
              label="Abilitato"
              checked={isSelected}
              readOnly
            />
          </div>

          <div className="card p-3 h-100">
            <h6 className="fw-bold">Controllo della Disponibilità</h6>
            <Form.Check
              type="switch"
              label="Abilitato"
              checked={isSelected}
              readOnly
            />
            <p className="mb-0 mt-3 fw-semibold" style={{color: "#2563EB"}}>Gestisci le opzioni del prezzo</p>
          </div>

          <div className="card p-3 h-100">
            <p className="mb-0 mt-3 fw-semibold" style={{color: "#2563EB"}}>Anteprima del prodotto</p>
          </div>
      </div>
      </div>
      </div>
    </>
  );
};

export default ProductForm;
