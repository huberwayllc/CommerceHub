import usersDr1 from '@/assets/images/users/dr-1.jpg'
import usersDr2 from '@/assets/images/users/dr-2.jpg'
import usersDr3 from '@/assets/images/users/dr-3.jpg'
import usersDr4 from '@/assets/images/users/dr-4.jpg'
import usersDr5 from '@/assets/images/users/dr-5.jpg'
import usersDr6 from '@/assets/images/users/dr-6.jpg'

export type ChatContactType = {
	id: number
	image?: string
	icon?: string
	bgColor?: string
	sender: string
	date: string
	status?: 'online' | 'offline'
	message: string
	unreadCount: number
}

export type ChatMessagesType = {
	id: number
	image: string
	messages: any
	timeStamp?: string
	isSender: boolean
}

export const chatGeneralContact: ChatContactType[] = [
	{
		id: 1,
		image: usersDr1,
		sender: 'Daniel Madsen',
		date: '20 Feb',
		status: 'online',
		message: 'Good morning! Congratulations Friend...',
		unreadCount: 3,
	},
	{
		id: 2,
		image: usersDr2,
		sender: 'Robert Jefferson',
		date: '20 Feb',
		status: 'online',
		message: 'Congratulations Friend...',
		unreadCount: 1,
	},
	{
		id: 3,
		image: usersDr5,
		sender: 'Jesse Ross',
		date: '15 Feb',
		status: 'offline',
		message: 'How are you Friend...',
		unreadCount: 0,
	},
	{
		id: 4,
		image: usersDr3,
		sender: 'Mary Schneider',
		date: '14 Feb',
		status: 'offline',
		message: 'Have A Nice day...',
		unreadCount: 0,
	},
	{
		id: 5,
		image: usersDr5,
		sender: 'David Herrmann',
		date: '10 Feb',
		status: 'online',
		message: 'Good morning! How are you?',
		unreadCount: 0,
	},
	{
		id: 6,
		image: usersDr6,
		sender: 'Mary Hayes',
		date: '1 Feb',
		status: 'offline',
		message: 'How are you Friend...',
		unreadCount: 0,
	},
	{
		id: 7,
		image: usersDr6,
		sender: 'Rita Duarte',
		date: '30 Jan',
		status: 'offline',
		message: 'Have A Nice day...',
		unreadCount: 0,
	},
	{
		id: 8,
		image: usersDr5,
		sender: 'Dennis Wilson',
		date: '26 Jan',
		status: 'offline',
		message: 'Good morning! How are you?',
		unreadCount: 0,
	},
]

export const chatGroupsContact: ChatContactType[] = [
	{
		id: 1,
		icon: 'fab fa-quinscape',
		sender: 'Design Group',
		message: 'Good morning! How are you?',
		date: '20 Feb',
		unreadCount: 1,
		bgColor: 'success',
	},
	{
		id: 2,
		icon: 'fab fa-connectdevelop',
		sender: 'Front end Developers',
		message: 'Have A Nice day...',
		date: '15 Feb',
		unreadCount: 0,
		bgColor: 'primary',
	},
	{
		id: 3,
		icon: 'far fa-gem',
		sender: 'UI/UX Designers',
		message: 'Congratulations everybody...',
		date: '14 Feb',
		unreadCount: 0,
		bgColor: 'warning',
	},
	{
		id: 4,
		icon: 'fab fa-react',
		sender: 'React Developers',
		message: 'How are you Friends...',
		date: '10 Feb',
		unreadCount: 0,
		bgColor: 'pink',
	},
	{
		id: 5,
		icon: 'fas fa-globe',
		sender: 'Marketing Group',
		message: 'How are you Friends...',
		date: '10 Feb',
		unreadCount: 0,
		bgColor: 'info',
	},
]

export const chatPersonalContact: ChatContactType[] = [
	{
		id: 1,
		image: usersDr1,
		sender: 'Daniel Madsen',
		date: '20 Feb',
		status: 'online',
		message: 'Good morning! Congratulations Friend...',
		unreadCount: 3,
	},
	{
		id: 2,
		image: usersDr2,
		sender: 'Robert Jefferson',
		date: '20 Feb',
		status: 'online',
		message: 'Congratulations Friend...',
		unreadCount: 1,
	},
	{
		id: 3,
		image: usersDr5,
		sender: 'Jesse Ross',
		date: '15 Feb',
		status: 'offline',
		message: 'How are you Friend...',
		unreadCount: 0,
	},
	{
		id: 4,
		image: usersDr3,
		sender: 'Mary Schneider',
		date: '14 Feb',
		status: 'offline',
		message: 'Have A Nice day...',
		unreadCount: 0,
	},
	{
		id: 5,
		image: usersDr5,
		sender: 'David Herrmann',
		date: '10 Feb',
		status: 'online',
		message: 'Good morning! How are you?',
		unreadCount: 0,
	},
	{
		id: 6,
		image: usersDr6,
		sender: 'Mary Hayes',
		date: '1 Feb',
		status: 'offline',
		message: 'How are you Friend...',
		unreadCount: 0,
	},
	{
		id: 7,
		image: usersDr6,
		sender: 'Rita Duarte',
		date: '30 Jan',
		status: 'offline',
		message: 'Have A Nice day...',
		unreadCount: 0,
	},
	{
		id: 8,
		image: usersDr5,
		sender: 'Dennis Wilson',
		date: '26 Jan',
		status: 'offline',
		message: 'Good morning! How are you?',
		unreadCount: 0,
	},
]

export const chatMessages: ChatMessagesType[] = [
	{
		id: 1,
		image: usersDr4,
		messages: [
			{ id: 1, message: 'Good Morning !' },
			{
				id: 2,
				message:
					'There are many variations of passages of Lorem Ipsum available.',
			},
		],
		timeStamp: '9:02am',
		isSender: true,
	},
	{
		id: 2,
		image: usersDr5,
		messages: [
			{ id: 1, message: 'Good Morning !' },
			{
				id: 2,
				message:
					'There are many variations of passages of Lorem Ipsum available.',
			},
		],
		isSender: false,
	},
	{
		id: 3,
		image: usersDr4,
		messages: [
			{
				id: 1,
				message:
					'There are many variations of passages of Lorem Ipsum available.',
			},
		],
		isSender: true,
	},
	{
		id: 4,
		image: usersDr5,
		messages: [
			{ id: 1, message: 'Good Morning !' },
			{
				id: 2,
				message:
					"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here.",
			},
		],
		isSender: false,
	},
	{
		id: 5,
		image: usersDr4,
		messages: [
			{ id: 1, message: 'Good Morning !' },
			{
				id: 2,
				message:
					"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here.",
			},
		],
		isSender: true,
	},
	{
		id: 6,
		image: usersDr5,
		messages: [
			{ id: 1, message: 'Good Morning !' },
			{
				id: 2,
				message:
					'There are many variations of passages of Lorem Ipsum available.',
			},
			{ id: 3, message: 'There are many variations of passages.' },
			{ id: 4, message: 'By' },
		],
		isSender: false,
	},
]
