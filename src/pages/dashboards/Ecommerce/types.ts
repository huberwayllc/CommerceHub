export type StatisticType = {
	title: string
	state: string
}

export type Earning = {
	date: string
	itemCount: number
	tax: number
	earning: string
}

export type Product = {
	id: string
	name: string
	image: string
	product: {
		price: number
		salePrice: number
	}
	sell: {
		sellProduct: number
		stock: number
	}
	status: 'Stock' | 'Out of Stock'
}
