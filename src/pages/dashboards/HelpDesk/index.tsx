import { Col, Row } from 'react-bootstrap'
import Statistics from './components/Statistics'
import TicketsChart from './components/TicketsChart'
import CustomerSatisfactionChart from './components/CustomerSatisfactionChart'
import { complaintDurations } from './data'
import ComplainDurationTime from './components/ComplainDurationTime'
import SupportStatus from './components/SupportStatus'
import { ActivityCard, PageBreadcrumb } from '@/components'
import AgentPerformance from './components/AgentPerformance'

const HelpDesk = () => {
	return (
		<>
			<PageBreadcrumb subName="Dashboard" title="Helpdesk" />
			<Row className="justify-content-center">
				<Col xs={12}>
					<Statistics />
				</Col>
			</Row>
			<Row>
				<Col lg={8}>
					<TicketsChart />
				</Col>

				<Col lg={4}>
					<CustomerSatisfactionChart />
				</Col>
			</Row>

			<Row>
				{complaintDurations.map((item, idx) => {
					return (
						<Col lg={4} key={idx}>
							<ComplainDurationTime
								title={item.title}
								description={item.description}
								time={item.time}
								icon={item.icon}
								chartOption={item.chartOption}
							/>
						</Col>
					)
				})}

				<Col lg={4}>
					<SupportStatus />
				</Col>
			</Row>

			<Row>
				<Col lg={4}>
					<ActivityCard height={385} />
				</Col>

				<Col lg={8}>
					<AgentPerformance />
				</Col>
			</Row>
		</>
	)
}

export default HelpDesk
