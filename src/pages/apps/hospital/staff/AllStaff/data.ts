import user7 from '@/assets/images/users/user-7.jpg'
import user8 from '@/assets/images/users/user-8.jpg'
import user9 from '@/assets/images/users/user-9.jpg'
import user10 from '@/assets/images/users/user-10.jpg'

type AllStaffTableType = {
	id: number
	memberName: string
	memberImage: string
	age: number
	staffID: string
	address: string
	mobileNo: string
	joinDate: string
	post: string
}

export const allStaffTable: AllStaffTableType[] = [
	{
		id: 1,
		memberName: 'Donald Gardner',
		memberImage: user10,
		age: 36,
		staffID: 'N-1236',
		address: 'B28 University Street US',
		mobileNo: '+123456789',
		joinDate: '18/07/2018',
		post: 'Nurse',
	},
	{
		id: 2,
		memberName: 'Keith Jacobson',
		memberImage: user9,
		age: 48,
		staffID: 'H-1236',
		address: 'B28 University Street US',
		mobileNo: '+123456789',
		joinDate: '18/07/2017',
		post: 'Housekeeping',
	},
	{
		id: 3,
		memberName: 'Greg Crosby',
		memberImage: user9,
		age: 27,
		staffID: 'D-1236',
		address: 'B28 University Street US',
		mobileNo: '+123456789',
		joinDate: '18/07/2017',
		post: 'Doctor',
	},
	{
		id: 4,
		memberName: 'Fred Godina',
		memberImage: user8,
		age: 22,
		staffID: 'S-1236',
		address: 'B28 University Street US',
		mobileNo: '+123456789',
		joinDate: '18/07/2016',
		post: 'Security',
	},
	{
		id: 5,
		memberName: 'Peggy Doe',
		memberImage: user7,
		age: 51,
		staffID: 'N-7851',
		address: 'B28 University Street US',
		mobileNo: '+123456789',
		joinDate: '20/07/2016',
		post: 'Nurse',
	},
	{
		id: 6,
		memberName: 'Jennifer Doss',
		memberImage: user8,
		age: 18,
		staffID: 'N-3654',
		address: 'B28 University Street US',
		mobileNo: '+123456789',
		joinDate: '19/07/2016',
		post: 'Nurse',
	},
]
