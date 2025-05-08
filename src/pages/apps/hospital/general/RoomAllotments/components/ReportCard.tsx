import { Card, CardBody, Col, Row } from 'react-bootstrap'
import { ReportCardType } from '../data'

const ReportCard = ({ reports }: { reports: ReportCardType }) => {
	const { ward, totalBed, occupiedBed, charges, icon } = reports

	return (
		<Col md="6" lg="3">
			<Card className="report-card">
				<CardBody>
					<Row className="d-flex justify-content-center">
						<Col>
							<p className="text-dark mb-1 fw-semibold">{ward}</p>
							<h4 className="my-1">
								{occupiedBed}/{totalBed}{' '}
								<small className="font-11">Total Beds</small>
							</h4>
							<p className="mb-0 text-truncate text-muted">
								<i className="las la-money-check-alt font-15" /> Room Charge 24
								hours / <span className="text-success">${charges}</span>
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

export default ReportCard
