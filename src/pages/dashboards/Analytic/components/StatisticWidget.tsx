import { Card, CardBody, Col, Row } from 'react-bootstrap'
import { type StatisticType } from '../types'

const StatisticWidget = ({
	change,
	icon,
	state,
	subTitle,
	title,
	variant,
}: StatisticType) => {
	return (
		<Card>
			<CardBody>
				<Row className="d-flex justify-content-center">
					<Col xs={9}>
						<p className="text-dark mb-0 fw-semibold">{title}</p>
						<h3 className="my-1 font-20 fw-bold">{state}</h3>
						<p className="mb-0 text-truncate text-muted">
							<span className={`text-${variant}`}>
								{variant == 'danger' ? (
									<i className="mdi mdi-trending-down" />
								) : (
									<i className="mdi mdi-trending-up" />
								)}
								{change}%
							</span>
							&nbsp;{subTitle}
						</p>
					</Col>
					<Col xs={3} className="align-self-center">
						<div className="d-flex justify-content-center align-items-center thumb-md bg-light-alt rounded-circle mx-auto">
							<i
								className={`ti ti-${icon} font-24 align-self-center text-muted`}
							/>
						</div>
					</Col>
				</Row>
			</CardBody>
		</Card>
	)
}

export default StatisticWidget
