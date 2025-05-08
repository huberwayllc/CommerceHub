import { PageBreadcrumb } from '@/components'
import { Col, Row } from 'react-bootstrap'
import { customers } from './data'
import CustomerCard from './components/CustomerCard'

const Customers = () => {
	return (
		<>
			<PageBreadcrumb subName="CRM" title="Customers" />
			<Row>
				{customers.map((customer, idx) => {
					return (
						<Col key={idx} lg={4}>
							<CustomerCard
								image={customer.image}
								location={customer.location}
								name={customer.name}
							/>
						</Col>
					)
				})}
			</Row>
		</>
	)
}

export default Customers
