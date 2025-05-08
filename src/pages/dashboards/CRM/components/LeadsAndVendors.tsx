import { ComponentContainerCard } from '@/components'
import { ApexOptions } from 'apexcharts'
import ReactApexChart from 'react-apexcharts'
import { Col, Row } from 'react-bootstrap'
import { FiPhone } from 'react-icons/fi'

const LeadsAndVendors = () => {
	const chartOpts: ApexOptions = {
		chart: {
			height: 320,
			type: 'area',
			width: '100%',
			stacked: true,
			toolbar: {
				show: false,
				autoSelected: 'zoom',
			},
		},
		colors: ['#2a77f4', '#a5c2f1'],
		dataLabels: {
			enabled: false,
		},
		stroke: {
			curve: 'smooth',
			width: [1.5, 1.5],
			dashArray: [0, 4],
			lineCap: 'round',
		},
		grid: {
			padding: {
				left: 0,
				right: 0,
			},
			strokeDashArray: 3,
		},
		markers: {
			size: 0,
			hover: {
				size: 0,
			},
		},
		series: [
			{
				name: 'New Visits',
				data: [0, 60, 20, 90, 45, 110, 55, 130, 44, 110, 75, 120],
			},
			{
				name: 'Unique Visits',
				data: [0, 45, 10, 75, 35, 94, 40, 115, 30, 105, 65, 110],
			},
		],

		xaxis: {
			type: 'category',
			categories: [
				'Jan',
				'Feb',
				'Mar',
				'Apr',
				'May',
				'Jun',
				'Jul',
				'Aug',
				'Sep',
				'Oct',
				'Nov',
				'Dec',
			],
			axisBorder: {
				show: true,
			},
			axisTicks: {
				show: true,
			},
		},
		fill: {
			type: 'gradient',
			gradient: {
				shadeIntensity: 1,
				opacityFrom: 0.4,
				opacityTo: 0.3,
				stops: [0, 90, 100],
			},
		},

		tooltip: {
			x: {
				format: 'dd/MM/yy HH:mm',
			},
		},
		legend: {
			position: 'top',
			horizontalAlign: 'right',
		},
	}
	return (
		<ComponentContainerCard
			title="Leads And Vendors"
			label="This Month"
			menuItems={['Today', 'Last Week', 'Last Month', 'This Year']}
		>
			<Row className="mb-3">
				<Col className="col-md">
					<div className="media">
						<FiPhone className="align-self-center icon-lg text-secondary" />
						<div className="media-body align-self-center ms-2">
							<h6 className="mt-0 mb-1 font-16">
								76% Deals Successfull{' '}
								<i className="fas fa-check text-success" />
							</h6>
							<p className="text-muted mb-0">
								This is a simple hero unit, a simple jumbotron-style component.
							</p>
						</div>
					</div>
				</Col>
				<Col md="auto">
					<button
						type="button"
						className="btn btn-sm btn-de-secondary px-3 mt-2"
					>
						More details
					</button>
				</Col>
			</Row>
			<div>
				<ReactApexChart
					height={320}
					options={chartOpts}
					series={chartOpts.series}
					type="area"
					className="apex-charts"
				/>
			</div>
		</ComponentContainerCard>
	)
}

export default LeadsAndVendors
