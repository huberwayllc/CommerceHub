import { PageBreadcrumb } from '@/components'
import { Card, CardBody, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { patientsTable } from './data'

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

const AllPatients = () => {
	return (
		<>
			<PageBreadcrumb subName="Hospital" title="Patients" />
			<Row>
				<Col xs="12">
					<Card>
						<CardBody>
							<div className="table-responsive">
								<table className="table">
									<thead className="thead-light">
										<tr>
											<th>Patient Name</th>
											<th>Age</th>
											<th>ID</th>
											<th>Address</th>
											<th>Mobile No</th>
											<th>Last Visit</th>
											<th>Status</th>
											<th className="text-right">Action</th>
										</tr>
									</thead>
									<tbody>
										{(patientsTable || []).map((patient, idx) => (
											<tr key={idx}>
												<td>
													<Link to="/apps/hospital/patient-profile">
														<img
															src={patient.patientImage}
															alt="user-10"
															className="thumb-sm rounded-circle me-2"
														/>
														{patient.patientName}
													</Link>
												</td>
												<td>{patient.age}</td>
												<td>{patient.patientID}</td>
												<td>{patient.address}</td>
												<td>{patient.mobileNo}</td>
												<td>{patient.lastVisit}</td>
												<td>
													<StatusType status={patient.status} />
												</td>
												<td>
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
							<Row>
								<Col>
									<Link
										to="/apps/hospital/add-patient"
										className="btn btn-sm btn-outline-light px-4"
									>
										{' '}
										+ Add New
									</Link>
								</Col>
								<Col xs="auto">
									<nav aria-label="...">
										<ul className="pagination pagination-sm mb-0">
											<li className="page-item disabled">
												<Link className="page-link" to="" tabIndex={-1}>
													Previous
												</Link>
											</li>
											<li className="page-item active">
												<Link className="page-link" to="">
													1
												</Link>
											</li>
											<li className="page-item">
												<Link className="page-link" to="">
													2 <span className="sr-only">(current)</span>
												</Link>
											</li>
											<li className="page-item">
												<Link className="page-link" to="">
													3
												</Link>
											</li>
											<li className="page-item">
												<Link className="page-link" to="">
													Next
												</Link>
											</li>
										</ul>
									</nav>
								</Col>
							</Row>
						</CardBody>
					</Card>
				</Col>
			</Row>
		</>
	)
}

export default AllPatients
