export type CoinMarketType = {
	name: string
	image: string
	price: string
	change: number
	variant: string
}

export type TransactionHistoryType = {
	id: number
	date: string
	time: string
	value: number
	type: 'Sent' | 'Received'
}
