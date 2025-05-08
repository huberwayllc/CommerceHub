import { PageBreadcrumb } from '@/components'
import { Col, Row } from 'react-bootstrap'
import OpportunitiesByOwner from './components/OpportunitiesByOwner'
import AllOpportunities from './components/AllOpportunities'

const Opportunities = () => {
	return (
		<>
			<PageBreadcrumb subName="CRM" title="Opportunities" />

			<Row>
				<Col lg={12}>
					<OpportunitiesByOwner />
				</Col>
			</Row>

			<AllOpportunities />
		</>
	)
}

export default Opportunities
