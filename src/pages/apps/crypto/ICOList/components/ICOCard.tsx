import { Card, CardBody, CardHeader, Col, Image, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { type ICOList } from '../data'

const ICOCard = ({ image, name, status }: ICOList) => {
	return (
		<Card>
			<CardHeader>
				<Row className="align-items-center">
					<Col>
						<div className="media">
							<Image
								src={image}
								className="me-2 thumb-sm rounded-circle"
								alt="..."
							/>
							<div className="media-body align-self-center">
								<h5 className="m-0 font-15">{name}</h5>
								<p className="text-muted fw-semibold mb-0">
									Basic Attention Token
								</p>
							</div>
						</div>
					</Col>
					<Col xs="auto">
						<span
							className={`badge bg-soft-${status == 'End' ? 'danger' : 'success'}`}
						>
							ICO {status}
						</span>
					</Col>
				</Row>
			</CardHeader>
			<CardBody>
				<Row>
					<Col md={6}>
						<p className="mb-0 ">
							Start Date : <span className="text-muted">10/05/2021</span>
						</p>
						<p>
							End Date : <span className="text-muted">20/05/2021</span>
						</p>
					</Col>
					<Col md={6} className="text-end align-self-center">
						<ul className="list-inline">
							{Array.from(new Array(Math.floor(4))).map((_star, idx) => {
								return (
									<li key={idx} className="list-inline-item me-1">
										{' '}
										<i className="fas fa-star text-warning" />
									</li>
								)
							})}
							<li className="list-inline-item me-0">
								<i className="fas fa-star-half-alt text-warning" />
							</li>
						</ul>
					</Col>
				</Row>
				<Link to="" className="btn btn-sm btn-outline-primary float-end ">
					Buy Now
				</Link>
				<ul className="list-inline socials mb-0">
					<li className="list-inline-item me-1">
						<Link to="">
							<i className="fab fa-facebook-f" />
						</Link>
					</li>
					<li className="list-inline-item me-1">
						<Link to="">
							<i className="fab fa-twitter" />
						</Link>
					</li>
					<li className="list-inline-item me-1">
						<Link to="">
							<i className="fab fa-medium-m" />
						</Link>
					</li>
					<li className="list-inline-item me-1">
						<Link to="">
							<i className="fab fa-telegram" />
						</Link>
					</li>
				</ul>
			</CardBody>
		</Card>
	)
}

export default ICOCard
