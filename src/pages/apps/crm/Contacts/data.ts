import avatar5 from '@/assets/images/users/user-5.jpg'
import avatar6 from '@/assets/images/users/user-6.jpg'
import avatar7 from '@/assets/images/users/user-7.jpg'
import avatar8 from '@/assets/images/users/user-8.jpg'
import avatar9 from '@/assets/images/users/user-9.jpg'
import avatar10 from '@/assets/images/users/user-10.jpg'

type ContactType = {
	customer: {
		name: string
		image: string
		labelVariant?: string
	}
	score: number
	company: string
	tags: string[]
}

const contactDetails: ContactType[] = [
	{
		customer: {
			name: 'Donald Gardner',
			image: avatar10,
			labelVariant: 'pink',
		},
		score: 68,
		company: 'Starbucks coffee',
		tags: ['test', 'another'],
	},
	{
		customer: {
			name: 'Matt Rosales',
			image: avatar9,
		},
		score: 112,
		company: 'Mac Donald',
		tags: ['test', 'another', 'something'],
	},
	{
		customer: {
			name: 'Michael Hill',
			image: avatar8,
			labelVariant: 'blue',
		},
		score: 64,
		company: 'Life Good',
		tags: ['test', 'another'],
	},
	{
		customer: {
			name: 'Nancy Flanary',
			image: avatar7,
		},
		score: 124,
		company: 'Flipcart',
		tags: ['test', 'another', 'something'],
	},
	{
		customer: {
			name: 'Dorothy Key',
			image: avatar6,
		},
		score: 33,
		company: 'adidas',
		tags: ['test', 'something'],
	},
	{
		customer: {
			name: 'Joseph Cross',
			image: avatar5,
		},
		score: 84,
		company: 'Reebok',
		tags: ['test', 'another', 'something'],
	},
]

export { contactDetails }
