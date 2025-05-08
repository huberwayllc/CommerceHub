import { ComponentContainerCard } from '@/components'
import { ApexOptions } from 'apexcharts'
import ReactApexChart from 'react-apexcharts'
import { Col, Row } from 'react-bootstrap'
import { FiCalendar } from 'react-icons/fi'

const MonthlyTrendChart = () => {
	const chartOpts: ApexOptions = {
		chart: {
			height: 205,
			type: 'donut',
		},
		plotOptions: {
			pie: {
				donut: {
					size: '85%',
				},
			},
		},
		dataLabels: {
			enabled: false,
		},
		stroke: {
			show: true,
			width: 2,
			colors: ['transparent'],
		},

		series: [10, 65, 25],
		legend: {
			show: false,
			position: 'bottom',
			horizontalAlign: 'center',
			floating: false,
			fontSize: '14px',
			offsetX: 0,
			offsetY: 5,
		},
		labels: ['Sent', 'Opened', 'Not Opened'],
		colors: ['#fdb5c8', '#2a76f4', '#67c8ff'],

		responsive: [
			{
				breakpoint: 600,
				options: {
					plotOptions: {
						donut: {
							customScale: 0.2,
						},
					},
					chart: {
						height: 200,
					},
					legend: {
						show: false,
					},
				},
			},
		],

		tooltip: {
			y: {
				formatter: function (val) {
					return val + ' %'
				},
			},
		},
	}
	return (
		<ComponentContainerCard title="Monthly Trends">
			<Row>
				<Col xxl={6}>
					<ReactApexChart
						className="apex-charts"
						height={205}
						options={chartOpts}
						series={chartOpts.series}
						type="donut"
					/>
					<div id="email_report" className="apex-charts" />
				</Col>
				<Col xxl={6} className="align-self-center">
					<ul className="list-unstyled">
						<li className="list-item mb-2">
							<i className="fas fa-play text-primary me-2" />
							Sent
						</li>
						<li className="list-item mb-2">
							<i className="fas fa-play text-info me-2" />
							Opened
						</li>
						<li className="list-item">
							<i className="fas fa-play me-2" style={{ color: '#fdb5c8' }} />
							Not Opened
						</li>
					</ul>
					<button type="button" className="btn btn-sm btn-de-primary">
						View Details <i className="mdi mdi-arrow-right" />
					</button>
				</Col>
			</Row>
			<div className="text-center mt-4">
				<h6 className="bg-light-alt py-3 px-2 mb-0">
					<FiCalendar className="align-self-center icon-xs me-1" />
					01 January 2021 to 31 December 2021
				</h6>
			</div>
		</ComponentContainerCard>
	)
}

export default MonthlyTrendChart
