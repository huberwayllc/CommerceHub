import avatar1 from '@/assets/images/users/user-1.jpg'
import avatar4 from '@/assets/images/users/user-4.jpg'
import avatar5 from '@/assets/images/users/user-5.jpg'
import avatar6 from '@/assets/images/users/user-6.jpg'
import avatar7 from '@/assets/images/users/user-7.jpg'
import avatar8 from '@/assets/images/users/user-8.jpg'

export type CustomerType = {
	name: string
	location: string
	image: string
}

export const customers: CustomerType[] = [
	{
		name: 'Dorothy Key',
		image: avatar4,
		location: 'New York USA',
	},
	{
		name: 'Donald Gardner',
		image: avatar1,
		location: 'Dealer, Washington',
	},
	{
		name: 'Joseph Cross',
		image: avatar5,
		location: 'Tokyo Japan',
	},
	{
		name: 'Nancy Flanary',
		image: avatar6,
		location: 'Sydeny Australia',
	},
	{
		name: 'Sherron Nelson',
		image: avatar7,
		location: 'Berlin, Germany',
	},
	{
		name: 'Richard Curtis',
		image: avatar8,
		location: 'Berlin, Germany',
	},
]
