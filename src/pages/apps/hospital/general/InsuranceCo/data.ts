import project1 from '@/assets/images/small/project-1.jpg'
import project2 from '@/assets/images/small/project-2.jpg'
import project3 from '@/assets/images/small/project-3.jpg'

export type ProfileType = {
	id: number
	title: string
	email: string
	image: string
}

export const companyProfile: ProfileType[] = [
	{
		id: 1,
		title: 'Meri Gold Insurance',
		email: 'MeriGoldInsurance@example.com',
		image: project3,
	},
	{
		id: 2,
		title: 'National Insurance',
		email: 'NationalInsurance@example.com',
		image: project2,
	},
	{
		id: 3,
		title: '7Star Insurance',
		email: '7StarInsurance@example.com',
		image: project1,
	},
]

type InsuranceCompanyTableProfileType = {
	id: number
	insuranceCompany: string
	contactNo: string
	totalPayments: number
	totalAmounts: string
	status: string
}

export const insuranceCompanyTable: InsuranceCompanyTableProfileType[] = [
	{
		id: 1,
		insuranceCompany: 'Meri Gold Insurance',
		contactNo: '+1 223 344 556',
		totalPayments: 1320,
		totalAmounts: '$1,25,590',
		status: 'Approved',
	},
	{
		id: 2,
		insuranceCompany: 'National Insurance',
		contactNo: '+1 778 899 001',
		totalPayments: 1008,
		totalAmounts: '$1,12,330',
		status: 'Approved',
	},
	{
		id: 3,
		insuranceCompany: '7Star Insurance',
		contactNo: '+1 234 567 890',
		totalPayments: 982,
		totalAmounts: '$95,780',
		status: 'Approved',
	},
	{
		id: 4,
		insuranceCompany: 'Lightway Insurance',
		contactNo: '+1 098 76 5432',
		totalPayments: 482,
		totalAmounts: '$65,780',
		status: 'Approved',
	},
]
