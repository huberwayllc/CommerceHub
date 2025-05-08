import { CryptoTopBar, PageBreadcrumb, TransactionHistory } from '@/components'
import { Col, Row } from 'react-bootstrap'
import MakeTransaction from './components/MakeTransaction'
import TotalBalanceCard from './components/TotalBalanceCard'
import { totalBalance, transactionHistory } from './data'

const Wallet = () => {
	return (
		<>
			<PageBreadcrumb subName="Crypto" title="Wallet" />
			<Row>
				<Col lg={12}>
					<CryptoTopBar />
				</Col>
			</Row>

			<Row>
				<Col lg={6}>
					<MakeTransaction />
				</Col>

				<Col lg={6}>
					<Row>
						{totalBalance.map((item, idx) => (
							<Col lg={6} xl={6} key={idx}>
								<TotalBalanceCard balance={item.balance} name={item.name} />
							</Col>
						))}
					</Row>
				</Col>
			</Row>

			<Row>
				<Col xs={12}>
					<TransactionHistory transactions={transactionHistory} />
				</Col>
			</Row>
		</>
	)
}

export default Wallet
