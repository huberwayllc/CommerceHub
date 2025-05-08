import { Col, FormCheck, Row } from 'react-bootstrap'
import PersonalInformation from './components/PersonalInformation'
import ChangePassword from './components/ChangePassword'
import { ComponentContainerCard } from '@/components'
import FormCheckInput from 'react-bootstrap/esm/FormCheckInput'
import FormCheckLabel from 'react-bootstrap/esm/FormCheckLabel'

const Settings = () => {
	return (
		<Row>
			<Col lg={6} xl={6}>
				<PersonalInformation />
			</Col>
			<Col lg={6} xl={6}>
				<ChangePassword />

				<ComponentContainerCard title="Other Settings">
					<FormCheck>
						<FormCheckInput
							type="checkbox"
							id="Email_Notifications"
							defaultChecked
						/>
						<FormCheckLabel htmlFor="Email_Notifications">
							Email Notifications&nbsp;
						</FormCheckLabel>
						<span className="form-text text-muted font-12 mt-0">
							Do you need them?
						</span>
					</FormCheck>
					<FormCheck>
						<FormCheckInput type="checkbox" id="API_Access" />
						<FormCheckLabel htmlFor="API_Access">
							API Access&nbsp;
						</FormCheckLabel>
						<span className="form-text text-muted font-12 mt-0">
							Enable/Disable access
						</span>
					</FormCheck>
				</ComponentContainerCard>
			</Col>
		</Row>
	)
}

export default Settings
