import { transactionHistory } from '../data'
import { ComponentContainerCard } from '@/components'

const TransactionHistory = () => {
	return (
		<ComponentContainerCard title="Transaction History" viewAll>
			<ul className="list-unsyled m-0 ps-0 transaction-history">
				{transactionHistory.map((item, idx) => {
					return (
						<li
							key={idx}
							className="align-items-center d-flex justify-content-between"
						>
							<div className="media">
								<div className="thumb-xs bg-soft-primary rounded-circle d-flex justify-content-center align-items-center">
									{item.variant == 'danger' ? (
										<i className="mdi mdi-arrow-top-right-thick font-20" />
									) : (
										<i className="mdi mdi-arrow-down-thick font-20" />
									)}
								</div>
								<div className="media-body align-self-center ms-3">
									<div className="transaction-data">
										<h5 className="m-0 font-14">
											{' '}
											{item.variant == 'danger' ? 'Send' : 'Receive'} BTC
										</h5>
										<p className="text-muted mb-0">{item.dateAndTime}</p>
									</div>
								</div>
							</div>
							<span className={`text-${item.variant}`}>{item.transaction}</span>
						</li>
					)
				})}
			</ul>
		</ComponentContainerCard>
	)
}

export default TransactionHistory
