import { PageBreadcrumb } from '@/components'
import { Card, CardBody, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { allotmentsTable, reportCard } from './data'
import React from 'react'
import ReportCard from './components/ReportCard'
import { TablePagination } from '@/components'

const RoomAllotments = () => {
	return (
		<>
			<PageBreadcrumb subName="Hospital" title="Allotments List" />

			<div>
				<Row className="justify-content-center">
					{(reportCard || []).map((report, idx) => (
						<React.Fragment key={idx}>
							<ReportCard reports={report} />
						</React.Fragment>
					))}
				</Row>
				<Row>
					<Col xs="12">
						<Card>
							<CardBody>
								<div className="table-responsive">
									<table id="datatable" className="table">
										<thead className="thead-light">
											<tr>
												<th>Room No</th>
												<th>Room Type</th>
												<th>ID</th>
												<th>Patiant Name</th>
												<th>Allotment Date</th>
												<th>Discharge date</th>
												<th className="text-end">Action</th>
											</tr>
										</thead>
										<tbody>
											{(allotmentsTable || []).map((allotment, idx) => (
												<tr key={idx}>
													<td>{allotment.roomNo}</td>
													<td>{allotment.roomType}</td>
													<td>{allotment.allotmentID}</td>
													<td>{allotment.patiantName}</td>
													<td>{allotment.allotmentDate}</td>
													<td>{allotment.dischargeDate}</td>
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
								<TablePagination btnText="+ Add New Allotment" />
							</CardBody>
						</Card>
					</Col>
				</Row>
			</div>
		</>
	)
}

export default RoomAllotments
