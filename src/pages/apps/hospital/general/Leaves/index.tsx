import { PageBreadcrumb } from '@/components'
import { Card, CardBody, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { leavesTable } from './data'
import { TablePagination } from '@/components'

const PermissionType = ({ status }: { status: string }) => {
	switch (status) {
		case 'Approved':
			return <span className="badge badge-soft-success">{status}</span>
		case 'New':
			return <span className="badge badge-soft-warning">{status}</span>
		case 'Declined':
			return <span className="badge badge-soft-danger">{status}</span>
		default:
			return
	}
}

const Leaves = () => {
	return (
		<>
			<PageBreadcrumb subName="Hospital" title="Leaves" />

			<Row>
				<Col xs="12">
					<Card>
						<CardBody>
							<div className="table-responsive">
								<table className="table">
									<thead className="thead-light">
										<tr>
											<th>Member Name</th>
											<th>Post</th>
											<th>From</th>
											<th>To</th>
											<th>Total Day</th>
											<th>Reason</th>
											<th>Permission</th>
											<th className="text-end">Action</th>
										</tr>
									</thead>
									<tbody>
										{(leavesTable || []).map((leave, idx) => (
											<tr key={idx}>
												<td>
													<Link to="/apps/hospital/member-profile">
														<img
															src={leave.memberImage}
															alt="user-10"
															className="thumb-sm rounded-circle me-2"
														/>
														{leave.memberName}
													</Link>
												</td>
												<td>{leave.post}</td>
												<td>{leave.from}</td>
												<td>{leave.to}</td>
												<td>{leave.totalDay}</td>
												<td>{leave.reason}</td>
												<td>
													<PermissionType status={leave.permission} />
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
							<TablePagination btnText="+ Add New Leaves" />
						</CardBody>
					</Card>
				</Col>
			</Row>
		</>
	)
}

export default Leaves
