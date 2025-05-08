import usersDr1 from '@/assets/images/users/dr-1.jpg'
import usersDr2 from '@/assets/images/users/dr-2.jpg'
import usersDr4 from '@/assets/images/users/dr-4.jpg'
import usersDr5 from '@/assets/images/users/dr-5.jpg'
import usersDr6 from '@/assets/images/users/dr-6.jpg'

export type DoctorCardType = {
	id: number
	name: string
	specialization: string
	experience: string
	image: string
}

export const doctorList1: DoctorCardType[] = [
	{
		id: 1,
		name: 'Dr.Wendy Keen',
		specialization: 'MD Orthopedic',
		experience: '4 years experience in Apollo Hospital',
		image: usersDr2,
	},
	{
		id: 2,
		name: 'Dr.Helen White',
		specialization: 'MS Cardiology',
		experience: '3 years experience in Apollo Hospital',
		image: usersDr4,
	},
	{
		id: 3,
		name: 'Dr.Thomas Fant',
		specialization: 'MD Neurology',
		experience: '10 years experience in Apollo Hospital',
		image: usersDr5,
	},
]

export const doctorList2: DoctorCardType[] = [
	{
		id: 1,
		name: 'Dr.Justin Williams',
		specialization: 'MS Psychology',
		experience: '4 years experience in Apollo Hospital',
		image: usersDr6,
	},
	{
		id: 2,
		name: 'Dr.Wendy Keen',
		specialization: 'MD Orthopedic',
		experience: '4 years experience in Apollo Hospital',
		image: usersDr6,
	},
	{
		id: 3,
		name: 'Dr.Helen White',
		specialization: 'MS Cardiology',
		experience: '3 years experience in Apollo Hospital',
		image: usersDr1,
	},
]

export const doctorList3: DoctorCardType[] = [
	{
		id: 1,
		name: 'Dr.Thomas Fant',
		specialization: 'MD Neurology',
		experience: '10 years experience in Apollo Hospital',
		image: usersDr2,
	},
	{
		id: 2,
		name: 'Dr.Justin Williams',
		specialization: 'MS Psychology',
		experience: '4 years experience in Apollo Hospital',
		image: usersDr5,
	},
	{
		id: 3,
		name: 'Dr.Wendy Keen',
		specialization: 'MD Orthopedic',
		experience: '4 years experience in Apollo Hospital',
		image: usersDr2,
	},
]
