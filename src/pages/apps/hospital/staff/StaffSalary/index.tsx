import { PageBreadcrumb } from '@/components'
import { Card, CardBody, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { staffSalary } from './data'
import { TablePagination } from '@/components'

const StaffSalary = () => {
	return (
		<>
			<PageBreadcrumb subName="Hospital" title="Salary" />

			<Row>
				<Col xs="12">
					<Card>
						<CardBody>
							<div className="table-responsive">
								<table id="datatable" className="table">
									<thead className="thead-light">
										<tr>
											<th>Member Name</th>
											<th>ID</th>
											<th>Post</th>
											<th>Join Date</th>
											<th>Salary</th>
											<th>TDS</th>
											<th>Net Pay</th>
											<th className="text-end">Action</th>
										</tr>
									</thead>
									<tbody>
										{(staffSalary || []).map((staff, idx) => (
											<tr key={idx}>
												<td>
													<Link to="/apps/hospital/member-profile">
														<img
															src={staff.memberImage}
															alt="user-10"
															className="thumb-sm rounded-circle me-2"
														/>
														{staff.memberName}
													</Link>
												</td>
												<td>{staff.MemberID}</td>
												<td>{staff.post}</td>
												<td>{staff.joinDate}</td>
												<td>${staff.salary}</td>
												<td>${staff.tds}</td>
												<td>${staff.netPay}</td>
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
							<TablePagination btnText="+ Add New Member" />
						</CardBody>
					</Card>
				</Col>
			</Row>
		</>
	)
}

export default StaffSalary
