import { Card, CardBody, Col, Image, Row } from 'react-bootstrap'

import moneyBag from '@/assets/images/logos/money-beg.png'
import { ApexOptions } from 'apexcharts'
import ReactApexChart from 'react-apexcharts'

const TotalRevenue = () => {
	const chartOpts: ApexOptions = {
		chart: {
			height: 100,
			type: 'bar',
			toolbar: {
				show: false,
			},
		},
		plotOptions: {
			bar: {
				horizontal: false,
				columnWidth: '50%',
			},
		},
		colors: ['#e5effe'],
		dataLabels: {
			enabled: false,
		},

		stroke: {
			show: true,
			width: 2,
		},
		series: [
			{
				name: 'Income',
				data: [
					0, 160, 100, 210, 145, 400, 155, 210, 120, 275, 110, 200, 100, 90,
					220, 100, 180, 140, 315, 130, 105, 165, 120, 160, 100, 210, 145, 400,
					155, 210, 120,
				],
			},
		],
		labels: [
			'01',
			'02',
			'03',
			'04',
			'05',
			'06',
			'07',
			'08',
			'09',
			'10',
			'11',
			'12',
			'13',
			'14',
			'15',
			'16',
			'17',
			'18',
			'19',
			'20',
			'21',
			'22',
			'23',
			'24',
			'25',
			'26',
			'27',
			'28',
			'29',
			'30',
			'31',
		],

		xaxis: {
			labels: {
				show: false,
			},

			axisTicks: {
				show: false,
			},
		},
		grid: {
			borderColor: '#e5effe',
			strokeDashArray: 2,
			xaxis: {
				lines: {
					show: false,
				},
			},
			yaxis: {
				lines: {
					show: false,
				},
			},
		},
		legend: {
			show: false,
		},
		tooltip: {
			marker: {
				show: true,
			},
			x: {
				show: false,
			},
		},
		yaxis: {
			labels: {
				show: false,
				formatter: function (value) {
					return '$' + value
				},
				offsetX: -12,
				offsetY: 0,
			},
		},
		fill: {
			opacity: 1,
		},
	}
	return (
		<Card>
			<CardBody>
				<Row>
					<Col className="align-self-center">
						<div className="media">
							<Image src={moneyBag} className="align-self-center" height={40} />
							<div className="media-body align-self-center ms-3">
								<h6 className="m-0 font-24">$1850.00</h6>
								<p className="text-muted mb-0">Total Revenue</p>
							</div>
						</div>
					</Col>
					<Col xs="auto" className="align-self-center">
						<div>
							<ReactApexChart
								className="apex-charts mb-n4"
								height={100}
								options={chartOpts}
								series={chartOpts.series}
								type="bar"
							/>
						</div>
					</Col>
				</Row>
			</CardBody>
		</Card>
	)
}

export default TotalRevenue
