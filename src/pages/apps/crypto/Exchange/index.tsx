import { PageBreadcrumb, TransactionHistory } from '@/components'
import { Col, Row } from 'react-bootstrap'
import BuyCoins from './components/BuyCoins'
import CoinMarket from './components/CoinMarket'
import CryptoTopbar from './components/CryptoTopbar'
import DefaultExample from './components/DefaultExample'
import LiveTrading from './components/LiveTrading'
import SellCoins from './components/SellCoins'

import { transactionHistory } from './data'

const Exchange = () => {
	return (
		<div>
			<PageBreadcrumb title="Exchange" subName="Crypto" />
			<Row>
				<Col lg={12}>
					<CryptoTopbar />
				</Col>
			</Row>

			<Row>
				<Col lg={8}>
					<DefaultExample />
				</Col>

				<Col lg={4}>
					<CoinMarket />
				</Col>
			</Row>
			<Row>
				<Col md={6} lg={3}>
					<BuyCoins />
				</Col>

				<Col md={6} xl={3}>
					<SellCoins />
				</Col>

				<Col xl={6}>
					<LiveTrading />
				</Col>
			</Row>
			<Row>
				<Col xs={12}>
					<TransactionHistory transactions={transactionHistory} />
				</Col>
			</Row>
		</div>
	)
}

export default Exchange
