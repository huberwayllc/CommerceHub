import { FormInputPassword, FormTextInput, PageMetaData } from '@/components'
import { yupResolver } from '@hookform/resolvers/yup'
import { Button, Col, Row } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import * as yup from 'yup'
import AuthLayoutAlt from './AuthLayoutAlt'

const BottomLink = () => {
	return (
		<div className="m-3 text-center text-muted">
			<p className="mb-0">
				Already have an account ?{' '}
				<Link to="/auth/login-alt" className="text-primary ms-2">
					Register
				</Link>
			</p>
		</div>
	)
}

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
			<PageMetaData title="Register Alt" />
			<AuthLayoutAlt
				title="Let's Get Started Huberway"
				helpText="Sign up to continue to Huberway."
				bottomLink={<BottomLink />}
			>
				<form
					className="my-4"
					onSubmit={handleSubmit(() => navigate('/auth/login'))}
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
									<a href="#" className="text-primary">
										Terms of Use
									</a>
								</label>
							</div>
						</Col>
					</Row>
					<Row className="form-group mb-0">
						<Col xs={12}>
							<div className="d-grid mt-3">
								<Button variant="primary" type="submit">
									Log In <i className="fas fa-sign-in-alt ms-1" />
								</Button>
							</div>
						</Col>
					</Row>
				</form>
			</AuthLayoutAlt>
		</>
	)
}

export default Register
