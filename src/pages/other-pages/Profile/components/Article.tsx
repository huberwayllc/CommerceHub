import { Badge, Card, CardBody, Col, Row } from 'react-bootstrap'

import small1 from '@/assets/images/small/1.jpg'

const Article = () => {
	return (
		<Card>
			<CardBody>
				<img src={small1} className="img-fluid" />
				<div className="post-title mt-4">
					<Row>
						<Col>
							<span className="badge badge-soft-primary">Natural</span>
						</Col>
						<Col xs="auto">
							<span className="text-muted">
								<i className="far fa-calendar me-1" />
								02 July 2020
							</span>
						</Col>
					</Row>
					<h5 className="font-20 fw-bold d-block mt-3 mb-4">
						There is nothing more beautiful than nature.
					</h5>
					<span className="font-15 bg-light py-2 px-3 rounded">
						Taking pictures is savouring life intensely.
					</span>
					<p className="font-15 mt-4">
						It is a long established fact that a reader will be distracted by
						the readable content of a page when looking at its layout. The point
						of using Lorem Ipsum is that it has a more-or-less normal
						distribution of letters, as opposed to using 'Content here, content
						here', making it look like readable English. Many desktop publishing
						packages and web page editors now use Lorem Ipsum as their default
						model text, and a search for 'lorem ipsum' will uncover many web
						sites still in their infancy.
					</p>
					<blockquote className="blockquote border-start ps-4">
						<p className="font-18">
							<i>
								"Lorem ipsum dolor sit amet, consectetur adipiscing elit.
								Integer posuere erat a ante."
							</i>
						</p>
						<footer className="blockquote-footer">
							Someone famous in <cite title="Source Title">Source Title</cite>
						</footer>
					</blockquote>
					<p className="font-15">
						Taking pictures is savouring life intensely, every hundredth of a
						second – Marc Riboud. Joy in looking and comprehending is nature’s
						most beautiful gift.
					</p>
					<p className="font-15 mb-0">
						It is a long established fact that a reader will be distracted by
						the readable content of a page when looking at its layout. The point
						of using Lorem Ipsum is that it has a more-or-less normal
						distribution of letters, as opposed to using 'Content here, content
						here', making it look like readable English. Many desktop publishing
						packages and web page editors now use Lorem Ipsum as their default
						model text, and a search for 'lorem ipsum' will uncover many web
						sites still in their infancy.
					</p>
				</div>
			</CardBody>
			<CardBody className="pt-0">
				<Row className="mb-3">
					<Col>
						<p className="text-dark fw-semibold mb-0">Artical tags</p>
					</Col>
				</Row>
				<div className="d-flex gap-1 align-items-center">
					<Badge bg="soft-dark" className="px-3 py-2 fw-semibold">
						Music
					</Badge>
					<Badge bg="soft-dark" className="px-3 py-2 fw-semibold">
						Animals
					</Badge>
					<Badge bg="soft-dark" className="px-3 py-2 fw-semibold">
						Natural
					</Badge>
					<Badge bg="soft-dark" className="px-3 py-2 fw-semibold">
						Food
					</Badge>
					<Badge bg="soft-dark" className="px-3 py-2 fw-semibold">
						Fashion
					</Badge>
					<Badge bg="soft-dark" className="px-3 py-2 fw-semibold">
						Helth
					</Badge>
					<Badge bg="soft-dark" className="px-3 py-2 fw-semibold">
						Charity
					</Badge>
				</div>
			</CardBody>
		</Card>
	)
}

export default Article
