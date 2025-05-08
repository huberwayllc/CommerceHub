import { ComponentContainerCard } from '@/components'
import { ApexOptions } from 'apexcharts'
import ReactApexChart from 'react-apexcharts'
import { Col } from 'react-bootstrap'

const TicketsStatus = () => {
	const chartOpts: ApexOptions = {
		chart: {
			height: 325,
			type: 'bar',
			toolbar: {
				show: false,
			},
		},
		plotOptions: {
			bar: {
				horizontal: false,
				// endingShape: 'rounded',
				columnWidth: '25%',
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
		colors: ['rgba(42, 118, 244, .18)', '#2a76f4'],
		series: [
			{
				name: 'New Tickets',
				data: [68, 44, 55, 57, 56, 61, 58, 63, 60, 66],
			},
			{
				name: 'Solved Tickets',
				data: [51, 76, 85, 101, 98, 87, 105, 91, 114, 94],
			},
		],
		xaxis: {
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
			],
			axisBorder: {
				show: true,
			},
			axisTicks: {
				show: true,
			},
		},
		legend: {
			offsetY: 6,
		},
		yaxis: {
			title: {
				text: 'Tickets',
			},
		},
		fill: {
			opacity: 1,
		},
		// legend: {
		//     floating: true
		// },
		grid: {
			row: {
				colors: ['transparent', 'transparent'], // takes an array which will be repeated on columns
				opacity: 0.2,
			},
			borderColor: '#f1f3fa',
			strokeDashArray: 3.5,
		},
		tooltip: {
			y: {
				formatter: function (val: any) {
					return '' + val + ''
				},
			},
		},
	}
	return (
		<Col lg="8">
			<ComponentContainerCard title="Tickets Status">
				<ReactApexChart
					height={325}
					options={chartOpts}
					series={chartOpts.series}
					type="bar"
					className="apex-charts"
				/>
			</ComponentContainerCard>
		</Col>
	)
}

export default TicketsStatus
