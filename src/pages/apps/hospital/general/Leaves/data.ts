import user7 from '@/assets/images/users/user-7.jpg'
import user8 from '@/assets/images/users/user-8.jpg'
import user9 from '@/assets/images/users/user-9.jpg'
import user10 from '@/assets/images/users/user-10.jpg'

type LeavesTableType = {
	id: number
	memberName: string
	memberImage: string
	post: string
	from: string
	to: string
	totalDay: number
	reason: string
	permission: string
}

export const leavesTable: LeavesTableType[] = [
	{
		id: 1,
		memberName: 'Donald Gardner',
		memberImage: user10,
		post: 'Doctor',
		from: '8/7/2019',
		to: '9/7/2019',
		totalDay: 2,
		reason: 'Going to Family Function',
		permission: 'Approved',
	},
	{
		id: 2,
		memberName: 'Keith Jacobson',
		memberImage: user9,
		post: 'Security',
		from: '1/7/2019',
		to: '3/7/2019',
		totalDay: 3,
		reason: 'Going to Family Function',
		permission: 'Approved',
	},
	{
		id: 3,
		memberName: 'Greg Crosby',
		memberImage: user9,
		post: 'Pharmacist',
		from: '24/6/2019',
		to: '24/6/2019',
		totalDay: 1,
		reason: 'Going to Family Function',
		permission: 'Approved',
	},
	{
		id: 4,
		memberName: 'Fred Godina',
		memberImage: user8,
		post: 'Accountant',
		from: '11/6/2019',
		to: '14/6/2019',
		totalDay: 4,
		reason: 'Going to Family Function',
		permission: 'Declined',
	},
	{
		id: 5,
		memberName: 'Peggy Doe',
		memberImage: user7,
		post: 'Nurse',
		from: '10/7/2019',
		to: '12/7/2019',
		totalDay: 3,
		reason: 'Going to Family Function',
		permission: 'New',
	},
	{
		id: 6,
		memberName: 'Jennifer Doss',
		memberImage: user8,
		post: 'Doctor',
		from: '8/7/2019',
		to: '9/7/2019',
		totalDay: 2,
		reason: 'Going to Family Function',
		permission: 'Approved',
	},
]
