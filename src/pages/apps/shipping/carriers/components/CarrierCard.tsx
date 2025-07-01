import { Button, Card } from 'react-bootstrap';
import { FaCheck } from 'react-icons/fa';

export interface Carrier {
  id: string;
  name: string;
  logoUrl: string;
  features: string[];
  upgradeMessage: string;
  upgradeButtonText: string;
}


export const CarrierCard = ({ carrier }: { carrier: Carrier }) => {
  return (
    <Card className="h-100">
      <Card.Body className="d-flex flex-column">
        <Card.Title className="fw-bold">{carrier.name}</Card.Title>
        <div className="d-flex justify-content-center my-4">
          {carrier.logoUrl ? (
            <img src={carrier.logoUrl} alt={`${carrier.name} logo`} style={{ width: "40%" }} />
          ) : (
            <div style={{ width: 70 }} />
          )}
        </div>
        <div className="flex-fill">
          {carrier.features.map((feat, idx) => (
            <div className="d-flex align-items-center mb-1" key={idx}>
              <FaCheck className="me-1" />
              <small className="m-0">{feat}</small>
            </div>
          ))}
        </div>
        <div>
          <small className="text-muted" style={{ fontSize: '11px' }}>
            {carrier.upgradeMessage}
          </small>
          <div className="mt-2">
            <Button size="sm">{carrier.upgradeButtonText}</Button>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};