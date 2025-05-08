import { Card, CardBody, Col, Row } from 'react-bootstrap'
import { FaDollarSign } from 'react-icons/fa'
import { FiCheckSquare, FiClock, FiLayers } from 'react-icons/fi'

const Statistics = () => {
	return (
		<Row className="justify-content-center">
			<Col md={6} lg={3}>
				<Card className="report-card">
					<CardBody>
						<Row className="d-flex justify-content-center">
							<Col>
								<p className="text-dark mb-1 fw-semibold">Projects</p>
								<h4 className="my-1">77</h4>
								<p className="mb-0 text-truncate text-muted">
									<span className="text-success">
										<i className="mdi mdi-checkbox-marked-circle-outline me-1" />
									</span>
									26 Project Complete
								</p>
							</Col>
							<Col xs="auto" className="align-self-center">
								<div className="bg-light-alt d-flex justify-content-center align-items-center thumb-md  rounded-circle">
									<FiLayers className="align-self-center text-muted icon-sm" />
								</div>
							</Col>
						</Row>
					</CardBody>
				</Card>
			</Col>
			<Col md={6} lg={3}>
				<Card className="report-card">
					<CardBody>
						<Row className="d-flex justify-content-center">
							<Col>
								<p className="text-dark mb-1 fw-semibold">Tasks</p>
								<h4 className="my-1">41</h4>
								<p className="mb-0 text-truncate text-muted">
									<span className="badge badge-soft-success">Active</span>{' '}
									Weekly Avg.Sessions
								</p>
							</Col>
							<Col xs="auto" className="align-self-center">
								<div className="bg-light-alt d-flex justify-content-center align-items-center thumb-md  rounded-circle">
									<FiCheckSquare className="align-self-center text-muted icon-sm" />
								</div>
							</Col>
						</Row>
					</CardBody>
				</Card>
			</Col>
			<Col md={6} lg={3}>
				<Card className="report-card">
					<CardBody>
						<Row className="d-flex justify-content-center">
							<Col>
								<p className="text-dark mb-1 fw-semibold">Total Hours</p>
								<h4 className="my-1">801:30</h4>
								<p className="mb-0 text-truncate text-muted">
									<span className="text-muted">01:33</span> /
									<span className="text-muted">9:30</span> Duration
								</p>
							</Col>
							<Col xs="auto" className="align-self-center">
								<div className="bg-light-alt d-flex justify-content-center align-items-center thumb-md  rounded-circle">
									<FiClock className="align-self-center text-muted icon-sm" />
								</div>
							</Col>
						</Row>
					</CardBody>
				</Card>
			</Col>
			<Col md={6} lg={3}>
				<Card className="report-card">
					<CardBody>
						<Row className="d-flex justify-content-center">
							<Col>
								<p className="text-dark mb-1 fw-semibold">Budget</p>
								<h4 className="my-1">$24100</h4>
								<p className="mb-0 text-truncate text-muted">
									<span className="text-dark">$14k</span> Total used budgets
								</p>
							</Col>
							<Col xs="auto" className="align-self-center">
								<div className="bg-light-alt d-flex justify-content-center align-items-center thumb-md  rounded-circle">
									<FaDollarSign className="align-self-center text-muted icon-sm" />
								</div>
							</Col>
						</Row>
					</CardBody>
				</Card>
			</Col>
		</Row>
	)
}

export default Statistics
