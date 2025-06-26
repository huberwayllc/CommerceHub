// src/apps/customers/CustomersForm.tsx
import React, {
  useState,
  ChangeEvent,
  useEffect,
  useCallback,
  KeyboardEvent
} from 'react';
import { PageBreadcrumb } from "@/components";
import FloatingInput2 from "@/components/FloatingInput2";
import { Button, Form } from "react-bootstrap";
import { useNavigate, useParams } from 'react-router-dom';
import { IoWarningOutline, IoArrowBack } from "react-icons/io5";
import { CustomerInfo } from './components/types';

const STORAGE_CUSTOMERS = 'customers_list_v1';

const CustomersForm: React.FC = () => {
  // -- Stati principali
  const [customer, setCustomer] = useState<CustomerInfo>({
    id: '',
    name: '',
    email: '',
    phone: '',
    taxExempt: false,
    newsletter: false,
    address: {
      address: '',
      phone: '',
      country: '',
      state: '',
      city: '',
      postalCode: '',
    },
  });
  const [isDirty, setIsDirty] = useState(false);

  const { mode, slug } = useParams<{ mode: string; slug: string }>();
  const isEditMode = mode === "edit" && Boolean(slug);
  const navigate = useNavigate();

  // -- Funzioni di caricamento/salvataggio da localStorage
  const loadCustomers = (): CustomerInfo[] => {
    const raw = localStorage.getItem(STORAGE_CUSTOMERS);
    return raw ? JSON.parse(raw) : [];
  };
  const saveCustomers = (list: CustomerInfo[]) => {
    localStorage.setItem(STORAGE_CUSTOMERS, JSON.stringify(list));
  };

  // -- Carica il cliente in edit mode
  useEffect(() => {
    if (!isEditMode || !slug) return;
    const all = loadCustomers();
    const found = all.find(c => c.id === slug);
    if (!found) {
      navigate("/apps/customers");
      return;
    }
    setCustomer(found);
  }, [isEditMode, slug, navigate]);

  // -- Marcare il form come "sporco"
  const markDirty = useCallback(() => {
    if (!isDirty) setIsDirty(true);
  }, [isDirty]);

  // -- Cambiamento campo generico
  const onFieldChange = <K extends keyof CustomerInfo>(key: K, val: CustomerInfo[K]) => {
    setCustomer(c => ({ ...c, [key]: val }));
    markDirty();
  };
  // -- Cambiamento campo indirizzo
  const onAddressChange = (field: keyof CustomerInfo["address"], val: string) => {
    setCustomer(c => ({
      ...c,
      address: { ...c.address, [field]: val }
    }));
    markDirty();
  };

  // -- Salva senza uscire
const handleSave = useCallback(() => {
  // Genero o riuso l'id
  const newId = isEditMode ? customer.id : Date.now().toString();
  const newCust: CustomerInfo = {
    ...customer,
    id: newId,
  };

  // Carico tutti, sostituisco o inserisco
  const all = loadCustomers();
  const updated = isEditMode
    ? all.map(c => (c.id === newId ? newCust : c))
    : [newCust, ...all];
  saveCustomers(updated);

  setIsDirty(false);

  if (!isEditMode) {
    // Passo in modalità edit sul nuovo cliente
    navigate(`/apps/customers/edit/${newId}`, { replace: true });
  }
}, [customer, isEditMode, navigate]);

  // -- Salva e torna indietro
  const handleSaveAndClose = () => {
    handleSave();
    navigate("/apps/customers");
  };

  // -- Torna indietro (con conferma se isDirty)
  const handleGoBack = () => {
    if (isDirty && !window.confirm("Ci sono modifiche non salvate. Vuoi davvero uscire?")) {
      return;
    }
    navigate("/apps/customers");
  };

  // -- Listener per Ctrl+S
  useEffect(() => {
    const listener = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "s") {
        e.preventDefault();
        handleSave();
      }
    };
    window.addEventListener("keydown", listener as any);
    return () => window.removeEventListener("keydown", listener as any);
  }, [handleSave]);

  return (
    <>
      {/* Banner sticky se ci sono modifiche non salvate */}
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
            zIndex: 2000,
            padding: "10px 20px",
            boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div>
            <button
              onClick={handleGoBack}
              className="btn btn-link text-decoration-none p-0 me-3"
            >
              <div className='d-flex align-items-center gap-1'>
                <IoArrowBack size={20} style={{ color: "#2563EB" }} />
                <span style={{ color: "#2563EB" }} className='fw-semibold'>Indietro</span>
              </div>
            </button>
            <span style={{ fontWeight: 500, color: "#333" }}>
              In questa pagina ci sono modifiche non salvate.
            </span>
          </div>
          <div>
            <button
              style={{ fontSize: "13px" }}
              onClick={handleSaveAndClose}
              className="btn btn-sm bg-transparent me-2 fw-semibold colorPrimary"
            >
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
        title={isEditMode ? "Modifica cliente" : "Aggiungi nuovo cliente"}
      />

      <div className="w-100 d-flex align-items-start gap-3">
        {/* Left side: GDPR notice, form fields */}
        <div style={{ width: "70%" }}>
          {/* GDPR notice */}
          <div style={{ border: "2px solid black" }} className='card p-3 mb-3'>
            <div className='d-inline-flex align-items-start gap-2'>
              <IoWarningOutline style={{ fontSize: "80px" }} />
              <div>
                <h6 style={{ fontSize: "18px" }} className='m-0 mb-2 fw-bold'>
                  Chiedi al cliente il consenso al trattamento dei dati personali
                </h6>
                <p className='mb-0'>
                  In conformità al GDPR, è necessario ottenere il consenso
                  esplicito del cliente al trattamento dei suoi dati personali
                  prima di raccoglierli e elaborarli.
                </p>
              </div>
            </div>
          </div>

          {/* Customer info */}
          <div className="card p-3 mb-3">
            <h4 className="m-0 mb-2 fw-bold text-black" style={{ fontSize: "18px" }}>
              Informazioni sul cliente
            </h4>
            <FloatingInput2
              placeholder="Nome e cognome"
              value={customer.name}
              onChange={e => onFieldChange('name', e.target.value)}
            />
            <div className="w.100 d-flex mt-2 gap-2">
              <div className="w-50">
                <FloatingInput2
                  placeholder="Indirizzo e-mail"
                  value={customer.email}
                  onChange={e => onFieldChange('email', e.target.value)}
                />
              </div>
              <div className="w-50">
                <FloatingInput2
                  placeholder="Numero di telefono"
                  value={customer.phone}
                  onChange={e => onFieldChange('phone', e.target.value)}
                />
              </div>
            </div>
          </div>

          {/* Shipping address */}
          <div className="card p-3">
            <h4 className="m-0 mb-2 fw-bold text-black" style={{ fontSize: "18px" }}>
              Indirizzo di spedizione
            </h4>
            <div className="w.100 d-flex mt-0 gap-2">
              <div className="w-50">
                <FloatingInput2
                  placeholder="Indirizzo"
                  value={customer.address.address}
                  onChange={e => onAddressChange('address', e.target.value)}
                />
              </div>
              <div className="w-50">
                <FloatingInput2
                  placeholder="Numero telefonico"
                  value={customer.address.phone}
                  onChange={e => onAddressChange('phone', e.target.value)}
                />
              </div>
            </div>
            <div className="w.100 d-flex mt-2 gap-2">
              <div className="w-50">
                <FloatingInput2
                  placeholder="Paese"
                  value={customer.address.country}
                  onChange={e => onAddressChange('country', e.target.value)}
                />
              </div>
              <div className="w-50">
                <FloatingInput2
                  placeholder="Stato"
                  value={customer.address.state}
                  onChange={e => onAddressChange('state', e.target.value)}
                />
              </div>
            </div>
            <div className="w.100 d-flex mt-2 gap-2">
              <div className="w-50">
                <FloatingInput2
                  placeholder="Città"
                  value={customer.address.city}
                  onChange={e => onAddressChange('city', e.target.value)}
                />
              </div>
              <div className="w-50">
                <FloatingInput2
                  placeholder="Codice postale"
                  value={customer.address.postalCode}
                  onChange={e => onAddressChange('postalCode', e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Right side: Settings & Save button */}
        <div style={{ width: "30%" }}>
          <div style={{ position: "sticky", top: 0 }} className="card p-3">
            <h4 className="m-0 fw-bold text-black" style={{ fontSize: "18px" }}>
              Impostazioni
            </h4>
            <div className="d-inline-flex align-items-center gap-2 mt-2">
              <Form.Check
                type="checkbox"
                style={{ transform: "scale(1.3)", marginTop: "2px" }}
                checked={customer.newsletter}
                onChange={() => onFieldChange('newsletter', !customer.newsletter)}
              />
              <p className='fw-bold mb-0'>Iscriviti alle email di marketing</p>
            </div>
            <div className="d-inline-flex align-items-center gap-2 mt-2">
              <Form.Check
                type="checkbox"
                style={{ transform: "scale(1.3)", marginTop: "2px" }}
                checked={customer.taxExempt}
                onChange={() => onFieldChange('taxExempt', !customer.taxExempt)}
              />
              <p className='fw-bold mb-0'>Esenzione fiscale</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomersForm;
