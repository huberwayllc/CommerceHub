import { Button, Card, CardBody, Col, Image, Row } from 'react-bootstrap'

import product2 from '@/assets/images/products/02.png'

const ProductDetailCard = () => {
	return (
		<Card>
			<CardBody>
				<Row>
					<Col lg={6} className="align-self-center">
						<Image src={product2} className="mx-auto  d-block" height={300} />
					</Col>
					<Col lg={6} className="align-self-center">
						<div>
							<span className="badge badge-soft-danger font-13 fw-semibold mb-2">
								Huberway
							</span>
							<h5 className="font-24 mb-0">Huberway Air Max Shoes</h5>
							<p className="text-muted mb-2">Morden and good look model 2021</p>
							<ul className="list-inline mb-2">
								{Array.from(new Array(Math.floor(4))).map((_star, idx) => {
									return (
										<li key={idx} className="list-inline-item me-1">
											{' '}
											<i className="mdi mdi-star text-warning font-18" />
										</li>
									)
								})}
								<li className="list-inline-item">
									<i className="mdi mdi-star-half text-warning font-16" />
								</li>
								<li className="list-inline-item">4.5 (9830 reviews)</li>
							</ul>
							<h6 className="font-20 fw-bold">
								$89.00{' '}
								<span className="font-14 text-muted fw-semibold">
									<del>$180.00</del>
								</span>
								<span className="text-danger font-14 fw-semibold ms-2">
									50% Off
								</span>
							</h6>
							<h6 className="font-13">Detail :</h6>
							<p className="text-muted">
								There are many variations of passages of Lorem Ipsum available,
								but the majority have suffered alteration in some form, by
								injected humour, or randomised words which don't look.
							</p>
							<h6 className="font-13">Features :</h6>
							<ul className="list-unstyled border-0">
								<li className="mb-2">
									<i className="las la-check-circle text-success me-1" />
									It is a long established fact that a reader will be
									distracted.
								</li>
								<li className="mb-2">
									<i className="las la-check-circle text-success me-1" />
									Contrary to popular belief, Lorem Ipsum is not text.{' '}
								</li>
								<li>
									<i className="las la-check-circle text-success me-1" />
									There are many variations of passages of Lorem Ipsum
									available.{' '}
								</li>
							</ul>
							<div className="mt-3">
								<input
									className="form-control form-control-sm d-inline-block"
									style={{ width: 100 }}
									type="number"
									min={0}
									defaultValue={0}
									id="example-number-input"
								/>
								<Button
									variant="de-primary"
									size="sm"
									className="ms-1 px-4 d-inline-block"
								>
									<i className="mdi mdi-cart me-2" />
									Add to Cart
								</Button>
							</div>
						</div>
					</Col>
				</Row>
			</CardBody>
		</Card>
	)
}

export default ProductDetailCard
