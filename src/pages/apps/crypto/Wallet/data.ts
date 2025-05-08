import type {
	TotalBalanceType,
	TransactionHistoryType,
	WalletCoin,
} from './types'

import btc from '@/assets/images/logos/btc.png'
import eth from '@/assets/images/logos/eth.png'
import dash from '@/assets/images/logos/dash.png'
import lite from '@/assets/images/logos/lite.png'

const totalBalance: TotalBalanceType[] = [
	{
		balance: 8172.6,
		name: 'Kraken',
	},
	{
		balance: 2243.12,
		name: 'Bittrex',
	},
	{
		balance: 3524.0,
		name: 'Binance',
	},
	{
		balance: 142.0,
		name: 'Coinex',
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

const walletCoins: WalletCoin[] = [
	{
		name: 'BTC',
		price: '33277.36605044718',
		quantity: '3.18424000',
		image: btc,
	},
	{
		name: 'ETH',
		price: '77.36605044718',
		quantity: '1.17424000',
		image: eth,
	},
	{
		name: 'DASH',
		price: '277.36605044718',
		quantity: '2.99424000',
		image: dash,
	},
	{
		name: 'LTC',
		price: '57.36605044718',
		quantity: '5.00024000',
		image: lite,
	},
]

export { totalBalance, transactionHistory, walletCoins }
