import type { MilestoneType, TaskType } from './types'

import avatar1 from '@/assets/images/users/user-1.jpg'
import avatar10 from '@/assets/images/users/user-10.jpg'
import avatar2 from '@/assets/images/users/user-2.jpg'
import avatar4 from '@/assets/images/users/user-4.jpg'
import avatar5 from '@/assets/images/users/user-5.jpg'
import avatar6 from '@/assets/images/users/user-6.jpg'
import avatar7 from '@/assets/images/users/user-7.jpg'
import avatar8 from '@/assets/images/users/user-8.jpg'
import avatar9 from '@/assets/images/users/user-9.jpg'

const milestones: MilestoneType[] = [
	{
		title: 'Overall',
		text: 'A',
		progress: 85,
		variant: 'warning',
	},
	{
		title: 'Frunted',
		text: 'F',
		progress: 55,
		variant: 'purple',
	},
	{
		title: 'Backend',
		text: 'B',
		progress: 45,
		variant: 'pink',
	},
	{
		title: 'Testing',
		text: 'T',
		progress: 35,
		variant: 'success',
	},
]

const allTask: TaskType[] = [
	{
		title: 'Organic Farming',
		date: 'June 06',
		variant: 'success',
		totalTask: '15/100',
		comment: 3,
		progressVariant: 'warning',
		progress: 15,
		teamMember: [avatar1, avatar5, avatar7],
	},
	{
		title: 'Book My World',
		date: 'June 08',
		variant: 'danger',
		totalTask: '82/90',
		comment: 11,
		progressVariant: 'purple',
		progress: 95,
		teamMember: [avatar9, avatar5, avatar7],
	},
	{
		title: 'Transfer money',
		date: 'June 06',
		variant: 'secondary',
		totalTask: '25/50',
		comment: 7,
		progressVariant: 'pink',
		progress: 50,
		teamMember: [avatar2, avatar5, avatar7],
	},
	{
		title: 'Body Care',
		date: 'June 18',
		variant: 'info',
		totalTask: '55/150',
		comment: 8,
		progressVariant: 'secondary',
		progress: 37,
		teamMember: [avatar8, avatar5, avatar7],
		status: 'Stop',
	},
	{
		title: 'Mobile Account Setting',
		date: 'June 06',
		totalTask: '128/128',
		comment: 13,
		progressVariant: 'success',
		progress: 100,
		teamMember: [avatar2, avatar4, avatar6],
	},
	{
		title: 'New GPS System',
		date: 'June 18',
		totalTask: '01/80',
		variant: 'info',
		comment: 0,
		progressVariant: 'info',
		progress: 1,
		teamMember: [avatar10, avatar8, avatar6],
	},
]

export { milestones, allTask }
