import { Link } from 'react-router-dom'
import ComponentContainerCard from '../ComponentContainerCard'

type TransactionHistoryType = {
	id: number
	date: string
	time: string
	value: number
	type: 'Sent' | 'Received'
}

const TransactionHistory = ({
	transactions,
}: {
	transactions: TransactionHistoryType[]
}) => {
	return (
		<ComponentContainerCard
			title="Transaction History"
			label="Today"
			menuItems={['Today', 'Yesterday', 'Last Week', 'Last Month']}
		>
			<div className="table-responsive dash-social">
				<table id="datatable" className="table table-bordered">
					<thead className="thead-light">
						<tr>
							<th>No</th>
							<th>Date</th>
							<th>Time</th>
							<th>Transaction ID</th>
							<th>Type</th>
							<th>Value</th>
						</tr>
					</thead>
					<tbody>
						{transactions.map((transaction, idx) => {
							return (
								<tr key={idx}>
									<td>{transaction.id}</td>
									<td>{transaction.date}</td>
									<td>{transaction.time}</td>
									<td>c12b001a15f9bd46ef1c6551386c6a2bcda1ab3eae5091fba</td>
									<td>
										<span
											className={`badge badge-soft-${transaction.type == 'Sent' ? 'danger' : 'success'}`}
										>
											{transaction.type}
										</span>
									</td>
									<td>${transaction.value}</td>
								</tr>
							)
						})}
					</tbody>
				</table>
			</div>
			<nav aria-label="..." className="float-end">
				<ul className="pagination pagination-sm mb-0">
					<li className="page-item disabled">
						<Link className="page-link" to="" tabIndex={-1}>
							Previous
						</Link>
					</li>
					<li className="page-item active">
						<Link className="page-link" to="">
							1
						</Link>
					</li>
					<li className="page-item">
						<Link className="page-link" to="">
							2 <span className="sr-only">(current)</span>
						</Link>
					</li>
					<li className="page-item">
						<Link className="page-link" to="">
							3
						</Link>
					</li>
					<li className="page-item">
						<Link className="page-link" to="">
							Next
						</Link>
					</li>
				</ul>
			</nav>
		</ComponentContainerCard>
	)
}

export default TransactionHistory
