import user1 from '@/assets/images/users/user-1.jpg'
import user4 from '@/assets/images/users/user-4.jpg'
import user6 from '@/assets/images/users/user-6.jpg'

type SheduleType = {
	id: number
	image: string
	name: string
	specialization: string
	days: string
	timing: string
	note: string
	status: 'Active' | 'Inactive'
}

export const sheduleList: SheduleType[] = [
	{
		id: 1,
		image: user1,
		name: 'Dr.Thomas Fant',
		specialization: 'Orthopedic',
		days: 'Monday,Tuesday',
		timing: '11:00 am to 03:00pm',
		note: '-',
		status: 'Active',
	},
	{
		id: 2,
		image: user4,
		name: 'Dr.Helen White',
		specialization: 'Neurology',
		days: 'Friday, Saturday',
		timing: '03:30 pm to 10:00 pm',
		note: '-',
		status: 'Inactive',
	},
	{
		id: 3,
		image: user6,
		name: 'Dr.Aretha Garland',
		specialization: 'Neurology',
		days: 'Monday',
		timing: '09:30 am to 12:30 pm',
		note: 'Going to Family Function',
		status: 'Active',
	},
]
