import { ActivityCard, PageBreadcrumb } from '@/components'
import { Col, Row } from 'react-bootstrap'
import AvailableDoctors from './components/AvailableDoctors'
import HospitalSurveyChart from './components/HospitalSurveyChart'
import NewPatients from './components/NewPatients'
import PatientsChart from './components/PatientsChart'
import PatientsReports from './components/PatientsReports'
import StatisticWidget from './components/StatisticWidget'
import { statisticData } from './data'

const Hospital = () => {
	return (
		<>
			<PageBreadcrumb subName="Dashboard" title="Hospital" />
			<Row>
				{statisticData.map((item, idx) => {
					return (
						<Col key={idx} xs={12} md={4} lg={2}>
							<StatisticWidget
								icon={item.icon}
								state={item.state}
								title={item.title}
							/>
						</Col>
					)
				})}
			</Row>

			<Row>
				<Col lg={9}>
					<HospitalSurveyChart />
				</Col>

				<Col lg={3}>
					<PatientsChart />
				</Col>
			</Row>

			<Row>
				<Col lg={4}>
					<AvailableDoctors />
				</Col>

				<Col lg={8}>
					<PatientsReports />
				</Col>
			</Row>

			<Row>
				<Col lg={8}>
					<NewPatients />
				</Col>

				<Col lg={4}>
					<ActivityCard height={440} />
				</Col>
			</Row>
		</>
	)
}

export default Hospital
