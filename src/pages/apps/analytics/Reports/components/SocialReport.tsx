import { ComponentContainerCard } from '@/components'
import { socialReport } from '../data'
import clsx from 'clsx'

const SocialReport = () => {
	return (
		<ComponentContainerCard title="Social Report">
			<div className="table-responsive">
				<table className="table table-sm table-bordered mb-0">
					<thead className="thead-light">
						<tr>
							<th>Network</th>
							<th>Sessions</th>
							<th>Con.Rate</th>
							<th>Avg.Time</th>
							<th>Bounce Rate</th>
							<th>%Change</th>
						</tr>
					</thead>
					<tbody>
						{socialReport.map((report, idx) => {
							return (
								<tr key={idx}>
									<td>
										<i
											className={clsx(
												`mdi mdi-${report.network.icon} me-1 font-18`,
												report.network.color
											)}
										/>
										{report.network.name}
									</td>
									<td>{report.session}</td>
									<td>{report.conRate}%</td>
									<td>{report.avgTime}</td>
									<td>{report.bounceRate}%</td>
									<td>
										{report.variant == 'danger' && '-'} {report.change}%{' '}
										<i
											className={`mdi mdi-arrow-${report.variant == 'danger' ? 'down' : 'up'}-drop-circle-outline text-${report.variant} ml-1`}
										/>
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

export default SocialReport
