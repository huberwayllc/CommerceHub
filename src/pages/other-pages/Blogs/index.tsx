import { Col, Row } from 'react-bootstrap'
import { blogs } from './data'
import BlogCard from './BlogCard'
import { PageBreadcrumb } from '@/components'

const Blogs = () => {
	return (
		<>
			<PageBreadcrumb subName="Pages" title="Blogs" />
			<Row>
				{blogs.map((blog, idx) => (
					<Col lg={4} key={idx}>
						<BlogCard blog={blog} />
					</Col>
				))}
			</Row>
		</>
	)
}

export default Blogs
