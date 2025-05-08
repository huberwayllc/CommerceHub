import { Card, CardBody, Col, Row } from 'react-bootstrap'
import { relatedProducts } from '../data'
import ProductCard from '@/pages/apps/ecommerce/Products/components/ProductCard'

const RelatedProducts = () => {
	return (
		<>
			<Card>
				<CardBody>
					<h5 className="mt-0">Related Products</h5>
					<p className="text-muted mb-3 font-14">
						There are many variations of passages of Lorem Ipsum available, but
						the majority have suffered alteration in some form, by injected
						humour, or randomised words which don't look even slightly
						believable. If you are going to use a passage.
					</p>
				</CardBody>
			</Card>
			<Row>
				{relatedProducts.map((product, idx) => (
					<Col md={4} key={idx}>
						<ProductCard product={product} />
					</Col>
				))}
			</Row>
		</>
	)
}

export default RelatedProducts
