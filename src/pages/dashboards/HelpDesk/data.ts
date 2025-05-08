import { FiClock, FiPhone } from 'react-icons/fi'
import { Agent, Complaint } from './types'
import { ApexOptions } from 'apexcharts'

import avatar1 from '@/assets/images/users/user-1.jpg'
import avatar4 from '@/assets/images/users/user-4.jpg'
import avatar3 from '@/assets/images/users/user-3.jpg'

const chartOpts1: ApexOptions = {
	chart: {
		type: 'area',
		height: 60,
		sparkline: {
			enabled: true,
		},
	},
	stroke: {
		curve: 'smooth',
		width: 2,
	},
	fill: {
		opacity: 1,
		gradient: {
			shade: '#2c77f4',
			type: 'horizontal',
			shadeIntensity: 0.5,
			inverseColors: true,
			opacityFrom: 0.1,
			opacityTo: 0.1,
			stops: [0, 80, 100],
			colorStops: [],
		},
	},
	series: [
		{
			data: [4, 8, 5, 10, 4, 16, 5, 11, 6, 11, 30, 10, 13, 4, 6, 3, 6],
		},
	],
	yaxis: {
		min: 0,
	},
	colors: ['#506ee4'],
}

const chartOpts2: ApexOptions = {
	chart: {
		type: 'area',
		height: 60,
		sparkline: {
			enabled: true,
		},
	},
	stroke: {
		curve: 'smooth',
		width: 2,
	},
	fill: {
		opacity: 1,
		gradient: {
			shade: '#fd3c97',
			type: 'horizontal',
			shadeIntensity: 0.5,
			inverseColors: true,
			opacityFrom: 0.1,
			opacityTo: 0.1,
			stops: [0, 80, 100],
			colorStops: [],
		},
	},
	series: [
		{
			data: [4, 8, 5, 10, 4, 25, 5, 11, 6, 11, 5, 10, 3, 14, 6, 8, 6],
		},
	],
	yaxis: {
		min: 0,
	},
	colors: ['#506ee4'],
}

const complaintDurations: Complaint[] = [
	{
		icon: FiPhone,
		time: '0m:27s',
		title: 'Avg.Speed of answer',
		description: 'It is a long established fact that a reader.',
		chartOption: chartOpts1,
	},
	{
		icon: FiClock,
		time: '4m:30s',
		title: 'Time to Resolved Complaint',
		description: 'It is a long established fact that a reader.',
		chartOption: chartOpts2,
	},
]

const agentPerformance: Agent[] = [
	{
		name: 'Donald Gardner',
		image: avatar1,
		totalCall: 38,
		callsAnswered: 32,
		soa: '3:12',
		adherence: 80,
	},
	{
		name: 'Nicholas Smith',
		variant: 'warning',
		totalCall: 50,
		callsAnswered: 45,
		soa: '2:45',
		adherence: 84,
	},
	{
		name: 'Paula Anderson',
		image: avatar4,
		totalCall: 32,
		callsAnswered: 24,
		soa: '4:15',
		adherence: 73,
	},
	{
		name: 'Lucy Peterson',
		image: avatar3,
		totalCall: 25,
		callsAnswered: 21,
		soa: '5:42',
		adherence: 93,
	},
	{
		name: 'Joseph Rust',
		variant: 'primary',
		totalCall: 50,
		callsAnswered: 45,
		soa: '2:45',
		adherence: 84,
	},
]

export { complaintDurations, agentPerformance }
