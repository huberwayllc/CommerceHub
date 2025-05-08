import { PageBreadcrumb } from '@/components'
import { Row } from 'react-bootstrap'
import LatestActivity from './components/LatestActivity'
import PatientMedicalReport from './components/PatientMedicalReport'
import MemberDetails from './components/MemberDetails'

const MemberProfile = () => {
	return (
		<>
			<PageBreadcrumb subName="Hospital" title="Member Profile" />

			<div>
				<MemberDetails />
				<Row>
					<LatestActivity />
					<PatientMedicalReport />
				</Row>
			</div>
		</>
	)
}

export default MemberProfile
