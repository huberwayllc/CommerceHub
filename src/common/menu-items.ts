export type MenuItemTypes = {
	key: string
	label: string
	isTitle?: boolean
	icon?: string
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
			{
				key: 'apps-shipments',
				label: 'Spedizioni',
				url: '/apps/shipments',
				parentKey: 'apps',
			}
		],
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
