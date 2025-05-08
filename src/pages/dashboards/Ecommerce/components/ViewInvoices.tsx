import { ComponentContainerCard } from '@/components'
import { Col, Row } from 'react-bootstrap'

const ViewInvoices = () => {
	return (
		<ComponentContainerCard title="View Invoices">
			<Row className="align-items-center">
				<Col xs="auto">
					<i className="las la-file-invoice-dollar font-36 text-muted" />
				</Col>
				<Col>
					<div className="input-group">
						<select className="form-select">
							<option defaultValue="selected">--- Select ---</option>
							<option value="Jan 2021">Jan 2021</option>
							<option value="Feb 2021">Feb 2021</option>
							<option value="Mar 2021">Mar 2021</option>
							<option value="Apr 2021">Apr 2021</option>
						</select>
						<button className="btn btn-soft-primary btn-sm" type="button">
							<i className="las la-search" />
						</button>
					</div>
				</Col>
			</Row>
		</ComponentContainerCard>
	)
}

export default ViewInvoices
