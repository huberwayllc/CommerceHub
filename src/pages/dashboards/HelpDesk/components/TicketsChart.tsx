import { ComponentContainerCard } from '@/components'
import { ApexOptions } from 'apexcharts'
import ReactApexChart from 'react-apexcharts'

const TicketsChart = () => {
	const chartOpts: ApexOptions = {
		chart: {
			height: 325,
			type: 'area',
			toolbar: {
				show: false,
			},
		},
		colors: ['#67c8ff', '#6d81f5'],
		dataLabels: {
			enabled: false,
		},
		stroke: {
			show: true,
			curve: 'smooth',
			width: [1.5, 1.5],
			dashArray: [0, 4],
			lineCap: 'round',
		},
		series: [
			{
				name: 'Income',
				data: [45, 45, 20, 20, 20, 100, 100, 100, 35, 35, 80, 80],
			},
			{
				name: 'Expenses',
				data: [0, 30, 10, 40, 30, 60, 50, 80, 70, 100, 90, 130],
			},
		],
		labels: [
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

		yaxis: {
			labels: {
				offsetX: -12,
				offsetY: 0,
			},
		},
		grid: {
			borderColor: '#e0e6ed',
			strokeDashArray: 3,
			xaxis: {
				lines: {
					show: true,
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

		fill: {
			type: 'gradient',
			gradient: {
				type: 'vertical',
				shadeIntensity: 1,
				inverseColors: !1,
				opacityFrom: 0.28,
				opacityTo: 0.05,
				stops: [45, 100],
			},
		},
	}
	return (
		<ComponentContainerCard title="Tickets Status">
			<div>
				<ReactApexChart
					className="apex-charts"
					height={325}
					options={chartOpts}
					series={chartOpts.series}
					type="area"
				/>
			</div>
		</ComponentContainerCard>
	)
}

export default TicketsChart
