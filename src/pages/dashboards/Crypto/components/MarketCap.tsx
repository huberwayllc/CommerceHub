import { ComponentContainerCard } from '@/components'
import { Image } from 'react-bootstrap'
import { currencyMarketCap } from '../data'

const MarketCap = () => {
	return (
		<ComponentContainerCard title="Market cap">
			<p className="mt-n1 mb-2 fw-semibold">
				The global crypto market cap is $1.44T, a{' '}
				<span className="text-danger">3.99%</span> decrease over the last day.
			</p>
			<div className="table-responsive">
				<table className="table mb-0">
					<thead className="thead-light">
						<tr>
							<th>Name</th>
							<th className="text-end">Market cap</th>
							<th className="text-end">Volume(24h)</th>
						</tr>
					</thead>
					<tbody>
						{currencyMarketCap.map((item, idx) => {
							return (
								<tr key={idx}>
									<td>
										<div className="media">
											<Image
												src={item.currency.image}
												className="me-3 thumb-xs align-self-center rounded-circle"
												alt="..."
											/>
											<div className="media-body align-self-center">
												<div className="coin-bal">
													<h5 className="m-0 font-14">
														${item.currency.price}
													</h5>
													<p className="text-muted mb-0">
														{item.currency.name}&nbsp;
														{/* <span className="text-muted font-12">(BTC)</span> */}
														<span className="text-success">
															{item.currency.change}%{' '}
															<i className="mdi mdi-arrow-up" />
														</span>
													</p>
												</div>
											</div>
										</div>
									</td>
									<td className="text-end">${item.marketCap}</td>
									<td className="text-end">${item.volume}</td>
								</tr>
							)
						})}
					</tbody>
				</table>
			</div>
		</ComponentContainerCard>
	)
}

export default MarketCap
