import { PageBreadcrumb } from '@/components'
import { Row } from 'react-bootstrap'
import TicketsStatus from './components/TicketsStatus'
import OverallRating from './components/OverallRating'
import ReportsStatistics from './components/ReportsStatistics'
import AgentPerformance from './components/AgentPerformance'

const Reports = () => {
	return (
		<>
			<PageBreadcrumb subName="Helpdesk" title="Reports" />
			<Row>
				<TicketsStatus />
				<OverallRating />
			</Row>
			<ReportsStatistics />
			<AgentPerformance />
		</>
	)
}

export default Reports
