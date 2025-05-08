import { CryptoTopBar, PageBreadcrumb } from '@/components'
import { Col, Row } from 'react-bootstrap'
import { icoLists } from './data'
import ICOCard from './components/ICOCard'

const ICOList = () => {
	return (
		<>
			<PageBreadcrumb title="ICO" subName="Crypto" />
			<Row>
				<Col lg={12}>
					<CryptoTopBar />
				</Col>
			</Row>
			<Row>
				{icoLists.map((ico, idx) => {
					return (
						<Col lg={4} key={idx}>
							<ICOCard image={ico.image} name={ico.name} status={ico.status} />
						</Col>
					)
				})}
			</Row>
		</>
	)
}

export default ICOList
