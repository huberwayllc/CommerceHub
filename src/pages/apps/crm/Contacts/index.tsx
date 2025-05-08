import { ComponentContainerCard, PageBreadcrumb } from '@/components'
import { Col, Image, Row } from 'react-bootstrap'
import { contactDetails } from './data'
import { Link } from 'react-router-dom'

const Contacts = () => {
	return (
		<>
			<PageBreadcrumb subName="CRM" title="Contacts" />

			<Row>
				<Col xs={12}>
					<ComponentContainerCard title="Contacts Details">
						<div className="table-responsive">
							<table className="table">
								<thead>
									<tr>
										<th>Customer Name</th>
										<th>Email</th>
										<th>Phone No</th>
										<th>Lead Score</th>
										<th>Company</th>
										<th>Tags</th>
										<th>Action</th>
									</tr>
								</thead>
								<tbody>
									{contactDetails.map((contact, idx) => {
										return (
											<tr key={idx}>
												<td>
													<Image
														src={contact.customer.image}
														className="thumb-sm rounded-circle me-2"
													/>
													{contact.customer.name}
													{contact.customer.labelVariant && (
														<small
															className={`badge bg-soft-${contact.customer.labelVariant} ms-1`}
														>
															New
														</small>
													)}{' '}
												</td>
												<td>xyx@gmail.com</td>
												<td>+123456789</td>
												<td>{contact.score}</td>
												<td>{contact.company}</td>
												<td>
													{contact.tags.map((tag, idx) => {
														return (
															<span
																key={idx}
																className="badge bg-soft-primary me-1"
															>
																{tag}
															</span>
														)
													})}
												</td>
												<td>
													<Link to="" className="me-1">
														<i className="las la-pen text-secondary font-16" />
													</Link>
													<Link to="">
														<i className="las la-trash-alt text-secondary font-16" />
													</Link>
												</td>
											</tr>
										)
									})}
								</tbody>
							</table>
						</div>
						<Row>
							<Col>
								<button className="btn btn-outline-light btn-sm px-4 ">
									+ Add New
								</button>
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
					</ComponentContainerCard>
				</Col>
			</Row>
		</>
	)
}

export default Contacts
