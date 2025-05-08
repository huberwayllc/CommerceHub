import { Card, CardBody, Col, Row } from 'react-bootstrap'
import ReactApexChart from 'react-apexcharts'
import { StatisticType } from '../types'

const CustomerStatisticWidget = ({
	statistic,
}: {
	statistic: StatisticType
}) => {
	const { change, chartOptions, title, variant } = statistic
	return (
		<Card>
			<CardBody>
				<Row>
					<Col className="align-self-center">
						<h6 className="font-15 m-0 mb-1">{title}</h6>
						<p className="text-muted mb-0">
							Last Month : {change}{' '}
							<i
								className={`mdi mdi-menu-${variant == 'danger' ? 'down' : 'up'} text-${variant}`}
							/>
						</p>
					</Col>
					<Col xs="auto">
						<div style={{ minHeight: '35px' }}>
							<ReactApexChart
								className="apex-charts mb-n4"
								height={chartOptions.chart?.height}
								options={chartOptions}
								series={chartOptions.series}
								type={chartOptions.chart?.type}
								width={chartOptions.chart?.width}
							/>
						</div>
					</Col>
				</Row>
			</CardBody>
		</Card>
	)
}

export default CustomerStatisticWidget
