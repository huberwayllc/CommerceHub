import user7 from '@/assets/images/users/user-7.jpg'
import user8 from '@/assets/images/users/user-8.jpg'
import user9 from '@/assets/images/users/user-9.jpg'
import user10 from '@/assets/images/users/user-10.jpg'

type PatientsTableType = {
	id: number
	patientName: string
	patientImage: string
	age: number
	patientID: string
	address: string
	mobileNo: string
	lastVisit: string
	status: string
}

export const patientsTable: PatientsTableType[] = [
	{
		id: 1,
		patientName: 'Donald Gardner',
		patientImage: user10,
		age: 36,
		patientID: '#1236',
		address: 'B28 University Street US',
		mobileNo: '+123456789',
		lastVisit: '18/07/2019',
		status: 'Approved',
	},
	{
		id: 2,
		patientName: 'Keith Jacobson',
		patientImage: user9,
		age: 48,
		patientID: '#1236',
		address: 'B28 University Street US',
		mobileNo: '+123456789',
		lastVisit: '18/07/2019',
		status: 'Approved',
	},
	{
		id: 3,
		patientName: 'Greg Crosby',
		patientImage: user9,
		age: 27,
		patientID: '#1236',
		address: 'B28 University Street US',
		mobileNo: '+123456789',
		lastVisit: '18/07/2019',
		status: 'Approved',
	},
	{
		id: 4,
		patientName: 'Fred Godina',
		patientImage: user8,
		age: 22,
		patientID: '#1236',
		address: 'B28 University Street US',
		mobileNo: '+123456789',
		lastVisit: '18/07/2019',
		status: 'Approved',
	},
	{
		id: 5,
		patientName: 'Peggy Doe',
		patientImage: user7,
		age: 51,
		patientID: '#7851',
		address: 'B28 University Street US',
		mobileNo: '+123456789',
		lastVisit: '20/07/2019',
		status: 'Panding',
	},
	{
		id: 6,
		patientName: 'Jennifer Doss',
		patientImage: user8,
		age: 18,
		patientID: '#3654',
		address: 'B28 University Street US',
		mobileNo: '+123456789',
		lastVisit: '19/07/2019',
		status: 'Panding',
	},
]
