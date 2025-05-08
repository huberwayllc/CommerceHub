import { ComponentContainerCard } from '@/components'
import { Col, Image, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import btc from '@/assets/images/logos/btc.png'

const BuyCoins = () => {
	return (
		<ComponentContainerCard title="Buy Coins">
			<form>
				<div className="input-group mb-3">
					<span className="input-group-text">Amount</span>
					<input
						type="text"
						className="form-control"
						aria-label="Amount (to the nearest dollar)"
					/>
					<span className="input-group-text">BTC</span>
				</div>
				<div className="input-group mb-3">
					<select
						className="form-select w-25"
						aria-label="Default select example"
					>
						<option defaultValue="selected">Last Trade Price</option>
						<option value={1}>Last Buy Price</option>
						<option value={2}>Last Sell Price</option>
					</select>
					<input
						type="text"
						className="form-control"
						aria-label="Amount"
						placeholder="$25,000"
					/>
					<span className="input-group-text">$ Dollor</span>
				</div>
				<div className="input-group mb-3">
					<span className="input-group-text">Total</span>
					<input
						type="text"
						className="form-control"
						aria-label="Amount (to the nearest dollar)"
					/>
					<span className="input-group-text">$ Dollor</span>
				</div>
				<div className=" mt-3 ms-auto">
					<Link to="" className="btn btn-success btn-sm">
						Buy Coins
					</Link>
				</div>
			</form>
			<hr className="hr-dashed" />
			<h6 className="mt-0">Last Trade</h6>
			<Row>
				<Col>
					<div className="media">
						<Image
							src={btc}
							height={30}
							className="me-2 align-self-center rounded"
							alt="..."
						/>
						<div className="media-body align-self-center">
							<h6 className="m-0">BTC</h6>
							<p className="mb-0 text-muted">$50,562.24</p>
						</div>
					</div>
				</Col>
				<Col xs="auto" className="align-self-center">
					<p className="mb-0 text-success">0.95842536</p>
					<p className="mb-0 text-muted">$17,214</p>
				</Col>
			</Row>
		</ComponentContainerCard>
	)
}

export default BuyCoins
