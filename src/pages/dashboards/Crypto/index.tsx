import { Col, Row } from 'react-bootstrap'
import CryptoChart from './components/CryptoChart'
import CryptoTopbar from './components/CryptoTopbar'
import CurrencyCalculator from './components/CurrencyCalculator'
import MarketCap from './components/MarketCap'
import TotalBalance from './components/TotalBalance'
import TransactionHistory from './components/TransactionHistory'
import { PageBreadcrumb } from '@/components'

const Crypto = () => {
	return (
		<>
			<PageBreadcrumb subName="Dashboard" title="Crypto" />
			<Row>
				<Col lg={12}>
					<CryptoTopbar />
				</Col>
			</Row>
			<Row>
				<Col lg={8}>
					<CryptoChart />
				</Col>

				<Col lg={4}>
					<TotalBalance />
				</Col>
			</Row>
			<Row>
				<Col lg={4}>
					<CurrencyCalculator />
				</Col>

				<Col lg={4}>
					<TransactionHistory />
				</Col>

				<Col lg={4}>
					<MarketCap />
				</Col>
			</Row>
		</>
	)
}

export default Crypto
