import type { CommentType, PostType, StatisticType } from './types'

import logoSm from '@/assets/images/logo-icon.svg'
import user1 from '@/assets/images/users/user-1.jpg'
import user2 from '@/assets/images/users/user-2.jpg'
import user5 from '@/assets/images/users/user-5.jpg'
import small1 from '@/assets/images/small/img-1.jpg'
import small2 from '@/assets/images/small/img-2.jpg'
import small4 from '@/assets/images/small/img-4.jpg'
import small5 from '@/assets/images/small/img-5.jpg'

const statisticsData: StatisticType[] = [
	{
		title: 'Views',
		state: 24,
		icon: 'eye',
		subTitle: 'New subscribers this week',
		subIcon: 'bell',
		total: 1500,
		variant: 'warning',
	},
	{
		title: 'Comments',
		state: 24,
		icon: 'brand-hipchat',
		subTitle: 'New Like this week',
		subIcon: 'thumb-up',
		total: 1500,
		variant: 'success',
	},
]

const comments: CommentType[] = [
	{
		name: 'Martin Luther',
		avatar: user2,
		time: '30 min ago',
		message:
			"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
		replies: [
			{
				avatar: logoSm,
				name: 'Huberway Author',
				time: '37 min ago',
				message:
					'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
			},
		],
	},
	{
		name: 'Joseph Rust',
		avatar: user1,
		message:
			'Is it a long established fact that a reader will be distracted by the readable content of a page when looking at its layout?',
		time: '40 min ago',
	},
	{
		name: 'Matt Rosales',
		avatar: user5,
		message:
			'Is it a long established fact that a reader will be distracted by the readable content of a page when looking at its layout?',
		time: '40 min ago',
		replies: [
			{
				avatar: logoSm,
				name: 'Metrica Author',
				time: '37 min ago',
				message:
					'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
			},
		],
	},
]

const popularPosts: PostType[] = [
	{
		title: 'Dastyle - Admin Dashboard',
		subTitle: 'analytic-index.html',
		date: '20 June',
		image: small2,
	},
	{
		title: 'Metrica Simple- Admin Dashboard',
		subTitle: 'sales-index.html',
		date: '18 June',
		image: small1,
	},
	{
		title: 'Crovex - Admin Dashboard',
		subTitle: 'helpdesk-index.html',
		date: '15 June',
		image: small4,
	},
	{
		title: 'Annex - Admin Dashboard',
		subTitle: 'calendar.html',
		date: '12 June',
		image: small5,
	},
]
export { statisticsData, comments, popularPosts }
