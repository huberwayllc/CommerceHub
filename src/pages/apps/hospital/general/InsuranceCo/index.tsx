import { PageBreadcrumb } from '@/components'
import { Card, CardBody, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import ProfileCard from './components/ProfileCard'
import React from 'react'
import { companyProfile, insuranceCompanyTable } from './data'
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

const InsuranceCo = () => {
	return (
		<>
			<PageBreadcrumb subName="Hospital" title="Insurance Co." />

			<div>
				<Row>
					{(companyProfile || []).map((profile, idx) => (
						<React.Fragment key={idx}>
							<ProfileCard profiles={profile} />
						</React.Fragment>
					))}
				</Row>
				<Row>
					<Col xs="12">
						<Card>
							<CardBody>
								<div className="table-responsive">
									<table className="table">
										<thead className="thead-light">
											<tr>
												<th>Insurance Company</th>
												<th>Contact No</th>
												<th>Total Payments</th>
												<th>Total Amounts</th>
												<th>Status</th>
												<th className="text-end">Action</th>
											</tr>
										</thead>
										<tbody>
											{(insuranceCompanyTable || []).map((company, idx) => (
												<tr key={idx}>
													<td>{company.insuranceCompany}</td>
													<td>{company.contactNo}</td>
													<td>{company.totalPayments}</td>
													<td>{company.totalAmounts}</td>
													<td>
														<StatusType status={company.status} />
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
								<TablePagination btnText="+ Add New Company" />
							</CardBody>
						</Card>
					</Col>
				</Row>
			</div>
		</>
	)
}

export default InsuranceCo
