import { CryptoTopBar, PageBreadcrumb } from '@/components'
import { Col, Row } from 'react-bootstrap'
import CryptoHeadline from './components/CryptoHeadline'
import LiveCryptoNews from './components/LiveCryptoNews'
import { cryptoNews } from './data'
import NewsCard from './components/NewsCard'
import NewsCard2 from './components/NewsCard2'

const CryptoNews = () => {
	return (
		<>
			<PageBreadcrumb title="News" subName="Crypto" />

			<Row>
				<Col lg={12}>
					<CryptoTopBar />
				</Col>
			</Row>

			<Row>
				<Col xs={12}>
					<CryptoHeadline />
				</Col>
			</Row>

			<Row>
				<Col lg={8}>
					<LiveCryptoNews />
				</Col>

				<Col lg={4}>
					{cryptoNews.map((news, idx) => (
						<NewsCard image={news.image} variant={news.variant} key={idx} />
					))}
				</Col>
			</Row>
			<Row>
				{cryptoNews.slice(1, 4).map((news, idx) => (
					<Col key={idx} lg={4}>
						<NewsCard2
							image={news.image}
							variant={news.variant}
							title={news.title}
						/>
					</Col>
				))}
			</Row>
		</>
	)
}

export default CryptoNews
