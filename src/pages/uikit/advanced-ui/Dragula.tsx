import { PageBreadcrumb } from '@/components'
import {
	Card,
	CardBody,
	Col,
	Dropdown,
	DropdownItem,
	DropdownMenu,
	DropdownToggle,
	ProgressBar,
	Row,
} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { ReactSortable } from 'react-sortablejs'
import { projects1Data, projects2Data, type ProjectType } from './data'

import { useState, type ReactNode } from 'react'

const ContainerCard = ({
	title,
	children,
}: {
	title: string
	children: ReactNode
}) => {
	return (
		<div className="bg-light p-3">
			<Dropdown className="d-inline-block float-end mt-n2">
				<DropdownToggle
					as="a"
					className="nav-link  arrow-none"
					id="drop1"
					data-bs-toggle="dropdown"
					href="#"
					role="button"
					aria-haspopup="false"
					aria-expanded="false"
				>
					<i className="fas fa-ellipsis-v font-18 text-muted" />
				</DropdownToggle>
				<DropdownMenu align="end" aria-labelledby="drop1">
					<DropdownItem href="#">Create Project</DropdownItem>
					<DropdownItem href="#">Open Project</DropdownItem>
					<DropdownItem href="#">Tasks Details</DropdownItem>
				</DropdownMenu>
			</Dropdown>
			<h4 className="header-title mb-3 mt-0">{title}</h4>
			{children}
		</div>
	)
}

const MovableCard = ({ project }: { project: ProjectType }) => {
	const { comment, date, images, progress, task, title, variant } = project
	return (
		<Card>
			<CardBody>
				<div className="task-box">
					<div className="task-priority-icon">
						{progress === 100 ? (
							<i className="fas fa-check text-success" />
						) : (
							<i className={`fas fa-circle text-${variant}`} />
						)}
					</div>
					<p className="text-muted float-end">
						<span className="text-muted">01:33</span> /
						<span className="text-muted">9:30</span>
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
					<ProgressBar now={progress} className="mb-4" style={{ height: 4 }} />
					<div className="d-flex justify-content-between">
						<div className="img-group">
							{images.map((image, idx) => {
								return (
									<Link
										key={idx}
										className="user-avatar user-avatar-group"
										to=""
									>
										<img
											src={image}
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
									<i className="mdi mdi-format-list-bulleted text-success font-15" />
									<span className="text-muted font-weight-bold">{task}</span>
								</Link>
							</li>
							<li className="list-item d-inline-block">
								<Link to="" className="d-flex align-items-center gap-1">
									<i className="mdi mdi-comment-outline text-primary font-15" />
									<span className="text-muted font-weight-bold">{comment}</span>
								</Link>
							</li>
							<li className="list-item d-inline-block">
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

const Dragula = () => {
	const [project1, setProject1] = useState<ProjectType[]>(projects1Data)

	const [project2, setProject2] = useState<ProjectType[]>(projects2Data)
	return (
		<>
			<PageBreadcrumb subName="Advanced UI" title="Dragula" />
			<Row>
				<Col xs={12}>
					<Card>
						<CardBody>
							<Row>
								<Col md={6}>
									<ContainerCard title="Project Active">
										<ReactSortable
											group="teamList"
											list={project1}
											setList={setProject1}
										>
											{project1.map((project, idx) => (
												<MovableCard project={project} key={idx} />
											))}
										</ReactSortable>
									</ContainerCard>
								</Col>
								<Col md={6}>
									<ContainerCard title="Project Complete">
										<ReactSortable
											group="teamList"
											list={project2}
											setList={setProject2}
										>
											{project2.map((project, idx) => (
												<MovableCard project={project} key={idx} />
											))}
										</ReactSortable>
									</ContainerCard>
								</Col>
							</Row>
						</CardBody>
					</Card>
				</Col>
			</Row>
		</>
	)
}

export default Dragula
