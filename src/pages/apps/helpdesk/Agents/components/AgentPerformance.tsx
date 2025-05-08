import { Col, Row } from 'react-bootstrap'
import { ComponentContainerCard } from '@/components'
import { agentsPerformance } from '../data'
import { Link } from 'react-router-dom'

const AgentPerformance = () => {
	return (
		<Row>
			<Col xs="12">
				<ComponentContainerCard title="Agent Performance" viewAll={true}>
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
								{(agentsPerformance || []).map((agent, idx) => (
									<tr key={idx}>
										<td>
											<div className="media">
												{agent.image ? (
													<img
														src={agent.image}
														alt={agent.image}
														className="thumb-sm rounded-circle me-2"
													/>
												) : (
													<div className="d-flex align-items-center">
														<span className="thumb-sm justify-content-center d-flex align-items-center bg-soft-warning rounded-circle me-2">
															{agent.name.charAt(0) +
																agent.name
																	.split(' ')
																	.slice(-1)
																	.toString()
																	.charAt(0)}
														</span>
													</div>
												)}
												<div className="media-body align-self-center text-truncate">
													<h6 className="mt-0 mb-1 text-dark">{agent.name}</h6>
													<p className="text-muted mb-0">{agent.description}</p>
												</div>
											</div>
										</td>
										<td>{agent.totalCalls}</td>
										<td>{agent.callsAnswered}</td>
										<td>{agent.avgSpeedOfAnswer}</td>
										<td>{agent.adherence}</td>
										<td>
											<Link to="">
												<i className="las la-pen text-secondary font-18" />
											</Link>
											<Link to="">
												<i className="las la-trash-alt text-secondary font-18" />
											</Link>
										</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				</ComponentContainerCard>
			</Col>
		</Row>
	)
}

export default AgentPerformance
