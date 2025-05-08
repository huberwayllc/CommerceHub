import { ComponentContainerCard } from '@/components'
import { Carousel, CarouselItem, Col, Image, Row } from 'react-bootstrap'
import { availableDoctors } from '../data'

const AvailableDoctors = () => {
	return (
		<ComponentContainerCard
			title="Today Available Doctors"
			bodyClassName="dash-info-carousel"
		>
			<Carousel touch>
				{availableDoctors.map((doctor, idx) => {
					return (
						<CarouselItem key={idx}>
							<Row>
								<Col xs={12} className="align-self-center">
									<h6 className="mt-0 text-start">{doctor.hospitalName}</h6>
									<div className="media mt-3">
										<Image
											src={doctor.image}
											height={70}
											className="rounded-circle"
										/>
										<div className="media-body align-self-center ms-3">
											<h5 className="mt-0 mb-1 font-15">{doctor.name}</h5>
											<p className="text-muted mb-0">
												<span className="me-2 text-secondary">
													{doctor.position}
												</span>{' '}
												{doctor.time}
											</p>
											<ul className="list-inline mb-0">
												{Array.from(new Array(Math.floor(4))).map(
													(_star, idx) => {
														return (
															<li key={idx} className="list-inline-item m-0">
																<i className="mdi mdi-star text-warning font-16" />
															</li>
														)
													}
												)}
												<li className="list-inline-item m-0">
													<i className="mdi mdi-star-half text-warning font-16" />
												</li>
												<li className="list-inline-item m-0">
													<small className="text-muted">
														4.91/5 (1021 reviews)
													</small>
												</li>
											</ul>
										</div>
									</div>
									<hr className="hr-dashed" />
									<div className="p-2 bg-light">
										<div className="media">
											<h3>{doctor.appointment}</h3>
											<div className="media-body align-self-center ms-3">
												<p className="mb-0 font-weight-semibold text-uppercase text-dark-alt">
													Appointments
												</p>
												<p className="mb-0 text-muted">
													Last Saturday 52 Appointments
												</p>
											</div>
										</div>
									</div>
								</Col>
							</Row>
						</CarouselItem>
					)
				})}
			</Carousel>
		</ComponentContainerCard>
	)
}

export default AvailableDoctors
