import { PageBreadcrumb } from '@/components'
import { Row } from 'react-bootstrap'
import LatestActivity from './components/LatestActivity'
import PatientMedicalReport from './components/PatientMedicalReport'
import PatientDetails from './components/PatientDetails'

const PatientProfile = () => {
	return (
		<>
			<PageBreadcrumb subName="Hospital" title="Patient Profile" />
			<div>
				<PatientDetails />
				<Row>
					<LatestActivity />
					<PatientMedicalReport />
				</Row>
			</div>
		</>
	)
}

export default PatientProfile
