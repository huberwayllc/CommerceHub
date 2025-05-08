import { Card, CardBody, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import type { UserType } from '../types'

const UserCard = ({ image, name }: UserType) => {
	return (
		<Card>
			<CardBody className="p-0">
				<div className="media p-3  align-items-center">
					<Image src={image} alt="user" className="rounded-circle thumb-lg" />
					<div className="media-body ms-3 align-self-center">
						<h5 className="m-0">
							{name} <span className="badge badge-warning font-10">New</span>
						</h5>
						<p className="mb-0 text-muted">@SaraHopkins.com</p>
					</div>
					<div className="action-btn">
						<Link to="">
							<i className="las la-pen text-secondary font-16 me-1" />
						</Link>
						<Link to="">
							<i className="las la-trash-alt text-secondary font-16" />
						</Link>
					</div>
				</div>
			</CardBody>
		</Card>
	)
}

export default UserCard
