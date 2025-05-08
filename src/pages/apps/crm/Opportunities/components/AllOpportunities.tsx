import { Col, Row } from 'react-bootstrap'
import { allOpportunities } from '../data'
import OpportunityCard from './OpportunityCard'

const AllOpportunities = () => {
	return (
		<Row>
			{Array.from(new Array(Math.floor(2))).map((_star, idx) => {
				return (
					<Col lg={6} key={idx}>
						{allOpportunities.map((item, idx) => (
							<OpportunityCard
								key={idx}
								image={item.image}
								name={item.name}
								variant={item.variant}
							/>
						))}
					</Col>
				)
			})}
		</Row>
	)
}

export default AllOpportunities
