export type Crypto = {
	image: string
	name: string
	quantity: string
	price: string
}

export type Transaction = {
	dateAndTime: string
	variant: string
	transaction: string
}

export type MarketCap = {
	currency: {
		name: string
		price: number
		change: number
		image: string
	}
	marketCap: string
	volume: string
}
