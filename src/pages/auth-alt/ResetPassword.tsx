import { Link } from 'react-router-dom'
import AuthLayoutAlt from './AuthLayoutAlt'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { FormTextInput, PageMetaData } from '@/components'
import { Button, Col, Row } from 'react-bootstrap'

const BottomLink = () => {
	return (
		<div className="text-center text-muted">
			<p className="mb-1">
				Remember It ?{' '}
				<Link to="/auth/login-alt" className="text-primary ms-2">
					Sign in here
				</Link>
			</p>
		</div>
	)
}

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
			<PageMetaData title="Reset Password Alt" />

			<AuthLayoutAlt
				title="Let's Get Started Huberway"
				helpText="Sign in to continue to Huberway."
				bottomLink={<BottomLink />}
			>
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
			</AuthLayoutAlt>
		</>
	)
}

export default ResetPassword
