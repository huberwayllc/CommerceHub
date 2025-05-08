import { Card, CardBody, Col, ProgressBar } from 'react-bootstrap'

const OverallRating = () => {
	return (
		<Col md="4">
			<Card>
				<CardBody>
					<div className="p-2 bg-light text-center align-item-center">
						<h1 className="fw-bold my-0">4.8</h1>
						<h4 className="header-title mb-0">Overall Rating</h4>
						<ul className="list-inline mb-0">
							<li className="list-inline-item me-0">
								<i className="mdi mdi-star text-warning font-18" />
							</li>
							<li className="list-inline-item me-0">
								<i className="mdi mdi-star text-warning font-18" />
							</li>
							<li className="list-inline-item me-0">
								<i className="mdi mdi-star text-warning font-18" />
							</li>
							<li className="list-inline-item me-0">
								<i className="mdi mdi-star text-warning font-18" />
							</li>
							<li className="list-inline-item">
								<i className="mdi mdi-star-half text-warning font-18" />
							</li>
							<li className="list-inline-item">
								<small className="text-muted">Total Review (700)</small>
							</li>
						</ul>
					</div>
					<ul className="list-unstyled mt-3">
						<li className="mb-2">
							<span className="text-dark">5 Star</span>
							<small className="float-end text-muted ms-3 font-14">593</small>
							<ProgressBar
								className="mt-2"
								now={80}
								style={{ height: 5, borderRadius: 5 }}
							/>
						</li>
						<li className="mb-2">
							<span className="text-dark">4 Star</span>
							<small className="float-end text-muted ms-3 font-14">99</small>
							<div className="progress mt-2" style={{ height: 5 }}>
								<div
									className="progress-bar"
									role="progressbar"
									style={{ width: '18%', borderRadius: 5 }}
									aria-valuenow={18}
									aria-valuemin={0}
									aria-valuemax={100}
								/>
							</div>
						</li>
						<li className="mb-2">
							<span className="text-dark">3 Star</span>
							<small className="float-end text-muted ms-3 font-14">6</small>
							<div className="progress mt-2" style={{ height: 5 }}>
								<div
									className="progress-bar"
									role="progressbar"
									style={{ width: '10%', borderRadius: 5 }}
									aria-valuenow={10}
									aria-valuemin={0}
									aria-valuemax={100}
								/>
							</div>
						</li>
						<li className="mb-2">
							<span className="text-dark">2 Star</span>
							<small className="float-end text-muted ms-3 font-14">2</small>
							<div className="progress mt-2" style={{ height: 5 }}>
								<div
									className="progress-bar"
									role="progressbar"
									style={{ width: '1%', borderRadius: 5 }}
									aria-valuenow={1}
									aria-valuemin={0}
									aria-valuemax={100}
								/>
							</div>
						</li>
						<li>
							<span className="text-dark">1 Star</span>
							<small className="float-end text-muted ms-3 font-14">0</small>
							<div className="progress mt-2" style={{ height: 5 }}>
								<div
									className="progress-bar"
									role="progressbar"
									style={{ width: '0%', borderRadius: 5 }}
									aria-valuenow={0}
									aria-valuemin={0}
									aria-valuemax={100}
								/>
							</div>
						</li>
					</ul>
					<div>
						<h3 className="d-inline-block m-0 font-18">98.5%</h3>{' '}
						<h4 className="header-title d-inline-block me-2 mb-1 mb-lg-0 font-13">
							Satisfied Customer
						</h4>{' '}
						<span className="text-end ms-auto d-inline-block">
							<i className="far fa-smile font-24 text-warning" />
						</span>
					</div>
				</CardBody>
			</Card>
		</Col>
	)
}

export default OverallRating
