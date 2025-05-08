import type { AvailableDoctorType, PatientType, StatisticType } from './types'

import patient10 from '@/assets/images/users/user-10.jpg'
import patient9 from '@/assets/images/users/user-9.jpg'
import patient8 from '@/assets/images/users/user-8.jpg'
import patient7 from '@/assets/images/users/user-7.jpg'

import doctor1 from '@/assets/images/users/dr-1.jpg'
import doctor2 from '@/assets/images/users/dr-2.jpg'
import doctor3 from '@/assets/images/users/dr-3.jpg'

const statisticData: StatisticType[] = [
	{
		state: '42',
		icon: 'lab la-accessible-icon',
		title: 'Appointments',
	},
	{
		state: '18',
		icon: 'las la-bed',
		title: 'All Patients ',
	},
	{
		state: '12',
		icon: 'las la-cut',
		title: 'Operations',
	},
	{
		state: '14',
		icon: 'las la-stethoscope',
		title: 'Doctors',
	},
	{
		state: '32',
		icon: 'las la-user-nurse',
		title: 'Nurses',
	},
	{
		state: '$41,520',
		icon: 'las la-hand-holding-usd',
		title: 'Earnings',
	},
]

const newPatients: PatientType[] = [
	{
		id: 1236,
		name: 'Donald Gardner',
		image: patient10,
		age: 36,
		address: 'B28 University Street US',
		mobileNo: 123456789,
		lastVisit: '	18/07/2021',
		disease: 'Cancer',
		variant: 'danger',
	},
	{
		id: 1246,
		name: 'Keith Jacobson',
		image: patient9,
		age: 48,
		address: 'B28 University Street US',
		mobileNo: 123456789,
		lastVisit: '	18/07/2021',
		disease: 'Ulcers',
		variant: 'success',
	},
	{
		id: 1242,
		name: 'Greg Crosby',
		image: patient9,
		age: 27,
		address: 'B28 University Street US',
		mobileNo: 123456789,
		lastVisit: '	18/07/2021',
		disease: 'HIV',
		variant: 'danger',
	},
	{
		id: 1262,
		name: 'Fred Godina',
		image: patient8,
		age: 27,
		address: 'B28 University Street US',
		mobileNo: 123456789,
		lastVisit: '	18/07/2021',
		disease: 'Virus Fever',
		variant: 'success',
	},
	{
		id: 7851,
		name: 'Peggy Doe',
		image: patient7,
		age: 51,
		address: 'B28 University Street US',
		mobileNo: 123456789,
		lastVisit: '20/07/2021',
		disease: 'heart attack',
		variant: 'success',
	},
	{
		id: 3654,
		name: 'Jennifer Doss',
		image: patient8,
		age: 18,
		address: 'B28 University Street US',
		mobileNo: 123456789,
		lastVisit: '19/07/2021',
		disease: 'Ebola',
		variant: 'danger',
	},
]

const availableDoctors: AvailableDoctorType[] = [
	{
		hospitalName: 'Apollo Hospital',
		name: 'Dr.Helen White',
		position: 'MS Cardiology',
		time: '11:00am to 03:00pm',
		appointment: 68,
		image: doctor1,
	},
	{
		hospitalName: 'Kaiser Foundation Hospital',
		name: 'Dr.Wendy Keen',
		position: 'MD Neurology',
		time: '01:00pm to 04:00pm',
		appointment: 42,
		image: doctor3,
	},
	{
		hospitalName: 'Florida Hospital',
		name: 'Dr.Lisa King',
		position: 'MD Orthopedic',
		time: '09:00am to 11:30am',
		appointment: 35,
		image: doctor2,
	},
]

export { statisticData, newPatients, availableDoctors }
