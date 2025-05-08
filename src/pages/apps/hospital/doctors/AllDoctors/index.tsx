import React from 'react'
import { Row } from 'react-bootstrap'
import { PageBreadcrumb } from '@/components'
import DoctorCard from './components/DoctorCard'
import { doctorList1, doctorList2, doctorList3 } from './data'

const AllDoctor = () => {
	return (
		<>
			<PageBreadcrumb subName="Hospital" title="All Doctors" />
			<Row>
				{(doctorList1 || []).map((doctor, idx) => (
					<React.Fragment key={idx}>
						<DoctorCard doctors={doctor} />
					</React.Fragment>
				))}
			</Row>
			<Row>
				{(doctorList2 || []).map((doctor, idx) => (
					<React.Fragment key={idx}>
						<DoctorCard doctors={doctor} />
					</React.Fragment>
				))}
			</Row>
			<Row>
				{(doctorList3 || []).map((doctor, idx) => (
					<React.Fragment key={idx}>
						<DoctorCard doctors={doctor} />
					</React.Fragment>
				))}
			</Row>
		</>
	)
}

export default AllDoctor
