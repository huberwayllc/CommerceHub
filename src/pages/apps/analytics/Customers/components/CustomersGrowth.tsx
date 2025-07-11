import { ComponentContainerCard } from '@/components'
import { ApexOptions } from 'apexcharts'
import ReactApexChart from 'react-apexcharts'

const CustomersGrowth = () => {
	const chartOpts: ApexOptions = {
		chart: {
			height: 375,
			type: 'line',

			toolbar: {
				show: false,
			},
		},
		stroke: {
			width: 3,
			curve: 'smooth',
		},
		series: [
			{
				name: 'Likes',
				data: [4, 3, 10, 9, 29, 19, 22, 9, 12, 7, 19, 5, 13, 9, 17, 2, 7, 5],
			},
		],
		xaxis: {
			type: 'datetime',
			categories: [
				'1/11/2000',
				'2/11/2000',
				'3/11/2000',
				'4/11/2000',
				'5/11/2000',
				'6/11/2000',
				'7/11/2000',
				'8/11/2000',
				'9/11/2000',
				'10/11/2000',
				'11/11/2000',
				'12/11/2000',
				'1/11/2001',
				'2/11/2001',
				'3/11/2001',
				'4/11/2001',
				'5/11/2001',
				'6/11/2001',
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
		colors: ['#5766da'],
		markers: {
			size: 3,
			// opacity: 0.9,
			colors: ['#fdb5c8'],
			strokeColors: '#fff',
			strokeWidth: 1,
			// style: 'inverted', // full, hollow, inverted
			hover: {
				size: 5,
			},
		},
		yaxis: {
			min: -10,
			max: 40,
			title: {
				text: 'Engagement',
			},
		},
		grid: {
			row: {
				colors: ['transparent', 'transparent'], // takes an array which will be repeated on columns
				opacity: 0.2,
			},
			strokeDashArray: 3.5,
		},
		responsive: [
			{
				breakpoint: 600,
				options: {
					chart: {
						toolbar: {
							show: false,
						},
					},
					legend: {
						show: false,
					},
				},
			},
		],
	}
	return (
		<ComponentContainerCard title="Customers Growth">
			<div className="Customers Growth">
				<ReactApexChart
					height={375}
					options={chartOpts}
					series={chartOpts.series}
					type="line"
					className="apex-charts"
				/>
			</div>
		</ComponentContainerCard>
	)
}

export default CustomersGrowth
