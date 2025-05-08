import { Card, CardBody, Col, Row } from 'react-bootstrap'
import user4 from '@/assets/images/users/user-4.jpg'

const MemberDetails = () => {
	return (
		<Row>
			<Col xs="12">
				<Card>
					<CardBody>
						<Row>
							<Col lg="6" className="align-self-center">
								<div className="media">
									<img
										src={user4}
										alt="user"
										className="rounded-circle thumb-xl me-3 align-self-center"
									/>
									<div className="media-body align-self-center">
										<h4 className="mt-0">Rosa Dodson</h4>
										<p className="mb-0 text-muted">
											Contrary to popular belief, Lorem Ipsum is not simply
											random text. It has roots in a piece of classical Latin
											literature from 45 BC, making it over 2000 years old.
											Richard McClintock, a Latin professor at Hampden-Sydney
											College in Virginia.
										</p>
									</div>
								</div>
							</Col>
							<Col lg="4" className="ms-auto">
								<dl className="row mb-0">
									<dt className="col-sm-3">Name</dt>
									<dd className="col-sm-9">Rosa Dodson</dd>
									<dt className="col-sm-3">Join Date</dt>
									<dd className="col-sm-9">09/07/2021</dd>
									<dt className="col-sm-3">Phone No</dt>
									<dd className="col-sm-9">+1 234 567 890</dd>
									<dt className="col-sm-3">Address</dt>
									<dd className="col-sm-9">
										225 Rose Street, Dublin, California
									</dd>
									<dt className="col-sm-3">Post</dt>
									<dd className="col-sm-9 mb-0">Nurse</dd>
								</dl>
							</Col>
						</Row>
					</CardBody>
				</Card>
			</Col>
		</Row>
	)
}

export default MemberDetails
