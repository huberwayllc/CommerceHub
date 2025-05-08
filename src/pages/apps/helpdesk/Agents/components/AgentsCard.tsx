import { Button, Card, CardBody, Col, Row } from 'react-bootstrap'
import { AgentsTestimonial } from '../data'

const AgentsCard = ({ agents }: { agents: AgentsTestimonial }) => {
	const { image, name, rating, agentsID, place, lastMsg, like, dislike } =
		agents
	return (
		<Col lg="4">
			<Card>
				<CardBody>
					<div className="media mb-3">
						<img
							src={image}
							className="me-3 thumb-md align-self-center rounded-circle"
							alt="..."
						/>
						<div className="media-body align-self-center">
							<h4 className="mt-0 mb-0 font-15">
								{name}{' '}
								<span className="badge badge-soft-warning font-12">
									{rating} <i className="mdi mdi-star text-warning ms-1" />
								</span>
							</h4>
							<p className="text-muted mb-0 font-12">
								ID : #{agentsID}, {place}{' '}
							</p>
						</div>
					</div>
					<p className="text-muted  mb-0">
						<span className="text-dark fw-semibold">Last Message :</span>{' '}
						{lastMsg}
					</p>
					<hr className="hr-dashed" />
					<Row className="align-items-center">
						<Col>
							<Button
								type="button"
								size="sm"
								variant="secondary"
								className="btn-de-secondary"
							>
								Send SMS
							</Button>{' '}
							<Button
								type="button"
								size="sm"
								variant="primary"
								className="btn-de-primary"
							>
								Send Email
							</Button>
						</Col>
						<Col xs="auto">
							<div className="align-self-center d-inline-block">
								<span className="fw-semibold">Satisfied : </span>
							</div>{' '}
							<div className="align-self-center d-inline-block">
								<i className="lar la-thumbs-up text-success font-20" />
								<span className="font-14 fw-semibold"> {like}</span>
							</div>{' '}
							<div className="align-self-center ms-2 d-inline-block">
								<i className="lar la-thumbs-down text-danger font-20" />
								<span className="font-14 fw-semibold"> {dislike}</span>
							</div>
						</Col>
					</Row>
				</CardBody>
			</Card>
		</Col>
	)
}

export default AgentsCard
