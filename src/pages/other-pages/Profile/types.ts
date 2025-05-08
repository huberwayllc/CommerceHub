export type StatisticType = {
	title: string
	state: number
	icon: string
	total: number
	subTitle: string
	subIcon: string
	variant: string
}

export type CommentType = {
	avatar: string
	name: string
	time: string
	message: string
	replies?: CommentType[]
}

export type PostType = {
	title: string
	subTitle: string
	date: string
	image: string
}
