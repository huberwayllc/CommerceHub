import { Col, Row } from 'react-bootstrap'
import RevenueChart from './components/RevenueChart'
import TotalRevenue from './components/TotalRevenue'
import StatisticWidget from './components/StatisticWidget'
import { statisticsData } from './data'
import ViewInvoices from './components/ViewInvoices'
import EarningReports from './components/EarningReports'
import PopularProducts from './components/PopularProducts'
import { PageBreadcrumb } from '@/components'

const Ecommerce = () => {
	return (
		<>
			<PageBreadcrumb subName="Dashboard" title="Ecommerce" />

			<Row>
				<Col lg={8}>
					<RevenueChart />
				</Col>

				<Col lg={4}>
					<TotalRevenue />

					<Row>
						{statisticsData.map((item, idx) => {
							return (
								<Col key={idx} xs={12} lg={6}>
									<StatisticWidget title={item.title} state={item.state} />
								</Col>
							)
						})}
					</Row>

					<ViewInvoices />
				</Col>
			</Row>
			<Row>
				<Col lg={6}>
					<EarningReports />
				</Col>

				<Col lg={6}>
					<PopularProducts />
				</Col>
			</Row>
		</>
	)
}

export default Ecommerce
