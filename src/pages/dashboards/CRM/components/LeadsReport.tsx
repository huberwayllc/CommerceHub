import { ComponentContainerCard } from '@/components'
import { Link } from 'react-router-dom'
import { leadReports } from '../data'
import { Image } from 'react-bootstrap'
import clsx from 'clsx'

const LeadsReport = () => {
	return (
		<ComponentContainerCard
			title="Leads Report"
			label="This Month"
			menuItems={['Today', 'Last Week', 'Last Month', 'This Year']}
		>
			<div className="table-responsive">
				<table className="table mb-0">
					<thead className="thead-light">
						<tr>
							<th>Lead</th>
							<th>Email</th>
							<th>Phone No</th>
							<th>Company</th>
							<th>Status</th>
							<th>Action</th>
						</tr>
					</thead>
					<tbody>
						{leadReports.map((report, idx) => {
							return (
								<tr key={idx}>
									<td>
										<Image
											src={report.lead.image}
											className="thumb-sm rounded-circle me-2"
										/>
										{report.lead.name}
									</td>
									<td>{report.email}</td>
									<td>{report.phoneNo}</td>
									<td>{report.company}</td>
									<td>
										{' '}
										<span
											className={clsx(
												'badge badge-md',
												report.status == 'New Lead'
													? 'badge-soft-purple'
													: report.status == 'Lost'
														? 'badge-soft-danger'
														: report.status == 'Follow Up'
															? 'badge-soft-primary'
															: 'badge-soft-success'
											)}
										>
											{report.status}
										</span>
									</td>
									<td>
										<Link to="">
											<i className="las la-pen text-secondary font-16" />
										</Link>
										<Link to="">
											<i className="las la-trash-alt text-secondary font-16" />
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

export default LeadsReport
