import { ComponentContainerCard } from '@/components'
import { ApexOptions } from 'apexcharts'
import ReactApexChart from 'react-apexcharts'
import { Col } from 'react-bootstrap'

const TicketsByRequestType = () => {
	const chartOpts: ApexOptions = {
		chart: {
			height: 275,
			type: 'bar',
			toolbar: {
				show: false,
			},
			dropShadow: {
				enabled: true,
				top: 5,
				left: 5,
				// bottom: 0,
				// right: 0,
				blur: 5,
				color: '#45404a2e',
				opacity: 0.35,
			},
		},
		plotOptions: {
			bar: {
				barHeight: '50%',
				distributed: false,
				horizontal: true,
				// endingShape: 'rounded',
			},
		},
		dataLabels: {
			enabled: false,
		},
		series: [
			{
				data: [40, 48, 70, 50, 80, 60, 90],
			},
		],
		colors: ['#506ee4'],
		yaxis: {
			axisBorder: {
				show: true,
				color: '#bec7e0',
			},
			axisTicks: {
				show: true,
				color: '#bec7e0',
			},
		},
		xaxis: {
			categories: [
				'Upgrade Req.',
				'Installation Req.',
				'Code Req.',
				'Bug Fix',
				'Production',
				'Web',
				'Insurance',
			],
		},
		stroke: {
			show: true,
			width: 1,
			colors: ['#fff'],
		},
		states: {
			hover: {
				// filter: 'none'
			},
		},
		grid: {
			borderColor: '#f1f3fa',
			strokeDashArray: 4,
		},
	}
	return (
		<Col lg="4">
			<ComponentContainerCard title="Tickets By Request Type">
				<ReactApexChart
					height={275}
					options={chartOpts}
					series={chartOpts.series}
					type="bar"
					className="apex-charts"
				/>
			</ComponentContainerCard>
		</Col>
	)
}

export default TicketsByRequestType
