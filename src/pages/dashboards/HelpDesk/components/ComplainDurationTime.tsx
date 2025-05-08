import { Card, CardBody, Col, Row } from 'react-bootstrap'
import { Complaint } from '../types'
import ReactApexChart from 'react-apexcharts'

const ComplainDurationTime = ({
	chartOption,
	description,
	icon,
	time,
	title,
}: Complaint) => {
	const Icon = icon
	return (
		<Card>
			<CardBody>
				<Row>
					<Col xs={7} className="align-self-center">
						<div className="bg-light-alt d-flex justify-content-center align-items-center thumb-md  rounded-circle mb-2">
							<Icon className="align-self-center text-dark icon-sm" />
						</div>
						<h4 className="mt-0 text-dark">{time}</h4>
						<h4 className="mt-0 text-truncate font-14 mb-0">{title}</h4>
						<p className="text-muted mb-0 text-truncate">{description}</p>
					</Col>
					<Col xs={5} className="align-self-center">
						<div className="apexchart-wrapper">
							<ReactApexChart
								className="chart-gutters"
								height={chartOption.chart?.height}
								options={chartOption}
								series={chartOption.series}
								type={chartOption.chart?.type}
							/>
						</div>
					</Col>
				</Row>
			</CardBody>
		</Card>
	)
}

export default ComplainDurationTime
