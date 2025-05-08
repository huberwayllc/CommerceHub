import { Card, CardBody, Image } from 'react-bootstrap'
import { cryptoPrices } from '../data'

const CryptoHeadline = () => {
	return (
		<Card className="bg-light">
			<CardBody>
				<div className="text-slider">
					<ul className="list-inline move-text mb-0">
						{cryptoPrices.map((crypto, idx) => {
							return (
								<li key={idx} className="list-inline-item">
									<Image src={crypto.image} className="thumb-xs rounded" />
									<span className="fw-semibold font-14">
										USD: {crypto.price}
									</span>
									<span className={`mb-0 font-12 text-${crypto.variant}`}>
										{crypto.variant == 'danger' ? '-' : '+'}
										{crypto.change}%
									</span>
								</li>
							)
						})}
					</ul>
				</div>
			</CardBody>
		</Card>
	)
}

export default CryptoHeadline
