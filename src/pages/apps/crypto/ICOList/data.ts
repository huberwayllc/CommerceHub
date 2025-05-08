import btc from '@/assets/images/logos/btc.png'
import dash from '@/assets/images/logos/dash.png'
import eth from '@/assets/images/logos/eth.png'
import lite from '@/assets/images/logos/lite.png'
import mon from '@/assets/images/logos/mon.png'
import qub from '@/assets/images/logos/qub.png'

export type ICOList = {
	name: string
	image: string
	status: string
}

export const icoLists: ICOList[] = [
	{
		name: 'Bitcoin',
		status: 'Active',
		image: btc,
	},
	{
		name: 'Qubitica',
		status: 'Active',
		image: qub,
	},
	{
		name: 'Litecoin',
		status: 'End',
		image: lite,
	},
	{
		name: 'Ethereum',
		status: 'End',
		image: eth,
	},
	{
		name: 'Monero',
		status: 'Active',
		image: mon,
	},
	{
		name: 'Dashcoin',
		status: 'Active',
		image: dash,
	},
]
