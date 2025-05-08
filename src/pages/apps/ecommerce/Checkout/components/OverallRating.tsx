import { Card, CardBody } from 'react-bootstrap'

const OverallRating = () => {
	return (
		<Card>
			<CardBody>
				<div className="text-center align-item-center">
					<h1 className="fw-bold my-0">4.8</h1>
					<h4 className="header-title mb-0">Overall Rating</h4>
					<ul className="list-inline mb-0">
						{Array.from(new Array(Math.floor(4))).map((_star, idx) => {
							return (
								<li key={idx} className="list-inline-item me-1">
									{' '}
									<i className="mdi mdi-star text-warning font-18" />
								</li>
							)
						})}
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
						<div className="progress mt-2" style={{ height: 5 }}>
							<div
								className="progress-bar"
								role="progressbar"
								style={{ width: '80%', borderRadius: 5 }}
								aria-valuenow={80}
								aria-valuemin={0}
								aria-valuemax={100}
							/>
						</div>
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
			</CardBody>
		</Card>
	)
}

export default OverallRating
