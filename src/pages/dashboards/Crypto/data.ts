import { Crypto, MarketCap, Transaction } from './types'

import currency1 from '@/assets/images/logos/btc.png'
import currency2 from '@/assets/images/logos/mon.png'
import currency3 from '@/assets/images/logos/eth.png'
import currency4 from '@/assets/images/logos/lite.png'
import currency5 from '@/assets/images/logos/dash.png'

const cryptoCurrencies: Crypto[] = [
	{
		name: 'Bitcoin',
		image: currency1,
		quantity: '6.18424000',
		price: '33277.3660',
	},
	{
		name: 'Monero',
		image: currency2,
		quantity: '60.1842',
		price: '18564.3660',
	},
	{
		name: 'Ethereum',
		image: currency3,
		quantity: '32.65849212',
		price: '5562.3660',
	},
	{
		name: 'Light',
		image: currency4,
		quantity: '10.65849212',
		price: '7854.3660',
	},
	{
		name: 'Dashcoin',
		image: currency5,
		quantity: '62.65849212',
		price: '7289.3660',
	},
	{
		name: 'Monero',
		image: currency2,
		quantity: '60.1842',
		price: '18564.3660',
	},
]

const transactionHistory: Transaction[] = [
	{
		dateAndTime: '6 June 2019 10:25 AM',
		variant: 'danger',
		transaction: '0.000245684 BTC',
	},
	{
		dateAndTime: '4 June 2019 7:05 PM',
		variant: 'success',
		transaction: '0.012458632 BTC',
	},
	{
		dateAndTime: '1 June 2019 11:30 PM',
		variant: 'danger',
		transaction: '0.000245684 BTC',
	},
	{
		dateAndTime: '28 May 2019 08:45 AM',
		variant: 'danger',
		transaction: '0.000245684 BTC',
	},
	{
		dateAndTime: '25 May 2019 01:25 PM',
		variant: 'success',
		transaction: '0.012458632 BTC',
	},
]

const currencyMarketCap: MarketCap[] = [
	{
		currency: {
			name: 'Bitcoin (BTC)',
			change: 2.5,
			price: 7289.45,
			image: currency1,
		},
		marketCap: '129,820,932',
		volume: '25,111,773',
	},
	{
		currency: {
			name: 'Ethereum (ETH)',
			change: 0.45,
			price: 234.45,
			image: currency3,
		},
		marketCap: '24,909,743',
		volume: '12,856,403',
	},
	{
		currency: {
			name: 'Litecoin (LTC)',
			change: 3.51,
			price: 7289.45,
			image: currency4,
		},
		marketCap: '5,399,795,666',
		volume: '4,394,304,674',
	},
	{
		currency: {
			name: 'Litecoin (LTC)',
			change: 0.95,
			price: 7289.45,
			image: currency2,
		},
		marketCap: '1,375,808,437',
		volume: '58,791,421',
	},
]
export { cryptoCurrencies, transactionHistory, currencyMarketCap }
