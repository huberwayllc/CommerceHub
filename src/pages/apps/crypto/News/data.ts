import { CryptoPrice, NewsType } from './types'

import btc from '@/assets/images/logos/btc.png'
import dash from '@/assets/images/logos/dash.png'
import dollar from '@/assets/images/logos/dollar.png'
import eth from '@/assets/images/logos/eth.png'
import lite from '@/assets/images/logos/lite.png'

import news2 from '@/assets/images/small/news-2.jpg'
import news3 from '@/assets/images/small/news-3.jpg'
import news1 from '@/assets/images/small/news-1.jpg'

const cryptoPrices: CryptoPrice[] = [
	{
		price: '8435.21',
		change: 7.88,
		image: btc,
		variant: 'success',
	},
	{
		price: '1233.54',
		change: 5.12,
		image: dash,
		variant: 'success',
	},
	{
		price: '8435.21',
		change: 2.62,
		image: dollar,
		variant: 'danger',
	},
	{
		price: '226.64',
		change: 1.91,
		image: btc,
		variant: 'success',
	},
	{
		price: '12.91',
		change: 1.55,
		image: lite,
		variant: 'danger',
	},
	{
		price: '0.50',
		change: 0.45,
		image: eth,
		variant: 'danger',
	},
	{
		price: '8435.21',
		change: 7.88,
		image: btc,
		variant: 'success',
	},
	{
		price: '1233.54',
		change: 5.12,
		image: dash,
		variant: 'success',
	},
	{
		price: '8435.21',
		change: 2.62,
		image: dollar,
		variant: 'danger',
	},
	{
		price: '226.64',
		change: 1.91,
		image: btc,
		variant: 'success',
	},
	{
		price: '1233.54',
		change: 5.12,
		image: dash,
		variant: 'success',
	},
	{
		price: '8435.21',
		change: 2.62,
		image: dollar,
		variant: 'danger',
	},
	{
		price: '226.64',
		change: 1.91,
		image: btc,
		variant: 'success',
	},
	{
		price: '12.91',
		change: 1.55,
		image: lite,
		variant: 'danger',
	},
]

const cryptoNews: NewsType[] = [
	{
		variant: 'success',
		image: news2,
	},
	{
		title: 'It is a long established fact that a reader will be',
		variant: 'secondary',
		image: news1,
	},
	{
		title: 'College in Virginia, looked up one of the more obscure',
		variant: 'warning',
		image: news3,
	},
	{
		title: 'There are many variations of passages of using',
		variant: 'primary',
		image: news2,
	},
	{
		variant: 'info',
		image: news1,
	},
]
export { cryptoPrices, cryptoNews }
