import { ComponentContainerCard } from '@/components'
import { regularUsers } from '../data'
import { Button, Col, Image, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const RegularUsers = () => {
	return (
		<ComponentContainerCard title="Our Regular Users">
			<div className="table-responsive">
				<table className="table table-striped">
					<thead className="thead-light">
						<tr>
							<th>Users</th>
							<th>Rols</th>
							<th>Email</th>
							<th>Contact No</th>
							<th>Status</th>
							<th>Action</th>
						</tr>
					</thead>
					<tbody>
						{regularUsers.map((item, idx) => {
							return (
								<tr key={idx}>
									<td>
										<Image
											src={item.user.image}
											className="rounded-circle thumb-sm me-1"
										/>{' '}
										{item.user.name}
									</td>
									<td>{item.role}</td>
									<td>{item.email}</td>
									<td>{item.contactNo}</td>
									<td>
										<span
											className={`badge badge-soft-${item.status == 'Deactivated' ? 'danger' : 'success'}`}
										>
											{item.status}
										</span>
									</td>
									<td>
										<Link to="">
											<i className="las la-pen text-secondary font-16 me-1" />
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
					<Button variant="outline-light" size="sm" className="px-4">
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
		</ComponentContainerCard>
	)
}

export default RegularUsers
