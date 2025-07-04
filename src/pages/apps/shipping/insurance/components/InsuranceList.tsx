import React, { useState } from "react";
import {Button, Form, Modal } from "react-bootstrap";
import { FaCheckCircle } from "react-icons/fa";

const InsuranceList: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  const handleOpen = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

   const [selectedOption, setSelectedOption] = useState<'percentuale' | 'manuale' | null>(null);

  return (
    <div className='mt-4'>
        <div className="card p-3">
            <h5 className="fw-bold">Motivi per proteggere le tue spedizioni</h5>
            <p>Se succede qualcosa di inaspettato, <strong style={{color: "#03a678"}}>ti copriamo con:</strong></p>

            <div className="d-flex align-items-center gap-4 justify-content-between">
                <div className="w-100 d-flex flex-column align-items-center text-center">
                    <div style={{height: "90px"}}>
                    <img style={{width: "90px"}}
                     src="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='100'%20height='100'%20fill='none'%3e%3cpath%20fill='url(%23a)'%20d='M50%2045.91c8.535%200%2015.454-6.92%2015.454-15.455C65.454%2021.919%2058.535%2015%2050%2015c-8.536%200-15.455%206.92-15.455%2015.455S41.465%2045.91%2050%2045.91Z'/%3e%3cpath%20fill='%23112857'%20d='M82.38%2057.441c-1.883-1.882-4.903-1.882-6.747%200l-7.766%207.767H47.313a3.784%203.784%200%200%201-3.805-3.805%203.808%203.808%200%200%201%203.805-3.805h9.531c2.119%200%203.805-1.765%203.805-3.883a3.809%203.809%200%200%200-3.805-3.805H37.938c-4.158%200-8.08%201.608-11.023%204.55L16.246%2065.09%2030.29%2079.133l4.393-4.393h33.42c2.354%200%204.59-.902%206.276-2.589l7.963-7.963c1.883-1.883%201.883-4.903%200-6.747h.04Z'/%3e%3cpath%20stroke='%23fff'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2.432'%20d='M64.48%2037.77c-1.907%202.23-5.067%203.716-8.717%203.716-5.775%200-10.46-3.757-10.46-8.381%200-4.625%204.685-8.382%2010.46-8.382%203.595%200%206.81%201.486%208.717%203.716M42.523%2035.664h9.208M42.523%2031.121H53.42'/%3e%3cdefs%3e%3clinearGradient%20id='a'%20x1='65.611'%20x2='34.702'%20y1='30.455'%20y2='30.455'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%2300D3F7'/%3e%3cstop%20offset='1'%20stop-color='%230D9CFF'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e"/>
                    </div>
                    <h6 className="fw-bold">Copertura Completa</h6>
                    <p>Sei coperto fino a 5.000 € per spedizione per danni, smarrimento e furto.</p>
                </div>
                <div className="w-100 d-flex flex-column align-items-center text-center">
                    <div style={{height: "90px"}}>
                    <img style={{width: "90px"}} 
                    src="data:image/svg+xml,%3csvg%20width='76'%20height='95'%20viewBox='0%200%2076%2095'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M66.7924%2016.8789H9.60168C5.8972%2016.8789%202.89417%2019.882%202.89417%2023.5864V57.2418C2.89417%2060.9463%205.8972%2063.9494%209.60168%2063.9494H66.7924C70.4969%2063.9494%2073.4999%2060.9463%2073.4999%2057.2418V23.5864C73.4999%2019.882%2070.4969%2016.8789%2066.7924%2016.8789Z'%20fill='url(%23paint0_linear_2196_21583)'/%3e%3cpath%20d='M14.6617%2023.7425C15.4632%2023.7425%2016.113%2023.0927%2016.113%2022.2912C16.113%2021.4896%2015.4632%2020.8398%2014.6617%2020.8398C13.8601%2020.8398%2013.2104%2021.4896%2013.2104%2022.2912C13.2104%2023.0927%2013.8601%2023.7425%2014.6617%2023.7425Z'%20fill='%23112857'/%3e%3cpath%20d='M19.0549%2023.7425C19.8565%2023.7425%2020.5063%2023.0927%2020.5063%2022.2912C20.5063%2021.4896%2019.8565%2020.8398%2019.0549%2020.8398C18.2534%2020.8398%2017.6036%2021.4896%2017.6036%2022.2912C17.6036%2023.0927%2018.2534%2023.7425%2019.0549%2023.7425Z'%20fill='%23112857'/%3e%3cpath%20d='M10.3078%2023.7425C11.1093%2023.7425%2011.7592%2023.0927%2011.7592%2022.2912C11.7592%2021.4896%2011.1093%2020.8398%2010.3078%2020.8398C9.50621%2020.8398%208.85645%2021.4896%208.85645%2022.2912C8.85645%2023.0927%209.50621%2023.7425%2010.3078%2023.7425Z'%20fill='%23112857'/%3e%3cpath%20d='M62.6345%2034.332H13.6028C12.5196%2034.332%2011.6415%2035.2101%2011.6415%2036.2932V46.9233C11.6415%2048.0065%2012.5196%2048.8846%2013.6028%2048.8846H62.6345C63.7177%2048.8846%2064.5958%2048.0065%2064.5958%2046.9233V36.2932C64.5958%2035.2101%2063.7177%2034.332%2062.6345%2034.332Z'%20fill='white'/%3e%3cpath%20d='M53.2596%2068.2634H65.0665C66.3217%2068.2634%2066.9101%2066.7728%2066.0471%2065.8706L45.9637%2045.7087C44.5516%2044.2966%2042.1588%2045.2773%2042.1588%2047.2778V75.8731C42.1588%2077.1283%2043.6493%2077.7167%2044.5123%2076.8537L53.2596%2068.2241V68.2634Z'%20fill='%23112857'/%3e%3cdefs%3e%3clinearGradient%20id='paint0_linear_2196_21583'%20x1='2.89417'%20y1='40.4141'%20x2='73.4999'%20y2='40.4141'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%2300D3F7'/%3e%3cstop%20offset='1'%20stop-color='%230D9CFF'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e"/>
                    </div>
                    <h6 className="fw-bold">Copre una nuova spedizione e la spedizione del reso</h6>
                    <p>Sei coperto per il prezzo al dettaglio, inclusi i costi di una nuova spedizione e di reso</p>
                </div>
                <div className="w-100 d-flex flex-column align-items-center text-center">
                    <div style={{height: "90px"}}>
                    <img style={{width: "90px"}}
                     src="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='100'%20height='95'%20fill='none'%3e%3cpath%20fill='url(%23a)'%20d='M77.318%2031.398c-1.412-5.531-4.668-8.238-9.963-8.238H32.953c-5.296%200-8.551%202.707-9.963%208.238-1.295%205.06-1.491%2011.336-1.491%2014.67v2.863c0%203.295.196%209.61%201.49%2014.67%201.413%205.531%204.668%208.238%209.964%208.238h34.4c5.296%200%208.552-2.707%209.964-8.237%201.294-5.06%201.49-11.337%201.49-14.67v-2.864c0-3.295-.196-9.61-1.49-14.67Z'/%3e%3cpath%20fill='%23112857'%20d='M67.756%2038.531H54.89a2.154%202.154%200%200%200-2.158%202.15c0%201.188.966%202.15%202.158%202.15h12.866a2.154%202.154%200%200%200%202.157-2.15c0-1.187-.966-2.15-2.157-2.15ZM67.716%2054.207H54.93a2.154%202.154%200%200%200-2.157%202.15c0%201.188.965%202.15%202.157%202.15h12.787a2.154%202.154%200%200%200%202.158-2.15c0-1.187-.966-2.15-2.158-2.15Z'/%3e%3cpath%20fill='%23fff'%20d='M45.672%2034.463a2.16%202.16%200%200%200-3.02%200l-5.531%205.512-2.903-2.892a2.16%202.16%200%200%200-3.02%200%202.142%202.142%200%200%200%200%203.01l4.393%204.378c.432.43.98.626%201.53.626a2.14%202.14%200%200%200%201.53-.626l7.021-6.997c.824-.821.824-2.19%200-3.01ZM45.672%2050.022a2.16%202.16%200%200%200-3.02%200l-5.531%205.512-2.903-2.893a2.16%202.16%200%200%200-3.02%200%202.142%202.142%200%200%200%200%203.01l4.393%204.379c.432.43.98.625%201.53.625a2.14%202.14%200%200%200%201.53-.625l7.021-6.998a2.142%202.142%200%200%200%200-3.01Z'/%3e%3cdefs%3e%3clinearGradient%20id='a'%20x1='21.5'%20x2='78.808'%20y1='47.48'%20y2='47.48'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%2300D3F7'/%3e%3cstop%20offset='1'%20stop-color='%230D9CFF'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e"/>
                    </div>
                    <h6 className="fw-bold">Reclami e rimborsi rapidi</h6>
                    <p>Approfitta della possibilità d'inoltrare reclami con tempi di risoluzione rapidi, generalmente inferiori a 1 giorno.</p>
                </div>
            </div>

            <div className="mt-3 borderGray rounded-3">
                <div className="d-flex gap-3 p-2 py-3">
                    <div className="w-100">
                        <h5 style={{color: "#4d5e81"}} className="m-0">Nazionale</h5>
                    </div>
                    <div className="w-100">
                        <h5 style={{color: "#4d5e81"}} className="m-0">Internazionale</h5>
                    </div>
                </div>
                <div style={{backgroundColor: "#f5f6fa"}} className="d-flex gap-3 p-2 py-3">
                    <div className="w-100">
                        <p className="m-0 fw-semibold">0,6% del valore assicurato, incl. IVA</p>
                    </div>
                    <div className="w-100">
                        <p className="m-0 fw-semibold">1,5% del valore assicurato, incl. IVA</p>
                    </div>
                </div>
                <div className="d-flex gap-3 p-2 py-3">
                    <div className="w-100">
                        <p className="m-0 fw-semibold">Assicurare un valore di 100 € costa 0,60 €, incl. IVA</p>
                    </div>
                    <div className="w-100">
                        <p className="m-0 fw-semibold">Assicurare un valore di 100 € costa 1,50 €, incl. IVA</p>
                    </div>
                </div>
            </div>

            <div className="d-inline-flex gap-3 mt-3">
                <Button onClick={handleOpen}>Inizia</Button>
                <Button className="bg-transparent text-black">Scopri di più</Button>
            </div>

        </div>

    <Modal show={showModal} size="lg">
        <Modal.Body>
          <h3 className="text-black fw-semibold mb-3">Proteggi le mie spedizioni</h3>
          <p className="m-0 text-black fw-semibold">Sarai protetto contro:</p>
          <div  style={{ flexWrap: 'wrap' }} className="d-flex gap-3 align-items-center mt-2">
            <div className="d-flex align-items-center gap-1">
                <FaCheckCircle style={{color: "#03a678", fontSize: "16px"}}/>
                <p className="m-0 text-black fw-semibold">Furto e perdita della spedizione</p>
            </div>
            <div className="d-flex align-items-center gap-1">
                <FaCheckCircle style={{color: "#03a678", fontSize: "16px"}}/>
                <p className="m-0 text-black fw-semibold">Costi per la spedizione del reso</p>
            </div>
            <div className="d-flex align-items-center gap-1">
                <FaCheckCircle style={{color: "#03a678", fontSize: "16px"}}/>
                <p className="m-0 text-black fw-semibold">Danni causati dalla spedizione</p>
            </div>
             <div className="d-flex align-items-center gap-1">
                <FaCheckCircle style={{color: "#03a678", fontSize: "16px"}}/>
                <p className="m-0 text-black fw-semibold">Costi di rispedizione</p>
            </div>
          </div>
          <div className="mt-2 d-flex gap-2 align-items-start">
            <Form.Check 
            type="checkbox"
            style={{ transform: 'scale(1.2)'}}
            />
            <div>
                <h6 className="m-0 mt-0">Accetta Termini e condizioni sulla protezione delal spedizione</h6>
                <p >Costi assicurativi nazionali: 0,6% del valore assicurato. Costi assicurativi internazionali: 1,5% del valore assicurato. Prezzi incl. IVA.</p>
            </div>
          </div>

          <div className="p-3 borderGray rounded-3">
            <h5 className="m-0 fw-bold">Opzini di protezine delle spedizioni</h5>
            <p className="mt-1 text-black">La copertura è fornita dal nostro pluripremiato partner di fiducia</p>

            <div className="mt-4">
                <h6 className="fw-bold mb-1">Assicura automaticamente tutte le spedizioin in base a una percentuale</h6>
                <div className="d-flex gap-2 align-items-center">
                     <Form.Check
                        type="radio"
                        checked={selectedOption === 'percentuale'}
                        onChange={() => setSelectedOption('percentuale')}
                        style={{ transform: 'scale(1.2)'}}
                    />
                    <p className="mb-0 text-black">Assicura il</p>
                    <input style={{width: "100px"}} className="input-product"/>
                    <p className="mb-0 text-black">% del valore della spedizione per tutti i pacchi</p>
                </div>
            </div>

            <div className="mt-4">           
                <h6 className="fw-bold m-0 mb-1">Aggiungi l'assicurazione solo quando ne hai bisogno</h6>
                <div className="d-flex gap-2 align-items-start">
                         <Form.Check
                            type="radio"
                            checked={selectedOption === 'manuale'}
                            onChange={() => setSelectedOption('manuale')}
                            style={{ transform: 'scale(1.2)' }}
                        />
                    <p> Nessuna assicurazione predefinita. Aggiungila manualmente per ogni ordine o automatizzala con regole di spedizione adatte alle tue esigenze (ad esempio per i pacchi che superano un determinato valore).</p>
                </div>
            </div>
          </div>

          <p style={{fontSize: "11px"}} className="mt-2">Aggiungendo la protezione della spedizione confermi di aver letto e accettato le Condizioni della polizza e il documento informativo sul prodotto assicurativo. Selezionando questa assicurazione confermi di aver registrato la tua azienda in Italia e di avere più di 18</p>
          
        </Modal.Body>
        <Modal.Footer>
            <div className="w-100 gap-2 d-flex">
                 <Button variant="primary" onClick={() => {
                    handleClose();
                }}>
                    Conferma
                </Button>
                <Button className="bg-transparent text-black" onClick={handleClose}>
                    Annulla
                </Button>
            </div>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default InsuranceList;
