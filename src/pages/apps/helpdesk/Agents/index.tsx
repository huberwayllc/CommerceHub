import React from 'react'
import { PageBreadcrumb } from '@/components'
import { agentsTestimonial } from './data'
import { Row } from 'react-bootstrap'
import AgentsCard from './components/AgentsCard'
import AgentPerformance from './components/AgentPerformance'

const Agents = () => {
	return (
		<>
			<PageBreadcrumb subName="Helpdesk" title="Agents" />
			<Row>
				{agentsTestimonial.map((agent, idx) => {
					return (
						<React.Fragment key={idx}>
							<AgentsCard agents={agent} />
						</React.Fragment>
					)
				})}
			</Row>
			<AgentPerformance />
		</>
	)
}

export default Agents
