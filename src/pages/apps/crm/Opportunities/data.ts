import starbucks from '@/assets/images/small/opp-1.png'
import macDonald from '@/assets/images/small/opp-2.png'
import lg from '@/assets/images/small/opp-3.png'

export type OpportunityType = {
	name: string
	image: string
	variant: string
}

export const allOpportunities: OpportunityType[] = [
	{
		name: 'Starbucks coffee',
		variant: 'success',
		image: starbucks,
	},
	{
		name: 'Mac Donald',
		variant: 'secondary',
		image: macDonald,
	},
	{
		name: 'Life Good',
		variant: 'purple',
		image: lg,
	},
]
