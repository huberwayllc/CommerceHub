import { PageBreadcrumb } from '@/components'
import { Col, Row } from 'react-bootstrap'
import CustomerStatisticWidget from './components/CustomerStatisticWidget'
import CustomersDetails from './components/CustomersDetails'
import CustomersGrowth from './components/CustomersGrowth'
import { customerStatistics } from './data'

const Customers = () => {
	return (
		<>
			<PageBreadcrumb title="Customers" subName="Analytics" />

			<Row>
				<Col lg={12}>
					<CustomersGrowth />
				</Col>
			</Row>
			<Row>
				{customerStatistics.map((statistic, idx) => (
					<Col md={4} key={idx}>
						<CustomerStatisticWidget statistic={statistic} />
					</Col>
				))}
			</Row>
			<Row>
				<Col xs={12}>
					<CustomersDetails />
				</Col>
			</Row>
		</>
	)
}

export default Customers
