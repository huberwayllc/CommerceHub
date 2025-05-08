import { CoinMarketType, TransactionHistoryType } from './types'

import btc from '@/assets/images/logos/btc.png'
import dash from '@/assets/images/logos/dash.png'
import dollar from '@/assets/images/logos/dollar.png'
import eth from '@/assets/images/logos/eth.png'
import lite from '@/assets/images/logos/lite.png'
import mon from '@/assets/images/logos/mon.png'
import qub from '@/assets/images/logos/qub.png'

const coinMarket: CoinMarketType[] = [
	{
		name: 'BTC',
		price: '1420.00',
		change: 0.2,
		image: btc,
		variant: 'danger',
	},
	{
		name: 'ETH',
		price: '233.00',
		change: 0.28,
		image: eth,
		variant: 'success',
	},
	{
		name: 'BCH',
		price: '12.00',
		change: 0.12,
		image: dash,
		variant: 'success',
	},
	{
		name: 'BSV',
		price: '95.00',
		change: 0.22,
		image: mon,
		variant: 'danger',
	},
	{
		name: 'LTC',
		price: '32.00',
		change: 0.09,
		image: lite,
		variant: 'danger',
	},
	{
		name: 'BNB',
		price: '51.00',
		change: 0.27,
		image: qub,
		variant: 'success',
	},
	{
		name: 'ADA',
		price: '88.00',
		change: 0.2,
		image: dollar,
		variant: 'danger',
	},
]

const transactionHistory: TransactionHistoryType[] = [
	{
		id: 1,
		date: '14 Jan 2021',
		time: '12:05PM',
		type: 'Sent',
		value: 521.36,
	},
	{
		id: 2,
		date: '13 Jan 2021',
		time: '10:15AM',
		type: 'Received',
		value: 990.0,
	},
	{
		id: 3,
		date: '11 Jan 2021',
		time: '09:14PM',
		type: 'Sent',
		value: 321.21,
	},
	{
		id: 4,
		date: '08 Jan 2021',
		time: '12:05PM',
		type: 'Received',
		value: 321.21,
	},
	{
		id: 5,
		date: '06 Jan 2021',
		time: '11:30AM',
		type: 'Sent',
		value: 458.8,
	},
	{
		id: 6,
		date: '05 Jan 2021',
		time: '05:50PM',
		type: 'Received',
		value: 125.5,
	},
	{
		id: 7,
		date: '04 Jan 2021',
		time: '08:10PM',
		type: 'Sent',
		value: 365.21,
	},
	{
		id: 8,
		date: '03 Jan 2021',
		time: '01:30PM',
		type: 'Received',
		value: 843.21,
	},
	{
		id: 9,
		date: '03 Jan 2021',
		time: '12:05PM',
		type: 'Sent',
		value: 335.15,
	},
	{
		id: 10,
		date: '02 Jan 2021',
		time: '03:15PM',
		type: 'Received',
		value: 554.5,
	},
]

export { coinMarket, transactionHistory }
