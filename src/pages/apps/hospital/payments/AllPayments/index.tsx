import { PageBreadcrumb } from '@/components'
import { Card, CardBody, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { paymentsTable } from './data'
import { TablePagination } from '@/components'

const AllPayments = () => {
	return (
		<>
			<PageBreadcrumb subName="Hospital" title="Payments" />
			<Row>
				<Col xs="12">
					<Card>
						<CardBody>
							<div className="table-responsive">
								<table className="table">
									<thead className="thead-light">
										<tr>
											<th>Bill No</th>
											<th>Patient Name</th>
											<th>Doctor Name</th>
											<th>Insurance</th>
											<th>Payment</th>
											<th>Bill Date</th>
											<th>Charge</th>
											<th>Tax</th>
											<th>Discount</th>
											<th className="text-right">Total</th>
										</tr>
									</thead>
									<tbody>
										{(paymentsTable || []).map((payment, idx) => (
											<tr key={idx}>
												<td>{payment.billNo}</td>
												<td>
													<Link to="/apps/hospital/payment-invoice">
														{payment.patientName}
													</Link>
												</td>
												<td>{payment.doctorName}</td>
												<td>
													{payment.insurance ? (
														<i className="mdi mdi-check text-success font-16" />
													) : (
														'-'
													)}
												</td>
												<td>{payment.payment}</td>
												<td>{payment.billDate}</td>
												<td>${payment.charge}</td>
												<td>{payment.tax}</td>
												<td>{payment.discount}</td>
												<td className="text-right text-dark font-weight-bold">
													${payment.total}
												</td>
											</tr>
										))}
									</tbody>
								</table>
							</div>
							<TablePagination btnText="+ Add New Payment" />
						</CardBody>
					</Card>
				</Col>
			</Row>
		</>
	)
}

export default AllPayments
