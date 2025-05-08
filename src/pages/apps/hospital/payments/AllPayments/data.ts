type PaymentsTableType = {
	id: number
	billNo: number
	patientName: string
	doctorName: string
	insurance: boolean
	payment: string
	billDate: string
	charge: number
	tax: string
	discount: string
	total: number
}

export const paymentsTable: PaymentsTableType[] = [
	{
		id: 1,
		billNo: 1,
		patientName: 'Keith Jacobson',
		doctorName: 'Dr.Justin Williams',
		insurance: true,
		payment: 'Cashless',
		billDate: '23/07/2019',
		charge: 1500,
		tax: '10%',
		discount: '10%',
		total: 1500,
	},
	{
		id: 2,
		billNo: 2,
		patientName: 'Fred Godina',
		doctorName: 'Dr.Thomas Fant',
		insurance: false,
		payment: 'Credit Card',
		billDate: '23/07/2019',
		charge: 1500,
		tax: '10%',
		discount: '10%',
		total: 3500,
	},
	{
		id: 3,
		billNo: 3,
		patientName: 'Greg Crosby',
		doctorName: 'Dr.Aretha Garland',
		insurance: true,
		payment: 'Cashless',
		billDate: '24/07/2019',
		charge: 1500,
		tax: '10%',
		discount: '10%',
		total: 5000,
	},
	{
		id: 4,
		billNo: 4,
		patientName: 'Jennifer Doss',
		doctorName: 'Dr.Justin Williams',
		insurance: true,
		payment: 'Cashless',
		billDate: '23/07/2019',
		charge: 1500,
		tax: '10%',
		discount: '10%',
		total: 1500,
	},
	{
		id: 5,
		billNo: 5,
		patientName: 'Peggy Doe',
		doctorName: 'Dr.Thomas Fant',
		insurance: false,
		payment: 'Credit Card',
		billDate: '23/07/2019',
		charge: 1500,
		tax: '10%',
		discount: '10%',
		total: 3500,
	},
	{
		id: 6,
		billNo: 6,
		patientName: 'Donald Gardner',
		doctorName: 'Dr.Aretha Garland',
		insurance: false,
		payment: 'Online',
		billDate: '24/07/2019',
		charge: 1500,
		tax: '10%',
		discount: '10%',
		total: 5000,
	},
]
