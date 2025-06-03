// FeatureBoxGrid.tsx
import React from 'react';
import { GrDocumentUpdate } from 'react-icons/gr';
import { CiExport } from 'react-icons/ci';
import { Button, Dropdown } from 'react-bootstrap';
import { FaChevronDown } from 'react-icons/fa';

const FeatureBoxGrid: React.FC = () => {
  return (
  			<div className='mt-5 mb-3'>
				<div className='d-flex align-items-start justify-content-between gap-3'>
					<div className='w-50 d-flex align-items-start gap-3'>
						<div style={{width: "15%"}}>
							<GrDocumentUpdate style={{fontSize: "80px"}}/>
						</div>
						
						<div style={{width: "85%", maxWidth: "500px"}}>
							<h6 className='text-black fw-bold fs-5 mt-0'>Aggiorna in blocco </h6>
							<p>Per accedere a più strumenti di aggiornamento di massa, seleziona uno o più prodotti.</p>
							<Dropdown>
								<Dropdown.Toggle style={{ height: '33px', fontSize: "14px" }} className="fw-semibold text-black bg-transparent text-black d-flex align-items-start gap-1">
								aggiornamento di massa
								 <FaChevronDown style={{position: "relative", top: "3px"}}/>
								</Dropdown.Toggle>

								<Dropdown.Menu>
									<Dropdown.Item className='fw-semibold' style={{height: "40px"}} href="#importa">Modifica tutti</Dropdown.Item>
									<Dropdown.Item className='fw-semibold' style={{height: "40px"}} href="#esporta">Attiva o disattiva</Dropdown.Item>
									<Dropdown.Item className='fw-semibold' style={{height: "40px"}} href="#esporta">Configura prezzi</Dropdown.Item>
									<Dropdown.Item className='fw-semibold' style={{height: "40px"}} href="#esporta">Promuovi alla Vetrina</Dropdown.Item>
									<Dropdown.Item className='fw-semibold' style={{height: "40px"}} href="#esporta">Spedizione e ritiro</Dropdown.Item>
									<Dropdown.Item className='fw-semibold' style={{height: "40px"}} href="#esporta">Tasse</Dropdown.Item>
								</Dropdown.Menu>
							</Dropdown>
						</div>
						
					</div>
					<div className='w-50 d-flex align-items-start gap-3'>
						<div style={{width: "15%"}}>
							<CiExport style={{fontSize: "80px"}}/>
						</div>
						
						<div style={{width: "85%", maxWidth: "500px"}}>
							<h6 className='text-black fw-bold fs-5 mt-0'>Esporta prodotti </h6>
							<p>L'esportazione dei prodotti produce un file CSV contenente tutte le informazioni dei prodotti selezionati. Puoi modificare il file CSV con qualsiasi foglio di calcolo e reimportarlo nel tuo negozio per aggiornare il tuo catalogo interamente. Scopri di più sull'esportazione dei dati: Conoscenza di Base.</p>
							<Button className='bg-transparent text-black fw-semibold'>Aggiorna per ottenre questa funzionalità</Button>
						</div>
						
					</div>
				</div>


				<div className='d-flex align-items-start justify-content-between gap-3 mt-5'>
					<div className='w-50 d-flex align-items-start gap-3'>
						<div style={{width: "15%"}}>
							<GrDocumentUpdate style={{fontSize: "80px"}}/>
						</div>
						
						<div style={{width: "85%", maxWidth: "500px"}}>
							<h6 className='text-black fw-bold fs-5 mt-0'>Importa prodotti </h6>
							<p>L'importazione dei prodotti converte i dati provenienti dal file CSV in nuovi prodotti, o aggiorna quelli già esistenti.</p>
							<Button className='bg-transparent text-black fw-semibold'>Importa prodotti</Button>
						</div>
						
					</div>
					<div className='w-50 d-flex align-items-start gap-3'>
						<div style={{width: "15%"}}>
							<CiExport style={{fontSize: "80px"}}/>
						</div>
						
						<div style={{width: "85%", maxWidth: "500px"}}>
							<h6 className='text-black fw-bold fs-5 mt-0'>Automatizza la gestione del catalogo </h6>
							<p>Il nostro team di personalizzazione può aiutarti ad automatizzare l'aggiornamento dei prezzi, a sincronizzare le scorte con un sistema esterno di gestione dell'inventario e altro ancora.</p>
							<Button className='bg-transparent text-black fw-semibold'>Scopri di più</Button>
						</div>
						
					</div>
				</div>
			</div>
  );
};

export default FeatureBoxGrid;
