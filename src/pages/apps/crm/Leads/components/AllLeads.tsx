import { ComponentContainerCard } from '@/components'
import { allLeads } from '../data'
import {
	Button,
	Col,
	Image,
	Modal,
	ModalBody,
	ModalHeader,
	Row,
} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useToggle } from '@/hooks'

const AllLeads = () => {
	const { isOpen, toggle } = useToggle()
	return (
		<ComponentContainerCard title="All Leads">
			<div className="table-responsive">
				<table className="table">
					<thead>
						<tr>
							<th>Customer Name</th>
							<th>Email</th>
							<th>Phone No</th>
							<th>Company</th>
							<th>Status</th>
							<th>Action</th>
						</tr>
					</thead>
					<tbody>
						{allLeads.map((lead, idx) => {
							return (
								<tr key={idx}>
									<td>
										<Image
											src={lead.customer.image}
											className="thumb-sm rounded-circle me-2"
										/>
										{lead.customer.name}
										{lead.customer.labelVariant && (
											<small
												className={`badge bg-soft-${lead.customer.labelVariant} ms-1`}
											>
												New
											</small>
										)}{' '}
									</td>
									<td>xyx@gmail.com</td>
									<td>+123456789</td>
									<td>{lead.company}</td>
									<td>
										<span
											className={`badge bg-soft-${lead.status == 'Follow Up' || lead.status == 'New Lead' ? 'primary' : lead.status == 'Lost' ? 'danger' : 'success'}`}
										>
											{lead.status}
										</span>
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
							)
						})}
					</tbody>
				</table>
			</div>
			<Row>
				<Col>
					<Button
						variant="outline-light"
						size="sm"
						className="px-4 "
						onClick={toggle}
						data-animation="bounce"
						data-bs-target=".bs-example-modal-lg"
					>
						+ Add New
					</Button>
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

			<Modal
				show={isOpen}
				onHide={toggle}
				className="fade bs-example-modal-lg modal-lg"
				tabIndex={-1}
				role="dialog"
				aria-labelledby="myLargeModalLabel"
				aria-hidden="true"
			>
				<ModalHeader>
					<h6 className="modal-title mt-0" id="myLargeModalLabel">
						Add New Lead
					</h6>
					<button
						type="button"
						className="btn-close"
						onClick={toggle}
						aria-label="Close"
					/>
				</ModalHeader>
				<ModalBody>
					<form>
						<Row>
							<Col md="6">
								<label className="form-label" htmlFor="LeadName">
									Name
								</label>
								<input
									type="text"
									className="form-control"
									id="LeadName"
									required
								/>
							</Col>
							<Col md="6">
								<label className="form-label mt-2 mt-md-0" htmlFor="LeadEmail">
									Email
								</label>
								<input
									type="email"
									className="form-control"
									id="LeadEmail"
									required
								/>
							</Col>
						</Row>
						<Row>
							<Col md={6}>
								<label className="form-label mt-2" htmlFor="PhoneNo">
									Phone No
								</label>
								<input
									type="text"
									className="form-control"
									id="PhoneNo"
									required
								/>
							</Col>
							<Col md={6}>
								<label htmlFor="status-select" className="form-label mt-2">
									Country
								</label>
								<select className="form-select" id="status-select">
									<option selected>Select</option>
									<option value={1}>India</option>
									<option value={2}>USA</option>
									<option value={3}>Japan</option>
									<option value={4}>China</option>
									<option value={5}>Germany</option>
								</select>
							</Col>
						</Row>
						<Button
							variant="primary"
							size="sm"
							type="button"
							className="mt-2 me-1"
						>
							Save
						</Button>
						<Button variant="danger" type="button" size="sm" className="mt-2">
							Delete
						</Button>
					</form>
				</ModalBody>
			</Modal>
		</ComponentContainerCard>
	)
}

export default AllLeads
