import { FormInputPassword, PageMetaData } from '@/components'
import { yupResolver } from '@hookform/resolvers/yup'
import { Button, Card, CardBody, Col, Row } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import * as yup from 'yup'
import AuthLayout from './AuthLayout'

import logoSm from '@/assets/images/logo-icon.svg'

const LockScreen = () => {
	const schemaResolver = yup.object().shape({
		password: yup.string().required('Please enter password'),
	})

	const { control, handleSubmit } = useForm({
		resolver: yupResolver(schemaResolver),
	})

	return (
		<>
			<PageMetaData title="Lock Screen" />
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
								Enter Password And Use Huberway
							</h4>
							<p className="text-muted  mb-0">
								Hello Mark, enter your password to unlock the screen !
							</p>
						</div>
					</CardBody>
					<CardBody className="pt-0">
						<form className="my-4" onSubmit={handleSubmit(() => {})}>
							<FormInputPassword
								name="password"
								label="Password"
								containerClass="mb-3"
								placeholder="Enter password"
								control={control}
							/>
							<Row className="form-group mb-0">
								<Col xs={12}>
									<Button variant="primary" className="w-100" type="submit">
										Unlock <i className="fas fa-sign-in-alt ms-1" />
									</Button>
								</Col>
							</Row>
						</form>
						<div className="text-center text-muted">
							<p className="mb-1">
								Not you ? return{' '}
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

export default LockScreen
