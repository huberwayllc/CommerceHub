import type { IconType } from 'react-icons'
import { MdOutlineLocalShipping } from 'react-icons/md'

export type MenuItemTypes = {
	key: string
	label: string
	isTitle?: boolean
	icon?: IconType | JSX.Element | string
	url?: string
	parentKey?: string
	target?: string
	children?: MenuItemTypes[]
}

const TWO_COl_MENU_ITEMS: MenuItemTypes[] = [
	{
		key: 'dashboard',
		icon: 'smart-home',
		label: 'Dashboard',
		isTitle: true,
		children: [
			{
				key: 'ds-analytics',
				label: 'Analytics',
				url: '/dashboards/analytic',
				parentKey: 'dashboard',
			},
			{
				key: 'ds-ecommerce',
				label: 'Ecommerce',
				url: '/dashboards/ecommerce',
				parentKey: 'dashboard',
			}
		],
	},
	{
		key: 'apps',
		icon: 'apps',
		label: 'Apps',
		isTitle: true,
		children: [
			{
				key: 'apps-orders',
				label: 'Ordini',
				url: '/apps/orders',
				parentKey: 'apps',
			},
			{
				key: 'apps-categories',
				label: 'Categorie',
				url: '/apps/categories',
				parentKey: 'apps',
			},
			{
				key: 'apps-customers',
				label: 'Clienti',
				url: '/apps/customers',
				parentKey: 'apps',
			},
			{
				key: 'apps-products',
				label: 'Prodotti',
				url: '/apps/products',
				parentKey: 'apps',
			},
			{
				key: 'apps-invoices',
				label: 'Fatture',
				url: '/apps/invoices',
				parentKey: 'apps',
			},
		],
	},
	{
		key: 'shipments',
		icon: MdOutlineLocalShipping,
		label: 'Spedizioni',
		isTitle: true,
		children: [
		{
			key: 'overview',
			label: 'Panoramica',
			url: '/shipments/overview',
			icon: 'layout-dashboard',
			parentKey: 'shipping',
		},
		{
			key: 'pack-and-go',
			label: 'Pack & Go',
			url: '/shipments/pack-and-go',
			icon: 'box',
			parentKey: 'shipping',
		},
		{
			key: 'ritiri',
			label: 'Ritiri',
			url: '/shipments/pickups',
			icon: 'truck',
			parentKey: 'shipping',
		},
		{
			key: 'tariffe-spedizione',
			label: 'Tariffe di spedizione',
			url: '/shipments/rates',
			icon: 'currency-dollar',
			parentKey: 'shipping',
		},
		{
			key: 'corrieri',
			label: 'Corrieri',
			url: '/shipments/carriers',
			icon: 'building-warehouse',
			parentKey: 'shipping',
		},
		{
			key: 'impostazioni-predefinite',
			label: 'Impostazioni predefinite',
			url: '/shipments/default-settings',
			icon: 'settings',
			parentKey: 'shipping',
		},
		{
			key: 'regole-spedizione',
			label: 'Regole di spedizione',
			url: '/shipments/rules',
			icon: 'settings-automation',
			parentKey: 'shipping',
		},
		{
			key: 'assicurazione',
			label: 'Assicurazione',
			url: '/shipments/insurance',
			icon: 'shield-check',
			parentKey: 'shipping',
		},
		{
			key: 'scatole',
			label: 'Scatole',
			url: '/shipments/boxes',
			icon: 'package',
			parentKey: 'shipping',
		},
		{
			key: 'opzioni-stampa',
			label: 'Opzioni di stampa',
			url: '/shipments/print-options',
			icon: 'printer',
			parentKey: 'shipping',
		}
	]
	},
	{
		key: 'ui',
		icon: 'settings',
		label: 'Settings',
		isTitle: true,
		children: [
			{
				key: 'ui-elements',
				label: 'UI Elements',
				isTitle: false,
				parentKey: 'ui'
			}
		],
	},
]

export { TWO_COl_MENU_ITEMS }
