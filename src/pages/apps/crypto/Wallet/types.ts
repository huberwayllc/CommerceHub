export type TotalBalanceType = {
	balance: number
	name: string
}

export type TransactionHistoryType = {
	id: number
	date: string
	time: string
	value: number
	type: 'Sent' | 'Received'
}

export type WalletCoin = {
	name: string
	price: string
	quantity: string
	image: string
}
