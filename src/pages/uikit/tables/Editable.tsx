import { PageBreadcrumb } from '@/components'
import {
	Card,
	CardBody,
	CardHeader,
	CardTitle,
	Col,
	Row,
} from 'react-bootstrap'

const Editable = () => {
	return (
		<>
			<PageBreadcrumb title="Editable" subName="Tables" />
			<Row>
				<Col xs={12}>
					<Card>
						<CardHeader>
							<CardTitle>Editable Data </CardTitle>
							<p className="text-muted mb-0">
								Using the editable setting on each column, you can make a user
								editable table.{' '}
							</p>
						</CardHeader>
						<CardBody>
							<div className="table-responsive">
								<div className="mb-2">
									<button
										className="btn btn-outline-primary btn-sm mb-1 mb-xl-0"
										id="reactivity-add"
									>
										Add New Row
									</button>
									<button
										className="btn btn-outline-primary btn-sm mb-1 mb-xl-0"
										id="reactivity-delete"
									>
										Remove Row
									</button>
									<button
										className="btn btn-outline-primary btn-sm mb-1 mb-xl-0"
										id="reactivity-update"
									>
										Update First Row Name
									</button>
								</div>
								<div id="editable" />
							</div>
						</CardBody>
					</Card>
				</Col>
			</Row>
		</>
	)
}

export default Editable
