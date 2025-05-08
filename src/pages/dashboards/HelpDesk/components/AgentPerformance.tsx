import { ComponentContainerCard } from '@/components'
import { agentPerformance } from '../data'
import { Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const AgentPerformance = () => {
	return (
		<ComponentContainerCard title="Agent Performance" viewAll>
			<div className="table-responsive browser_users">
				<table className="table mb-0">
					<thead className="thead-light">
						<tr>
							<th className="border-top-0">Agent</th>
							<th className="border-top-0">Total Calls</th>
							<th className="border-top-0">Calls Answered</th>
							<th className="border-top-0">Avg.Speed of answer</th>
							<th className="border-top-0">Adherence %</th>
							<th className="border-top-0">Action</th>
						</tr>
					</thead>
					<tbody>
						{agentPerformance.map((agent, idx) => {
							return (
								<tr key={idx}>
									<td>
										<div className="media">
											{agent.image && (
												<Image
													src={agent.image}
													className="thumb-sm rounded-circle me-2"
												/>
											)}
											{agent.variant && (
												<div className="d-flex align-items-center">
													<span
														className={`thumb-sm justify-content-center d-flex align-items-center bg-soft-${agent.variant} rounded-circle me-2`}
													>
														MT
													</span>
												</div>
											)}
											<div className="media-body align-self-center text-truncate">
												<h6 className="mt-0 mb-1 text-dark">{agent.name}</h6>
												<p className="text-muted mb-0">
													Dummy text of the printing.
												</p>
											</div>
										</div>
									</td>
									<td>{agent.totalCall}</td>
									<td>{agent.callsAnswered}</td>
									<td>{agent.soa}s</td>
									<td>{agent.adherence}%</td>
									<td>
										<Link to="">
											<i className="las la-pen text-secondary font-18" />
										</Link>
										<Link to="">
											<i className="las la-trash-alt text-secondary font-18" />
										</Link>
									</td>
								</tr>
							)
						})}
					</tbody>
				</table>
			</div>
		</ComponentContainerCard>
	)
}

export default AgentPerformance
