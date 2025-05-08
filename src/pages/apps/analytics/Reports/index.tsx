import { Col, Row } from 'react-bootstrap'
import VisitorsByCountryChart from './components/VisitorsByCountryChart'
import LiveVisitsChart from './components/LiveVisitsChart'
import TopCountries from './components/TopCountries'
import { PageBreadcrumb } from '@/components'
import SocialReport from './components/SocialReport'

const Reports = () => {
	return (
		<>
			<PageBreadcrumb title="Reports" subName="Analytics" />

			<Row>
				<Col lg={6}>
					<VisitorsByCountryChart />
				</Col>

				<Col lg={6}>
					<LiveVisitsChart />

					<TopCountries />
				</Col>
			</Row>

			<Row>
				<Col xs={12}>
					<SocialReport />
				</Col>
			</Row>
		</>
	)
}

export default Reports
