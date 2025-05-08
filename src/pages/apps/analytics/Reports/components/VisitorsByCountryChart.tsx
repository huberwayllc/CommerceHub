import { ComponentContainerCard } from '@/components'
import { Image } from 'react-bootstrap'

import countryMap from '@/assets/images/small/svg-map.svg'

const VisitorsByCountryChart = () => {
	return (
		<ComponentContainerCard title="Visitors By Country">
			<Image src={countryMap} className="img-fluid" />
			<div className="country-reports country-ind">
				<span className="shadow-sm bg-card p-1 country-data">India / 2201</span>
			</div>
			<div className="country-reports country-usa">
				<span className="shadow-sm bg-card p-1 country-data">USA / 3201</span>
			</div>
		</ComponentContainerCard>
	)
}

export default VisitorsByCountryChart
