import { ComponentContainerCard } from '@/components'
import { ApexOptions } from 'apexcharts'
import ReactApexChart from 'react-apexcharts'

const AudienceOverviewChart = () => {
	const chartOpts: ApexOptions = {
		series: [
			{
				name: 'New Visitors',
				data: [68, 44, 55, 57, 56, 61, 58, 63, 60, 66],
			},
			{
				name: 'Unique Visitors',
				data: [51, 76, 85, 101, 98, 87, 105, 91, 114, 94],
			},
		],
		chart: {
			height: 330,
			type: 'bar',
			toolbar: {
				show: false,
			},
		},
		plotOptions: {
			bar: {
				horizontal: false,
				columnWidth: '20%',
				// endingShape: 'rounded',

				// barCap: 'round'
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
		colors: ['#1ccab8', '#2a76f4'],
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
				color: '#bec7e0',
			},
			axisTicks: {
				show: true,
				color: '#bec7e0',
			},
		},
		yaxis: {
			title: {
				text: 'Visitors',
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
			strokeDashArray: 2.5,
		},
		tooltip: {
			y: {
				formatter: function (val) {
					return '' + val + 'k'
				},
			},
		},
	}
	return (
		<ComponentContainerCard
			title="Audience Overview"
			label="This Year"
			menuItems={['Today', 'Last Week', 'Last Month', 'This Year']}
		>
			<div>
				<ReactApexChart
					height={330}
					options={chartOpts}
					series={chartOpts.series}
					type="bar"
				/>
			</div>
		</ComponentContainerCard>
	)
}

export default AudienceOverviewChart
