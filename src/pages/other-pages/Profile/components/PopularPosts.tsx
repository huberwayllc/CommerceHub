import { ComponentContainerCard } from '@/components'
import { popularPosts } from '../data'
import { Link } from 'react-router-dom'

const PopularPosts = () => {
	return (
		<ComponentContainerCard
			title="Popular Posts"
			label="Today"
			menuItems={['Today', 'Yesterday', 'Last Week']}
		>
			<ul className="list-group custom-list-group mb-n3">
				{popularPosts.map((post, idx) => {
					return (
						<li
							key={idx}
							className="list-group-item align-items-center d-flex justify-content-between"
						>
							<div className="media">
								<img
									src={post.image}
									height={40}
									className="me-3 align-self-center rounded"
									alt="..."
								/>
								<div className="media-body align-self-center">
									<Link to="" className="m-0 d-block fw-semibold font-13">
										{post.title}
									</Link>
									<Link to="" className="font-12 text-primary">
										{post.subTitle}
									</Link>
								</div>
							</div>
							<div className="align-self-center">
								<span className="text-muted mb-n2">{post.date}</span>
							</div>
						</li>
					)
				})}
			</ul>
		</ComponentContainerCard>
	)
}

export default PopularPosts
