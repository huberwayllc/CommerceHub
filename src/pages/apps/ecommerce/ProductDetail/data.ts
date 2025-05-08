import product3 from '@/assets/images/products/03.png'
import product4 from '@/assets/images/products/04.png'
import product5 from '@/assets/images/products/05.png'

type ProductFeature = {
	title: string
	icon: string
	variant: string
}

export type ProductType = {
	name: string
	category: string
	price: number
	sellPrice: number
	offer: string
	image: string
}

const features: ProductFeature[] = [
	{
		title: 'Fast Delivery',
		icon: 'truck-fast',
		variant: 'success',
	},
	{
		title: 'Returns In 30 Days',
		icon: 'refresh',
		variant: 'danger',
	},
	{
		title: 'Online Support 24/7',
		icon: 'headset',
		variant: 'warning',
	},
	{
		title: 'Secure Payment',
		icon: 'wallet',
		variant: 'purple',
	},
]

const relatedProducts: ProductType[] = [
	{
		name: 'Fever Gun',
		category: 'Electric',
		offer: '50% off',
		price: 99,
		sellPrice: 49,
		image: product5,
	},
	{
		name: 'N95 Mask',
		category: 'Covid Safety',
		offer: '50% off',
		price: 18,
		sellPrice: 9,
		image: product4,
	},
	{
		name: 'Imported VR Box',
		category: 'Entertainment',
		offer: '50% off',
		price: 99,
		sellPrice: 39,
		image: product3,
	},
]

export { features, relatedProducts }
