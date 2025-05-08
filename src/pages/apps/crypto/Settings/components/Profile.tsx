import { Button, Card, CardBody, Col, Image, Row } from 'react-bootstrap'

import avatar4 from '@/assets/images/users/user-4.jpg'
import { Link } from 'react-router-dom'

const Profile = () => {
	return (
		<Card>
			<CardBody>
				<div className="met-profile">
					<Row>
						<Col lg={4} className="align-self-center mb-3 mb-lg-0">
							<div className="met-profile-main">
								<div className="met-profile-main-pic">
									<Image
										src={avatar4}
										height={110}
										className="rounded-circle"
									/>
									<span className="met-profile_main-pic-change">
										<i className="fas fa-camera" />
									</span>
								</div>
								<div className="met-profile_user-detail">
									<h5 className="met-user-name">Rosa Dodson</h5>
									<p className="mb-0 met-user-name-post">
										UI/UX Designer, India
									</p>
								</div>
							</div>
						</Col>
						<Col lg={4} className="ms-auto align-self-center">
							<ul className="list-unstyled personal-detail mb-0">
								<li>
									<i className="las la-phone mr-2 text-secondary font-22 align-middle" />{' '}
									<b> phone </b> : +91 23456 78910
								</li>
								<li className="mt-2">
									<i className="las la-envelope text-secondary font-22 align-middle mr-2" />{' '}
									<b> Email </b> : mannat.theme@gmail.com
								</li>
								<li className="mt-2">
									<i className="las la-globe text-secondary font-22 align-middle mr-2" />{' '}
									<b> Website </b> :
									<Link
										to="https://mannatthemes.com/"
										target="_blank"
										className="font-14 text-primary"
									>
										https://mannatthemes.com/
									</Link>
								</li>
							</ul>
						</Col>
						<Col lg={4} className="align-self-center">
							<Row>
								<Col xs="auto" className="text-end border-end">
									<Button
										variant="soft-primary"
										type="button"
										className=" btn-icon-circle btn-icon-circle-sm mb-2"
									>
										<i className="fab fa-facebook-f" />
									</Button>
									<p className="mb-0 font-weight-semibold">Facebook</p>
									<h4 className="m-0 font-weight-bold">
										25k{' '}
										<span className="text-muted font-12 font-weight-normal">
											Followers
										</span>
									</h4>
								</Col>
								<Col xs="auto">
									<Button
										type="button"
										variant="soft-info"
										className="btn-icon-circle btn-icon-circle-sm mb-2"
									>
										<i className="fab fa-twitter" />
									</Button>
									<p className="mb-0 font-weight-semibold">Twitter</p>
									<h4 className="m-0 font-weight-bold">
										58k{' '}
										<span className="text-muted font-12 font-weight-normal">
											Followers
										</span>
									</h4>
								</Col>
							</Row>
						</Col>
					</Row>
				</div>
			</CardBody>
		</Card>
	)
}

export default Profile
