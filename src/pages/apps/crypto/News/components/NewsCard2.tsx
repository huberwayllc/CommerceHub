import { Card, CardBody, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { NewsType } from '../types'

const NewsCard2 = ({ image, variant, title }: NewsType) => {
	return (
		<Card>
			<CardBody>
				<Image src={image} className="img-fluid" />
				<ul className="p-0 mt-4 list-inline">
					<li className="list-inline-item">
						<span className={`badge bg-soft-${variant} px-3`}>Crypto</span>
					</li>
					<li className="list-inline-item">26 March 2021</li>
					<li className="list-inline-item">
						by <Link to="">admin</Link>
					</li>
				</ul>
				<Link to="" className="h4 mt-2">
					{title}
				</Link>
				<p className="text-muted mt-2">
					The standard chunk of Lorem Ipsum used since the 1500s is reproduced
					below for those interested. Cum sociis natoque penatibus et magnis.
				</p>
				<Link to="" className="text-primary d-flex align-items-center gap-1">
					Continue Reading <i className="fas fa-long-arrow-alt-right" />
				</Link>
			</CardBody>
		</Card>
	)
}

export default NewsCard2
