import { Button, Col, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import clsx from 'clsx'

import avatar8 from '@/assets/images/users/user-8.jpg'
import avatar5 from '@/assets/images/users/user-5.jpg'
import avatar4 from '@/assets/images/users/user-4.jpg'
import avatar6 from '@/assets/images/users/user-6.jpg'

const availableMembers = [avatar8, avatar5, avatar4, avatar6]
const AvailableTeamMembers = () => {
	return (
		<>
			<Col lg={6}>
				<h5 className="d-inline-block me-2">
					🏆 Huberway's available team members.
				</h5>
				<div className="img-group d-inline-block">
					{availableMembers.map((image, idx) => (
						<Link
							className={clsx('user-avatar', idx == 0 ? '' : ' ms-n3')}
							to=""
							key={idx}
						>
							<Image
								src={image}
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
			</Col>
			<Col lg={6} className="text-end align-self-center">
				<Button type="button" variant="primary" size="sm">
					Add New Task
				</Button>
			</Col>
		</>
	)
}

export default AvailableTeamMembers
