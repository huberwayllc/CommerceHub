export type MilestoneType = {
	title: string
	text: string
	progress: number
	variant: string
}

export type TaskType = {
	date: string
	title: string
	variant?: string
	progressVariant: string
	totalTask: string
	comment: number
	status?: string
	progress: number
	teamMember: string[]
}
