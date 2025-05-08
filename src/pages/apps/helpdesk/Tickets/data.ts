import user5 from '@/assets/images/users/user-5.jpg'
import user6 from '@/assets/images/users/user-6.jpg'
import user7 from '@/assets/images/users/user-7.jpg'
import user8 from '@/assets/images/users/user-8.jpg'
import user9 from '@/assets/images/users/user-9.jpg'
import user10 from '@/assets/images/users/user-10.jpg'

export type TicketsStatistics = {
	id: number
	title: string
	stat: string
	additionalStat?: string
	timeline: string
	latestStat: string
	icon: string
	isTrending: boolean
}

export const ticketsStatistics: TicketsStatistics[] = [
	{
		id: 1,
		title: 'Tickets Worked',
		stat: '380',
		timeline: 'up from Yesterday',
		latestStat: '8.5%',
		icon: 'ti ti-tag',
		isTrending: true,
	},
	{
		id: 2,
		title: 'Tickets Completed',
		stat: '92',
		timeline: 'up from Yesterday',
		latestStat: '8.5%',
		icon: 'ti ti-checkbox',
		isTrending: true,
	},
	{
		id: 3,
		title: 'Hours Worked',
		stat: '420:30',
		additionalStat: 'min',
		timeline: 'min time from Yesterday',
		latestStat: '00:01:05',
		icon: 'ti ti-clock',
		isTrending: false,
	},
]

type AllTickets = {
	id: number
	customerID: string
	name: string
	image: string
	subject: string
	priority: string
	status: string
	resposeTime: string
}

export const allTickets: AllTickets[] = [
	{
		id: 1,
		customerID: '#1236',
		name: 'Donald Gardner',
		image: user10,
		subject: 'Bug-report simply dummy text of the printing and typesetting',
		priority: 'Medium',
		status: 'New',
		resposeTime: '14 min',
	},
	{
		id: 2,
		customerID: '#3569',
		name: 'Kevin J. Heal',
		image: user9,
		subject:
			'The application continuous is a long established fact that a reader.',
		priority: 'Critical',
		status: 'Solved',
		resposeTime: '45 min',
	},
	{
		id: 3,
		customerID: '#9874',
		name: 'Frank M. Lyons',
		image: user8,
		subject:
			'See how it work start are many variations of passages of Lorem Ipsum available.',
		priority: 'Low',
		status: 'Open',
		resposeTime: '1 hour',
	},
	{
		id: 4,
		customerID: '#5412',
		name: 'Robert C. Golding',
		image: user7,
		subject:
			"I can't upload file first line of Ipsum lorem ipsum dolor sit amet.",
		priority: 'Medium',
		status: 'New',
		resposeTime: '2 hour',
	},
	{
		id: 5,
		customerID: '#3258',
		name: 'Hyman M. Cross',
		image: user6,
		subject: 'How do i upgrade my profile?',
		priority: 'Low',
		status: 'Solved',
		resposeTime: '4 hour',
	},
	{
		id: 6,
		customerID: '#6636',
		name: 'Phillip T. Morse',
		image: user5,
		subject: 'Can i help you in this project?',
		priority: 'Critical',
		status: 'Open',
		resposeTime: '4 hour',
	},
]
