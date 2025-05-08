import { Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import SimpleBar from 'simplebar-react'
import { ComponentContainerCard } from '@/components'

import user4 from '@/assets/images/users/user-4.jpg'
import user5 from '@/assets/images/users/user-5.jpg'

const LatestActivity = () => {
	return (
		<Col lg="6">
			<ComponentContainerCard title="Latest Activity">
				<SimpleBar style={{ height: 385 }}>
					<div className="activity">
						<div className="activity-info">
							<div className="icon-info-activity">
								<i className="las la-user-clock bg-soft-primary" />
							</div>
							<div className="activity-info-text">
								<div className="d-flex justify-content-between align-items-center">
									<p className="text-muted mb-0 font-13 w-75">
										<span>Donald </span>
										updated the status of <Link to="">Refund #1234</Link> to
										awaiting customer response
									</p>
									<small className="text-muted">10 Min ago</small>
								</div>
							</div>
						</div>
						<div className="activity-info">
							<div className="icon-info-activity">
								<i className="mdi mdi-timer-off bg-soft-primary" />
							</div>
							<div className="activity-info-text">
								<div className="d-flex justify-content-between align-items-center">
									<p className="text-muted mb-0 font-13 w-75">
										<span>Lucy Peterson </span>
										was added to the group, group name is{' '}
										<Link to="">Overtake</Link>
									</p>
									<small className="text-muted">50 Min ago</small>
								</div>
							</div>
						</div>
						<div className="activity-info">
							<div className="icon-info-activity">
								<img
									src={user5}
									alt="user-5"
									className="rounded-circle thumb-sm"
								/>
							</div>
							<div className="activity-info-text">
								<div className="d-flex justify-content-between align-items-center">
									<p className="text-muted mb-0 font-13 w-75">
										<span>Joseph Rust </span>
										opened new showcase <Link to="">Mannat #112233</Link> with
										theme market
									</p>
									<small className="text-muted">10 hours ago</small>
								</div>
							</div>
						</div>
						<div className="activity-info">
							<div className="icon-info-activity">
								<i className="mdi mdi-clock-outline bg-soft-primary" />
							</div>
							<div className="activity-info-text">
								<div className="d-flex justify-content-between align-items-center">
									<p className="text-muted mb-0 font-13 w-75">
										<span>Donald </span>
										updated the status of <Link to="">Refund #1234</Link> to
										awaiting customer response
									</p>
									<small className="text-muted">Yesterday</small>
								</div>
							</div>
						</div>
						<div className="activity-info">
							<div className="icon-info-activity">
								<i className="mdi mdi-alert-outline bg-soft-primary" />
							</div>
							<div className="activity-info-text">
								<div className="d-flex justify-content-between align-items-center">
									<p className="text-muted mb-0 font-13 w-75">
										<span>Lucy Peterson </span>
										was added to the group, group name is{' '}
										<Link to="">Overtake</Link>
									</p>
									<small className="text-muted">14 Nov 2019</small>
								</div>
							</div>
						</div>
						<div className="activity-info">
							<div className="icon-info-activity">
								<img
									src={user4}
									alt="user-4"
									className="rounded-circle thumb-sm"
								/>
							</div>
							<div className="activity-info-text">
								<div className="d-flex justify-content-between align-items-center">
									<p className="text-muted mb-0 font-13 w-75">
										<span>Joseph Rust </span>
										opened new showcase <Link to="">Mannat #112233</Link> with
										theme market
									</p>
									<small className="text-muted">15 Nov 2019</small>
								</div>
							</div>
						</div>
					</div>
				</SimpleBar>
			</ComponentContainerCard>
		</Col>
	)
}

export default LatestActivity
