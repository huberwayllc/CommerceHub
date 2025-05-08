import { PageBreadcrumb } from '@/components'
import {
	Card,
	CardBody,
	CardHeader,
	CardTitle,
	Col,
	Row,
} from 'react-bootstrap'
import WorldMap from './WorldMap'
import { worldMapOpts, worldMapWithLineOpts } from './data'

const VectorMaps = () => {
	return (
		<>
			<PageBreadcrumb subName="Maps" title="Vector Maps" />
			<Row>
				<Col xs={12}>
					<Card>
						<CardHeader>
							<CardTitle as="h4">World Map Markers</CardTitle>
							<p className="text-muted mb-0">Example of vector maps.</p>
						</CardHeader>
						<CardBody>
							<WorldMap height="350px" width="100%" options={worldMapOpts} />
						</CardBody>
					</Card>
				</Col>
			</Row>
			<Row>
				<Col xs={12}>
					<Card>
						<CardHeader>
							<CardTitle as="h4">World Map With Marker Lines</CardTitle>
							<p className="text-muted mb-0">Example of vector maps.</p>
						</CardHeader>
						<CardBody>
							<WorldMap
								height="350px"
								width="100%"
								options={worldMapWithLineOpts}
							/>
						</CardBody>
					</Card>
				</Col>
			</Row>
		</>
	)
}

export default VectorMaps
