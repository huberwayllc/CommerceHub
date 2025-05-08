import { useToggle } from '@/hooks'
import {
	Col,
	Image,
	Modal,
	ModalBody,
	ModalFooter,
	ModalHeader,
	Row,
} from 'react-bootstrap'
import { FiDownload, FiNavigation } from 'react-icons/fi'
import btcImg from '@/assets/images/logos/btc.png'

const CryptoTopbar = () => {
	const { isOpen, toggle } = useToggle()
	const { isOpen: modalOpen, toggle: modalToggle } = useToggle()
	return (
		<div className="d-flex justify-content-between mb-3">
			<div className="align-self-center">
				<button
					type="button"
					onClick={toggle}
					className="btn btn-de-danger btn-sm me-1"
					data-bs-toggle="modal"
					data-bs-target="#exampleModalSend"
				>
					<FiNavigation className="align-self-center icon-xs me-2" />
					Send
				</button>
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
							<select
								className="form-select"
								aria-label="Default select example"
							>
								<option selected>-- Currency --</option>
								<option value="BTC">BTC</option>
								<option value="ETH">ETH</option>
							</select>
						</div>
						<div className="mb-2">
							<label htmlFor="cryptocurrency">Currency From</label>
							<select
								className="form-select"
								aria-label="Default select example"
							>
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

				<button
					type="button"
					className="btn btn-de-success btn-sm"
					onClick={modalToggle}
				>
					<FiDownload className="align-self-center icon-xs me-2" />
					Request
				</button>
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
							<select
								className="form-select"
								aria-label="Default select example"
							>
								<option selected>-- Currency --</option>
								<option value="BTC">BTC</option>
								<option value="ETH">ETH</option>
							</select>
						</div>
						<div className="mb-2">
							<label htmlFor="cryptocurrency">Receive To</label>
							<select
								className="form-select"
								aria-label="Default select example"
							>
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
			</div>
			<div className="media">
				<Image
					src={btcImg}
					className="me-2 thumb-sm align-self-center rounded-circle"
					alt="..."
				/>
				<div className="media-body align-self-center">
					<p className="mb-1 text-muted">Total Balance</p>
					<h5 className="mt-0 text-dark mb-1">122.00125503 BTC</h5>
				</div>
			</div>
		</div>
	)
}

export default CryptoTopbar
