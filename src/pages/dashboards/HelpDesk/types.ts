import { ApexOptions } from 'apexcharts'
import { IconType } from 'react-icons'

export type Complaint = {
	icon: IconType
	time: string
	title: string
	description: string
	chartOption: ApexOptions
}

export type Agent = {
	image?: string
	name: string
	variant?: string
	totalCall: number
	callsAnswered: number
	soa: string
	adherence: number
}
