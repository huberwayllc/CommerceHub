import { Card, CardBody, CardHeader, CardTitle } from 'react-bootstrap'

const LiveCryptoNews = () => {
	return (
		<Card>
			<CardHeader>
				<CardTitle as="h4">Live Crypto News</CardTitle>
				<p className="text-muted mb-0">
					Aspect ratios can be customized with modifier classes.
				</p>
			</CardHeader>
			<CardBody>
				<div className="ratio ratio-16x9">
					<iframe
						src="https://www.youtube.com/embed/hj6GPGA_syE"
						title="YouTube video"
						allowFullScreen
					/>
				</div>
			</CardBody>
		</Card>
	)
}

export default LiveCryptoNews
