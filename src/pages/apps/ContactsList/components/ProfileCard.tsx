import { Link } from 'react-router-dom'
import { Card, CardBody, Col } from 'react-bootstrap'
import { ProfileType } from '../data'

const ProfileCard = ({ profiles }: { profiles: ProfileType }) => {
	const { image, name, email } = profiles
	return (
		<Col lg="4">
			<Card className="profile-card">
				<CardBody className="p-0">
					<div className="media p-3 align-items-center">
						<img src={image} alt="user" className="rounded-circle thumb-xl" />
						<div className="media-body ms-3 align-self-center">
							<h5 className="pro-title">{name}</h5>
							<p className="mb-2 text-muted">{email}</p>
						</div>
						<div className="position-absolute top-0 end-0 mt-3 me-3">
							<Link to="">
								<i className="la la-pen text-secondary font-16 " />
							</Link>
							<Link to="">
								<i className="la la-trash-alt text-secondary font-16 " />
							</Link>
						</div>
					</div>
				</CardBody>
			</Card>
		</Col>
	)
}

export default ProfileCard
