import { ComponentContainerCard, PageBreadcrumb } from '@/components'

import user4 from '@/assets/images/users/user-4.jpg'
import { Button, Card, CardBody, Col, Row } from 'react-bootstrap'

const DoctorProfile = () => {
	return (
		<>
			<PageBreadcrumb subName="Hospital" title="Dr.Profile" />
			<div>
				<Row>
					<Col xs="12">
						<Card>
							<CardBody>
								<Row>
									<Col lg="4" className="align-self-center">
										<div className="media align-items-center">
											<img
												src={user4}
												alt="user"
												className="rounded-circle thumb-xl"
											/>
											<div className="media-body ms-3 align-self-center">
												<h5 className="m-0 font-22 fw-bold">Dr.Rosa Dodson</h5>
												<p className="mb-0 fw-semibold">
													MBBS, MD Medicine, DNB Cardiology
												</p>
											</div>
										</div>
									</Col>
									<Col lg="4" className="ms-auto">
										<ul className="list-unstyled personal-detail">
											<li>
												<i className="dripicons-phone mr-2 text-info font-18" />{' '}
												<b> phone </b> : +91 23456 78910
											</li>
											<li className="mt-2">
												<i className="dripicons-mail text-info font-18 mt-2 mr-2" />{' '}
												<b> Email </b> : mannat.theme@gmail.com
											</li>
										</ul>
										<div className="button-list btn-social-icon">
											<Button
												type="button"
												variant="soft-primary"
												className="btn-icon-circle btn-icon-circle-sm"
											>
												<i className="fab fa-facebook-f" />
											</Button>
											<Button
												type="button"
												variant="soft-info"
												className="btn-icon-circle btn-icon-circle-sm"
											>
												<i className="fab fa-twitter" />
											</Button>
											<Button
												type="button"
												variant="soft-pink"
												className="btn-icon-circle btn-icon-circle-sm "
											>
												<i className="fab fa-dribbble" />
											</Button>
										</div>
									</Col>
								</Row>
							</CardBody>
						</Card>
					</Col>
				</Row>
				<Row>
					<Col xs="12">
						<Card>
							<CardBody>
								<Row>
									<Col md="6" lg="3">
										<h5 className="header-title dual-border mb-0 position-relative">
											Expertise
										</h5>
										<p className="mt-3 mb-0">
											Coronary intervention, Cardiac Imaging, Cardiac critical
											care
										</p>
									</Col>
									<Col md="6" lg="3">
										<h5 className="header-title dual-border mb-0 position-relative">
											Language Known
										</h5>
										<p className="mt-3 mb-0">English, French, German </p>
									</Col>
									<Col md="6" lg="3">
										<h5 className="header-title dual-border mb-0 position-relative">
											Cluster
										</h5>
										<p className="mt-3 mb-0">1st Floor E</p>
									</Col>
									<Col md="6" lg="3">
										<h5 className="header-title dual-border mb-0 position-relative">
											OPD Timing
										</h5>
										<p className="mt-3 mb-0">
											<span className="fw-semibold">Morning Timing :</span>{' '}
											10:00 AM - 01:00 PM
										</p>
										<p className="mb-0">
											<span className="fw-semibold">Evening Timing :</span>{' '}
											04:00 PM - 07:00 PM
										</p>
									</Col>
								</Row>
							</CardBody>
						</Card>
					</Col>
				</Row>
				<Row>
					<Col lg="9">
						<ComponentContainerCard title="Experience">
							<p className="mb-0">
								It is a long established fact that a reader will be distracted
								by the readable content of a page when looking at its layout.
								The point of using Lorem Ipsum is that it has a more-or-less
								normal distribution of letters, as opposed to using 'Content
								here, content here', making it look like readable English. Many
								desktop publishing packages and web page editors.
							</p>
						</ComponentContainerCard>
						<ComponentContainerCard title="Professional Highlights">
							<p className="mb-0">
								It is a long established fact that a reader will be distracted
								by the readable content of a page when looking at its layout.
								The point of using Lorem Ipsum is that it has a more-or-less
								normal distribution of letters, as opposed to using 'Content
								here, content here', making it look like readable English. Many
								desktop publishing packages and web page editors.
							</p>
						</ComponentContainerCard>
					</Col>
					<Col lg="3">
						<Card>
							<CardBody className="border-bottom">
								<div className="media align-items-center">
									<div className="bg-light-alt d-flex justify-content-center align-items-center thumb-md  rounded-circle">
										<i className="las la-award align-self-center text-secondary font-24" />
									</div>
									<div className="media-body ms-3 align-self-center">
										<h5 className="m-0 font-15">Top National Doctor</h5>
										<p className="mb-0 text-muted">Since 2010 - New York</p>
									</div>
								</div>
							</CardBody>
							<CardBody className="border-bottom">
								<div className="media align-items-center">
									<div className="bg-light-alt d-flex justify-content-center align-items-center thumb-md  rounded-circle">
										<i className="las la-trophy align-self-center text-secondary font-24" />
									</div>
									<div className="media-body ms-3 align-self-center">
										<h5 className="m-0 font-15">Best Cardiologist in Surat</h5>
										<p className="mb-0 text-muted">Since 2012 - India</p>
									</div>
								</div>
							</CardBody>
							<CardBody>
								<div className="media align-items-center">
									<div className="bg-light-alt d-flex justify-content-center align-items-center thumb-md  rounded-circle">
										<i className="las la-medal align-self-center text-secondary font-24" />
									</div>
									<div className="media-body ms-3 align-self-center">
										<h5 className="m-0 font-15">
											99.99% Result in Heart ailment
										</h5>
										<p className="mb-0 text-muted">Since 2018 - London</p>
									</div>
								</div>
							</CardBody>
						</Card>
					</Col>
				</Row>
			</div>
		</>
	)
}

export default DoctorProfile
