import { Card, CardBody, Col, Row } from 'react-bootstrap'
import type { StatisticType } from '../types'

const Statistic = ({ statistic }: { statistic: StatisticType }) => {
	const { icon, state, subIcon, subTitle, title, total, variant } = statistic
	return (
		<Card>
			<CardBody className="report-card">
				<Row className="d-flex justify-content-center">
					<Col>
						<p className="text-dark mb-1 fw-semibold">{title}</p>
						<h3 className="my-2 font-24 fw-bold">{state}k</h3>
						<p className="mb-0 text-truncate text-muted">
							<i className={`ti ti-${subIcon} text-${variant} font-18`} />
							<span className="text-dark fw-semibold">{total}</span> {subTitle}
						</p>
					</Col>
					<Col xs="auto" className="align-self-center">
						<div className="d-flex justify-content-center align-items-center thumb-xl bg-light-alt rounded-circle mx-auto">
							<i
								className={`ti ti-${icon} font-30 align-self-center text-muted`}
							/>
						</div>
					</Col>
				</Row>
			</CardBody>
		</Card>
	)
}

export default Statistic
