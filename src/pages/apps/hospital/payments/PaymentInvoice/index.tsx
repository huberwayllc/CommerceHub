import { PageBreadcrumb } from '@/components'

import logoSm from '@/assets/images/logo-icon.svg'
import signature from '@/assets/images/signature.png'
import { Card, CardBody, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const PaymentInvoice = () => {
	const printPage = () => {
		window.print()
	}
	return (
		<>
			<PageBreadcrumb subName="Hospital" title="Invoice" />
			<Row>
				<Col lg="10" className="mx-auto">
					<Card>
						<CardBody className="invoice-head">
							<Row>
								<Col md="4" className="align-self-center">
									<div className="media">
										<img
											src={logoSm}
											alt="logo-small"
											className="logo-sm me-2"
											height={30}
										/>
										<div className="media-body align-self-center">
											<h3 className="m-0 font-20">Huberway Hospital</h3>
										</div>
									</div>
									<p className="mt-2 mb-0 text-muted">
										If account is not paid within 7 days the credits details
										supplied as confirmation.
									</p>
								</Col>
								<Col md="8">
									<ul className="list-inline mb-0 contact-detail float-end">
										<li className="list-inline-item">
											<div className="ps-3">
												<i className="mdi mdi-web" />
												<p className="text-muted mb-0">
													www.abcdefghijklmno.com
												</p>
												<p className="text-muted mb-0">www.qrstuvwxyz.com</p>
											</div>
										</li>
										<li className="list-inline-item">
											<div className="ps-3">
												<i className="mdi mdi-phone" />
												<p className="text-muted mb-0">+123 123456789</p>
												<p className="text-muted mb-0">+123 123456789</p>
											</div>
										</li>
										<li className="list-inline-item">
											<div className="ps-3">
												<i className="mdi mdi-map-marker" />
												<p className="text-muted mb-0">2821 Kensington Road,</p>
												<p className="text-muted mb-0">
													Avondale Estates, GA 30002 USA.
												</p>
											</div>
										</li>
									</ul>
								</Col>
							</Row>
						</CardBody>
						<CardBody>
							<Row className="row-cols-3 d-flex justify-content-md-between my-4">
								<Col md="3" className="d-print-flex mb-3">
									<h6 className="mt-0">
										<b>Patient Name :</b> Donald Gardner
									</h6>
									<h6 className="mt-0">
										<b>Address :</b> B28 University Street US
									</h6>
									<h6 className="m-0">
										<b>Phone No :</b> +123 456 7890
									</h6>
								</Col>
								<Col md="3" className="d-print-flex mb-3">
									<h6 className="m-0">
										<b>Doctor Name :</b> Dr.Helen White
									</h6>
									<h6 className="mb-0">
										<b>Department :</b> Orthopedic
									</h6>
								</Col>
								<Col md="3" className="d-print-flex mb-3">
									<h6 className="m-0">
										<b>Invoice No :</b> #1240
									</h6>
									<h6 className="mb-0">
										<b>Admit Date :</b> 11/07/2020
									</h6>
									<h6 className="mb-0">
										<b>Discharge Date :</b> 17/07/2020
									</h6>
								</Col>
							</Row>
							<Row>
								<Col lg="12">
									<div className="table-responsive project-invoice">
										<table className="table table-bordered mb-0">
											<thead className="thead-light">
												<tr>
													<th>No</th>
													<th>Description</th>
													<th>Qty</th>
													<th>Amount</th>
												</tr>
											</thead>
											<tbody>
												<tr>
													<td>1</td>
													<td>
														<h5 className="m-0 font-14">Pharmacy</h5>
													</td>
													<td>7</td>
													<td>$300.00</td>
												</tr>
												<tr>
													<td>2</td>
													<td>
														<h5 className="m-0 font-14">CT Scan</h5>
													</td>
													<td>1</td>
													<td>$200.00</td>
												</tr>
												<tr>
													<td>3</td>
													<td>
														<h5 className="m-0 font-14">Laboratory</h5>
													</td>
													<td>3</td>
													<td>$250.00</td>
												</tr>
												<tr>
													<td>4</td>
													<td>
														<h5 className="m-0 font-14">
															Medical/Surgical Supplies and Devices
														</h5>
													</td>
													<td>-</td>
													<td>$500.00</td>
												</tr>
												<tr>
													<td colSpan={2} className="border-0" />
													<td className="border-0 font-14 text-dark">
														<b>Sub Total</b>
													</td>
													<td className="border-0 font-14 text-dark">
														<b>$12,50.00</b>
													</td>
												</tr>
												<tr>
													<th colSpan={2} className="border-0" />
													<td className="border-0 font-14 text-dark">
														<b>Tax Rate</b>
													</td>
													<td className="border-0 font-14 text-dark">
														<b>$0.00%</b>
													</td>
												</tr>
												<tr className="bg-black text-white">
													<th colSpan={2} className="border-0" />
													<td className="border-0 font-14">
														<b>Total</b>
													</td>
													<td className="border-0 font-14">
														<b>$12,50.00</b>
													</td>
												</tr>
											</tbody>
										</table>
									</div>
								</Col>
							</Row>
							<Row>
								<Col lg="6">
									<h5 className="mt-4">Terms And Condition :</h5>
									<ul className="ps-3">
										<li>
											<small className="font-12">
												All accounts are to be paid within 7 days from receipt
												of invoice.{' '}
											</small>
										</li>
										<li>
											<small className="font-12">
												To be paid by cheque or credit card or direct payment
												online.
											</small>
										</li>
										<li>
											<small className="font-12">
												{' '}
												If account is not paid within 7 days the credits details
												supplied as confirmation of work undertaken will be
												charged the agreed quoted fee noted above.
											</small>
										</li>
									</ul>
								</Col>
								<Col lg="6" className="align-self-center">
									<div
										className="float-none float-md-end"
										style={{ width: '30%' }}
									>
										<small>Account Manager</small>
										<img
											src={signature}
											alt="signature"
											className="mt-2 mb-1"
											height={20}
										/>
										<p className="border-top">Signature</p>
									</div>
								</Col>
							</Row>
							<hr />
							<Row className="d-flex justify-content-center">
								<Col lg="12" xl="4" className="ms-auto align-self-center">
									<div className="text-center">
										<small className="font-12">
											Thank you very much for doing business with us.
										</small>
									</div>
								</Col>
								<Col lg="12" xl="4">
									<div className="float-end d-print-none mt-2 mt-md-0 d-flex gap-1">
										<Link
											to=""
											onClick={printPage}
											className="btn btn-de-info btn-sm"
										>
											Print
										</Link>
										<Link to="" className="btn btn-de-primary btn-sm">
											Submit
										</Link>
										<Link to="" className="btn btn-de-danger btn-sm">
											Cancel
										</Link>
									</div>
								</Col>
							</Row>
						</CardBody>
					</Card>
				</Col>
			</Row>
		</>
	)
}

export default PaymentInvoice
