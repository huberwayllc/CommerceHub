import user3 from '@/assets/images/users/user-3.jpg'
import user4 from '@/assets/images/users/user-4.jpg'
import user5 from '@/assets/images/users/user-5.jpg'
import user8 from '@/assets/images/users/user-8.jpg'
import user2 from '@/assets/images/users/user-2.jpg'
import user6 from '@/assets/images/users/user-6.jpg'
import user9 from '@/assets/images/users/user-9.jpg'

export type ProfileType = {
	id: number
	image: string
	name: string
	email: string
}

export type ClientType = {
	id: number
	image: string
	name: string
	location: string
	phone: string
	description: string
}

export const profileData: ProfileType[] = [
	{
		id: 1,
		image: user4,
		name: 'Merri Diamond',
		email: '@SaraHopkins.com',
	},
	{
		id: 2,
		image: user5,
		name: 'Paul Schmidt',
		email: '@SaraHopkins.com',
	},
	{
		id: 3,
		image: user8,
		name: 'Harry McCall',
		email: '@SaraHopkins.com',
	},
]

export const clientData: ClientType[] = [
	{
		id: 1,
		image: user8,
		name: 'Wendy Keen',
		location: 'New York, USA',
		phone: '+1 123 456 789',
		description:
			'Contrary to popular belief, Lorem Ipsum is not simply random text.',
	},
	{
		id: 2,
		image: user4,
		name: 'Wendy Keen',
		location: 'New York, USA',
		phone: '+1 123 456 789',
		description:
			'Contrary to popular belief, Lorem Ipsum is not simply random text.',
	},
	{
		id: 3,
		image: user5,
		name: 'Wendy Keen',
		location: 'New York, USA',
		phone: '+1 123 456 789',
		description:
			'Contrary to popular belief, Lorem Ipsum is not simply random text.',
	},
	{
		id: 4,
		image: user3,
		name: 'Wendy Keen',
		location: 'New York, USA',
		phone: '+1 123 456 789',
		description:
			'Contrary to popular belief, Lorem Ipsum is not simply random text.',
	},
]

export const clientData2: ClientType[] = [
	{
		id: 1,
		image: user2,
		name: 'Wendy Keen',
		location: 'New York, USA',
		phone: '+1 123 456 789',
		description:
			'Contrary to popular belief, Lorem Ipsum is not simply random text.',
	},
	{
		id: 2,
		image: user6,
		name: 'Wendy Keen',
		location: 'New York, USA',
		phone: '+1 123 456 789',
		description:
			'Contrary to popular belief, Lorem Ipsum is not simply random text.',
	},
	{
		id: 3,
		image: user8,
		name: 'Wendy Keen',
		location: 'New York, USA',
		phone: '+1 123 456 789',
		description:
			'Contrary to popular belief, Lorem Ipsum is not simply random text.',
	},
	{
		id: 4,
		image: user9,
		name: 'Wendy Keen',
		location: 'New York, USA',
		phone: '+1 123 456 789',
		description:
			'Contrary to popular belief, Lorem Ipsum is not simply random text.',
	},
]
