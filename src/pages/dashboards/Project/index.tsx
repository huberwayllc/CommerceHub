import { ActivityCard, PageBreadcrumb } from '@/components'
import { Col, Row } from 'react-bootstrap'
import AllProjects from './components/AllProjects'
import Calendar from './components/Calendar'
import OverviewChart from './components/OverviewChart'
import ProjectStatus from './components/ProjectStatus'
import Statistics from './components/Statistics'
import TasksPerformanceChart from './components/TasksPerformanceChart'

const Project = () => {
	return (
		<>
			<PageBreadcrumb subName="Dashboard" title="Project" />

			<Statistics />

			<Row>
				<Col lg={8}>
					<OverviewChart />
				</Col>

				<Col lg={4}>
					<Calendar />
				</Col>
			</Row>

			<Row>
				<Col lg={4}>
					<TasksPerformanceChart />
				</Col>

				<Col lg={8}>
					<ProjectStatus />
				</Col>
			</Row>
			<Row>
				<Col lg={8}>
					<AllProjects />
				</Col>

				<Col lg={4}>
					<ActivityCard height={425} />
				</Col>
			</Row>
		</>
	)
}

export default Project
