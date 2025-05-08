export type ExpensesReport = {
	id: number
	currentExpenseType: string
	currentExpense: string
	lastExpenseType: string
	lastExpense: string
	icon: string
}

type PurchaseExpensesTableType = {
	id: number
	item: string
	purchaseDate: string
	purchaseFrom: string
	amount: number
	paiedBy: string
	status: string
}

type StaffExpensesTableType = {
	id: number
	month: string
	staffLunch: number
	staffSalary: number
	lightBill: number
	totalThisMonth: number
	paidBy: string
	status: string
}

export const expensesReport: ExpensesReport[] = [
	{
		id: 1,
		currentExpenseType: 'Today Expenses',
		currentExpense: '500',
		lastExpenseType: 'Yesterday Expenses',
		lastExpense: '800',
		icon: 'las la-bed',
	},
	{
		id: 2,
		currentExpenseType: 'This Week Expenses',
		currentExpense: '8800',
		lastExpenseType: 'Last Week Expenses',
		lastExpense: '7200',
		icon: 'las la-tv',
	},
	{
		id: 3,
		currentExpenseType: 'This Month Expenses',
		currentExpense: '35000',
		lastExpenseType: 'Last Month Expenses',
		lastExpense: '3300',
		icon: 'las la-wheelchair',
	},
	{
		id: 4,
		currentExpenseType: 'This Year Expenses',
		currentExpense: '4,50,000',
		lastExpenseType: 'Last Year Expenses',
		lastExpense: '3,80,500',
		icon: 'las la-procedures',
	},
]

export const purchaseExpensesTable: PurchaseExpensesTableType[] = [
	{
		id: 1,
		item: 'Bunsen Burner',
		purchaseDate: '20/07/2019',
		purchaseFrom: 'RoyalPro',
		amount: 99,
		paiedBy: 'Card',
		status: 'Approved',
	},
	{
		id: 2,
		item: 'Vortex mixer',
		purchaseDate: '22/07/2019',
		purchaseFrom: 'Frozentree',
		amount: 899,
		paiedBy: 'Online',
		status: 'Panding',
	},
	{
		id: 3,
		item: 'Laboratory Centrifuge',
		purchaseDate: '28/07/2019',
		purchaseFrom: 'RoyalPro',
		amount: 1999,
		paiedBy: 'Cash',
		status: 'Approved',
	},
]

export const staffExpensesTable: StaffExpensesTableType[] = [
	{
		id: 1,
		month: '01/06/2019 to 31/06/2019',
		staffLunch: 1000,
		staffSalary: 5000,
		lightBill: 2500,
		totalThisMonth: 8500,
		paidBy: 'Online',
		status: 'Approved',
	},
	{
		id: 2,
		month: '01/07/2019 to 31/07/2019',
		staffLunch: 900,
		staffSalary: 5000,
		lightBill: 2800,
		totalThisMonth: 8700,
		paidBy: 'Online',
		status: 'Approved',
	},
	{
		id: 3,
		month: '01/08/2019 to 31/08/2019',
		staffLunch: 1100,
		staffSalary: 5000,
		lightBill: 3000,
		totalThisMonth: 9100,
		paidBy: 'Online',
		status: 'Approved',
	},
]
