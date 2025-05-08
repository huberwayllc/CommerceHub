import { Col, Row } from 'react-bootstrap'
import LeadsAndVendors from './components/LeadsAndVendors'
import { statisticData } from './data'
import StatisticWidget from './components/StatisticWidget'
import MonthlyTrendChart from './components/MonthlyTrendChart'
import SocialReport from './components/SocialReport'
import { ActivityCard, PageBreadcrumb } from '@/components'
import LeadsReport from './components/LeadsReport'

const CRM = () => {
	return (
		<>
			<PageBreadcrumb subName="Dashboard" title="CRM" />
			<Row>
				<Col lg={8}>
					<LeadsAndVendors />

					<Row>
						{statisticData.map((item, idx) => (
							<Col md={6} lg={3} key={idx}>
								<StatisticWidget title={item.title} state={item.state} />
							</Col>
						))}
					</Row>
				</Col>

				<Col md={6} lg={4}>
					<MonthlyTrendChart />

					<SocialReport />
				</Col>
			</Row>
			<Row>
				<Col lg={4}>
					<ActivityCard height={430} />
				</Col>

				<Col lg={8}>
					<LeadsReport />
				</Col>
			</Row>
		</>
	)
}

export default CRM
