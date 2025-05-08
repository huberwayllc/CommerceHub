import { Card, CardBody, Col, Row } from 'react-bootstrap'
import { StatisticType } from '../types'

const StatisticWidget = ({ state, title }: StatisticType) => {
	return (
		<Card>
			<CardBody>
				<Row className="align-items-center">
					<Col className="text-center">
						<span className="h4">{state}</span>
						<h6 className="text-uppercase text-muted mt-2 m-0">{title}</h6>
					</Col>
				</Row>
			</CardBody>
		</Card>
	)
}

export default StatisticWidget
