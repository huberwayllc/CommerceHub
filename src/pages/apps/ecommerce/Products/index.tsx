import { PageBreadcrumb } from '@/components'
import { Col, Row } from 'react-bootstrap'
import { allProducts } from './data'
import ProductCard from './components/ProductCard'
import ProductCard2 from './components/ProductCard2'

const Products = () => {
	return (
		<>
			<PageBreadcrumb subName="Ecommerce" title="Products" />
			<Row>
				{allProducts.slice(0, 4).map((product, idx) => (
					<Col md={3} key={idx}>
						<ProductCard product={product} />
					</Col>
				))}
			</Row>

			<Row>
				{allProducts.slice(4, 8).map((product, idx) => {
					return (
						<Col md={3} key={idx}>
							<ProductCard2 product={product} />
						</Col>
					)
				})}
			</Row>
		</>
	)
}

export default Products
