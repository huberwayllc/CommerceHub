import {
	FormTextInput,
	PageBreadcrumb,
	SelectInput,
	TextAreaInput,
} from '@/components'
import {
	Button,
	Card,
	CardBody,
	Col,
	Form,
	Modal,
	ModalBody,
	ModalHeader,
	ModalTitle,
	Row,
} from 'react-bootstrap'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { sheduleList } from './data'

import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

type FormValues = {
	doctorName: string
	department: string
	days: string
	time: string
	message: string
}

const Shedule = () => {
	const [show, setShow] = useState(false)

	const handleClose = () => setShow(false)
	const handleShow = () => setShow(true)
	/*
	 * form validation schema
	 */
	const FormSchema = yup.object({
		doctorName: yup.string().required('Please enter doctor name'),
		department: yup.string().required('Please enter department'),
		days: yup.string().required('Please enter days'),
		time: yup.string().required('Please enter time'),
		message: yup.string().required('Please enter message'),
	})

	const { control, handleSubmit, reset } = useForm<FormValues>({
		resolver: yupResolver(FormSchema),
	})

	/*
	 * handle form submission
	 */
	const onSubmitEvent = () => {
		reset()
	}

	return (
		<>
			<PageBreadcrumb subName="Hospital" title="Shedule" />
			<Row>
				<Col xs="12">
					<Card>
						<CardBody>
							<Button
								type="button"
								size="sm"
								variant="de-primary"
								className="mt-0 mb-3"
								onClick={handleShow}
							>
								Add New Shedule
							</Button>
							<div className="table-responsive">
								<table className="table">
									<thead className="thead-light">
										<tr>
											<th>Doctor Name</th>
											<th>Department</th>
											<th>Working days</th>
											<th>Time</th>
											<th>Extra Info</th>
											<th>Status</th>
											<th className="text-right">Action</th>
										</tr>
									</thead>
									<tbody>
										{(sheduleList || []).map((shedule, idx) => (
											<tr key={idx}>
												<td>
													<img
														src={shedule.image}
														alt={shedule.image}
														className="thumb-sm rounded-circle me-2"
													/>
													{shedule.name}
												</td>
												<td>{shedule.specialization}</td>
												<td>{shedule.days}</td>
												<td>{shedule.timing}</td>
												<td>{shedule.note}</td>
												<td>
													{shedule.status === 'Active' ? (
														<span className="badge badge-soft-success">
															Active
														</span>
													) : (
														<span className="badge badge-soft-danger">
															Inactive
														</span>
													)}
												</td>
												<td>
													<Link to="">
														<i className="las la-pen text-secondary font-18" />
													</Link>
													<Link to="">
														<i className="las la-trash-alt text-secondary font-18" />
													</Link>
												</td>
											</tr>
										))}
									</tbody>
								</table>
							</div>
						</CardBody>
					</Card>
				</Col>
			</Row>

			{/* Shedule Modal */}
			<Modal show={show} onHide={handleClose} size="lg">
				<ModalHeader closeButton>
					<ModalTitle as="h6" className="mt-0">
						Add New Shedule
					</ModalTitle>
				</ModalHeader>
				<ModalBody>
					<Form onSubmit={handleSubmit(onSubmitEvent)}>
						<Row>
							<SelectInput
								name="doctorName"
								label="Doctor Name"
								control={control}
								containerClass="col-md-6"
							>
								<option defaultValue="">-- Select --</option>
								<option value={1}>Dr.Thomas Fant</option>
								<option value={2}>Dr.Justin Williams</option>
								<option value={3}>Dr.Aretha Garland</option>
								<option value={4}>Dr.Lea Sanchez</option>
								<option value={5}>Dr.Helen White</option>
								<option value={6}>Dr.William Gonzalez</option>
							</SelectInput>

							<SelectInput
								name="department"
								label="Department"
								control={control}
								containerClass="col-md-6"
							>
								<option defaultValue="">-- Select --</option>
								<option value={1}>Dr.Thomas Fant</option>
								<option value={2}>Dr.Justin Williams</option>
								<option value={3}>Dr.Aretha Garland</option>
								<option value={4}>Dr.Lea Sanchez</option>
								<option value={5}>Dr.Helen White</option>
								<option value={6}>Dr.William Gonzalez</option>
							</SelectInput>
						</Row>
						<Row>
							<FormTextInput
								name="days"
								label="Days"
								control={control}
								containerClass="col-md-3"
								labelClassName="my-2"
							/>
							<FormTextInput
								name="time"
								label="Time"
								control={control}
								containerClass="col-md-3"
								labelClassName="my-2"
							/>
							<TextAreaInput
								label="Extra Info"
								labelClassName="my-2"
								containerClass="col-md-6"
								rows={3}
								name="message"
								control={control}
							/>
						</Row>
						<Button type="submit" size="sm" variant="de-primary">
							Save
						</Button>
						<Button
							type="button"
							size="sm"
							variant="de-danger"
							onClick={handleClose}
						>
							Delete
						</Button>
					</Form>
				</ModalBody>
			</Modal>
		</>
	)
}

export default Shedule
