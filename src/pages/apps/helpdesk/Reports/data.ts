import user1 from '@/assets/images/users/user-1.jpg'
import user3 from '@/assets/images/users/user-3.jpg'
import user4 from '@/assets/images/users/user-4.jpg'

type AgentsPerformance = {
	id: number
	name: string
	image?: string
	description: string
	totalCalls: number
	callsAnswered: number
	avgSpeedOfAnswer: string
	adherence: string
}

export const agentsPerformance: AgentsPerformance[] = [
	{
		id: 1,
		name: 'Donald Gardner',
		image: user1,
		description: 'Dummy text of the printing.',
		totalCalls: 38,
		callsAnswered: 32,
		avgSpeedOfAnswer: '3:12s',
		adherence: '80%',
	},
	{
		id: 2,
		name: 'Nicholas Smith',
		description: 'Dummy text of the printing.',
		totalCalls: 50,
		callsAnswered: 45,
		avgSpeedOfAnswer: '2:45s',
		adherence: '84%',
	},
	{
		id: 3,
		name: 'Paula Anderson',
		image: user4,
		description: 'Dummy text of the printing.',
		totalCalls: 32,
		callsAnswered: 24,
		avgSpeedOfAnswer: '4:15s',
		adherence: '73%',
	},
	{
		id: 4,
		name: 'Lucy Peterson',
		image: user3,
		description: 'Dummy text of the printing.',
		totalCalls: 25,
		callsAnswered: 21,
		avgSpeedOfAnswer: '5:42s',
		adherence: '93%',
	},
	{
		id: 5,
		name: 'Joseph Rust',
		description: 'Dummy text of the printing.',
		totalCalls: 50,
		callsAnswered: 45,
		avgSpeedOfAnswer: '2:45s',
		adherence: '84%',
	},
]
