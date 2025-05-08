import { yupResolver } from '@hookform/resolvers/yup'
import { Button, Card, CardBody, Col, Row } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import * as yup from 'yup'
import AuthLayout from './AuthLayout'
import { FormInputPassword, FormTextInput, PageMetaData } from '@/components'

import logoSm from '@/assets/images/logo-icon.svg'

const Register = () => {
	const schemaResolver = yup.object().shape({
		username: yup.string().required('Please enter username'),
		email: yup
			.string()
			.required('Please enter Email')
			.email('Please enter valid Email'),
		password: yup.string().required('Please enter Password'),
		confirmPassword: yup
			.string()
			.oneOf([yup.ref('password')], 'Passwords must match'),
		mobileNo: yup.number().required('Please enter mobile number'),
	})

	const { control, handleSubmit } = useForm({
		resolver: yupResolver(schemaResolver),
	})

	const navigate = useNavigate()
	return (
		<>
			<PageMetaData title="Register" />
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
								Sign up to continue to Huberway.
							</p>
						</div>
					</CardBody>
					<CardBody className="pt-0">
						<form
							onSubmit={handleSubmit(() => navigate('/auth/login'))}
							className="my-4"
						>
							<FormTextInput
								name="username"
								label="Username"
								containerClass="mb-2"
								control={control}
								placeholder="Enter username"
							/>
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
								containerClass="mb-2"
								placeholder="Enter password"
							/>
							<FormInputPassword
								name="confirmPassword"
								label="Confirm Password"
								control={control}
								containerClass="mb-2"
								placeholder="Enter confirm password"
							/>
							<FormTextInput
								name="mobileNo"
								label="Mobile Number"
								containerClass="mb-2"
								control={control}
								placeholder="Enter Mobile Number"
							/>
							<Row className="form-group mt-3">
								<Col xs={12}>
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
											By registering you agree to the Huberway{' '}
											<Link to="" className="text-primary">
												Terms of Use
											</Link>
										</label>
									</div>
								</Col>
							</Row>
							<Row className="form-group mb-0">
								<Col xs={12}>
									<div className="d-grid mt-3">
										<Button variant="primary" type="submit">
											Sign Up <i className="fas fa-sign-in-alt ms-1" />
										</Button>
									</div>
								</Col>
							</Row>
						</form>
						<div className="m-3 text-center text-muted">
							<p className="mb-0">
								Already have an account ?{' '}
								<Link to="/auth/login" className="text-primary ms-2">
									Log in
								</Link>
							</p>
						</div>
					</CardBody>
				</Card>
			</AuthLayout>
		</>
	)
}

export default Register
