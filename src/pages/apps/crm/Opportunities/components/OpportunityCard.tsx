import { Card, CardBody, Col, Image, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { OpportunityType } from '../data'

const OpportunityCard = ({ image, name, variant }: OpportunityType) => {
	return (
		<Card>
			<CardBody>
				<Row>
					<Col sm={10}>
						<div className="media">
							<Image
								className="d-flex align-self-center me-3 rounded-circle"
								src={image}
								height={50}
							/>
							<div className="media-body align-self-center">
								<h4 className="mt-0 mb-1 font-15">{name}</h4>
								<ul className="list-inline mb-0 text-muted">
									<li className="list-inline-item me-2">
										<span>
											<i className="far fa-envelope me-1 text-secondary font-14" />
										</span>
										Ernest@Webster.com
									</li>
									&nbsp;
									<li className="list-inline-item">
										<span>
											<i className="fas fa-mobile-alt me-1 text-secondary font-14" />
										</span>
										+1 234 567 890
									</li>
								</ul>
							</div>
						</div>
					</Col>
					<Col sm={2} className="align-self-center">
						<div className="text-end">
							<span className="me-1">
								<i className={`mdi mdi-circle text-${variant} me-1  font-10`} />
							</span>
							<Link to="">
								<i className="las la-pen text-secondary font-16 me-1" />
							</Link>
							<Link to="">
								<i className="las la-trash-alt text-secondary font-16" />
							</Link>
						</div>
					</Col>
				</Row>
			</CardBody>
		</Card>
	)
}

export default OpportunityCard
