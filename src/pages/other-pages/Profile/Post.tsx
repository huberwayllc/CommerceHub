import { Col, Row } from 'react-bootstrap'
import { statisticsData } from './data'
import Statistic from './components/Statistic'
import Article from './components/Article'
import CommentBox from './components/CommentBox'
import LatestPosts from './components/LatestPosts'
import PopularPosts from './components/PopularPosts'
import SocialProfile from './components/SocialProfile'

const Post = () => {
	return (
		<Row>
			<Col lg={9}>
				<Row>
					{statisticsData.map((statistic, idx) => (
						<Col key={idx} lg={6}>
							<Statistic statistic={statistic} />
						</Col>
					))}
				</Row>

				<Article />

				<CommentBox />
			</Col>
			<Col lg={3}>
				<LatestPosts />

				<PopularPosts />

				<SocialProfile />
			</Col>
		</Row>
	)
}

export default Post
