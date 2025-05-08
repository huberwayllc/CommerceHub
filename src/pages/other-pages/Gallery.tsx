import { GlightBox, PageBreadcrumb } from '@/components'
import { Button, Col, Row } from 'react-bootstrap'

import smallImg1 from '@/assets/images/small/img-1.jpg'
import smallImg2 from '@/assets/images/small/img-2.jpg'
import smallImg3 from '@/assets/images/small/img-3.jpg'
import smallImg4 from '@/assets/images/small/img-4.jpg'
import smallImg5 from '@/assets/images/small/img-5.jpg'
import smallImg6 from '@/assets/images/small/img-6.jpg'

const Gallery = () => {
	return (
		<>
			<PageBreadcrumb title="Gallery" subName="Pages" />
			<Row>
				<Col md={6} lg="auto" className="filters-group-wrap">
					<div className="filters-group mb-3">
						<p className="filter-label mb-0">Filter</p>
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
				<Col md="4" lg="3" className="picture-item" data-groups='["fashion"]'>
					<GlightBox href={smallImg1} className="lightbox">
						<img src={smallImg1} alt="img1" className="img-fluid" />
					</GlightBox>
				</Col>
				<Col
					md="4"
					lg="3"
					className="picture-item picture-item--overlay"
					data-groups='["food"]'
				>
					<GlightBox href={smallImg2} className="lightbox">
						<img src={smallImg2} alt="img2" className="img-fluid" />
					</GlightBox>
				</Col>
				<Col md="4" lg="3" className="picture-item" data-groups='["animal"]'>
					<GlightBox href={smallImg3} className="lightbox">
						<img src={smallImg3} alt="img3" className="img-fluid" />
					</GlightBox>
				</Col>
				<Col
					md="4"
					lg="3"
					className="picture-item picture-item--h2"
					data-groups='["food"]'
				>
					<GlightBox href={smallImg4} className="lightbox">
						<img src={smallImg4} alt="img4" className="img-fluid" />
					</GlightBox>
				</Col>
				<Col
					md="4"
					lg="3"
					className="picture-item"
					data-groups='["food", "animal"]'
				>
					<GlightBox href={smallImg5} className="lightbox">
						<img src={smallImg5} alt="img5" className="img-fluid" />
					</GlightBox>
				</Col>
				<Col
					md="4"
					lg="3"
					className="picture-item picture-item--overlay"
					data-groups='["fashion"]'
				>
					<GlightBox href={smallImg6} className="lightbox">
						<img src={smallImg6} alt="img6" className="img-fluid" />
					</GlightBox>
				</Col>
				<Col
					md="4"
					lg="3"
					className="picture-item picture-item--h2"
					data-groups='["food"]'
				>
					<GlightBox href={smallImg2} className="lightbox">
						<img src={smallImg2} alt="img2" className="img-fluid" />
					</GlightBox>
				</Col>
				<Col
					md="4"
					lg="3"
					className="picture-item picture-item--h2"
					data-groups='["fashion"]'
				>
					<GlightBox href={smallImg1} className="lightbox">
						<img src={smallImg1} alt="img1" className="img-fluid" />
					</GlightBox>
				</Col>
			</Row>
		</>
	)
}

export default Gallery
