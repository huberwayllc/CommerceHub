import { EmailType, NotificationType } from './types'

import user1 from '@/assets/images/users/user-1.jpg'
import user2 from '@/assets/images/users/user-2.jpg'
import user3 from '@/assets/images/users/user-3.jpg'
import user4 from '@/assets/images/users/user-4.jpg'
import user5 from '@/assets/images/users/user-5.jpg'

/**
 * for subtraction minutes
 */
function subtractHours(date: Date, minutes: number) {
	date.setMinutes(date.getMinutes() - minutes)
	return date
}

const emails: EmailType[] = [
	{
		title: 'Your order is placed',
		description: 'Dummy text of the printing and industry.',
		createdAt: subtractHours(new Date(), 2),
		image: user1,
	},
	{
		title: 'Meeting with designers',
		description: 'It is a long established fact that a reader.',
		createdAt: subtractHours(new Date(), 10),
		image: user4,
	},
	{
		title: 'UX 3 Task complete.',
		description: 'Dummy text of the printing.',
		createdAt: subtractHours(new Date(), 40),
		image: user2,
	},
	{
		title: 'Your order is placed',
		description: 'It is a long established fact that a reader.',
		createdAt: subtractHours(new Date(), 60),
		image: user5,
	},
	{
		title: 'Payment Successfull',
		description: 'Dummy text of the printing.',
		createdAt: subtractHours(new Date(), 120),
		image: user3,
	},
]

const notifications: NotificationType[] = [
	{
		title: 'Your order is placed',
		description: 'Dummy text of the printing and industry.',
		createdAt: subtractHours(new Date(), 2),
		icon: 'chart-arcs',
	},
	{
		title: 'Meeting with designers',
		description: 'It is a long established fact that a reader.',
		createdAt: subtractHours(new Date(), 10),
		icon: 'device-computer-camera',
	},
	{
		title: 'UX 3 Task complete.',
		description: 'Dummy text of the printing.',
		createdAt: subtractHours(new Date(), 40),
		icon: 'diamond',
	},
	{
		title: 'Your order is placed',
		description: 'It is a long established fact that a reader.',
		createdAt: subtractHours(new Date(), 60),
		icon: 'drone',
	},
	{
		title: 'Payment Successfull',
		description: 'Dummy text of the printing.',
		createdAt: subtractHours(new Date(), 120),
		icon: 'users',
	},
]

export { emails, notifications }
