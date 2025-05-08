import { Button, Card, CardBody, Col } from 'react-bootstrap'
import { ClientType } from '../data'

const ClientCard = ({ clients }: { clients: ClientType }) => {
	const { image, name, location, phone, description } = clients
	return (
		<Col lg="3">
			<Card className="client-card">
				<CardBody className="text-center">
					<img src={image} alt="user" className="rounded-circle thumb-xl" />
					<h5 className="client-name">{name}</h5>
					<span className="text-muted me-3">
						<i className="la la-map-marker me-2 text-secondary" />
						{location}
					</span>
					<span className="text-muted">
						<i className="la la-phone me-2 text-secondary" />
						{phone}
					</span>
					<p className="text-muted text-center mt-3">{description}</p>
					<Button type="button" size="sm" variant="de-primary">
						Project
					</Button>{' '}
					<Button type="button" size="sm" variant="de-primary">
						Message
					</Button>
				</CardBody>
			</Card>
		</Col>
	)
}

export default ClientCard
