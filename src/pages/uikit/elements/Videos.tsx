import { ComponentContainerCard, PageBreadcrumb } from '@/components'
import { Col, Row } from 'react-bootstrap'

const Videos = () => {
	return (
		<>
			<PageBreadcrumb title="Videos" subName="UI Kit" />
			<Row>
				<Col lg={6}>
					<ComponentContainerCard
						title="Ratio video 16:9"
						description="Aspect ratios can be customized with modifier classes."
					>
						<div className="ratio ratio-16x9">
							<iframe
								src="https://www.youtube.com/embed/-GfNEDs3ERw"
								title="YouTube video"
								allowFullScreen
							/>
						</div>
					</ComponentContainerCard>
				</Col>
				<Col lg={6}>
					<ComponentContainerCard
						title="Ratio video 21:9"
						description="Aspect ratios can be customized with modifier classes."
					>
						<div className="ratio ratio-21x9">
							<iframe
								src="https://www.youtube.com/embed/-GfNEDs3ERw"
								title="YouTube video"
								allowFullScreen
							/>
						</div>
					</ComponentContainerCard>
				</Col>
			</Row>
			<Row>
				<Col lg={6}>
					<ComponentContainerCard
						title="Ratio video 4:3"
						description="Aspect ratios can be customized with modifier classes."
					>
						<div className="ratio ratio-4x3">
							<iframe
								src="https://www.youtube.com/embed/-GfNEDs3ERw"
								title="YouTube video"
								allowFullScreen
							/>
						</div>
					</ComponentContainerCard>
				</Col>
				<Col lg={6}>
					<ComponentContainerCard
						title="Ratio video 1:1"
						description="Aspect ratios can be customized with modifier classes."
					>
						<div className="ratio ratio-1x1">
							<iframe
								src="https://www.youtube.com/embed/-GfNEDs3ERw"
								title="YouTube video"
								allowFullScreen
							/>
						</div>
					</ComponentContainerCard>
				</Col>
			</Row>
		</>
	)
}

export default Videos
