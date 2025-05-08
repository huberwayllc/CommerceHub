import { PageBreadcrumb } from '@/components'
import { Col, Row } from 'react-bootstrap'
import EmailLeftSidebar from './components/EmailLeftSidebar'
import EmailRightSidebar from './components/EmailRightSidebar'

const Inbox = () => {
	return (
		<>
			<PageBreadcrumb subName="Apps" title="Inbox" />
			<Row>
				<Col xs="12">
					<EmailLeftSidebar />
					<EmailRightSidebar />
				</Col>
			</Row>
		</>
	)
}

export default Inbox
