export type StatisticType = {
	title: string
	state: string
}

export type LeadReport = {
	lead: {
		name: string
		image: string
	}
	email: string
	phoneNo: string
	company: string
	status: 'New Lead' | 'Lost' | 'Follow Up' | 'Converted'
}
