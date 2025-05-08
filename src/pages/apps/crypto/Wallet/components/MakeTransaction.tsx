import { ApexOptions } from 'apexcharts'
import ReactApexChart from 'react-apexcharts'
import {
	Button,
	Card,
	CardBody,
	Col,
	Image,
	Modal,
	ModalBody,
	ModalFooter,
	ModalHeader,
	Nav,
	NavItem,
	NavLink,
	Row,
	TabContainer,
	TabContent,
	TabPane,
} from 'react-bootstrap'
import { FiDownload, FiNavigation } from 'react-icons/fi'
import { walletCoins } from '../data'
import { useToggle } from '@/hooks'

const MakeTransaction = () => {
	const { isOpen, toggle } = useToggle()
	const { isOpen: modalOpen, toggle: modalToggle } = useToggle()
	const chartOpts: ApexOptions = {
		series: [76],
		chart: {
			type: 'radialBar',
			offsetY: 0,
			sparkline: {
				enabled: true,
			},
		},
		plotOptions: {
			radialBar: {
				startAngle: -90,
				endAngle: 90,
				hollow: {
					size: '75%',
					position: 'front',
				},
				track: {
					background: ['rgba(42, 118, 244, .18)'],
					strokeWidth: '80%',
					opacity: 0.5,
					margin: 5,
				},
				dataLabels: {
					name: {
						show: false,
					},
					value: {
						offsetY: -2,
						fontSize: '20px',
					},
				},
			},
		},
		stroke: {
			lineCap: 'butt',
		},
		colors: ['#2a76f4'],
		grid: {
			padding: {
				top: -10,
			},
		},
	}
	return (
		<>
			<Card>
				<CardBody>
					<Row>
						<Col xs="auto" className="align-self-center mx-auto">
							<ReactApexChart
								options={chartOpts}
								series={chartOpts.series}
								type="radialBar"
								className="apex-charts"
							/>
							<div className="text-center">
								<hr className="hr-dashed w-25 mx-auto" />
								<Button size="sm" variant="soft-primary" className="px-3">
									+ Invest
								</Button>
							</div>
						</Col>
						<Col className="align-self-center mt-4 mt-lg-0">
							<TabContainer defaultActiveKey="1">
								<Nav className="nav-tabs" role="tablist">
									<NavItem>
										<NavLink
											eventKey="1"
											className="fw-semibold pt-0"
											role="tab"
										>
											BTC
										</NavLink>
									</NavItem>
									<NavItem>
										<NavLink
											eventKey="2"
											className="fw-semibold pt-0"
											role="tab"
										>
											ETH
										</NavLink>
									</NavItem>
									<NavItem>
										<NavLink
											eventKey="3"
											className="fw-semibold pt-0"
											role="tab"
										>
											DASH
										</NavLink>
									</NavItem>
									<NavItem>
										<NavLink
											eventKey="4"
											className="fw-semibold pt-0"
											role="tab"
										>
											LITE
										</NavLink>
									</NavItem>
								</Nav>
								<TabContent className="my-4">
									{walletCoins.map((coin, idx) => {
										return (
											<TabPane
												key={idx}
												eventKey={`${idx + 1}`}
												role="tabpanel"
											>
												<Row>
													<Col xs={12} className="col-lg">
														<div className="media">
															<Image
																src={coin.image}
																className="me-2 thumb-xs align-self-center rounded-circle"
																alt="..."
															/>
															<div className="media-body align-self-center">
																<h3 className="m-0 font-24 fw-bold">
																	{coin.quantity} {coin.name}
																</h3>
																<p className="text-muted font-12 mb-0">
																	$ {coin.price}
																</p>
															</div>
														</div>
													</Col>
													<Col
														xs="12"
														lg="auto"
														className="align-self-center mt-2 mt-lg-0"
													>
														<Button
															variant="outline-danger"
															onClick={toggle}
															className="me-1"
															size="sm"
															type="button"
														>
															<FiNavigation className="align-self-center icon-xs me-2" />
															Send
														</Button>
														<Button
															type="button"
															onClick={modalToggle}
															variant="outline-success"
															size="sm"
														>
															<FiDownload className="align-self-center icon-xs me-2" />
															Request
														</Button>
													</Col>
												</Row>
											</TabPane>
										)
									})}
								</TabContent>
							</TabContainer>
							<div className="bg-light p-3 rounded">
								<Row>
									<Col>
										<h6 className="font-15 mt-0">
											Sent{' '}
											<span className="badge bg-soft-success ms-1">
												Confirmed
											</span>
										</h6>
										<p className="mb-0 text-muted">
											There are many variations of passages of have suffered
											alteration in some form, Lorem Ipsum available.
										</p>
									</Col>
									<Col className="col-auto">
										<span className="fw-semibold font-14 text-danger">
											-$2531.00
										</span>
									</Col>
								</Row>
							</div>
						</Col>
					</Row>
				</CardBody>
			</Card>

			<Modal
				show={isOpen}
				onHide={toggle}
				className="fade"
				id="exampleModalSend"
				tabIndex={-1}
				aria-labelledby="exampleModalSendLabel"
				aria-hidden="true"
			>
				<ModalHeader>
					<h6 className="modal-title m-0" id="exampleModalDefaultSend">
						Send Coin
					</h6>
					<button type="button" onClick={toggle} className="btn-close" />
				</ModalHeader>
				<ModalBody>
					<div className="mb-2">
						<label htmlFor="cryptocurrency">Crypto Currency</label>
						<select className="form-select" aria-label="Default select example">
							<option selected>-- Currency --</option>
							<option value="BTC">BTC</option>
							<option value="ETH">ETH</option>
						</select>
					</div>
					<div className="mb-2">
						<label htmlFor="cryptocurrency">Currency From</label>
						<select className="form-select" aria-label="Default select example">
							<option selected>-- My wallet --</option>
							<option value="BTC">BTC</option>
							<option value="ETH">ETH</option>
						</select>
					</div>
					<div className=" mb-2">
						<label htmlFor="toaddress">To</label>
						<div className="input-group">
							<span className="input-group-text" id="QUcode">
								<i className="fas fa-qrcode" />
							</span>
							<input
								type="text"
								className="form-control"
								placeholder="Can you scan"
								aria-label="Scancode"
							/>
						</div>
					</div>
					<Row>
						<Col md="6">
							<div className="mb-2">
								<label htmlFor="toaddress">USD</label>
								<div className="input-group">
									<span className="input-group-text" id="US-dollor">
										<i className="fas fa-dollar-sign" />
									</span>
									<input
										type="text"
										className="form-control"
										placeholder="USD"
										aria-label="US-dollor"
									/>
								</div>
							</div>
						</Col>
						<Col md="6">
							<div className="mb-2">
								<label htmlFor="BTC">BTC</label>
								<div className="input-group">
									<span className="input-group-text" id="BTC-coin">
										<i className="fab fa-btc" />
									</span>
									<input
										type="text"
										className="form-control"
										placeholder="BTC"
										aria-label="BTC-coin"
									/>
								</div>
							</div>
						</Col>
					</Row>
					<div className="mb-2">
						<label htmlFor="Description">Description</label>
						<textarea
							className="form-control"
							rows={3}
							aria-label="With textarea"
							defaultValue={''}
						/>
					</div>
					<div className="mt-2 mb-1">
						<label htmlFor="NetworkFree">Network Free</label>
					</div>
					<div className="form-check form-check-inline mb-0">
						<input
							className="form-check-input"
							type="radio"
							name="inlineRadioOptions"
							id="Regular"
							defaultValue="option1"
						/>
						<label className="form-check-label" htmlFor="Regular">
							Regular
						</label>
					</div>
					<div className="form-check form-check-inline mb-0">
						<input
							className="form-check-input"
							type="radio"
							name="inlineRadioOptions"
							id="Priority"
							defaultValue="option2"
						/>
						<label className="form-check-label" htmlFor="Priority">
							Priority
						</label>
					</div>
				</ModalBody>
				<ModalFooter>
					<button
						type="button"
						className="btn btn-de-danger btn-sm"
						onClick={toggle}
					>
						Close
					</button>
					<button className="btn btn-de-primary btn-sm" type="button">
						Continue
					</button>
				</ModalFooter>
			</Modal>

			<Modal
				show={modalOpen}
				onHide={modalToggle}
				className="fade"
				id="exampleModalRequest"
				tabIndex={-1}
				aria-labelledby="exampleModalRequestLabel"
				aria-hidden="true"
			>
				<ModalHeader>
					<h6 className="modal-title m-0" id="exampleModalRequestLabel">
						Request Coin
					</h6>
					<button type="button" className="btn-close" onClick={modalToggle} />
				</ModalHeader>
				<ModalBody>
					<div className="mb-2">
						<label htmlFor="cryptocurrency">Crypto Currency</label>
						<select className="form-select" aria-label="Default select example">
							<option selected>-- Currency --</option>
							<option value="BTC">BTC</option>
							<option value="ETH">ETH</option>
						</select>
					</div>
					<div className="mb-2">
						<label htmlFor="cryptocurrency">Receive To</label>
						<select className="form-select" aria-label="Default select example">
							<option selected>-- My wallet --</option>
							<option value="BTC">BTC</option>
							<option value="ETH">ETH</option>
						</select>
					</div>
					<div className=" mb-2">
						<label htmlFor="toaddress">Address</label>
						<div className="input-group">
							<input
								type="text"
								className="form-control"
								id="W-Address"
								defaultValue="c12b001a15f9bd46ef1c6551386c"
							/>
							<button
								className="btn btn-outline-light"
								type="button"
								id="Copy_link"
							>
								<i className="fas fa-copy" />
							</button>
						</div>
					</div>
				</ModalBody>
				<ModalFooter>
					<button className="btn btn-de-success btn-sm" type="button">
						Done
					</button>
				</ModalFooter>
			</Modal>
		</>
	)
}

export default MakeTransaction
