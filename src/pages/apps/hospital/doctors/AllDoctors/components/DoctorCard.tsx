import { Card, CardBody, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { DoctorCardType } from '../data'

const DoctorCard = ({ doctors }: { doctors: DoctorCardType }) => {
	const { name, specialization, experience, image } = doctors
	return (
		<Col lg="4">
			<Card>
				<CardBody className="text-center">
					<div className="text-end">
						<Link to="">
							<i className="las la-pen text-secondary font-16" />
						</Link>
						<Link to="">
							<i className="las la-trash-alt text-secondary font-16" />
						</Link>
					</div>
					<img
						src={image}
						alt="user"
						height={100}
						className="rounded-circle mt-n3"
					/>
					<h5 className="mb-1">{name}</h5>
					<p className="text-muted mb-1">{specialization}</p>
					<p className="text-center font-14">{experience}</p>
					<Link
						to="/apps/hospital/doctor-profile"
						className="btn btn-sm btn-de-primary"
					>
						View Profile
					</Link>
				</CardBody>
			</Card>
		</Col>
	)
}

export default DoctorCard
