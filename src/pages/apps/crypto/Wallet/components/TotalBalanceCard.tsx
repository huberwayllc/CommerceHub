import { Button, Card, CardBody, Col, Row } from 'react-bootstrap'
import { TotalBalanceType } from '../types'

const TotalBalanceCard = ({ balance, name }: TotalBalanceType) => {
	return (
		<Card>
			<CardBody>
				<span className="text-muted fw-semibold">Total Balance</span>
				<Row>
					<Col>
						<h2 className="font-18 my-1">${balance}</h2>
					</Col>
					<Col xs="auto">
						<span className="fw-semibold font-15">
							<mark>{name}</mark>
						</span>
					</Col>
				</Row>
				<div className="d-grid">
					<Button variant="soft-primary" size="sm" type="button">
						Open Ac.
					</Button>
				</div>
			</CardBody>
		</Card>
	)
}

export default TotalBalanceCard
