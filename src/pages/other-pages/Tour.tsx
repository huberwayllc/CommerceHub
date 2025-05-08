import { useState } from 'react'
import { PageBreadcrumb } from '@/components'
import {
	Badge,
	Card,
	CardBody,
	CardHeader,
	CardTitle,
	Col,
	Dropdown,
	DropdownItem,
	DropdownMenu,
	DropdownToggle,
	Row,
} from 'react-bootstrap'
import { tourTable } from './data'
import Joyride, { Step, CallBackProps, STATUS } from 'react-joyride'

const Tour = () => {
	const [run, setRun] = useState<boolean>(true)
	const [steps] = useState<Step[]>([
		{
			content: <p>Have you any quetion?</p>,
			placement: 'bottom',
			target: '#tourFaq',
			title: 'FAQ',
		},
		{
			content: <p>This is the color cards</p>,
			placement: 'bottom',
			target: '#bg_colorCard',
			title: 'Color Card',
		},
	])

	const handleJoyrideCallback = (data: CallBackProps) => {
		const { status } = data
		const finishedStatuses: string[] = [STATUS.FINISHED, STATUS.SKIPPED]

		if (finishedStatuses.includes(status)) {
			setRun(true)
		}
	}
	return (
		<>
			<PageBreadcrumb subName="Pages" title="Tour" />

			<Joyride
				callback={handleJoyrideCallback}
				continuous={true}
				run={run}
				scrollToFirstStep={true}
				showSkipButton={true}
				steps={steps}
			/>

			<Row>
				<Col xs={12}>
					<Card id="tourFaq">
						<CardHeader>
							<CardTitle as="h4">Most Commonly Asked Questions</CardTitle>
							<p className="text-muted mb-0">
								Anim pariatur cliche reprehenderit, enim eiusmod high life
								accusamus terry richardson ad squid.
							</p>
						</CardHeader>
						<CardBody>
							<Row>
								<Col lg={6}>
									<ul className="list-unstyled faq-qa">
										<li className="mb-5">
											<h6>1. What is Metrica?</h6>
											<p className="font-14 text-muted ms-3">
												Anim pariatur cliche reprehenderit, enim eiusmod high
												life accusamus terry richardson ad squid.
											</p>
										</li>
										<li className="mb-5">
											<h6>3. What cryptocurrency can i use to buy Metrica?</h6>
											<p className="font-14 text-muted  ms-3">
												Anim pariatur cliche reprehenderit, enim eiusmod high
												life accusamus terry richardson ad squid.
											</p>
										</li>
										<li className="mb-5">
											<h6>5. Can i trade Metrica?</h6>
											<p className="font-14 text-muted ms-3">
												Anim pariatur cliche reprehenderit, enim eiusmod high
												life accusamus terry richardson ad squid.
											</p>
										</li>
									</ul>
								</Col>
								<Col lg={6}>
									<ul className="list-unstyled faq-qa">
										<li className="mb-5">
											<h6>2. How buy Metrica on coin?</h6>
											<p className="font-14 text-muted ms-3">
												Anim pariatur cliche reprehenderit, enim eiusmod high
												life accusamus terry richardson ad squid.
											</p>
										</li>
										<li className="mb-5">
											<h6>4. Where can i download the wallet?</h6>
											<p className="font-14 text-muted ms-3">
												Anim pariatur cliche reprehenderit, enim eiusmod high
												life accusamus terry richardson ad squid.
											</p>
										</li>
										<li className="mb-5">
											<h6>6. What is Metrica?</h6>
											<p className="font-14 text-muted ms-3">
												Anim pariatur cliche reprehenderit, enim eiusmod high
												life accusamus terry richardson ad squid.
											</p>
										</li>
									</ul>
								</Col>
							</Row>
						</CardBody>
					</Card>
				</Col>
			</Row>
			<Row>
				<Col lg={4}>
					<Card className="text-white bg-primary">
						<CardBody>
							<blockquote className="card-bodyquote mb-0">
								<p>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit
									consectetur. Integer posuere erat a ante.
								</p>
								<footer className="blockquote-footer text-white font-14">
									Someone famous in{' '}
									<cite title="Source Title">Source Title</cite>
								</footer>
							</blockquote>
						</CardBody>
					</Card>
				</Col>
				<Col lg={4}>
					<Card className="text-white bg-warning">
						<CardBody>
							<blockquote className="card-bodyquote mb-0">
								<p>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit
									consectetur. Integer posuere erat a ante.
								</p>
								<footer className="blockquote-footer text-white font-14">
									Someone famous in{' '}
									<cite title="Source Title">Source Title</cite>
								</footer>
							</blockquote>
						</CardBody>
					</Card>
				</Col>
				<Col lg={4}>
					<Card className="bg-success text-white" id="bg_colorCard">
						<CardBody>
							<blockquote className="card-bodyquote mb-0">
								<p>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit
									consectetur. Integer posuere erat a ante.
								</p>
								<footer className="blockquote-footer text-white font-14">
									Someone famous in{' '}
									<cite title="Source Title">Source Title</cite>
								</footer>
							</blockquote>
						</CardBody>
					</Card>
				</Col>
			</Row>
			<Row>
				<Col xs={12}>
					<Card>
						<CardBody>
							<h4 className="mt-0 header-title">Bordered table</h4>
							<p className="text-muted mb-4">
								Add <code>.table-bordered</code> for borders on all sides of the
								table and cells.
							</p>
							<div className="table-responsive">
								<table className="table table-bordered mb-0 table-centered">
									<thead>
										<tr>
											<th>Transaction ID</th>
											<th>Date</th>
											<th>Price</th>
											<th>Order Status</th>
											<th>Action</th>
										</tr>
									</thead>
									<tbody>
										{tourTable.map((item, idx) => {
											return (
												<tr key={idx}>
													<td>#{item.id}</td>
													<td>{item.date}</td>
													<td>${item.price}</td>
													<td>
														<Badge
															bg={
																item.status === 'Rejected'
																	? 'danger'
																	: 'success'
															}
														>
															{item.status}
														</Badge>
													</td>
													<td>
														<Dropdown className="d-inline-block float-right">
															<DropdownToggle
																as="a"
																className="nav-link arrow-none"
																id="dLabel8"
																role="button"
															>
																<i className="fas fa-ellipsis-v font-20 text-muted" />
															</DropdownToggle>
															<DropdownMenu
																className="dropdown-menu-right"
																aria-labelledby="dLabel8"
															>
																<DropdownItem href="#">
																	Creat Project
																</DropdownItem>
																<DropdownItem href="#">
																	Open Project
																</DropdownItem>
																<DropdownItem href="#">
																	Tasks Details
																</DropdownItem>
															</DropdownMenu>
														</Dropdown>
													</td>
												</tr>
											)
										})}
									</tbody>
								</table>
							</div>
						</CardBody>
					</Card>
				</Col>
			</Row>
		</>
	)
}

export default Tour
