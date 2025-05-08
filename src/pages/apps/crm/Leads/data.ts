import avatar5 from '@/assets/images/users/user-5.jpg'
import avatar6 from '@/assets/images/users/user-6.jpg'
import avatar7 from '@/assets/images/users/user-7.jpg'
import avatar8 from '@/assets/images/users/user-8.jpg'
import avatar9 from '@/assets/images/users/user-9.jpg'
import avatar10 from '@/assets/images/users/user-10.jpg'

type LeadType = {
	customer: {
		name: string
		image: string
		labelVariant?: string
	}
	company: string
	status: 'New Lead' | 'Follow Up' | 'Converted' | 'Lost'
}

export const allLeads: LeadType[] = [
	{
		customer: {
			name: 'Donald Gardner',
			image: avatar10,
			labelVariant: 'pink',
		},
		company: 'Starbucks coffee',
		status: 'New Lead',
	},
	{
		customer: {
			name: 'Matt Rosales',
			image: avatar9,
		},
		company: 'Mac Donald',
		status: 'Follow Up',
	},
	{
		customer: {
			name: 'Michael Hill',
			image: avatar8,
			labelVariant: 'blue',
		},
		company: 'Life Good',
		status: 'Converted',
	},
	{
		customer: {
			name: 'Nancy Flanary',
			image: avatar7,
		},
		company: 'Flipcart',
		status: 'New Lead',
	},
	{
		customer: {
			name: 'Dorothy Key',
			image: avatar6,
		},
		company: 'adidas',
		status: 'Lost',
	},
	{
		customer: {
			name: 'Joseph Cross',
			image: avatar5,
		},
		company: 'Reebok',
		status: 'New Lead',
	},
]
