import { Button, Card, CardBody, Image } from 'react-bootstrap'
import { type ProductType } from '../data'
import { Link } from 'react-router-dom'

const ProductCard2 = ({ product }: { product: ProductType }) => {
	const { category, image, name, offer, price, sellPrice } = product
	return (
		<Card>
			<CardBody>
				<div className="ribbon4 rib4-primary">
					<span className="ribbon4-band ribbon4-band-primary text-white text-center">
						{offer}
					</span>
				</div>
				<Image src={image} className="d-block mx-auto my-4" height={150} />
				<div className="d-flex justify-content-between align-items-center my-4">
					<div>
						<p className="text-muted mb-2">{name}</p>
						<Link to="" className="header-title">
							{category}
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
					<Button variant="de-primary">Add To Cart</Button>
				</div>
			</CardBody>
		</Card>
	)
}

export default ProductCard2
