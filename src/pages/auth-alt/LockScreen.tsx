import AuthLayoutAlt from './AuthLayoutAlt'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { Link } from 'react-router-dom'
import { FormInputPassword, PageMetaData } from '@/components'
import { Button, Col, Row } from 'react-bootstrap'

const BottomLink = () => {
	return (
		<div className="text-center text-muted">
			<p className="mb-1">
				Not you ? return{' '}
				<Link to="/auth/login" className="text-primary ms-2">
					Sign in here
				</Link>
			</p>
		</div>
	)
}

const LockScreen = () => {
	const schemaResolver = yup.object().shape({
		password: yup.string().required('Please enter password'),
	})

	const { control, handleSubmit } = useForm({
		resolver: yupResolver(schemaResolver),
	})
	return (
		<>
			<PageMetaData title="Lock Screen Alt" />
			<AuthLayoutAlt
				title="Enter Password And Use Huberway"
				helpText="Hello Mark, enter your password to unlock the screen !"
				bottomLink={<BottomLink />}
			>
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
			</AuthLayoutAlt>
		</>
	)
}

export default LockScreen
