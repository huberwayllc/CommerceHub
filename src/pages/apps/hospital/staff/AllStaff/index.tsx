import { PageBreadcrumb } from '@/components'
import { Card, CardBody, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { allStaffTable } from './data'
import { TablePagination } from '@/components'

const AllStaff = () => {
	return (
		<>
			<PageBreadcrumb subName="Hospital" title="All Staff" />

			<Row>
				<Col xs="12">
					<Card>
						<CardBody>
							<div className="table-responsive">
								<table className="table">
									<thead className="thead-light">
										<tr>
											<th>Member Name</th>
											<th>Age</th>
											<th>ID</th>
											<th>Address</th>
											<th>Mobile No</th>
											<th>Join Date</th>
											<th>Post</th>
											<th className="text-right">Action</th>
										</tr>
									</thead>
									<tbody>
										{(allStaffTable || []).map((staff, idx) => (
											<tr key={idx}>
												<td>
													<Link to="/apps/hospital/member-profile">
														<img
															src={staff.memberImage}
															alt="user-10"
															className="thumb-sm rounded-circle mr-2"
														/>
														{staff.memberName}
													</Link>
												</td>
												<td>{staff.age}</td>
												<td>{staff.staffID}</td>
												<td>{staff.address}</td>
												<td>{staff.mobileNo}</td>
												<td>{staff.joinDate}</td>
												<td>{staff.post}</td>
												<td className="text-right">
													<Link
														to="/apps/hospital/edit-member"
														className="mr-2"
													>
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

export default AllStaff
