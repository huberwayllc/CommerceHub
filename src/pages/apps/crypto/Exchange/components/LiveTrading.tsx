import { ComponentContainerCard } from '@/components'
import { Col, Row } from 'react-bootstrap'
import SimpleBar from 'simplebar-react'

// style
import 'simplebar-react/dist/simplebar.min.css'

const LiveTrading = () => {
	return (
		<ComponentContainerCard title="Live Trading">
			<Row>
				<Col xs={6}>
					<SimpleBar className="table-responsive" style={{ height: 270 }}>
						<table className="table table-sm mb-0">
							<thead className="thead-light">
								<tr>
									<th scope="col">Price(USD)</th>
									<th scope="col">Amount(BTC)</th>
									<th scope="col">Total(USD)</th>
								</tr>
							</thead>
							<tbody>
								{Array.from(new Array(Math.floor(9))).map((_item, idx) => {
									return (
										<tr key={idx} className="bg-soft-success not-hover">
											<td className="text-success">1235.12</td>
											<td className="text-muted">1.2154300</td>
											<td className="text-muted">1235.21</td>
										</tr>
									)
								})}
							</tbody>
						</table>
					</SimpleBar>
				</Col>
				<Col xs={6}>
					<SimpleBar className="table-responsive" style={{ height: 270 }}>
						<table className="table table-sm mb-0">
							<thead className="thead-light">
								<tr>
									<th scope="col">Price(USD)</th>
									<th scope="col">Amount(BTC)</th>
									<th scope="col">Total(USD)</th>
								</tr>
							</thead>
							<tbody>
								{Array.from(new Array(Math.floor(9))).map((_item, idx) => {
									return (
										<tr key={idx} className="bg-soft-danger not-hover">
											<td className="text-danger">1235.12</td>
											<td className="text-muted">1.2154300</td>
											<td className="text-muted">1235.21</td>
										</tr>
									)
								})}
							</tbody>
						</table>
					</SimpleBar>
				</Col>
			</Row>
		</ComponentContainerCard>
	)
}

export default LiveTrading
