import { PageBreadcrumb } from '@/components'
import {
	Card,
	CardBody,
	Col,
	Nav,
	NavItem,
	NavLink,
	Row,
	TabContainer,
	TabContent,
	TabPane,
} from 'react-bootstrap'

import user4 from '@/assets/images/users/user-4.jpg'
import { Link } from 'react-router-dom'
import Post from './Post'
import Gallery from './Gallery'
import Settings from './Settings'

const Profile = () => {
	return (
		<>
			<PageBreadcrumb subName="Pages" title="Profile" />
			<Row>
				<Col xs={12}>
					<Card>
						<CardBody>
							<div className="met-profile">
								<Row>
									<Col lg={4} className="align-self-center mb-3 mb-lg-0">
										<div className="met-profile-main">
											<div className="met-profile-main-pic">
												<img
													src={user4}
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
												<button
													type="button"
													className="btn btn-soft-primary btn-icon-circle btn-icon-circle-sm mb-2"
												>
													<i className="fab fa-facebook-f" />
												</button>
												<p className="mb-0 fw-semibold">Facebook</p>
												<h4 className="m-0 fw-bold">
													25k{' '}
													<span className="text-muted font-12 fw-normal">
														Followers
													</span>
												</h4>
											</Col>
											<Col xs="auto">
												<button
													type="button"
													className="btn btn-soft-info btn-icon-circle btn-icon-circle-sm mb-2"
												>
													<i className="fab fa-twitter" />
												</button>
												<p className="mb-0 fw-semibold">Twitter</p>
												<h4 className="m-0 fw-bold">
													58k{' '}
													<span className="text-muted font-12 fw-normal">
														Followers
													</span>
												</h4>
											</Col>
										</Row>
									</Col>
								</Row>
							</div>
						</CardBody>
						<CardBody className="p-0">
							<TabContainer defaultActiveKey="1">
								<Nav className="nav-tabs" role="tablist">
									<NavItem>
										<NavLink
											eventKey="1"
											href="#Post"
											role="tab"
											aria-selected="true"
										>
											Post
										</NavLink>
									</NavItem>
									<NavItem>
										<NavLink
											eventKey="2"
											href="#Gallery"
											role="tab"
											aria-selected="false"
										>
											Gallery
										</NavLink>
									</NavItem>
									<NavItem>
										<NavLink
											eventKey="3"
											href="#Settings"
											role="tab"
											aria-selected="false"
										>
											Settings
										</NavLink>
									</NavItem>
								</Nav>
								<TabContent>
									<TabPane
										eventKey="1"
										className="p-3"
										id="Post"
										role="tabpanel"
									>
										<Post />
									</TabPane>
									<TabPane
										eventKey="2"
										className="p-3"
										id="Gallery"
										role="tabpanel"
									>
										<Gallery />
									</TabPane>
									<TabPane
										eventKey="3"
										className="p-3"
										id="Settings"
										role="tabpanel"
									>
										<Settings />
									</TabPane>
								</TabContent>
							</TabContainer>
						</CardBody>
					</Card>
				</Col>
			</Row>
		</>
	)
}

export default Profile
