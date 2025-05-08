import { Card, CardBody, Col, Image, Row } from 'react-bootstrap'

import avatar4 from '@/assets/images/users/user-4.jpg'
import { Link } from 'react-router-dom'
import { FiBook, FiBookOpen, FiUsers } from 'react-icons/fi'

const LeadStatisticCards = () => {
	return (
		<Row>
			<Col lg={4}>
				<Card>
					<CardBody>
						<div className="media align-items-center">
							<Image
								src={avatar4}
								alt="user"
								className="rounded-circle thumb-md"
							/>
							<div className="media-body ms-2 align-self-center">
								<h5 className="m-0">Merri Diamond</h5>
								<p className="mb-0 text-muted">Lead Manager</p>
							</div>
							<div className="action-btn">
								<Link to="" className="me-2">
									<i className="las la-pen font-16 text-secondary" />
								</Link>
								<Link to="">
									<i className="lar la-trash-alt font-16 text-secondary" />
								</Link>
							</div>
						</div>
					</CardBody>
				</Card>
			</Col>
			<Col lg={8}>
				<Row>
					<Col lg={4}>
						<Card>
							<CardBody>
								<Row>
									<Col xs={4} className="align-self-center">
										<div className="bg-light-alt d-flex justify-content-center align-items-center thumb-md  rounded-circle">
											<FiUsers className="align-self-center text-secondary icon-sm" />
										</div>
									</Col>
									<Col xs={8} className="align-self-center text-end">
										<p className="text-muted mb-1 fw-semibold font-13">
											Total Leads
										</p>
										<h4 className="m-0">1935</h4>
									</Col>
								</Row>
							</CardBody>
						</Card>
					</Col>
					<Col lg={4}>
						<Card>
							<CardBody>
								<Row>
									<Col xs={4} className="align-self-center">
										<div className="bg-light-alt d-flex justify-content-center align-items-center thumb-md  rounded-circle">
											<FiBookOpen className="align-self-center text-secondary icon-sm" />
										</div>
									</Col>
									<Col xs={8} className="align-self-center text-end">
										<p className="text-muted mb-1 fw-semibold font-13">Open</p>
										<h4 className="m-0 d-inline-block me-1">1240</h4>
										<span className="badge bg-soft-success mt-1">Active</span>
									</Col>
								</Row>
							</CardBody>
						</Card>
					</Col>
					<Col lg={4}>
						<Card>
							<CardBody>
								<Row>
									<Col xs={4} className="align-self-center">
										<div className="bg-light-alt d-flex justify-content-center align-items-center thumb-md  rounded-circle">
											<FiBook className="align-self-center text-secondary icon-sm" />
										</div>
									</Col>
									<Col xs={8} className="align-self-center text-end">
										<p className="text-muted mb-1 fw-semibold font-13">Close</p>
										<h4 className="m-0">240</h4>
									</Col>
								</Row>
							</CardBody>
						</Card>
					</Col>
				</Row>
			</Col>
		</Row>
	)
}

export default LeadStatisticCards
