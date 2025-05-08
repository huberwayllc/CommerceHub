import { Card, CardBody, Col, Row } from 'react-bootstrap'
import { FiLock, FiPackage, FiTag, FiZap } from 'react-icons/fi'

const Statistics = () => {
	return (
		<Card className="overflow-hidden">
			<Row className="g-0">
				<Col md={6} lg={3} className="border-b border-e border-bo">
					<CardBody>
						<Row className="d-flex justify-content-center">
							<Col>
								<div className="media">
									<div className="bg-light-alt d-flex justify-content-center align-items-center thumb-md  rounded-circle">
										<FiTag className="align-self-center text-muted icon-sm" />
									</div>
									<div className="media-body align-self-center ms-2">
										<p className="text-dark mb-1 fw-semibold">New Tickets</p>
										<p className="mb-0 text-truncate text-muted">
											From Average Yesterday
										</p>
									</div>
								</div>
							</Col>
							<Col xs="auto" className="align-self-center">
								<h4 className="my-1">155</h4>
							</Col>
						</Row>
					</CardBody>
				</Col>
				<Col md={6} lg={3} className="border-b border-e border-bo">
					<CardBody>
						<Row className="d-flex justify-content-center">
							<Col>
								<div className="media">
									<div className="bg-light-alt d-flex justify-content-center align-items-center thumb-md  rounded-circle">
										<FiPackage className="align-self-center text-muted icon-sm" />
									</div>
									<div className="media-body align-self-center ms-2">
										<p className="text-dark mb-1 fw-semibold">Open Tickets</p>
										<p className="mb-0 text-truncate text-muted">
											From Average Yesterday
										</p>
									</div>
								</div>
							</Col>
							<Col xs="auto" className="align-self-center">
								<h4 className="my-1">102</h4>
							</Col>
						</Row>
					</CardBody>
				</Col>
				<Col md={6} lg={3} className="border-b border-e">
					<CardBody>
						<Row className="d-flex justify-content-center">
							<Col>
								<div className="media">
									<div className="bg-light-alt d-flex justify-content-center align-items-center thumb-md  rounded-circle">
										<FiZap className="align-self-center text-muted icon-sm" />
									</div>
									<div className="media-body align-self-center ms-2">
										<p className="text-dark mb-1 fw-semibold">On Hold</p>
										<p className="mb-0 text-truncate text-muted">
											From Average Yesterday
										</p>
									</div>
								</div>
							</Col>
							<Col xs="auto" className="align-self-center">
								<h4 className="my-1">14</h4>
							</Col>
						</Row>
					</CardBody>
				</Col>
				<Col md={6} lg={3} className="ps-lg-0">
					<CardBody>
						<Row className="d-flex justify-content-center">
							<Col>
								<div className="media">
									<div className="bg-light-alt d-flex justify-content-center align-items-center thumb-md  rounded-circle">
										<FiLock className="align-self-center text-muted icon-sm" />
									</div>
									<div className="media-body align-self-center ms-2">
										<p className="text-dark mb-1 fw-semibold">Unassigned</p>
										<p className="mb-0 text-truncate text-muted">
											From Average Yesterday
										</p>
									</div>
								</div>
							</Col>
							<Col xs="auto" className="align-self-center">
								<h4 className="my-1">75</h4>
							</Col>
						</Row>
					</CardBody>
				</Col>
			</Row>
		</Card>
	)
}

export default Statistics
