import { Card, CardBody, Image } from 'react-bootstrap'
import { FiCalendar, FiMail, FiPhone } from 'react-icons/fi'
import { CustomerType } from '../data'

const CustomerCard = ({ image, location, name }: CustomerType) => {
	return (
		<Card>
			<CardBody>
				<div className="media mb-3">
					<Image
						src={image}
						className="me-3 thumb-lg align-self-center rounded-circle"
						alt="..."
					/>
					<div className="media-body align-self-center">
						<h4 className="mt-0 mb-0 font-16">
							{name}&nbsp;
							<span className="badge badge-soft-warning font-12">
								4.8 <i className="mdi mdi-star text-warning ms-1" />
							</span>
						</h4>
						<p className="text-muted mb-0 font-12">{location}</p>
					</div>
				</div>
				<ul className="list-unstyled mb-2">
					<li>
						<FiCalendar className="align-self-center icon-xs icon-dual me-1" />{' '}
						<b>Date</b> : 20 june 2020
					</li>
					<li className="mt-2">
						<FiPhone className="align-self-center icon-xs icon-dual me-1" />{' '}
						<b> phone </b> : +91 23456 78910
					</li>
					<li className="mt-2">
						<FiMail className="align-self-center icon-xs icon-dual me-1" />{' '}
						<b> Email </b> : mannat.theme@gmail.com
					</li>
				</ul>
				<p className="text-muted  mt-3">
					<span className="text-dark font-weight-semibold">Last Message :</span>{' '}
					popular belief, Lorem Ipsum is not simply random text. It has roots in
					a piece of classical Latin literature.
				</p>
				<div>
					<button type="button" className="btn btn-sm btn-de-primary me-1">
						Send SMS
					</button>
					<button type="button" className="btn btn-sm btn-de-primary">
						Send Email
					</button>
				</div>
			</CardBody>
		</Card>
	)
}

export default CustomerCard
