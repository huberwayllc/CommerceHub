import { useEffect, useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { defaultValues, ShippingDefaults } from './types'

const STORAGE_KEY = 'shippingDefaults'

const ShippingDefaultsForm = () => {
  const [values, setValues] = useState<ShippingDefaults>(defaultValues)

    useEffect(() => {
    const stored = localStorage.getItem('shippingDefaults')
    if (stored) setValues(JSON.parse(stored))
    }, [])


     const handleChange =
    (field: keyof Omit<ShippingDefaults, 'options' | 'preferences'>) =>
    (e: React.ChangeEvent<React.ChangeEvent<HTMLInputElement>['target'] extends HTMLInputElement ? HTMLInputElement : HTMLTextAreaElement | HTMLSelectElement>) => {
      const raw = e.target.value
      const v = e.target.type === 'number' ? Number(raw) : raw
      setValues(prev => ({ ...prev, [field]: v } as any))
    }

  // Aggiorna una checkbox in options o preferences
  const handleCheck =
    (section: 'options' | 'preferences', key: string) =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setValues(prev => ({
        ...prev,
        [section]: {
          ...prev[section],
          [key]: e.target.checked,
        },
      } as any))
    }

  // Salva su localStorage
  const save = () => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(values))
    alert('Impostazioni salvate')
  }


  return (
    <>
      <div className="mt-4 mb-4">
        <h5 className="fw-bold">Impostazioni predefinite di spedizione</h5>

        <div className="card p-3 mt-3">
          <h5 className="fw-bold mb-3">Impostazioni di spedizione</h5>

          <Form.Group className="mb-3">
            <h6 className="fw-bold mb-1">Peso predefinito (kg)</h6>
            <Form.Control
                className="input-product"
                type="number"
                value={values.peso}                        
                onChange={handleChange('peso')}           
                placeholder="e.g. 1.5"
            />
            </Form.Group>

          <Form.Group className="mb-3">
            <h6 className="fw-bold mb-1">Metodo di spedizione preferito</h6>
            <Form.Control
                className="input-product"
                type="text"
                value={values.metodo}                      
                onChange={handleChange('metodo')}            
            />
            </Form.Group>

          <Form.Group className="mb-0">
            <h6 className="fw-bold mb-1">Motivo dell'esportazione predefinito</h6>
            <Form.Select
                className="input-product"
                value={values.motivo}                        
                onChange={handleChange('motivo') as any}    
            >
                <option value="nessuno">Nessuno</option>
                <option value="regalo">Regalo</option>
                <option value="documenti">Documenti</option>
                <option value="beni-commerciali">Beni Commerciali</option>
                <option value="campione-commerciale">Campione Commerciale</option>
                <option value="merce-restituita">Merce Restituita</option>
            </Form.Select>
            </Form.Group>

            <Form.Group className="mt-3">
                <div className="d-flex gap-2 align-items-center mb-2">
                    <Form.Check
                    type="checkbox"
                    id="orderReference"
                    name="orderReference"
                    checked={values.options.orderReference}
                    onChange={handleCheck('options', 'orderReference')}
                    style={{ transform: 'scale(1.3)', transformOrigin: 'left center' }}
                    />
                    <p className="m-0">Mostra il riferimento dell'ordine sull'etichetta</p>
                </div>

                <div className="d-flex gap-2 align-items-center mb-2">
                    <Form.Check
                    type="checkbox"
                    id="prepaidLogo"
                    name="prepaidLogo"
                    checked={values.options.prepaidLogo}
                    onChange={handleCheck('options', 'prepaidLogo')}
                    style={{ transform: 'scale(1.3)', transformOrigin: 'left center' }}
                    />
                    <p className="m-0">Mostra il logo 'preaffrancato' sull'etichetta di spedizione</p>
                </div>

                <div className="d-flex gap-2 align-items-center mb-2">
                    <Form.Check
                    type="checkbox"
                    id="qrCode"
                    name="qrCode"
                    checked={values.options.qrCode}
                    onChange={handleCheck('options', 'qrCode')}
                    style={{ transform: 'scale(1.3)', transformOrigin: 'left center' }}
                    />
                    <p className="m-0">Mostra il codice QR sull'etichetta della lettera non affrancata</p>
                </div>

                <div className="d-flex gap-2 align-items-center">
                    <Form.Check
                    type="checkbox"
                    id="invoiceNumber"
                    name="invoiceNumber"
                    checked={values.options.invoiceNumber}
                    onChange={handleCheck('options', 'invoiceNumber')}
                    style={{ transform: 'scale(1.3)', transformOrigin: 'left center' }}
                    />
                    <p className="m-0">Utilizza il numero d'ordine come numero di fattura sul documento doganale</p>
                </div>
                </Form.Group>

        </div>

        <div className='card p-3 mt-4'>
            <h5 className="fw-bold mb-0">Personalizza preferenze di spedizione</h5>
            <p className='mb-3'>imposta le tue preferenze per ricevere raccomandazioni personalizzate.</p>

            <hr/>

            <div className="d-flex">
                {/* Partenza */}
                <div className="w-50">
                    <h5 className="fw-bold mb-1 mt-0">Partenza</h5>
                    <p className="text-muted mb-2">Come vorrebbero iniziare il viaggio?</p>
                    <div className="d-flex gap-2 align-items-center mb-2">
                    <Form.Check
                        type="checkbox"
                        id="pickup"
                        checked={values.preferences.pickup}
                        onChange={handleCheck('preferences', 'pickup')}
                        style={{ transform: 'scale(1.3)', transformOrigin: 'left center' }}
                    />
                    <p className="m-0">Ritiro</p>
                    </div>
                    <div className="d-flex gap-2 align-items-center">
                    <Form.Check
                        type="checkbox"
                        id="deliveryPoint"
                        checked={values.preferences.deliveryPoint}
                        onChange={handleCheck('preferences', 'deliveryPoint')}
                        style={{ transform: 'scale(1.3)', transformOrigin: 'left center' }}
                    />
                    <p className="m-0">Punto di Consegna</p>
                    </div>
                </div>

                {/* Destinazione */}
                <div className="w-50">
                    <h5 className="fw-bold mb-1 mt-0">Destinazione</h5>
                    <p className="text-muted mb-2">Come vorrebbero terminare il viaggio?</p>
                    <div className="d-flex gap-2 align-items-center mb-2">
                    <Form.Check
                        type="checkbox"
                        id="homeDelivery"
                        checked={values.preferences.homeDelivery}
                        onChange={handleCheck('preferences', 'homeDelivery')}
                        style={{ transform: 'scale(1.3)', transformOrigin: 'left center' }}
                    />
                    <p className="m-0">Consegna a domicilio</p>
                    </div>
                    <div className="d-flex gap-2 align-items-center mb-2">
                    <Form.Check
                        type="checkbox"
                        id="lockerPickup"
                        checked={values.preferences.lockerPickup}
                        onChange={handleCheck('preferences', 'lockerPickup')}
                        style={{ transform: 'scale(1.3)', transformOrigin: 'left center' }}
                    />
                    <p className="m-0">Consegna al punto di ritiro</p>
                    </div>
                    <div className="d-flex gap-2 align-items-center mb-2">
                    <Form.Check
                        type="checkbox"
                        id="mailbox"
                        checked={values.preferences.mailbox}
                        onChange={handleCheck('preferences', 'mailbox')}
                        style={{ transform: 'scale(1.3)', transformOrigin: 'left center' }}
                    />
                    <p className="m-0">Cassetta postale</p>
                    </div>
                    <div className="d-flex gap-2 align-items-center">
                    <Form.Check
                        type="checkbox"
                        id="postBox"
                        checked={values.preferences.postBox}
                        onChange={handleCheck('preferences', 'postBox')}
                        style={{ transform: 'scale(1.3)', transformOrigin: 'left center' }}
                    />
                    <p className="m-0">Casella postale</p>
                    </div>
                </div>
                </div>


            <hr/>

            {/* Sezione Forma & Controllo età */}
                <div className="d-flex">
                {/* Forma */}
                <div className="w-50">
                    <h5 className="fw-bold mb-1 mt-0">Forma</h5>
                    <p className="text-muted mb-2">Che tipo di imballaggio utilizzate?</p>

                    <div className="d-flex gap-2 align-items-center mb-2">
                    <Form.Check
                        type="checkbox"
                        id="letter"
                        checked={values.preferences.letter}
                        onChange={handleCheck('preferences', 'letter')}
                        style={{ transform: 'scale(1.3)', transformOrigin: 'left center' }}
                    />
                    <p className="m-0">Lettera</p>
                    </div>

                    <div className="d-flex gap-2 align-items-center mb-2">
                    <Form.Check
                        type="checkbox"
                        id="package"
                        checked={values.preferences.package}
                        onChange={handleCheck('preferences', 'package')}
                        style={{ transform: 'scale(1.3)', transformOrigin: 'left center' }}
                    />
                    <p className="m-0">Pacco</p>
                    </div>

                    <div className="d-flex gap-2 align-items-center mb-2">
                    <Form.Check
                        type="checkbox"
                        id="postBox"                // “Casella postale”
                        checked={values.preferences.postBox}
                        onChange={handleCheck('preferences', 'postBox')}
                        style={{ transform: 'scale(1.3)', transformOrigin: 'left center' }}
                    />
                    <p className="m-0">Casella postale</p>
                    </div>

                    <div className="d-flex gap-2 align-items-center mb-2">
                    <Form.Check
                        type="checkbox"
                        id="pallet"
                        checked={values.preferences.pallet}
                        onChange={handleCheck('preferences', 'pallet')}
                        style={{ transform: 'scale(1.3)', transformOrigin: 'left center' }}
                    />
                    <p className="m-0">Pallet</p>
                    </div>

                    <div className="d-flex gap-2 align-items-center">
                    <Form.Check
                        type="checkbox"
                        id="longPackage"
                        checked={values.preferences.longPackage}
                        onChange={handleCheck('preferences', 'longPackage')}
                        style={{ transform: 'scale(1.3)', transformOrigin: 'left center' }}
                    />
                    <p className="m-0">Pacco lungo</p>
                    </div>
                </div>

                {/* Controllo età */}
                <div className="w-50">
                    <h5 className="fw-bold mb-1 mt-0">Controllo dell'età</h5>
                    <p className="text-muted mb-2">
                    Avete bisogno di una verifica dell'età per le vostre spedizioni?
                    </p>

                    <div className="d-flex gap-2 align-items-center mb-2">
                    <Form.Check
                        type="checkbox"
                        id="ageNone"
                        checked={values.preferences.ageNone}
                        onChange={handleCheck('preferences', 'ageNone')}
                        style={{ transform: 'scale(1.3)', transformOrigin: 'left center' }}
                    />
                    <p className="m-0">Nessun controllo dell’età</p>
                    </div>

                    <div className="d-flex gap-2 align-items-center mb-2">
                    <Form.Check
                        type="checkbox"
                        id="age16"
                        checked={values.preferences.age16}
                        onChange={handleCheck('preferences', 'age16')}
                        style={{ transform: 'scale(1.3)', transformOrigin: 'left center' }}
                    />
                    <p className="m-0">16+</p>
                    </div>

                    <div className="d-flex gap-2 align-items-center">
                    <Form.Check
                        type="checkbox"
                        id="age18"
                        checked={values.preferences.age18}
                        onChange={handleCheck('preferences', 'age18')}
                        style={{ transform: 'scale(1.3)', transformOrigin: 'left center' }}
                    />
                    <p className="m-0">18+</p>
                    </div>
                </div>
                </div>


            <hr/>

            <div className='d-flex'>
                <div className='w-50'>
                    <h5 className='fw-bold mb-1 mt-0'>Firma</h5>
                    <p style={{color: "#686868"}} className='m-0 mb-1'>Il destinatario deve firmare per la consegna del pacco?</p>
                    <div className="d-flex gap-2 align-items-center mb-2">
                        <Form.Check
                        type="checkbox"
                        id="signatureRequired"
                        checked={values.preferences.signatureRequired}
                        onChange={handleCheck('preferences', 'signatureRequired')}
                        style={{ transform: 'scale(1.3)', transformOrigin: 'left center' }}
                        />
                        <p className="m-0">Sì, è richiesto una firma</p>
                    </div>
                    <div className="d-flex gap-2 align-items-center mb-2">
                        <Form.Check
                        type="checkbox"
                        id="signatureNotRequired"
                        checked={values.preferences.signatureNotRequired}
                        onChange={handleCheck('preferences', 'signatureNotRequired')}
                        style={{ transform: 'scale(1.3)', transformOrigin: 'left center' }}
                        />
                        <p className="m-0">No, non è richiesta la firma</p>
                    </div>
                </div>
                <div className='w-50'>
                    <h5 className='fw-bold mb-1 mt-0'>Tempo massimo di consegna</h5>
                    <p style={{ color: "#686868" }} className="m-0 mb-1">
                    Cercheremo di raccomandare metodi che consentano di consegnare almeno il 95% dei vostri pacchi entro questo termine.
                    </p>
                    <input
                    className="input-product w-100"
                    placeholder="Nessuna preferenza (giorni)"
                    type="number"
                    value={values.maxDays}         
                    onChange={handleChange('maxDays')} 
                    />
                </div>
            </div>
        </div>
        <Button onClick={() => {save()}}>Aggiorna impostazioni</Button>
      </div>
    </>
  )
}

export default ShippingDefaultsForm