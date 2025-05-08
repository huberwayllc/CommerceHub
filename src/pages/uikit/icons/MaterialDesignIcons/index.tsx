import { PageBreadcrumb } from '@/components'
import {
	Card,
	CardBody,
	CardHeader,
	CardTitle,
	Col,
	Row,
} from 'react-bootstrap'
import { materialIcons } from './data'

const MaterialDesignIcons = () => {
	return (
		<>
			<PageBreadcrumb subName="Icons" title="Material Design Icons" />
			<Row>
				<Col xs={12}>
					<Card>
						<CardHeader>
							<CardTitle as="h4">Example</CardTitle>
							<p className="text-muted mb-0">
								Use{' '}
								<code>&lt;i class="mdi mdi-access-point"&gt;&lt;/i&gt;</code>.
							</p>
						</CardHeader>
						<CardBody>
							<Row className="icon-demo-content">
								{materialIcons.map((icon, idx) => {
									return (
										<Col key={idx} sm={6} md={4} lg={3}>
											<i className={`mdi mdi-${icon}`} /> mdi mdi-{icon}
										</Col>
									)
								})}
								<Row>
									<Col xs={12}>
										<h5 className="mb-3">Size</h5>
									</Col>
									<Col sm={6} md={4} lg={3}>
										<i className="mdi mdi-18px mdi-account" /> mdi-18px
									</Col>
									<Col sm={6} md={4} lg={3}>
										<i className="mdi mdi-24px mdi-account" /> mdi-24px
									</Col>
									<Col sm={6} md={4} lg={3}>
										<i className="mdi mdi-36px mdi-account" /> mdi-36px
									</Col>
									<Col sm={6} md={4} lg={3}>
										<i className="mdi mdi-48px mdi-account" /> mdi-48px
									</Col>
									<Col xs={12}>
										<h5 className="mb-3">Rotate</h5>
									</Col>
									<Col sm={6} md={4} lg={3}>
										<i className="mdi mdi-rotate-45 mdi-account" />{' '}
										mdi-rotate-45
									</Col>
									<Col sm={6} md={4} lg={3}>
										<i className="mdi mdi-rotate-90 mdi-account" />{' '}
										mdi-rotate-90
									</Col>
									<Col sm={6} md={4} lg={3}>
										<i className="mdi mdi-rotate-135 mdi-account" />{' '}
										mdi-rotate-135
									</Col>
									<Col sm={6} md={4} lg={3}>
										<i className="mdi mdi-rotate-180 mdi-account" />{' '}
										mdi-rotate-180
									</Col>
									<Col sm={6} md={4} lg={3}>
										<i className="mdi mdi-rotate-225 mdi-account" />{' '}
										mdi-rotate-225
									</Col>
									<Col sm={6} md={4} lg={3}>
										<i className="mdi mdi-rotate-270 mdi-account" />{' '}
										mdi-rotate-270
									</Col>
									<Col sm={6} md={4} lg={3}>
										<i className="mdi mdi-rotate-315 mdi-account" />{' '}
										mdi-rotate-315
									</Col>
									<Col xs={12}>
										<h5 className="mb-3">Spin</h5>
									</Col>
									<Col sm={6} md={4} lg={3}>
										<i className="mdi mdi-spin mdi-loading" /> mdi-spin
									</Col>
									<Col sm={6} md={4} lg={3}>
										<i className="mdi mdi-spin mdi-star" /> mdi-spin
									</Col>
								</Row>
							</Row>
						</CardBody>
					</Card>
				</Col>
			</Row>
		</>
	)
}

export default MaterialDesignIcons
