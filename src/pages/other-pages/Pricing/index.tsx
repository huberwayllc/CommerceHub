import { Col, Row } from 'react-bootstrap'
import { pricingPlans, pricingPlansData } from './data'
import PricingCard from './components/PricingCard'
import PricingCard2 from './components/PricingCard2'
import { PageBreadcrumb } from '@/components'

const Pricing = () => {
	return (
		<>
			<PageBreadcrumb subName="Pages" title="Pricing" />
			<Row>
				{pricingPlans.map((plan, idx) => {
					return (
						<Col lg={3} key={idx}>
							<PricingCard
								name={plan.name}
								price={plan.price}
								isPopular={plan.isPopular}
							/>
						</Col>
					)
				})}
			</Row>
			<Row>
				{pricingPlansData.map((plan, idx) => (
					<Col lg={3} key={idx}>
						<PricingCard2 plan={plan} />
					</Col>
				))}
			</Row>
		</>
	)
}

export default Pricing
