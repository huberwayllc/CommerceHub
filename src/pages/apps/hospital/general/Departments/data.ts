import project1 from '@/assets/images/small/project-1.jpg'
import project2 from '@/assets/images/small/project-2.jpg'
import project3 from '@/assets/images/small/project-3.jpg'

import usersDr1 from '@/assets/images/users/dr-1.jpg'
import usersDr2 from '@/assets/images/users/dr-2.jpg'
import usersDr3 from '@/assets/images/users/dr-3.jpg'
import usersDr4 from '@/assets/images/users/dr-4.jpg'
import usersDr5 from '@/assets/images/users/dr-5.jpg'
import usersDr6 from '@/assets/images/users/dr-6.jpg'

export type DepartmentsType = {
	id: number
	image: string
	department: string
	status: 'Active' | 'Inactive'
	description: string
	availableDoctors: number
	totalDoctors: number
	revenue: number
	img: any
}

export const departmentsList: DepartmentsType[] = [
	{
		id: 1,
		image: project2,
		department: 'Dentists',
		status: 'Active',
		description:
			'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.',
		availableDoctors: 3,
		totalDoctors: 4,
		revenue: 5800,
		img: [
			{ id: 1, image: usersDr1 },
			{ id: 2, image: usersDr2 },
			{ id: 3, image: usersDr3 },
			{ id: 4, image: usersDr4 },
		],
	},
	{
		id: 2,
		image: project3,
		department: 'Neurology',
		status: 'Inactive',
		description:
			'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.',
		availableDoctors: 0,
		totalDoctors: 4,
		revenue: 800,
		img: [
			{ id: 1, image: usersDr5 },
			{ id: 2, image: usersDr2 },
			{ id: 3, image: usersDr3 },
			{ id: 4, image: usersDr6 },
		],
	},
	{
		id: 3,
		image: project1,
		department: 'Orthopedics',
		status: 'Active',
		description:
			'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.',
		availableDoctors: 7,
		totalDoctors: 8,
		revenue: 7100,
		img: [
			{ id: 1, image: usersDr3 },
			{ id: 2, image: usersDr4 },
			{ id: 3, image: usersDr2 },
			{ id: 4, image: usersDr1 },
		],
	},
]

export const departmentsList1: DepartmentsType[] = [
	{
		id: 1,
		image: project1,
		department: 'Psychology',
		status: 'Active',
		description:
			'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.',
		availableDoctors: 5,
		totalDoctors: 9,
		revenue: 6600,
		img: [
			{ id: 1, image: usersDr4 },
			{ id: 2, image: usersDr5 },
			{ id: 3, image: usersDr6 },
			{ id: 4, image: usersDr2 },
		],
	},
	{
		id: 2,
		image: project2,
		department: 'Pathology',
		status: 'Active',
		description:
			'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.',
		availableDoctors: 4,
		totalDoctors: 4,
		revenue: 4500,
		img: [
			{ id: 1, image: usersDr1 },
			{ id: 2, image: usersDr2 },
			{ id: 3, image: usersDr3 },
			{ id: 4, image: usersDr4 },
		],
	},
	{
		id: 3,
		image: project3,
		department: 'Cardiology',
		status: 'Active',
		description:
			'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.',
		availableDoctors: 5,
		totalDoctors: 7,
		revenue: 9100,
		img: [
			{ id: 1, image: usersDr4 },
			{ id: 2, image: usersDr5 },
			{ id: 3, image: usersDr6 },
			{ id: 4, image: usersDr2 },
		],
	},
]
