import { ComponentContainerCard } from '@/components'
import { ApexOptions } from 'apexcharts'
import ReactApexChart from 'react-apexcharts'
import { Card, CardBody, Col, ProgressBar, Row } from 'react-bootstrap'
import { FiPhone, FiClock } from 'react-icons/fi'

const ReportsStatistics = () => {
	const chartOptsDashSpark1: ApexOptions = {
		chart: {
			type: 'area',
			height: 60,
			sparkline: {
				enabled: true,
			},
		},
		stroke: {
			curve: 'smooth',
			width: 2,
		},
		fill: {
			opacity: 1,
			gradient: {
				shade: '#2c77f4',
				type: 'horizontal',
				shadeIntensity: 0.5,
				inverseColors: true,
				opacityFrom: 0.1,
				opacityTo: 0.1,
				stops: [0, 80, 100],
				colorStops: [],
			},
		},
		series: [
			{
				data: [4, 8, 5, 10, 4, 16, 5, 11, 6, 11, 30, 10, 13, 4, 6, 3, 6],
			},
		],
		yaxis: {
			min: 0,
		},
		colors: ['#506ee4'],
	}

	const chartOptsDashSpark2: ApexOptions = {
		chart: {
			type: 'area',
			height: 60,
			sparkline: {
				enabled: true,
			},
		},
		stroke: {
			curve: 'smooth',
			width: 2,
		},
		fill: {
			opacity: 1,
			gradient: {
				shade: '#fd3c97',
				type: 'horizontal',
				shadeIntensity: 0.5,
				inverseColors: true,
				opacityFrom: 0.1,
				opacityTo: 0.1,
				stops: [0, 80, 100],
				colorStops: [],
			},
		},
		series: [
			{
				data: [4, 8, 5, 10, 4, 25, 5, 11, 6, 11, 5, 10, 3, 14, 6, 8, 6],
			},
		],
		yaxis: {
			min: 0,
		},
		colors: ['#fd3c97'],
	}

	return (
		<Row>
			<Col lg="4">
				<Card>
					<CardBody>
						<Row>
							<Col xs="7" className="align-self-center">
								<div className="bg-light-alt d-flex justify-content-center align-items-center thumb-md  rounded-circle mb-2">
									<FiPhone className="align-self-center text-dark icon-sm" />
								</div>
								<h4 className="mt-0 text-dark">0m:27s</h4>
								<h4 className="mt-0 text-truncate font-14 mb-0">
									Avg.Speed of answer
								</h4>
								<p className="text-muted mb-0 text-truncate">
									It is a long established fact that a reader.
								</p>
							</Col>
							<Col xs="5" className="align-self-center">
								<div className="apexchart-wrapper">
									<ReactApexChart
										height={60}
										options={chartOptsDashSpark1}
										series={chartOptsDashSpark1.series}
										type="area"
										className="apex-charts"
									/>
								</div>
							</Col>
						</Row>
					</CardBody>
				</Card>
			</Col>
			<Col lg="4">
				<Card>
					<CardBody>
						<Row>
							<Col xs="7" className="align-self-center">
								<div className="bg-light-alt d-flex justify-content-center align-items-center thumb-md  rounded-circle mb-2">
									<FiClock className="align-self-center text-dark icon-sm" />
								</div>
								<h4 className="mt-0 text-dark">4m:30s</h4>
								<h4 className="mt-0 text-truncate font-14 mb-0">
									Time to Resolved Complaint
								</h4>
								<p className="text-muted mb-0 text-truncate">
									It is a long established fact that a reader.
								</p>
							</Col>
							<Col xs="5" className="align-self-center">
								<div className="apexchart-wrapper">
									<ReactApexChart
										height={60}
										options={chartOptsDashSpark2}
										series={chartOptsDashSpark2.series}
										type="area"
										className="apex-charts"
									/>
								</div>
							</Col>
						</Row>
					</CardBody>
				</Card>
			</Col>
			<Col lg="4">
				<ComponentContainerCard title="Support Status">
					<div className="d-flex justify-content-between">
						<div className="align-self-center">
							<h4 className="mt-0 mb-1 text-dark">1530</h4>
							<h4 className="mt-0 text-truncate font-14 mb-0">Tickets</h4>
						</div>
						<div>
							<ul className="list-unstyled mb-2">
								<li className="mb-2">
									<i className="fas fa-minus text-pink" />{' '}
									<span>Open Tickets</span>
								</li>
								<li className="mb-2">
									<i className="fas fa-minus text-primary" />{' '}
									<span>Resolved Tickets</span>
								</li>
								<li>
									<i className="fas fa-minus text-success" />{' '}
									<span>Unresolved Tickets</span>
								</li>
							</ul>
						</div>
					</div>
					<ProgressBar>
						<ProgressBar
							striped
							animated
							variant="primary"
							label="70%"
							now={70}
							key={1}
						/>
						<ProgressBar variant="pink" label="25%" now={25} key={2} />
						<ProgressBar variant="success" label="5%" now={5} key={3} />
					</ProgressBar>
				</ComponentContainerCard>
			</Col>
		</Row>
	)
}

export default ReportsStatistics
