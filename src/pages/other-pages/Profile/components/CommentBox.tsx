import { Button, Card, CardBody, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { comments } from '../data'
import { Fragment } from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { TextAreaInput } from '@/components'
import { yupResolver } from '@hookform/resolvers/yup'

const CommentBox = () => {
	const formSchema = yup.object({
		message: yup.string().required('Please enter message'),
	})
	const { control, handleSubmit } = useForm({
		resolver: yupResolver(formSchema),
	})
	return (
		<Card>
			<CardBody className="pb-0">
				<Row>
					<Col>
						<p className="text-dark fw-semibold mb-0">Comments (205)</p>
					</Col>
				</Row>
			</CardBody>
			<CardBody className="border-bottom-dashed">
				<ul className="list-unstyled mb-0">
					{comments.map((comment, idx) => {
						return (
							<li key={idx} className={idx === 0 ? '' : 'mt-3'}>
								<Row>
									<Col xs="auto">
										<img
											src={comment.avatar}
											className="thumb-md rounded-circle"
										/>
									</Col>
									<Col>
										<div className="comment-body ms-n2 bg-light-alt p-3">
											<Row>
												<Col>
													<p className="text-dark fw-semibold mb-2">
														{comment.name}
													</p>
												</Col>
												<Col xs="auto">
													<span className="text-muted">
														<i className="far fa-clock me-1" />
														{comment.time}
													</span>
												</Col>
											</Row>
											<p>{comment.message}</p>
											<Link to="" className="text-primary">
												<i className="fas fa-reply me-1" />
												Replay
											</Link>
										</div>
									</Col>
								</Row>
								{comment.replies && (
									<Fragment>
										{comment.replies.map((replay, idx) => {
											return (
												<ul key={idx} className="list-unstyled ms-5">
													<li>
														<Row className="mt-3">
															<Col xs="auto">
																<img
																	src={replay.avatar}
																	className="thumb-md rounded-circle"
																/>
															</Col>
															<Col>
																<div className="comment-body ms-n2 bg-light-alt p-3">
																	<Row>
																		<Col>
																			<p className="text-dark fw-semibold mb-2">
																				{replay.name}
																			</p>
																		</Col>
																		<Col className="col-auto">
																			<span className="text-muted">
																				<i className="far fa-clock me-1" />
																				{replay.time}
																			</span>
																		</Col>
																	</Row>
																	<p>{replay.message}</p>
																	<p className="mb-0">Thank you</p>
																</div>
															</Col>
														</Row>
													</li>
												</ul>
											)
										})}
									</Fragment>
								)}
							</li>
						)
					})}
				</ul>
			</CardBody>
			<CardBody>
				<Row>
					<Col>
						<p className="text-dark fw-semibold mb-0">Leave a comment</p>
					</Col>
				</Row>
			</CardBody>
			<CardBody className="pt-0">
				<form onSubmit={handleSubmit(() => {})}>
					<TextAreaInput
						name="message"
						rows={5}
						placeholder="Message"
						control={control}
						containerClass="mb-3"
					/>
					<Row>
						<Col sm={12} className="text-end">
							<Button variant="de-primary" type="submit" className="px-4">
								Send Message
							</Button>
						</Col>
					</Row>
				</form>
			</CardBody>
		</Card>
	)
}

export default CommentBox
