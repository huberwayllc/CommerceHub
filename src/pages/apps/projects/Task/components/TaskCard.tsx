import { Card, CardBody, Image, ProgressBar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import type { TaskType } from '../types'
import clsx from 'clsx'

const TaskCard = ({ allTask }: { allTask: TaskType }) => {
	const {
		comment,
		date,
		progressVariant,
		teamMember,
		title,
		totalTask,
		status,
		variant,
		progress,
	} = allTask
	return (
		<Card>
			<CardBody>
				<div className="task-box">
					<div className="task-priority-icon">
						{progress == 100 ? (
							<i className="fas fa-check text-success" />
						) : (
							<i className={`fas fa-circle text-${variant}`} />
						)}
					</div>
					<p className="text-muted float-right">
						{status && (
							<span
								className={`badge bg-${status == 'Stop' ? 'danger' : status == 'Pending' ? 'warning' : 'success'} me-2`}
							>
								{status}
							</span>
						)}
						<span
							className={clsx(
								variant == 'danger' ? 'text-danger' : 'text-muted'
							)}
						>
							01:33
						</span>{' '}
						/&nbsp;
						<span
							className={clsx(
								variant == 'danger' ? 'text-danger' : 'text-muted'
							)}
						>
							9:30
						</span>
						&nbsp;
						<span className="mx-1">·</span>
						<span>
							<i className="far fa-fw fa-clock" /> {date}
						</span>
					</p>
					<h5 className="mt-0">{title}</h5>
					<p className="text-muted mb-1">
						There are many variations of passages of Lorem Ipsum available, but
						the majority have suffered alteration in some form.
					</p>
					<p className="text-muted text-end mb-1">{progress}% Complete</p>

					<ProgressBar
						variant={progressVariant}
						now={progress}
						className="mb-4"
						style={{ height: 4 }}
					/>

					<div className="d-flex justify-content-between">
						<div className="img-group">
							{teamMember.map((member, idx) => {
								return (
									<Link
										key={idx}
										className="user-avatar user-avatar-group me-1"
										to=""
									>
										<Image
											src={member}
											alt="user"
											className="rounded-circle thumb-xs"
										/>
									</Link>
								)
							})}
						</div>
						<ul className="list-inline mb-0 align-self-center">
							<li className="list-item d-inline-block me-2">
								<Link to="">
									<i className="mdi mdi-format-list-bulleted text-success font-15 me-1" />
									<span className="text-muted fw-bold">{totalTask}</span>
								</Link>
							</li>
							<li className="list-item d-inline-block me-1">
								<Link to="">
									<i className="mdi mdi-comment-outline text-primary font-15" />
									<span className="text-muted fw-bold">{comment}</span>
								</Link>
							</li>
							<li className="list-item d-inline-block me-1">
								<Link className="ms-2" to="">
									<i className="mdi mdi-pencil-outline text-muted font-18" />
								</Link>
							</li>
							<li className="list-item d-inline-block">
								<Link to="">
									<i className="mdi mdi-trash-can-outline text-muted font-18" />
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</CardBody>
		</Card>
	)
}

export default TaskCard
