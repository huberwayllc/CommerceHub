import user1 from '@/assets/images/users/user-1.jpg'
import user4 from '@/assets/images/users/user-4.jpg'
import user6 from '@/assets/images/users/user-6.jpg'
import user7 from '@/assets/images/users/user-7.jpg'
import user8 from '@/assets/images/users/user-8.jpg'
import user10 from '@/assets/images/users/user-10.jpg'

type AppointmentsType = {
	id: number
	patientName: string
	age: number
	department: string
	doctorName: string
	doctorImage: string
	appointmentDate: string
	appointmentTime: string
	mobileNo: string
}

export const appointmentsList: AppointmentsType[] = [
	{
		id: 1,
		patientName: 'Donald Gardner',
		age: 36,
		department: 'Orthopedic',
		doctorName: 'Dr.Thomas Fant',
		doctorImage: user1,
		appointmentDate: '18/07/2019',
		appointmentTime: '10:15 am',
		mobileNo: '+123456789',
	},
	{
		id: 2,
		patientName: 'Keith Jacobson',
		age: 48,
		department: 'Neurology',
		doctorName: 'Dr.Helen White',
		doctorImage: user4,
		appointmentDate: '18/07/2019',
		appointmentTime: '11:30 am',
		mobileNo: '+123456789',
	},
	{
		id: 3,
		patientName: 'Greg Crosby',
		age: 27,
		department: 'Cardiology',
		doctorName: 'Dr.Aretha Garland',
		doctorImage: user6,
		appointmentDate: '19/07/2019',
		appointmentTime: '12:30 pm',
		mobileNo: '+123456789',
	},
	{
		id: 4,
		patientName: 'Fred Godina',
		age: 22,
		department: 'Fizioterapie',
		doctorName: 'Dr.Justin Williams',
		doctorImage: user7,
		appointmentDate: '19/07/2019',
		appointmentTime: '02:15 pm',
		mobileNo: '+123456789',
	},
	{
		id: 5,
		patientName: 'Peggy Doe',
		age: 51,
		department: 'Psychology',
		doctorName: 'Dr.William Gonzalez',
		doctorImage: user8,
		appointmentDate: '20/07/2019',
		appointmentTime: '10:45 am',
		mobileNo: '+123456789',
	},
	{
		id: 6,
		patientName: 'Jennifer Doss',
		age: 18,
		department: 'Gynaecology',
		doctorName: 'Dr.Lea Sanchez',
		doctorImage: user10,
		appointmentDate: '20/07/2019',
		appointmentTime: '03:30 pm',
		mobileNo: '+123456789',
	},
]
