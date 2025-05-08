import {
	Button,
	Card,
	CardBody,
	CardHeader,
	CardTitle,
	Col,
	FormCheck,
	Row,
} from 'react-bootstrap'
import { allTickets } from '../data'

const StatusType = ({ status }: { status: string }) => {
	switch (status) {
		case 'Solved':
			return <span className="badge badge-soft-success p-2">{status}</span>
		case 'New':
			return <span className="badge badge-soft-warning p-2">{status}</span>
		case 'Open':
			return <span className="badge badge-soft-primary p-2">{status}</span>
		default:
			return
	}
}

const AllTickets = () => {
	return (
		<Row>
			<Col xs="12">
				<Card>
					<CardHeader>
						<Row className="align-items-center">
							<Col>
								<CardTitle>All Tickets</CardTitle>
							</Col>
							<Col xs="auto">
								<Button variant="primary" size="sm" className="btn-de-primary">
									Create Ticket
								</Button>
							</Col>
						</Row>
					</CardHeader>
					<CardBody>
						<div className="table-responsive">
							<table className="table">
								<thead className="thead-light">
									<tr>
										<th style={{ maxWidth: '95px' }}>
											<FormCheck
												type="checkbox"
												id="checkbox1"
												value=""
												aria-label="..."
											/>
										</th>
										<th>ID</th>
										<th>Customers</th>
										<th>Subject</th>
										<th>Priority</th>
										<th>Status</th>
										<th>Respose Time</th>
									</tr>
								</thead>

								<tbody>
									{(allTickets || []).map((ticket, idx) => (
										<tr key={idx}>
											<td>
												<FormCheck
													type="checkbox"
													id={ticket.customerID}
													value=""
													aria-label="..."
												/>
											</td>
											<td>{ticket.customerID}</td>
											<td>
												<img
													src={ticket.image}
													alt=""
													className="thumb-sm rounded-circle me-2"
												/>{' '}
												{ticket.name}
											</td>
											<td>{ticket.subject}</td>
											<td
												className={
													ticket.priority === 'Critical' ? 'text-danger' : ''
												}
											>
												{ticket.priority}
											</td>
											<td>
												<StatusType status={ticket.status} />
											</td>
											<td>{ticket.resposeTime}</td>
										</tr>
									))}
								</tbody>
							</table>
						</div>
					</CardBody>
				</Card>
			</Col>
		</Row>
	)
}

export default AllTickets
