import { PageBreadcrumb } from '@/components'
import { Col, Row } from 'react-bootstrap'
import OrderSummery from './components/OrderSummery'
import DeliveryAddress from './components/DeliveryAddress'
import BillingDetails from './components/BillingDetails'
import OverallRating from './components/OverallRating'

const Checkout = () => {
	return (
		<>
			<PageBreadcrumb subName="Ecommerce" title="CheckOut" />
			<Row>
				<Col lg={4}>
					<OrderSummery />
				</Col>

				<Col lg={8}>
					<DeliveryAddress />

					<Row>
						<Col lg={7}>
							<BillingDetails />
						</Col>

						<Col lg={5}>
							<OverallRating />
						</Col>
					</Row>
				</Col>
			</Row>
		</>
	)
}

export default Checkout
