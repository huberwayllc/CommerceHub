import { Card, CardBody, Image } from 'react-bootstrap'
import { type ClientType } from '../data'

const ClientCard = ({ description, image, name }: ClientType) => {
	return (
		<Card>
			<CardBody className="text-center">
				<Image src={image} alt="user" className="rounded-circle thumb-xl" />
				<h5 className="font-15">{name}</h5>
				<span className="text-muted me-3">
					<i className="las la-map-marker me-1 text-secondary" />
					New York, USA
				</span>
				<span className="text-muted">
					<i className="las la-phone me-1 text-secondary" />
					+1 123 456 789
				</span>
				<p className="text-muted mt-1">{description}</p>
				<button type="button" className="btn btn-sm btn-de-primary me-1">
					Project
				</button>
				<button type="button" className="btn btn-sm btn-de-primary">
					Message
				</button>
			</CardBody>
		</Card>
	)
}

export default ClientCard
