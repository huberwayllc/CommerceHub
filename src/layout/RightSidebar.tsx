import { useThemeContext } from '@/context'
import {
	FormCheck,
	Offcanvas,
	OffcanvasBody,
	OffcanvasHeader,
} from 'react-bootstrap'
import FormCheckInput from 'react-bootstrap/esm/FormCheckInput'
import FormCheckLabel from 'react-bootstrap/esm/FormCheckLabel'

const RightSidebar = () => {
	const { updateShowRightSideBar: updateShowRightsideBar, settings } =
		useThemeContext()

	const isOpenRightSideBar = settings.showRightSideBar
	/**
	 * Toggles the right sidebar
	 */
	const handleRightSideBar = () => {
		updateShowRightsideBar(false)
	}
	return (
		<Offcanvas
			show={isOpenRightSideBar}
			onHide={handleRightSideBar}
			placement="end"
			tabIndex={-1}
			id="Appearance"
			aria-labelledby="AppearanceLabel"
		>
			<OffcanvasHeader className="border-bottom">
				<h5 className="m-0 font-14" id="AppearanceLabel">
					Appearance
				</h5>
				<button
					type="button"
					className="btn-close text-reset p-0 m-0 align-self-center"
					onClick={handleRightSideBar}
				/>
			</OffcanvasHeader>
			<OffcanvasBody>
				<h6>Account Settings</h6>
				<div className="p-2 text-start mt-3">
					<FormCheck className="form-switch mb-2">
						<FormCheckInput type="checkbox" id="settings-switch1" />
						<FormCheckLabel htmlFor="settings-switch1">
							Auto updates
						</FormCheckLabel>
					</FormCheck>
					<FormCheck className="form-switch mb-2">
						<FormCheckInput
							type="checkbox"
							id="settings-switch2"
							defaultChecked
						/>
						<FormCheckLabel htmlFor="settings-switch2">
							Location Permission
						</FormCheckLabel>
					</FormCheck>
					<FormCheck className="form-switch">
						<FormCheckInput type="checkbox" id="settings-switch3" />
						<FormCheckLabel htmlFor="settings-switch3">
							Show offline Contacts
						</FormCheckLabel>
					</FormCheck>
				</div>
				<h6>General Settings</h6>
				<div className="p-2 text-start mt-3">
					<FormCheck className="form-switch mb-2">
						<FormCheckInput type="checkbox" id="settings-switch4" />
						<FormCheckLabel htmlFor="settings-switch4">
							Show me Online
						</FormCheckLabel>
					</FormCheck>
					<FormCheck className="form-switch mb-2">
						<FormCheckInput
							type="checkbox"
							id="settings-switch5"
							defaultChecked
						/>
						<FormCheckLabel htmlFor="settings-switch5">
							Status visible to all
						</FormCheckLabel>
					</FormCheck>
					<FormCheck className="form-switch">
						<FormCheckInput type="checkbox" id="settings-switch6" />
						<FormCheckLabel htmlFor="settings-switch6">
							Notifications Popup
						</FormCheckLabel>
					</FormCheck>
				</div>
			</OffcanvasBody>
		</Offcanvas>
	)
}

export default RightSidebar
