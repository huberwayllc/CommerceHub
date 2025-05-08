import { Card, CardBody, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import logoSm from '@/assets/images/logo-icon.svg'
import type { ReactNode } from 'react'

type AuthLayoutType = {
	title: string
	helpText: string
	children: ReactNode
	bottomLink?: ReactNode
	hasThirdPartyLogin?: boolean
}

const AuthLayoutAlt = ({
	children,
	helpText,
	title,
	bottomLink,
	hasThirdPartyLogin,
}: AuthLayoutType) => {
	return (
		<div className="auth-page card-bg">
			<Container fluid>
				<Row className="vh-100">
					<Col xs={12}>
						<CardBody className="p-0">
							<Row className="d-flex align-items-center">
								<Col md={5} xl={3} lg={4}>
									<Card className="mb-0 border-0">
										<CardBody className="p-0">
											<div className="text-center p-3">
												<Link to="/" className="logo logo-admin">
													<img
														src={logoSm}
														height={50}
														alt="logo"
														className="auth-logo"
													/>
												</Link>
												<h4 className="mt-3 mb-1 fw-semibold font-18">
													{title}
												</h4>
												<p className="text-muted  mb-0">{helpText}</p>
											</div>
										</CardBody>
										<CardBody className="pt-0">
											{children}
											{bottomLink}
											{hasThirdPartyLogin && (
												<>
													<hr className="hr-dashed mt-4" />
													<div className="text-center mt-n5">
														<h6 className="card-bg px-3 my-4 d-inline-block">
															Or Login With
														</h6>
													</div>
													<div className="d-flex justify-content-center mb-1">
														<Link
															to=""
															className="d-flex justify-content-center align-items-center thumb-sm bg-soft-primary rounded-circle me-2"
														>
															<i className="fab fa-facebook align-self-center" />
														</Link>
														<Link
															to=""
															className="d-flex justify-content-center align-items-center thumb-sm bg-soft-info rounded-circle me-2"
														>
															<i className="fab fa-twitter align-self-center" />
														</Link>
														<Link
															to=""
															className="d-flex justify-content-center align-items-center thumb-sm bg-soft-danger rounded-circle"
														>
															<i className="fab fa-google align-self-center" />
														</Link>
													</div>
												</>
											)}
										</CardBody>
									</Card>
								</Col>
								<Col
									md={7}
									xl={9}
									lg={8}
									className="p-0 vh-100 d-flex justify-content-center auth-bg"
								>
									<div className="accountbg d-flex align-items-center">
										<div className="account-title text-center text-white">
											<img src={logoSm} className="thumb-sm" />
											<h4 className="mt-3 text-white">
												Welcome To <span className="text-warning">Huberway</span>{' '}
											</h4>
											<h1 className="text-white">Let's Get Started</h1>
											<p className="font-18 mt-3">
												Lorem ipsum dolor sit amet, consectetur adipiscing elit.
												Aliquam laoreet tellus ut tincidunt euismod.
											</p>
											<div className="border w-25 mx-auto border-warning" />
										</div>
									</div>
								</Col>
							</Row>
						</CardBody>
					</Col>
				</Row>
			</Container>
		</div>
	)
}

export default AuthLayoutAlt
