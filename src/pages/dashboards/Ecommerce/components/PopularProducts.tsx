import { ComponentContainerCard } from '@/components'
import { popularProducts } from '../data'
import { Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import clsx from 'clsx'

const PopularProducts = () => {
	return (
		<ComponentContainerCard title="Most Popular Products">
			<div className="table-responsive">
				<table className="table mb-0">
					<thead className="thead-light">
						<tr>
							<th className="border-top-0">Product</th>
							<th className="border-top-0">Price</th>
							<th className="border-top-0">Sell</th>
							<th className="border-top-0">Status</th>
							<th className="border-top-0">Action</th>
						</tr>
					</thead>
					<tbody>
						{popularProducts.map((product, idx) => {
							return (
								<tr key={idx}>
									<td>
										<div className="media">
											<Image
												src={product.image}
												height={30}
												className="me-3 align-self-center rounded"
												alt="..."
											/>
											<div className="media-body align-self-center">
												<h6 className="m-0">{product.name}</h6>
												<Link to="" className="font-12 text-primary">
													ID: {product.id}
												</Link>
											</div>
										</div>
									</td>
									<td>
										${product.product.salePrice}{' '}
										<del className="text-muted font-10">
											${product.product.price}
										</del>
									</td>
									<td>
										{product.sell.sellProduct}{' '}
										<small className="text-muted">({product.sell.stock})</small>
									</td>
									<td>
										<span
											className={clsx(
												'badge px-2',
												product.status == 'Stock'
													? 'badge-soft-warning'
													: 'badge-soft-primary'
											)}
										>
											{product.status}
										</span>
									</td>
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

export default PopularProducts
