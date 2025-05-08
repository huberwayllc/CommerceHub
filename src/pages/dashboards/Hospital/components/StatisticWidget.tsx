import { Card, CardBody, Col, Row } from 'react-bootstrap'
import { StatisticType } from '../types'
import clsx from 'clsx'

const StatisticWidget = ({ icon, state, title }: StatisticType) => {
	return (
		<Card className="overflow-hidden">
			<CardBody>
				<Row className="align-items-center">
					<Col>
						<span className="h4 fw-bold">{state}</span>
						<h6 className="text-uppercase text-muted mt-2 m-0 font-11">
							{title}
						</h6>
					</Col>
					<Col xs="auto">
						<i
							className={clsx(
								' display-3 text-secondary position-absolute o-1 translate-middle',
								icon
							)}
						/>
					</Col>
				</Row>
			</CardBody>
		</Card>
	)
}

export default StatisticWidget
