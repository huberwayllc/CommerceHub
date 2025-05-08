import { ComponentContainerCard } from '@/components'
import { earningsReport } from '../data'

const EarningReports = () => {
	return (
		<ComponentContainerCard title="Earnings Reports">
			<div className="table-responsive">
				<table className="table mb-0">
					<thead className="thead-light">
						<tr>
							<th className="border-top-0">Date</th>
							<th className="border-top-0">Item Count</th>
							<th className="border-top-0">Tax</th>
							<th className="border-top-0">Earnings</th>
						</tr>
					</thead>
					<tbody>
						{earningsReport.map((report, idx) => {
							return (
								<tr key={idx}>
									<td>{report.date}</td>
									<td>{report.itemCount}</td>
									<td className="text-danger">-${report.tax}</td>
									<td>${report.earning}</td>
								</tr>
							)
						})}
					</tbody>
				</table>
			</div>
		</ComponentContainerCard>
	)
}

export default EarningReports
