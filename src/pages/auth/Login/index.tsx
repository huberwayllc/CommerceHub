import { FormInputPassword, FormTextInput, PageMetaData } from '@/components'
import { Button, Card, CardBody, Col, Row } from 'react-bootstrap'
import { Link, Navigate } from 'react-router-dom'
import AuthLayout from '../AuthLayout'
import useLogin from './useLogin'

import logoSm from '@/assets/images/logo-icon.svg'

const Login = () => {
	const { loading, control, login, redirectUrl, isAuthenticated } = useLogin()

	return (
		<>
			<PageMetaData title="Login" />
			{isAuthenticated && <Navigate to={redirectUrl} replace />}
			<AuthLayout>
				<Card>
					<CardBody className="p-0 auth-header-box">
						<div className="text-center p-3">
							<Link to="/" className="logo logo-admin">
								<img
									src={logoSm}
									height={50}
									alt="logo"
									className="auth-logo"
								/>
							</Link>
							<h4 className="mt-3 mb-1 fw-semibold text-white font-18">
								Let's Get Started Huberway
							</h4>
							<p className="text-muted  mb-0">
								Sign in to continue to Huberway.
							</p>
						</div>
					</CardBody>
					<CardBody className="pt-0">
						<form className="my-4" onSubmit={login}>
							<FormTextInput
								name="email"
								label="Email"
								containerClass="mb-2"
								control={control}
								placeholder="Enter email"
							/>
							<FormInputPassword
								name="password"
								label="Password"
								control={control}
								placeholder="Enter password"
							/>
							<Row className="form-group mt-3">
								<Col sm={6}>
									<div className="form-check form-switch form-switch-success">
										<input
											className="form-check-input"
											type="checkbox"
											id="customSwitchSuccess"
										/>
										<label
											className="form-check-label"
											htmlFor="customSwitchSuccess"
										>
											Remember me
										</label>
									</div>
								</Col>
								<Col sm="6" className="text-end">
									<Link to="/auth/recover-pass" className="text-muted font-13">
										<i className="dripicons-lock" /> Forgot password?
									</Link>
								</Col>
							</Row>
							<Row className="form-group mb-0">
								<Col xs={12}>
									<div className="d-grid mt-3">
										<Button variant="primary" disabled={loading} type="submit">
											Log In <i className="fas fa-sign-in-alt ms-1" />
										</Button>
									</div>
								</Col>
							</Row>
						</form>
						<div className="m-3 text-center text-muted">
							<p className="mb-0">
								Don't have an account ?{' '}
								<Link to="/auth/register" className="text-primary ms-2">
									Free Resister
								</Link>
							</p>
						</div>
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
					</CardBody>
				</Card>
			</AuthLayout>
		</>
	)
}

export default Login
