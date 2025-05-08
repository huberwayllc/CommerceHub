export type StatisticType = {
	state: string
	icon: string
	title: string
}

export type PatientType = {
	id: number
	name: string
	image: string
	age: number
	address: string
	mobileNo: number
	lastVisit: string
	disease: string
	variant: string
}

export type AvailableDoctorType = {
	hospitalName: string
	name: string
	position: string
	time: string
	appointment: number
	image: string
}
