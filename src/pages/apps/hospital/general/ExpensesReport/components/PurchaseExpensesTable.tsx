import { Card, CardBody, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { purchaseExpensesTable } from '../data'
import { TablePagination } from '@/components'

const StatusType = ({ status }: { status: string }) => {
	switch (status) {
		case 'Approved':
			return <span className="badge badge-soft-success">{status}</span>
		case 'Panding':
			return <span className="badge badge-soft-warning">{status}</span>
		case 'Declined':
			return <span className="badge badge-soft-danger">{status}</span>
		default:
			return
	}
}

const PurchaseExpensesTable = () => {
	return (
		<Row>
			<Col xs="12">
				<Card>
					<CardBody>
						<div className="table-responsive">
							<table className="table">
								<thead className="thead-light">
									<tr>
										<th>Item</th>
										<th>Purchase Date</th>
										<th>Purchase From</th>
										<th>Amount</th>
										<th>Paied By</th>
										<th>Status</th>
										<th className="text-end">Action</th>
									</tr>
								</thead>
								<tbody>
									{(purchaseExpensesTable || []).map((purchase, idx) => (
										<tr key={idx}>
											<td>{purchase.item}</td>
											<td>{purchase.purchaseDate}</td>
											<td>{purchase.purchaseFrom}</td>
											<td>${purchase.amount}</td>
											<td>{purchase.paiedBy}</td>
											<td>
												<StatusType status={purchase.status} />
											</td>
											<td className="text-end">
												<Link to="">
													<i className="las la-pen text-secondary font-16" />
												</Link>
												<Link to="">
													<i className="las la-trash-alt text-secondary font-16" />
												</Link>
											</td>
										</tr>
									))}
								</tbody>
							</table>
						</div>
						<TablePagination btnText="+ Add New Expense" />
					</CardBody>
				</Card>
			</Col>
		</Row>
	)
}

export default PurchaseExpensesTable
