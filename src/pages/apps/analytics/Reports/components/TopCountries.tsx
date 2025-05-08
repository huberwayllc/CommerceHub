import { ComponentContainerCard } from '@/components'
import { Col, Image, Row } from 'react-bootstrap'
import { topCountries } from '../data'

const TopCountries = () => {
	return (
		<ComponentContainerCard title="Top 3 Country">
			<Row>
				{topCountries.map((country, idx) => {
					return (
						<Col key={idx} lg={4}>
							<div className="media">
								<Image
									src={country.image}
									className="me-2 thumb-xs align-self-center rounded-circle"
									alt="..."
								/>
								<div className="media-body align-self-center">
									<div className="coin-bal">
										<h4 className="m-0">{country.state}</h4>
										<p className="text-muted mb-0">
											{country.name} . Last Month&nbsp;
											<span className="text-success">
												{country.change}% <i className="mdi mdi-arrow-up" />
											</span>
										</p>
									</div>
								</div>
							</div>
						</Col>
					)
				})}
			</Row>
		</ComponentContainerCard>
	)
}

export default TopCountries
