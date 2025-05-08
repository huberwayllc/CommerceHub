import { CountryType, ReportType } from './types'

import usa from '@/assets/images/flags/us_flag.jpg'
import germany from '@/assets/images/flags/germany_flag.jpg'
import spain from '@/assets/images/flags/spain_flag.jpg'

const topCountries: CountryType[] = [
	{
		name: 'USA',
		state: '50,289',
		change: 2.5,
		image: usa,
	},
	{
		name: 'Germany',
		state: '50,289',
		change: 1.2,
		image: germany,
	},
	{
		name: 'Spain',
		state: '50,289',
		change: 0.8,
		image: spain,
	},
]

const socialReport: ReportType[] = [
	{
		network: {
			name: 'Google',
			icon: 'google',
			color: 'text-danger',
		},
		session: 4541,
		conRate: 3.2,
		avgTime: '3:20',
		bounceRate: 57.8,
		change: 17.8,
		variant: 'success',
	},
	{
		network: {
			name: 'Yahoo',
			icon: 'yahoo',
			color: 'text-blue',
		},
		session: 1522,
		conRate: 4.2,
		avgTime: '4:20',
		bounceRate: 62.8,
		change: 12.8,
		variant: 'danger',
	},
	{
		network: {
			name: 'UC Browser',
			icon: 'web',
			color: 'text-pink',
		},
		session: 1292,
		conRate: 3.2,
		avgTime: '5:20',
		bounceRate: 33.8,
		change: 17.8,
		variant: 'success',
	},
	{
		network: {
			name: 'Facebook',
			icon: 'facebook',
			color: 'text-primary',
		},
		session: 2241,
		conRate: 4.9,
		avgTime: '2:20',
		bounceRate: 48.8,
		change: 17.8,
		variant: 'success',
	},
	{
		network: {
			name: 'Twitter',
			icon: 'twitter',
			color: 'text-info',
		},
		session: 6806,
		conRate: 3.2,
		avgTime: '3:20',
		bounceRate: 57.8,
		change: 11.8,
		variant: 'danger',
	},
	{
		network: {
			name: 'LinkedIn',
			icon: 'linkedin',
			color: 'text-info',
		},
		session: 4541,
		conRate: 3.2,
		avgTime: '3:20',
		bounceRate: 52.8,
		change: 17.8,
		variant: 'success',
	},
	{
		network: {
			name: 'Pinterest',
			icon: 'pinterest',
			color: 'text-pink',
		},
		session: 3542,
		conRate: 8.2,
		avgTime: '6:20',
		bounceRate: 61.8,
		change: 23.8,
		variant: 'success',
	},
	{
		network: {
			name: 'Google+',
			icon: 'google-plus',
			color: 'text-danger',
		},
		session: 1124,
		conRate: 9.2,
		avgTime: '4:10',
		bounceRate: 20.8,
		change: 9.8,
		variant: 'danger',
	},
	{
		network: {
			name: 'Instagram',
			icon: 'instagram',
			color: 'text-success',
		},
		session: 3521,
		conRate: 1.2,
		avgTime: '6:45',
		bounceRate: 66.2,
		change: 34.8,
		variant: 'success',
	},
	{
		network: {
			name: 'WhatsApp',
			icon: 'whatsapp',
			color: 'text-success',
		},
		session: 96547,
		conRate: 9.2,
		avgTime: '1:20',
		bounceRate: 57.8,
		change: 48.8,
		variant: 'success',
	},
	{
		network: {
			name: 'Other',
			icon: 'google-play',
			color: 'text-warning',
		},
		session: 3214,
		conRate: 6.2,
		avgTime: '4:40',
		bounceRate: 36.8,
		change: 11.8,
		variant: 'success',
	},
]

export { topCountries, socialReport }
