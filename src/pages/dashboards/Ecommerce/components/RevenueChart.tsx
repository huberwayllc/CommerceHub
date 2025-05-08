import { ComponentContainerCard } from '@/components'
import { ApexOptions } from 'apexcharts'
import ReactApexChart from 'react-apexcharts'

const RevenueChart = () => {
	const chartOpts: ApexOptions = {
		chart: {
			height: 340,
			type: 'area',
			toolbar: {
				show: false,
			},
		},
		colors: ['#2a76f4'],
		dataLabels: {
			enabled: false,
		},
		markers: {
			discrete: [
				{
					seriesIndex: 0,
					dataPointIndex: 7,
					fillColor: '#aeb9db',
					strokeColor: '#aeb9db',
					size: 5,
				},
				{
					seriesIndex: 2,
					dataPointIndex: 11,
					fillColor: '#aeb9db',
					strokeColor: '#aeb9db',
					size: 4,
				},
			],
		},

		stroke: {
			show: true,
			curve: 'smooth',
			width: 2,
			lineCap: 'square',
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

		// yaxis: {
		//   labels: {
		//     offsetX: -12,
		//     offsetY: 0,
		//   }
		// },
		grid: {
			borderColor: '#e0e6ed',
			strokeDashArray: 5,
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
				formatter: function (value) {
					return '$' + value
				},
			},
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
		responsive: [
			{
				breakpoint: 575,
			},
		],
	}

	return (
		<ComponentContainerCard
			title="Revenue Status"
			label="This Month"
			menuItems={['Today', 'Last Week', 'Last Month', 'This Year']}
		>
			<div>
				<ReactApexChart
					height={340}
					options={chartOpts}
					series={chartOpts.series}
					className="apex-charts"
					type="area"
				/>
			</div>
		</ComponentContainerCard>
	)
}

export default RevenueChart
