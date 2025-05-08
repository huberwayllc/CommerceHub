import { ApexOptions } from 'apexcharts'
import { StatisticType } from './types'

const chartOpts1: ApexOptions = {
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
		type: 'bar',
		width: 200,
		height: 35,
		sparkline: {
			enabled: true,
		},
	},
	colors: ['#4d79f6', '#e0e7fd'],
	plotOptions: {
		bar: {
			columnWidth: '50%',
		},
	},
	labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11'],
	xaxis: {
		crosshairs: {
			width: 2,
		},
	},
	tooltip: {
		fixed: {
			enabled: false,
		},
		x: {
			show: false,
		},
		y: {
			title: {
				formatter: function () {
					return ''
				},
			},
		},
		marker: {
			show: false,
		},
	},
}

const chartOpts2: ApexOptions = {
	series: [
		{
			data: [25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54],
		},
	],
	chart: {
		type: 'line',
		width: 200,
		height: 35,
		sparkline: {
			enabled: true,
		},
	},
	stroke: {
		show: true,
		curve: 'smooth',
		width: [2],
		lineCap: 'round',
	},
	tooltip: {
		fixed: {
			enabled: false,
		},
		x: {
			show: false,
		},
		y: {
			title: {
				formatter: function () {
					return ''
				},
			},
		},
		marker: {
			show: false,
		},
	},
}

const chartOpts3: ApexOptions = {
	series: [45],
	chart: {
		type: 'radialBar',
		width: 50,
		height: 50,
		sparkline: {
			enabled: true,
		},
	},
	dataLabels: {
		enabled: false,
	},
	plotOptions: {
		radialBar: {
			hollow: {
				margin: 0,
				size: '50%',
			},
			track: {
				margin: 0,
			},
			dataLabels: {
				show: false,
			},
		},
	},
}

const customerStatistics: StatisticType[] = [
	{
		title: 'Returning Customers',
		change: '150',
		variant: 'success',
		chartOptions: chartOpts1,
	},
	{
		title: 'New Customers',
		change: '10',
		variant: 'danger',
		chartOptions: chartOpts2,
	},
	{
		title: 'Bounce Rate',
		change: '50%',
		variant: 'success',
		chartOptions: chartOpts3,
	},
]

export { customerStatistics }
