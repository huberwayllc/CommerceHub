export type ReportCardType = {
	id: number
	ward: string
	totalBed: string
	occupiedBed: string
	charges: string
	icon: string
}

export const reportCard: ReportCardType[] = [
	{
		id: 1,
		ward: 'General Ward',
		totalBed: '150',
		occupiedBed: '122',
		charges: '80',
		icon: 'las la-bed',
	},
	{
		id: 2,
		ward: 'Semi-Special Rooms',
		totalBed: '20',
		occupiedBed: '12',
		charges: '200',
		icon: 'las la-tv',
	},
	{
		id: 3,
		ward: 'Special Rooms',
		totalBed: '15',
		occupiedBed: '8',
		charges: '300',
		icon: 'las la-wheelchair',
	},
	{
		id: 4,
		ward: 'ICU Rooms',
		totalBed: '12',
		occupiedBed: '9',
		charges: '500',
		icon: 'las la-procedures',
	},
]

type AllotmentsTableType = {
	id: number
	roomNo: string
	roomType: string
	allotmentID: string
	patiantName: string
	allotmentDate: string
	dischargeDate: string
}

export const allotmentsTable: AllotmentsTableType[] = [
	{
		id: 1,
		roomNo: '10',
		roomType: 'Special',
		allotmentID: '#3251',
		patiantName: 'Donald Gardner',
		allotmentDate: '18/07/2019',
		dischargeDate: '24/07/2019',
	},
	{
		id: 2,
		roomNo: '02',
		roomType: 'Semi-Special',
		allotmentID: '#6632',
		patiantName: 'Keith Jacobson',
		allotmentDate: '17/07/2019',
		dischargeDate: '29/07/2019',
	},
	{
		id: 3,
		roomNo: '08',
		roomType: 'General',
		allotmentID: '#3214',
		patiantName: 'Peggy Doe',
		allotmentDate: '01/07/2019',
		dischargeDate: '08/07/2019',
	},
	{
		id: 4,
		roomNo: '13',
		roomType: 'General',
		allotmentID: '#1021',
		patiantName: 'Jennifer Doss',
		allotmentDate: '11/07/2019',
		dischargeDate: '14/07/2019',
	},
	{
		id: 5,
		roomNo: '09',
		roomType: 'ICU',
		allotmentID: '#3254',
		patiantName: 'Greg Crosby',
		allotmentDate: '04/07/2019',
		dischargeDate: '08/07/2019',
	},
	{
		id: 6,
		roomNo: '14',
		roomType: 'Special',
		allotmentID: '#2213',
		patiantName: 'Fred Godina',
		allotmentDate: '18/07/2019',
		dischargeDate: '24/07/2019',
	},
]
