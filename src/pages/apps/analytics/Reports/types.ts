export type CountryType = {
	name: string
	image: string
	state: string
	change: number
}

export type ReportType = {
	network: {
		name: string
		icon: string
		color: string
	}
	session: number
	conRate: number
	avgTime: string
	bounceRate: number
	change: number
	variant: string
}
