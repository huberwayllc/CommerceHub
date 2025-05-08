import { Card, CardBody, Col, Row } from 'react-bootstrap'
import { ExpensesReport } from '../data'

const ExpensesReportCard = ({ expense }: { expense: ExpensesReport }) => {
	const {
		currentExpenseType,
		currentExpense,
		lastExpenseType,
		lastExpense,
		icon,
	} = expense
	return (
		<Col md="6" lg="3">
			<Card className="report-card">
				<CardBody>
					<Row className="d-flex justify-content-center">
						<Col>
							<p className="text-dark mb-1 fw-semibold">{currentExpenseType}</p>
							<h4 className="my-1">
								${currentExpense} <small className="font-11">Total</small>
							</h4>
							<p className="mb-0 text-truncate text-muted">
								{lastExpenseType}{' '}
								<span className="text-success">${lastExpense}</span>
							</p>
						</Col>
						<Col xs="auto" className="align-self-center">
							<div className="bg-light-alt d-flex justify-content-center align-items-center thumb-md  rounded-circle">
								<i className={`${icon} align-self-center text-muted font-24`} />
							</div>
						</Col>
					</Row>
				</CardBody>
			</Card>
		</Col>
	)
}

export default ExpensesReportCard
