import { Button, Col, Row } from 'react-bootstrap'

import small1 from '@/assets/images/small/img-1.jpg'
import small2 from '@/assets/images/small/img-2.jpg'
import small3 from '@/assets/images/small/img-3.jpg'
import small4 from '@/assets/images/small/img-4.jpg'
import small5 from '@/assets/images/small/img-5.jpg'
import small6 from '@/assets/images/small/img-6.jpg'
import { GlightBox } from '@/components'

const Gallery = () => {
	return (
		<>
			<Row>
				<Col md={6} lg="auto" className="filters-group-wrap">
					<div className="filters-group mb-3">
						<div className="btn-group filter-options">
							<Button variant="primary" data-group="fashion">
								Fashion
							</Button>
							<Button variant="primary" data-group="animal">
								Animal
							</Button>
							<Button variant="primary" data-group="food">
								Food
							</Button>
						</div>
					</div>
				</Col>
			</Row>
			<Row id="grid" className="g-0">
				<Col md={4} lg={3} className="picture-item">
					<GlightBox href={small1} className="lightbox">
						<img src={small1} className="img-fluid" />
					</GlightBox>
				</Col>
				<Col md={4} lg={3} className="picture-item picture-item--overlay">
					<GlightBox href={small2} className="lightbox">
						<img src={small2} className="img-fluid" />
					</GlightBox>
				</Col>
				<Col md={4} lg={3} className="picture-item">
					<GlightBox href={small3} className="lightbox">
						<img src={small3} className="img-fluid" />
					</GlightBox>
				</Col>
				<Col md={4} lg={3} className="picture-item picture-item--h2">
					<GlightBox href={small4} className="lightbox">
						<img src={small4} className="img-fluid" />
					</GlightBox>
				</Col>
				<Col md={4} lg={3} className="picture-item">
					<GlightBox href={small5} className="lightbox">
						<img src={small5} className="img-fluid" />
					</GlightBox>
				</Col>
				<Col md={4} lg={3} className="picture-item picture-item--overlay">
					<GlightBox href={small6} className="lightbox">
						<img src={small6} className="img-fluid" />
					</GlightBox>
				</Col>
				<Col md={4} lg={3} className="picture-item picture-item--h2">
					<GlightBox href={small2} className="lightbox">
						<img src={small2} className="img-fluid" />
					</GlightBox>
				</Col>
				<Col md={4} lg={3} className="picture-item picture-item--h2">
					<GlightBox href={small1} className="lightbox">
						<img src={small1} className="img-fluid" />
					</GlightBox>
				</Col>
			</Row>
		</>
	)
}

export default Gallery
