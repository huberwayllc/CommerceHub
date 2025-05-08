import { PageBreadcrumb } from '@/components'
import {
	Card,
	CardBody,
	CardHeader,
	CardTitle,
	Col,
	Row,
} from 'react-bootstrap'
import { tablerIcons } from './data'

const TablerIcons = () => {
	return (
		<>
			<PageBreadcrumb subName="Icons" title="Tabler Icons" />
			<Row>
				<Col xs={12}>
					<Card>
						<CardHeader>
							<CardTitle as="h4">Example</CardTitle>
							<p className="text-muted mb-0">
								Use <code>&lt;i class="ti ti-arrow-up"&gt;&lt;/i&gt;</code>.
							</p>
						</CardHeader>
						<CardBody>
							<Row className="icon-demo-content">
								{tablerIcons.map((icon, idx) => {
									return (
										<Col key={idx} sm={6} md={4} lg={3}>
											<i className={`ti ti-${icon}`} /> {icon}
										</Col>
									)
								})}
							</Row>
						</CardBody>
					</Card>
				</Col>
			</Row>
		</>
	)
}

export default TablerIcons
