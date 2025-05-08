import type { RegularUserType, UserType } from './types'

import user1 from '@/assets/images/users/user-1.jpg'
import user3 from '@/assets/images/users/user-3.jpg'
import user4 from '@/assets/images/users/user-4.jpg'
import user5 from '@/assets/images/users/user-5.jpg'
import user6 from '@/assets/images/users/user-6.jpg'
import user7 from '@/assets/images/users/user-7.jpg'
import user8 from '@/assets/images/users/user-8.jpg'

const users: UserType[] = [
	{
		name: 'Merri Diamond',
		image: user1,
	},
	{
		name: 'Paul Schmidt ',
		image: user5,
	},
	{
		name: 'Harry McCall',
		image: user8,
	},
]

const regularUsers: RegularUserType[] = [
	{
		user: {
			name: 'Aaron Poulin',
			image: user3,
		},
		role: 'Agent',
		email: 'AaronPoulin@example.com',
		contactNo: '+21 123456789',
		status: 'Active',
	},
	{
		user: {
			name: 'Richard Ali',
			image: user4,
		},
		role: 'Administrator',
		email: 'RichardAli@example.com',
		contactNo: '+41 123456789',
		status: 'Active',
	},
	{
		user: {
			name: 'Juan Clark',
			image: user5,
		},
		role: 'Contributor',
		email: 'JuanClark@example.com',
		contactNo: '+65 123456789',
		status: 'Active',
	},
	{
		user: {
			name: 'Albert Hull',
			image: user6,
		},
		role: 'Agent',
		email: 'AlbertHull@example.com',
		contactNo: '+88 123456789',
		status: 'Active',
	},
	{
		user: {
			name: 'Crystal Darling',
			image: user7,
		},
		role: 'Contributor',
		email: 'CrystalDarling@example.com',
		contactNo: '+56 123456789',
		status: 'Deactivated',
	},
	{
		user: {
			name: 'Thomas Milligan',
			image: user8,
		},
		role: 'Administrator',
		email: 'thomasMilligan@example.com',
		contactNo: '+35 123456789',
		status: 'Deactivated',
	},
]

export { users, regularUsers }
