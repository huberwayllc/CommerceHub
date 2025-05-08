import { Card, CardBody, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { NewsType } from '../types'

const NewsCard = ({ image, variant }: NewsType) => {
	return (
		<Card>
			<CardBody>
				<div className="media">
					<Image src={image} height={90} className="me-3" alt="..." />
					<div className="media-body align-self-center">
						<div className="mb-2">
							<span className={`badge bg-soft-${variant} px-3`}>Crypto</span>
							<span className="ms-2 text-muted"> 26 March 2021</span>
						</div>
						<Link to="" className="font-16 d-block fw-semibold">
							It is a long established fact that a reader will be distracted of
							a page.
						</Link>
					</div>
				</div>
			</CardBody>
		</Card>
	)
}

export default NewsCard
