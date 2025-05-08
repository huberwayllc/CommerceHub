import { ComponentContainerCard } from '@/components'
import { ProgressBar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { milestones } from '../data'

const Milestones = () => {
	return (
		<ComponentContainerCard title="Milestones">
			{milestones.map((milestone, idx) => {
				return (
					<div key={idx} className="media align-items-center mb-3">
						<span
							className={`thumb-xs justify-content-center d-flex align-items-center bg-soft-${milestone.variant} rounded-circle fw-semibold`}
						>
							{milestone.text}
						</span>
						<div className="media-body ms-3 align-self-center">
							<h6 className="m-0 font-15">{milestone.title}</h6>
							<div className="d-flex justify-content-between">
								<span>
									<Link to="">
										<i className="mdi mdi-format-list-bulleted text-success" />
										<span className="text-muted">{milestone.progress}/100</span>
									</Link>
								</span>
								<span className="text-muted">
									{milestone.progress}% Complete
								</span>
							</div>
							<ProgressBar
								className="mt-0"
								style={{ height: 3 }}
								now={milestone.progress}
								variant={milestone.variant}
							/>
						</div>
					</div>
				)
			})}
		</ComponentContainerCard>
	)
}

export default Milestones
