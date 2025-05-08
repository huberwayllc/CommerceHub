import { LeadReport, StatisticType } from './types'
import avatar6 from '@/assets/images/users/user-6.jpg'
import avatar7 from '@/assets/images/users/user-7.jpg'
import avatar8 from '@/assets/images/users/user-8.jpg'
import avatar9 from '@/assets/images/users/user-9.jpg'
import avatar10 from '@/assets/images/users/user-10.jpg'

const statisticData: StatisticType[] = [
	{
		title: 'HAPPY CUSTOMERS',
		state: '60k',
	},
	{
		title: 'NEW CUSTOMERS',
		state: '10k',
	},
	{
		title: 'NEW DEALS',
		state: '720',
	},
	{
		title: 'NEW REGISTER',
		state: '964',
	},
]

const leadReports: LeadReport[] = [
	{
		lead: {
			name: 'Donald Gardner',
			image: avatar10,
		},
		email: 'xyx@gmail.com',
		phoneNo: '	+123456789',
		company: 'Starbucks coffee',
		status: 'New Lead',
	},
	{
		lead: {
			name: 'Matt Rosales',
			image: avatar9,
		},
		email: 'xyx@gmail.com',
		phoneNo: '	+123456789',
		company: 'Mac Donald',
		status: 'New Lead',
	},
	{
		lead: {
			name: 'Michael Hill',
			image: avatar8,
		},
		email: 'xyx@gmail.com',
		phoneNo: '	+123456789',
		company: 'Life Good',
		status: 'Lost',
	},
	{
		lead: {
			name: 'Nancy Flanary',
			image: avatar7,
		},
		email: 'xyx@gmail.com',
		phoneNo: '	+123456789',
		company: 'Flipcart',
		status: 'New Lead',
	},
	{
		lead: {
			name: 'Dorothy Key',
			image: avatar6,
		},
		email: 'xyx@gmail.com',
		phoneNo: '	+123456789',
		company: 'Adidas',
		status: 'Follow Up',
	},
	{
		lead: {
			name: 'Joseph Cross',
			image: avatar6,
		},
		email: 'xyx@gmail.com',
		phoneNo: '	+123456789',
		company: 'Reebok',
		status: 'Converted',
	},
]

export { statisticData, leadReports }
