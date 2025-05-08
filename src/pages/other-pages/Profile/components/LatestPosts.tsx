import { ComponentContainerCard } from '@/components'
import small1 from '@/assets/images/small/img-1.jpg'
import user5 from '@/assets/images/users/user-5.jpg'
import { Link } from 'react-router-dom'

const LatestPosts = () => {
	return (
		<ComponentContainerCard
			title="Latest Posts"
			label="Today"
			menuItems={['Today', 'Yesterday', 'Last Week']}
		>
			<div className="blog-card">
				<img src={small1} className="img-fluid rounded" />
				<span className="badge badge-purple px-3 py-2 bg-soft-primary fw-semibold mt-3">
					Photography
				</span>
				<h4 className="my-3 font-15">
					<a href="">There are many variations of passages of Lorem</a>
				</h4>
				<p className="text-muted">
					The standard chunk of Lorem Ipsum used since the 1500s is reproduced
					below for those interested. Cum sociis natoque penatibus et magnis.
				</p>
				<hr className="hr-dashed" />
				<div className="d-flex justify-content-between">
					<div className="meta-box">
						<div className="media">
							<img src={user5} className="thumb-sm rounded-circle me-2" />
							<div className="media-body align-self-center text-truncate">
								<h6 className="m-0 text-dark">Donald Gardner</h6>
								<ul className="p-0 list-inline mb-0">
									<li className="list-inline-item">26 mars 2020</li>
									<li className="list-inline-item">
										by <Link to="">admin</Link>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div className="align-self-center">
						<Link to="" className="text-dark">
							Read more <i className="fas fa-long-arrow-alt-right" />
						</Link>
					</div>
				</div>
			</div>
		</ComponentContainerCard>
	)
}

export default LatestPosts
