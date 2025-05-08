import {
	CryptoTopBar,
	FormInputPassword,
	FormTextInput,
	PageBreadcrumb,
	SelectInput,
} from '@/components'
import { Button, Card, CardBody, CardTitle, Col, Row } from 'react-bootstrap'
import Profile from './components/Profile'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { FiChrome, FiDatabase, FiSmartphone } from 'react-icons/fi'

const Form1 = () => {
	const settingSchema = yup.object({
		email: yup
			.string()
			.email('Please enter a valid email address')
			.required('Please enter email'),
		name: yup.string().required('Please enter patient name'),
		password: yup.string().required('Please enter doctor name'),
	})
	const { control, handleSubmit } = useForm({
		resolver: yupResolver(settingSchema),
	})
	return (
		<Card>
			<CardBody>
				<form onSubmit={handleSubmit(() => {})}>
					<FormTextInput
						name="name"
						label="Full Name"
						placeholder="Full Name"
						control={control}
					/>
					<FormTextInput
						name="email"
						type="email"
						label="Email address"
						placeholder="Enter email"
						containerClass="mt-2"
						control={control}
					/>
					<FormInputPassword
						name="password"
						label="Password"
						containerClass="mt-2"
						placeholder="Enter password"
						control={control}
					/>
					<Button variant="primary" type="submit" className="btn-sm mt-3">
						Save Change
					</Button>
				</form>
			</CardBody>
		</Card>
	)
}
const Form2 = () => {
	const settingSchema = yup.object({
		account: yup.string().required('Please select account'),
		currency: yup.string().required('Please select currency'),
	})
	const { control, handleSubmit } = useForm({
		resolver: yupResolver(settingSchema),
	})
	return (
		<Card>
			<CardBody>
				<form onSubmit={handleSubmit(() => {})}>
					<label className="form-label" htmlFor="setLinkAc">
						Linked Account
					</label>
					<SelectInput control={control} name="account" id="setLinkAc">
						<option>PayPal</option>
						<option>VISA</option>
						<option>ICICI</option>
						<option>HDFC</option>
					</SelectInput>
					<label className="form-label mt-2" htmlFor="setCurrency">
						Collect Currency
					</label>
					<SelectInput control={control} name="currency" id="setCurrency">
						<option>US Dollar</option>
						<option>Pounds</option>
						<option>Euro</option>
						<option>Yen</option>
					</SelectInput>
					<label className="form-label mt-2" htmlFor="setChangePassword">
						Change Wallet Password
					</label>
					<input
						type="password"
						className="form-control"
						id="setChangePassword"
						placeholder="Password"
					/>
					<Button variant="primary" type="submit" size="sm" className="mt-3">
						Save Change
					</Button>
				</form>
			</CardBody>
		</Card>
	)
}

const Settings = () => {
	return (
		<>
			<PageBreadcrumb subName="Crypto" title="Settings" />
			<Row>
				<Col lg={12}>
					<CryptoTopBar />
				</Col>
			</Row>
			<Row>
				<Col xs={12}>
					<Profile />
				</Col>
			</Row>
			<Row>
				<Col lg={4}>
					<Form1 />
				</Col>
				<Col lg={4}>
					<Form2 />
				</Col>
				<Col lg={4}>
					<Card>
						<CardBody>
							<Row className="align-items-center">
								<Col>
									<CardTitle as="h4">Notification Setting</CardTitle>
								</Col>
							</Row>
						</CardBody>
						<CardBody>
							<form>
								<div className="form-check form-switch">
									<input
										className="form-check-input"
										type="checkbox"
										id="ICOnotify"
									/>
									<label className="form-check-label" htmlFor="ICOnotify">
										Get notification, New coin ICO in crypto market
									</label>
								</div>
								<div className="form-check form-switch mt-2">
									<input
										className="form-check-input"
										type="checkbox"
										id="notyfySound"
									/>
									<label className="form-check-label" htmlFor="notyfySound">
										Notification with sound
									</label>
								</div>
								<div className="form-check form-switch mt-2">
									<input
										className="form-check-input"
										type="checkbox"
										id="notifyF_friends"
									/>
									<label className="form-check-label" htmlFor="notifyF_friends">
										Get notification, Only my facebook's friends
									</label>
								</div>
								<div className="form-check form-switch mt-2">
									<input
										className="form-check-input"
										type="checkbox"
										id="autoLockWallet"
										defaultChecked
									/>
									<label className="form-check-label" htmlFor="autoLockWallet">
										Auto lock my wallet
									</label>
								</div>
							</form>
						</CardBody>
					</Card>
				</Col>
			</Row>
			<Row>
				<Col lg={4}>
					<Card>
						<CardBody>
							<div className="media">
								<div className="d-flex justify-content-center align-items-center align-self-center thumb-md bg-soft-primary rounded-circle not-hover">
									<FiSmartphone className="align-self-center" size={24} />
								</div>
								<div className="media-body align-self-center ms-2">
									<h5 className="mt-0 mb-1">SMS Auth</h5>
									<p className="text-muted mb-2">
										Used for withdrawals and security modifications
									</p>
									<div
										className="btn-group"
										role="group"
										aria-label="Basic radio toggle button group"
									>
										<input
											type="radio"
											className="btn-check"
											name="btnradio1"
											id="Enable1"
											autoComplete="off"
											defaultChecked
										/>
										<label
											className="btn btn-outline-secondary btn-sm"
											htmlFor="Enable1"
										>
											Enable
										</label>
										<input
											type="radio"
											className="btn-check"
											name="btnradio1"
											id="Enable2"
											autoComplete="off"
										/>
										<label
											className="btn btn-outline-secondary btn-sm"
											htmlFor="Enable2"
										>
											Disable
										</label>
									</div>
								</div>
							</div>
						</CardBody>
					</Card>
				</Col>
				<Col lg={4}>
					<Card>
						<CardBody>
							<div className="media">
								<div className="d-flex justify-content-center align-items-center align-self-center thumb-md bg-soft-success rounded-circle not-hover">
									<FiChrome className="align-self-center" size={24} />
								</div>
								<div className="media-body align-self-center ms-2">
									<h5 className="mt-0 mb-1">Google Auth</h5>
									<p className="text-muted mb-2">
										Used for withdrawals and security modifications
									</p>
									<div
										className="btn-group"
										role="group"
										aria-label="Basic radio toggle button group"
									>
										<input
											type="radio"
											className="btn-check"
											name="btnradio1"
											id="Enable1"
											autoComplete="off"
											defaultChecked
										/>
										<label
											className="btn btn-outline-secondary btn-sm"
											htmlFor="Enable1"
										>
											Enable
										</label>
										<input
											type="radio"
											className="btn-check"
											name="btnradio1"
											id="Enable2"
											autoComplete="off"
										/>
										<label
											className="btn btn-outline-secondary btn-sm"
											htmlFor="Enable2"
										>
											Disable
										</label>
									</div>
								</div>
							</div>
						</CardBody>
					</Card>
				</Col>
				<Col lg={4}>
					<Card>
						<CardBody>
							<div className="media">
								<div className="d-flex justify-content-center align-items-center align-self-center thumb-md bg-soft-danger rounded-circle not-hover">
									<FiDatabase className="align-self-center" size={24} />
								</div>
								<div className="media-body align-self-center ms-2">
									<h5 className="mt-0 mb-1">API</h5>
									<p className="text-muted mb-2">
										Used for withdrawals and security modifications
									</p>
									<div
										className="btn-group"
										role="group"
										aria-label="Basic radio toggle button group"
									>
										<input
											type="radio"
											className="btn-check"
											name="btnradio1"
											id="Enable1"
											autoComplete="off"
											defaultChecked
										/>
										<label
											className="btn btn-outline-secondary btn-sm"
											htmlFor="Enable1"
										>
											Enable
										</label>
										<input
											type="radio"
											className="btn-check"
											name="btnradio1"
											id="Enable2"
											autoComplete="off"
										/>
										<label
											className="btn btn-outline-secondary btn-sm"
											htmlFor="Enable2"
										>
											Disable
										</label>
									</div>
								</div>
							</div>
						</CardBody>
					</Card>
				</Col>
			</Row>
		</>
	)
}

export default Settings
