import { Tabs, Tab, Row, Col } from 'react-bootstrap';
import { CarrierCard } from './CarrierCard';
import carriersData from './carriersData.json';

export interface Carrier {
  id: string;
  name: string;
  logoUrl: string;
  features: string[];
  upgradeMessage: string;
  upgradeButtonText: string;
}

const CarriersList = () => {
  return (
    <>
      <Tabs defaultActiveKey="select" id="carriers-tabs" className="mb-0 mt-4 fw-bold">
        <Tab eventKey="select" title="Seleziona Corriere">
          <div className="w-100 card p-3 mb-4">
            <h6 className="fw-bold">Scegli il Paese per i tuoi corrieri</h6>
            <p>Italia</p>
          </div>
          <Row xs={1} sm={2} lg={3} className="g-3">
            {carriersData.map((carrier) => (
              <Col key={carrier.id}>
                <CarrierCard carrier={carrier} />
              </Col>
            ))}
          </Row>
        </Tab>

        <Tab eventKey="contracts" title="I miei contratti">
          {/* Contenuto del tab I miei contratti */}
          <div className="w-100 card p-3 mb-4">
            <h6 className="fw-bold">I tuoi contratti attivi</h6>
            <p>Visualizza e gestisci i contratti con i corrieri</p>
          </div>
          <div className="w-100 card p-3 mb-4">
            <h6 className="fw-bold">Perché dovrei aggiungere i miei prezzi?</h6>
            <p></p>
          </div>

        </Tab>
      </Tabs>
    </>
  );
};

export default CarriersList;