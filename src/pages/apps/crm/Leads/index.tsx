import { PageBreadcrumb } from '@/components'
import { Col, Row } from 'react-bootstrap'
import LeadStatisticCards from './components/LeadStatisticCards'
import AllLeads from './components/AllLeads'

const Leads = () => {
	return (
		<>
			<PageBreadcrumb title="Leads" subName="CRM" />

			<LeadStatisticCards />

			<Row>
				<Col xs={12}>
					<AllLeads />
				</Col>
			</Row>
		</>
	)
}

export default Leads
