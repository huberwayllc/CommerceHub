import { Card, CardBody, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { staffExpensesTable } from '../data'
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

const StaffExpensesTable = () => {
	return (
		<Row>
			<Col xs="12">
				<Card>
					<CardBody>
						<div className="table-responsive">
							<table className="table">
								<thead className="thead-light">
									<tr>
										<th>Month</th>
										<th>All Staff lunch</th>
										<th>Cleaner Staff Salary</th>
										<th>Light Bill</th>
										<th>Total This Month</th>
										<th>Paied By</th>
										<th>Status</th>
										<th className="text-end">Action</th>
									</tr>
								</thead>
								<tbody>
									{(staffExpensesTable || []).map((staff, idx) => (
										<tr key={idx}>
											<td>{staff.month}</td>
											<td>${staff.staffLunch}</td>
											<td>${staff.staffSalary}</td>
											<td>${staff.lightBill}</td>
											<td>${staff.totalThisMonth}</td>
											<td>{staff.paidBy}</td>
											<td>
												<StatusType status={staff.status} />
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

export default StaffExpensesTable
