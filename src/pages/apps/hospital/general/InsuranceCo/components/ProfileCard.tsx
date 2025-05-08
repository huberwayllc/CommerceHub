import { Button, Card, CardBody, Col } from 'react-bootstrap'
import { ProfileType } from '../data'
import { Link } from 'react-router-dom'

const ProfileCard = ({ profiles }: { profiles: ProfileType }) => {
	const { title, email, image } = profiles
	return (
		<Col lg="4">
			<Card className="profile-card">
				<CardBody className="p-0">
					<div className="media p-3  align-items-center">
						<img src={image} alt="user" className="rounded-circle thumb-lg" />
						<div className="media-body ms-3 align-self-center">
							<h5 className="pro-title mt-0 font-15">{title}</h5>
							<p className="mb-2 text-muted">{email}</p>
							<Button type="button" variant="soft-primary" className="btn-xs">
								Message
							</Button>
						</div>
						<div className="action-btn">
							<Link to="">
								<i className="las la-pen text-secondary font-16" />
							</Link>
							<Link to="">
								<i className="las la-trash-alt text-secondary font-16" />
							</Link>
						</div>
					</div>
				</CardBody>
			</Card>
		</Col>
	)
}

export default ProfileCard
