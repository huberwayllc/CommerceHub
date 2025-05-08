import { PageBreadcrumb } from '@/components'
import { Card, CardBody, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { cashlessPaymentsTable } from './data'
import { TablePagination } from '@/components'

const CashlessPayments = () => {
	return (
		<>
			<PageBreadcrumb subName="Hospital" title="Cashless" />

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
											<th>Insurance Company</th>
											<th>Payment</th>
											<th>Bill Date</th>
											<th>Charge</th>
											<th>Tax</th>
											<th>Discount</th>
											<th className="text-end">Total</th>
										</tr>
									</thead>
									<tbody>
										{(cashlessPaymentsTable || []).map((payment, idx) => (
											<tr key={idx}>
												<td>{payment.billNo}</td>
												<td>
													<Link to="/apps/hospital/payment-invoice">
														{payment.patientName}
													</Link>
												</td>
												<td>{payment.doctorName}</td>
												<td>{payment.insuranceCompany}</td>
												<td>{payment.payment}</td>
												<td>{payment.billDate}</td>
												<td>${payment.charge}</td>
												<td>{payment.tax}</td>
												<td>{payment.discount}</td>
												<td className="text-end text-dark fw-semibold">
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

export default CashlessPayments
