import logo1 from '@/assets/images/small/project-1.jpg'
import logo2 from '@/assets/images/small/project-2.jpg'
import logo3 from '@/assets/images/small/project-3.jpg'

export type ProjectType = {
	name: string
	logo: string
	budget: string
	variant: string
}

const allProject: ProjectType[] = [
	{
		name: 'Banking',
		logo: logo2,
		budget: '56,800',
		variant: 'pink',
	},
	{
		name: 'Transfer money',
		logo: logo1,
		budget: '33,100',
		variant: 'success',
	},
	{
		name: 'Organic Farming',
		logo: logo3,
		budget: '56,800',
		variant: 'primary',
	},
	{
		name: 'Book My World',
		logo: logo1,
		budget: '82,000',
		variant: 'warning',
	},
	{
		name: 'New GPS System',
		logo: logo3,
		budget: '35,200',
		variant: 'pink',
	},
	{
		name: 'Body Care',
		logo: logo2,
		budget: '28,500',
		variant: 'info',
	},
]

export { allProject }
