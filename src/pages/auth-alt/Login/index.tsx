import { Link, Navigate } from 'react-router-dom'
import AuthLayoutAlt from '../AuthLayoutAlt'
import useLogin from './useLogin'
import { FormInputPassword, FormTextInput, PageMetaData } from '@/components'
import { Button, Col, Row } from 'react-bootstrap'

const BottomLink = () => {
	return (
		<div className="m-3 text-center text-muted">
			<p className="mb-0">
				Don't have an account ?{' '}
				<Link to="/auth/register-alt" className="text-primary ms-2">
					Free Resister
				</Link>
			</p>
		</div>
	)
}
const Login = () => {
	const { loading, control, login, redirectUrl, isAuthenticated } = useLogin()
	return (
		<>
			<PageMetaData title="Login Alt" />

			{isAuthenticated && <Navigate to={redirectUrl} replace />}
			<AuthLayoutAlt
				title="Let's Get Started Huberway"
				helpText="Sign in to continue to Huberway."
				bottomLink={<BottomLink />}
				hasThirdPartyLogin
			>
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
						<Col sm={6} className="text-end">
							<Link to="/auth/re-password-alt" className="text-muted font-13">
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
			</AuthLayoutAlt>
		</>
	)
}

export default Login
