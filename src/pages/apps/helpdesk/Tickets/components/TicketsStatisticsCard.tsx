import { Card, CardBody, Col, Row } from 'react-bootstrap'
import { TicketsStatistics } from '../data'

const TicketsStatisticsCard = ({ tickets }: { tickets: TicketsStatistics }) => {
	const {
		title,
		stat,
		additionalStat,
		isTrending,
		timeline,
		latestStat,
		icon,
	} = tickets
	return (
		<Card>
			<CardBody>
				<Row className="d-flex justify-content-center">
					<Col>
						<p className="text-dark mb-0 text-uppercase fw-semibold">{title}</p>
						<h4 className="my-1">
							{stat}
							{additionalStat && (
								<span className="ms-1 font-12">{additionalStat}</span>
							)}
						</h4>
						<p className="mb-0 text-truncate text-muted">
							<span className="text-success">
								{isTrending && <i className="mdi mdi-trending-up" />}
								{latestStat}
							</span>{' '}
							{timeline}
						</p>
					</Col>
					<Col xs="auto" className="align-self-center">
						<div className="d-flex justify-content-center align-items-center thumb-md bg-light-alt rounded-circle mx-auto">
							<i className={`${icon} font-24 align-self-center text-muted`}></i>
						</div>
					</Col>
				</Row>
			</CardBody>
		</Card>
	)
}

export default TicketsStatisticsCard
