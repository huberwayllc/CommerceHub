import { ComponentContainerCard } from '@/components'
import { useToggle } from '@/hooks'
import { ApexOptions } from 'apexcharts'
import ReactApexChart from 'react-apexcharts'
import { Col, Modal, ModalBody, ModalHeader, Row } from 'react-bootstrap'

const OpportunitiesByOwner = () => {
	const { isOpen, toggle } = useToggle()
	const chartOpts: ApexOptions = {
		chart: {
			height: 170,
			type: 'radialBar',
			toolbar: {
				show: false,
			},
		},
		plotOptions: {
			radialBar: {
				hollow: {
					margin: 0,
					size: '70%',
					background: 'transparent',
				},

				dataLabels: {
					name: {
						offsetY: -5,
						fontSize: '13px',
					},
					value: {
						offsetY: 5,
						fontSize: '18px',
						show: true,
					},
				},
			},
		},
		colors: ['#2c74de'],
		series: [75],
		stroke: {
			lineCap: 'round',
		},
		labels: ['Leads Won'],
	}
	return (
		<ComponentContainerCard title="All Opportunities by Owner">
			<Row>
				<Col lg={8}>
					<Row>
						<Col md="auto">
							<ReactApexChart
								height={170}
								options={chartOpts}
								series={chartOpts.series}
								type="radialBar"
								className="apex-charts"
							/>
						</Col>
						<Col className="col-md align-self-center">
							<h4 className="mt-0 mb-2 font-16">Leads Won by Owner</h4>
							<p className="text-muted mb-md-0">
								There are many variations of passages of Lorem Ipsum available,
								but the majority have suffered alteration in some form.
							</p>
						</Col>
					</Row>
				</Col>
				<Col lg={4} className="align-self-center">
					<form className="row row-cols-lg-auto g-2 align-items-center">
						<Col xs={12}>
							<div className="input-group">
								<input
									type="text"
									className="form-control form-control-sm"
									id="Search_data"
									placeholder="search"
								/>
							</div>
						</Col>
						<Col xs={12}>
							<select
								className="form-select form-select-sm"
								id="inlineFormSelectPref"
							>
								<option defaultValue="selected">All</option>
								<option value={1}>Hot</option>
								<option value={2}>Cold</option>
								<option value={3}>In Progress</option>
								<option value={4}>Lost</option>
								<option value={5}>Won</option>
							</select>
						</Col>
						<Col xs={12}>
							<button type="button" className="btn btn-de-info btn-sm me-1">
								<i className="mdi mdi-filter-variant" />
							</button>
							<button
								type="button"
								className="btn btn-de-primary btn-sm"
								onClick={toggle}
								data-animation="bounce"
								data-bs-target=".bs-example-modal-lg"
							>
								+ Add New
							</button>
						</Col>
					</form>
					<Modal
						show={isOpen}
						onHide={toggle}
						className="fade bs-example-modal-lg modal-lg"
						tabIndex={-1}
						role="dialog"
					>
						<ModalHeader>
							<h6 className="modal-title mt-0" id="myLargeModalLabel">
								Add New Opportunities
							</h6>
							<button type="button" className="btn-close" onClick={toggle} />
						</ModalHeader>
						<ModalBody>
							<form>
								<Row>
									<Col md="6">
										<label className="form-label" htmlFor="Location">
											Location
										</label>
										<input
											type="text"
											className="form-control form-control-sm"
											id="Location"
											required
										/>
									</Col>
									<Col md="6">
										<div className="form-group">
											<label
												className="form-label mt-2 mt-md-0"
												htmlFor="PhoneNo"
											>
												Phone No
											</label>
											<input
												type="text"
												className="form-control form-control-sm"
												id="PhoneNo"
												required
											/>
										</div>
									</Col>
								</Row>
								<Row>
									<Col md="8">
										<div className="form-group">
											<label className="form-label mt-2" htmlFor="NewOppEmail">
												Email
											</label>
											<input
												type="email"
												className="form-control form-control-sm"
												id="NewOppEmail"
												required
											/>
										</div>
									</Col>
									<Col md="4">
										<label
											htmlFor="modal-status-select"
											className="form-label  mt-2"
										>
											Category
										</label>
										<select
											className="form-select  form-select-sm"
											id="modal-status-select"
										>
											<option selected>Select</option>
											<option value={1}>Hot</option>
											<option value={2}>Cold</option>
											<option value={3}>In Progress</option>
											<option value={4}>Lost</option>
											<option value={5}>Won</option>
										</select>
									</Col>
								</Row>
								<button
									type="button"
									className="btn btn-sm btn-de-primary btn-sm mt-2"
								>
									Save
								</button>
								<button
									type="button"
									className="btn btn-sm btn-de-danger btn-sm mt-2"
								>
									Delete
								</button>
							</form>
						</ModalBody>
					</Modal>
					<ul className="list-unstyled mb-0 mt-3">
						<li>
							<i className="mdi mdi-circle me-2 text-success" />
							Won
						</li>
						<li>
							<i className="mdi mdi-circle me-2 text-warning" />
							In Progress
						</li>
						<li>
							<i className="mdi mdi-circle me-2 text-purple" />
							Hot
						</li>
						<li>
							<i className="mdi mdi-circle me-2 text-secondary" />
							Cold
						</li>
						<li>
							<i className="mdi mdi-circle me-2 text-danger" />
							Lost
						</li>
					</ul>
				</Col>
			</Row>
		</ComponentContainerCard>
	)
}

export default OpportunitiesByOwner
