import user7 from '@/assets/images/users/user-7.jpg'
import user8 from '@/assets/images/users/user-8.jpg'
import user9 from '@/assets/images/users/user-9.jpg'
import user10 from '@/assets/images/users/user-10.jpg'

type StaffSalaryTable = {
	id: number
	memberName: string
	memberImage: string
	MemberID: string
	post: string
	joinDate: string
	salary: number
	tds: number
	netPay: number
}

export const staffSalary: StaffSalaryTable[] = [
	{
		id: 1,
		memberName: 'Donald Gardner',
		memberImage: user10,
		MemberID: '#1254',
		post: 'Doctor',
		joinDate: '8/7/2019',
		salary: 5000,
		tds: 50,
		netPay: 4950,
	},
	{
		id: 2,
		memberName: 'Keith Jacobson',
		memberImage: user9,
		MemberID: '#1254',
		post: 'Doctor',
		joinDate: '8/7/2019',
		salary: 5000,
		tds: 50,
		netPay: 4950,
	},
	{
		id: 3,
		memberName: 'Greg Crosby',
		memberImage: user9,
		MemberID: '#1254',
		post: 'Doctor',
		joinDate: '8/7/2019',
		salary: 5000,
		tds: 50,
		netPay: 4950,
	},
	{
		id: 4,
		memberName: 'Fred Godina',
		memberImage: user8,
		MemberID: '#1254',
		post: 'Doctor',
		joinDate: '8/7/2019',
		salary: 5000,
		tds: 50,
		netPay: 4950,
	},
	{
		id: 5,
		memberName: 'Peggy Doe',
		memberImage: user7,
		MemberID: '#1254',
		post: 'Doctor',
		joinDate: '8/7/2019',
		salary: 5000,
		tds: 50,
		netPay: 4950,
	},
	{
		id: 6,
		memberName: 'Jennifer Doss',
		memberImage: user8,
		MemberID: '#1254',
		post: 'Doctor',
		joinDate: '8/7/2019',
		salary: 5000,
		tds: 50,
		netPay: 4950,
	},
]
