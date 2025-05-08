import { Earning, Product, type StatisticType } from './types'
import product1 from '@/assets/images/products/01.png'
import product2 from '@/assets/images/products/02.png'
import product4 from '@/assets/images/products/04.png'
import product5 from '@/assets/images/products/05.png'
import product7 from '@/assets/images/products/07.png'

const statisticsData: StatisticType[] = [
	{
		state: '$24,500',
		title: "Today's Revenue",
	},
	{
		state: '520',
		title: "Today's New Order",
	},
	{
		state: '82.8%',
		title: 'Conversion Rate',
	},
	{
		state: '$80.5',
		title: 'Avg. Value',
	},
]

const earningsReport: Earning[] = [
	{
		date: '01 January',
		itemCount: 50,
		tax: 70,
		earning: '15,000',
	},
	{
		date: '02 January',
		itemCount: 25,
		tax: 40,
		earning: '9,500',
	},
	{
		date: '03 January',
		itemCount: 65,
		tax: 115,
		earning: '35,000',
	},
	{
		date: '04 January',
		itemCount: 20,
		tax: 85,
		earning: '8,500',
	},
	{
		date: '05 January',
		itemCount: 40,
		tax: 60,
		earning: '12,000',
	},
	{
		date: '06 January',
		itemCount: 45,
		tax: 65,
		earning: '13,500',
	},
	{
		date: '07 January',
		itemCount: 30,
		tax: 56,
		earning: '15,500',
	},
]

const popularProducts: Product[] = [
	{
		id: 'A3652',
		name: 'Huberway Camera EDM 5D(White)',
		image: product1,
		product: {
			price: 70,
			salePrice: 50,
		},
		sell: {
			sellProduct: 450,
			stock: 550,
		},
		status: 'Stock',
	},
	{
		id: 'A5002',
		name: 'Huberway Shoes Max-Zon',
		image: product2,
		product: {
			price: 150,
			salePrice: 99,
		},
		sell: {
			sellProduct: 750,
			stock: 0,
		},
		status: 'Out of Stock',
	},
	{
		id: 'A6598',
		name: 'Huberway Mask N99 [ISI]',
		image: product4,
		product: {
			price: 250,
			salePrice: 199,
		},
		sell: {
			sellProduct: 280,
			stock: 220,
		},
		status: 'Stock',
	},
	{
		id: 'A9547',
		name: 'Huberway Bag (Blue)',
		image: product7,
		product: {
			price: 49,
			salePrice: 40,
		},
		sell: {
			sellProduct: 500,
			stock: 1000,
		},
		status: 'Out of Stock',
	},
	{
		id: 'A2047',
		name: 'Huberway Fever Gun',
		image: product5,
		product: {
			price: 80,
			salePrice: 59,
		},
		sell: {
			sellProduct: 800,
			stock: 2000,
		},
		status: 'Out of Stock',
	},
]

export { statisticsData, earningsReport, popularProducts }
