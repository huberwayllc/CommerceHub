import { PageBreadcrumb } from '@/components'
import { Col, Row } from 'react-bootstrap'
import AvailableTeamMembers from './components/AvailableTeamMembers'
import Milestones from './components/Milestones'
import TaskCard from './components/TaskCard'
import TaskChart from './components/TaskChart'
import TaskManagerCard from './components/TaskManagerCard'
import { allTask } from './data'

const Task = () => {
	return (
		<>
			<PageBreadcrumb title="Tasks" subName="Projects" />
			<Row>
				<Col lg={4}>
					<TaskChart />
				</Col>

				<Col lg={4}>
					<TaskManagerCard />
				</Col>

				<Col lg={4}>
					<Milestones />
				</Col>
			</Row>

			<Row className="mb-3">
				<AvailableTeamMembers />
			</Row>

			<Row>
				{allTask.map((task, idx) => (
					<Col lg={6} key={idx}>
						<TaskCard allTask={task} />
					</Col>
				))}
			</Row>
		</>
	)
}

export default Task
