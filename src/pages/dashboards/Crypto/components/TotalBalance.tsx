import {
	Card,
	CardBody,
	CardHeader,
	CardTitle,
	Col,
	Image,
	Row,
} from 'react-bootstrap'
import { cryptoCurrencies } from '../data'

const TotalBalance = () => {
	return (
		<Card>
			<CardHeader>
				<Row className="align-items-center">
					<Col>
						<CardTitle as="h4">Total Balance</CardTitle>
						<span className="text-muted font-12">30 june 2021</span>
					</Col>
				</Row>
			</CardHeader>
			<CardBody>
				<Row>
					<Col xs={12} className="col-md mb-2 mb-lg-0">
						<h4 className="m-0">$85692.00</h4>
						<p className="text-success mb-0">
							{' '}
							+ $455.00{' '}
							<span className="font-12 text-muted">
								(6.2% <i className="mdi mdi-trending-up text-success" />)
							</span>
						</p>
					</Col>
					<Col xs={12} className="col-md align-self-center">
						<div className="text-end  mb-2 mb-lg-0">
							<button className="btn btn-de-success btn-sm px-3">
								Receive
							</button>
							<button className="btn btn-de-danger btn-sm px-3 mx-1">
								Send
							</button>
							<button className="btn btn-de-primary btn-sm px-3">
								+ Invest
							</button>
						</div>
					</Col>
				</Row>
			</CardBody>
			<CardBody className="pt-0">
				<ul className="list-group">
					{cryptoCurrencies.map((currency, idx) => {
						return (
							<li
								key={idx}
								className="list-group-item align-items-center d-flex justify-content-between"
							>
								<div className="media">
									<Image
										src={currency.image}
										className="me-3 thumb-xs align-self-center rounded-circle"
										alt="..."
									/>
									<div className="media-body align-self-center">
										<div className="coin-bal">
											<h5 className="m-0 font-14">{currency.quantity}</h5>
											<p className="text-muted mb-0">$ {currency.price}</p>
										</div>
									</div>
								</div>
								<span className="badge bg-soft-secondary">{currency.name}</span>
							</li>
						)
					})}
				</ul>
			</CardBody>
		</Card>
	)
}

export default TotalBalance
