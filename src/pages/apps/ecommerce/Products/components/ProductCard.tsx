import { Button, Card, CardBody, Image } from 'react-bootstrap'
import { ProductType } from '../data'
import { Link } from 'react-router-dom'

const ProductCard = ({ product }: { product: ProductType }) => {
	const { category, name, offer, price, sellPrice, image } = product
	return (
		<Card>
			<CardBody>
				<div className="ribbon1 rib1-primary">
					<span className="text-white text-center rib1-primary">{offer}</span>
				</div>
				<Image src={image} className="d-block mx-auto my-4" height={150} />
				<div className="d-flex justify-content-between align-items-center my-4">
					<div>
						<p className="text-muted mb-2">{category}</p>
						<Link to="" className="header-title">
							{name}
						</Link>
					</div>
					<div>
						<h4 className="text-dark mt-0 mb-2">
							${sellPrice}.00{' '}
							<small className="text-muted font-14">
								<del>${price}.00</del>
							</small>
						</h4>
						<ul className="list-inline mb-0 product-review align-self-center">
							{Array.from(new Array(Math.floor(4))).map((_star, idx) => {
								return (
									<li key={idx} className="list-inline-item me-1">
										<i className="la la-star text-warning font-16" />
									</li>
								)
							})}
							<li className="list-inline-item">
								<i className="la la-star-half-o text-warning font-16" />
							</li>
						</ul>
					</div>
				</div>
				<div className="d-grid">
					<Button variant="primary" className="btn btn-de-primary">
						Add To Cart
					</Button>
				</div>
			</CardBody>
		</Card>
	)
}

export default ProductCard
