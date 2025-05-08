import { ComponentContainerCard } from '@/components'
import { orderSummery } from '../data'
import { Image } from 'react-bootstrap'

const OrderSummery = () => {
	return (
		<ComponentContainerCard title="Order Summary">
			<div className="table-responsive shopping-cart">
				<table className="table mb-0">
					<thead>
						<tr>
							<th>Product</th>
							<th>Quantity</th>
							<th>Total</th>
						</tr>
					</thead>
					<tbody>
						{orderSummery.map((order, idx) => {
							return (
								<tr key={idx}>
									<td>
										<Image src={order.image} height={40} />
										<p className="d-inline-block align-middle mb-0 product-name">
											{order.name}
										</p>
									</td>
									<td>{order.quantity}</td>
									<td>${order.total}</td>
								</tr>
							)
						})}
						<tr>
							<td className=" border-bottom-0">
								<h6>Total :</h6>
							</td>
							<td className=" border-bottom-0"></td>
							<td className="text-dark border-bottom-0">
								<strong>$496</strong>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
			<div className="total-payment">
				<table className="table mb-0">
					<tbody>
						<tr>
							<td className="fw-semibold">Subtotal</td>
							<td>$496.00</td>
						</tr>
						<tr>
							<td className="fw-semibold">Shipping</td>
							<td>Shipping Charge : $5.00</td>
						</tr>
						<tr>
							<td className="fw-semibold">Promo Code</td>
							<td>-$10.00</td>
						</tr>
						<tr>
							<td className="fw-semibold  border-bottom-0">Total</td>
							<td className="text-dark  border-bottom-0">
								<strong>$491.00</strong>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</ComponentContainerCard>
	)
}

export default OrderSummery
