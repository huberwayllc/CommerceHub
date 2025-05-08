import { Card, CardBody, Col } from 'react-bootstrap'
import { DepartmentsType } from '../data'
import { Link } from 'react-router-dom'

const DepartmentCard = ({ item }: { item: DepartmentsType }) => {
	const {
		image,
		department,
		status,
		description,
		availableDoctors,
		totalDoctors,
		revenue,
		img,
	} = item
	return (
		<Col lg="4">
			<Card>
				<CardBody>
					<div className="float-end">
						<Link to="">
							<i className="las la-pen text-secondary font-16" />
						</Link>
						<Link to="">
							<i className="las la-trash-alt text-secondary font-16" />
						</Link>
					</div>
					<div className="media mb-3">
						<img
							src={image}
							alt="project-2"
							className="thumb-md rounded-circle"
						/>
						<div className="media-body align-self-center text-truncate ms-3">
							<h4 className="m-0 font-weight-semibold text-dark font-16">
								{department}
							</h4>
							<p className="text-muted  mb-0 font-13">
								<span
									className={`badge badge-soft-${status === 'Active' ? 'success' : 'danger'} font-11`}
								>
									{status}
								</span>
							</p>
						</div>
					</div>
					<hr className="hr-dashed" />
					<p className="text-muted">
						<span className="text-dark font-13">
							<b>Description :</b>
						</span>
						{description}
					</p>
					<div className="d-flex justify-content-between">
						<div>
							<h4 className="m-0 font-16">
								{availableDoctors}/{totalDoctors}
							</h4>
							<p className="text-muted">Available Doctors</p>
						</div>
						<div>
							<h4 className="m-0 font-16">${revenue}</h4>
							<p className="text-muted">Revenue This Month</p>
						</div>
					</div>
					<div className="d-flex justify-content-between project-card">
						<div className="img-group">
							{(img || []).map((item: any, idx: number) => (
								<Link
									className={`user-avatar ${idx && 'ms-n3'}`}
									to=""
									key={idx}
								>
									<img
										src={item.image}
										alt="user"
										className="thumb-xs rounded-circle"
									/>
								</Link>
							))}
							<Link to="" className="user-avatar">
								<span className="thumb-xs justify-content-center d-flex align-items-center bg-soft-info rounded-circle fw-semibold">
									+6
								</span>
							</Link>
						</div>
						<div className="align-self-center">
							<Link to="" className="text-secondary d-flex">
								Read More
								<i className="las la-long-arrow-alt-right ms-1  font-16 align-self-center" />
							</Link>
						</div>
					</div>
				</CardBody>
			</Card>
		</Col>
	)
}

export default DepartmentCard
