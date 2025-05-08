import { FormTextInput, PageBreadcrumb, SelectInput } from '@/components'
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
import { appointmentsList } from './data'

import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

type FormValues = {
	patientName: string
	doctorName: string
	department: string
	age: string
	date: string
	time: string
	days: string
	phoneNo: string
}

const Appointments = () => {
	const [show, setShow] = useState(false)

	const handleClose = () => setShow(false)
	const handleShow = () => setShow(true)

	/*
	 * form validation schema
	 */
	const FormSchema = yup.object({
		patientName: yup.string().required('Please enter patient name'),
		doctorName: yup.string().required('Please enter doctor name'),
		department: yup.string().required('Please enter department'),
		age: yup.string().required('Please enter age'),
		date: yup.string().required('Please enter date'),
		time: yup.string().required('Please enter time'),
		days: yup.string().required('Please enter days'),
		phoneNo: yup.string().required('Please enter phone number'),
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
			<PageBreadcrumb subName="Hospital" title="Appointments" />
			<Row>
				<Col xs="12">
					<Card>
						<CardBody className="mb-n3">
							<Button
								type="button"
								size="sm"
								variant="de-primary"
								className="px-4 mt-0 mb-3"
								onClick={handleShow}
							>
								Add New Appointment
							</Button>
							<div className="table-responsive">
								<table className="table mb-0">
									<thead className="thead-light">
										<tr>
											<th>Patient Name</th>
											<th>Age</th>
											<th>Department</th>
											<th>Doctor Name</th>
											<th>Appo. Date</th>
											<th>Appo. Time</th>
											<th>Mobile No</th>
											<th>Action</th>
										</tr>
									</thead>
									<tbody>
										{(appointmentsList || []).map((appointment, idx) => (
											<tr key={idx}>
												<td>{appointment.doctorName}</td>
												<td>{appointment.age}</td>
												<td>{appointment.department}</td>
												<td>
													<img
														src={appointment.doctorImage}
														alt="user-1"
														className="thumb-sm rounded-circle me-2"
													/>
													{appointment.doctorName}
												</td>
												<td>{appointment.appointmentDate}</td>
												<td>{appointment.appointmentTime}</td>
												<td>{appointment.mobileNo}</td>
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

			{/* Appointments Modal */}
			<Modal show={show} onHide={handleClose} size="lg">
				<ModalHeader closeButton>
					<ModalTitle as="h6" className="mt-0">
						Add New Appointment
					</ModalTitle>
				</ModalHeader>
				<ModalBody>
					<Form onSubmit={handleSubmit(onSubmitEvent)}>
						<Row>
							<FormTextInput
								name="patientName"
								label="Patient Name"
								control={control}
								containerClass="col-md-6"
							/>
							<SelectInput
								name="doctorName"
								label="Doctor Name"
								control={control}
								containerClass="col-md-3"
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
								containerClass="col-md-3"
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
						<Row className="mb-2">
							<FormTextInput
								name="age"
								label="Age"
								control={control}
								containerClass="col-md-3"
								labelClassName="my-2"
							/>
							<FormTextInput
								name="date"
								label="Date"
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
							<FormTextInput
								name="phoneNo"
								label="Phone No"
								control={control}
								containerClass="col-md-3"
								labelClassName="my-2"
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
							{' '}
							Delete
						</Button>
					</Form>
				</ModalBody>
			</Modal>
		</>
	)
}

export default Appointments
