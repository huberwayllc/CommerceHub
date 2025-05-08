import { Button, Card, CardBody, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import AuthLayout from './AuthLayout'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { FormTextInput, PageMetaData } from '@/components'

import logoSm from '@/assets/images/logo-icon.svg'

const ResetPassword = () => {
	const schemaResolver = yup.object().shape({
		email: yup
			.string()
			.required('Please enter Email')
			.email('Please enter valid Email'),
	})

	const { control, handleSubmit } = useForm({
		resolver: yupResolver(schemaResolver),
	})
	return (
		<>
			<PageMetaData title="Reset Password" />
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
								Reset Password For Huberway
							</h4>
							<p className="text-muted  mb-0">
								Enter your Email and instructions will be sent to you!
							</p>
						</div>
					</CardBody>
					<CardBody className="pt-0">
						<form className="my-4" onSubmit={handleSubmit(() => {})}>
							<FormTextInput
								name="email"
								label="Email"
								type="email"
								placeholder="Enter Email Address"
								containerClass="mb-3"
								control={control}
							/>
							<Row className="form-group mb-0">
								<Col xs={12}>
									<Button variant="primary" className="w-100" type="submit">
										Reset <i className="fas fa-sign-in-alt ms-1" />
									</Button>
								</Col>
							</Row>
						</form>
						<div className="text-center text-muted">
							<p className="mb-1">
								Remember It ?{' '}
								<Link to="/auth/login" className="text-primary ms-2">
									Sign in here
								</Link>
							</p>
						</div>
					</CardBody>
					<CardBody className="bg-light-alt text-center">
						© {new Date().getFullYear()} Huberway
					</CardBody>
				</Card>
			</AuthLayout>
		</>
	)
}

export default ResetPassword
