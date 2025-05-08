import {
	FormTextInput,
	PageBreadcrumb,
	SelectInput,
	TextAreaInput,
} from '@/components'
import usersDr1 from '@/assets/images/users/dr-1.jpg'
import {
	Button,
	Card,
	CardBody,
	Col,
	Form,
	FormGroup,
	Row,
} from 'react-bootstrap'

import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useState } from 'react'

type FormValues = {
	image: string
	firstName: string
	lastName: string
	DOB: string
	speciality: string
	phoneNo: string
	email: string
	webURL: string
	degree: string
	gender: string
	aboutMe: string
}

const DoctorEdit = () => {
	/*
	 * form validation schema
	 */
	const FormSchema = yup.object({
		image: yup.string().required('Please add image'),
		firstName: yup.string().required('Please enter first name'),
		lastName: yup.string().required('Please enter last name'),
		DOB: yup
			.string()
			.matches(
				/(0[1-9]|[1,2][0-9]|3[0,1])\/(0[1-9]|1[1,2])\/(19|20)\d{2}/,
				'Invalid date, Keep format dd/mm/yyyy'
			)
			.required('Please enter date of birth'),
		speciality: yup.string().required('Please enter speciality'),
		phoneNo: yup
			.string()
			.matches(/^\d{3}[\s\-\.]?\d{3}[\s\-\.]?\d{4}$/, 'Invalid phone number')
			.required('Please enter phone number'),
		email: yup
			.string()
			.email('Please enter a valid email address')
			.required('Please enter email'),
		webURL: yup
			.string()
			.url('Please enter a valid URL')
			.required('Please enter webURL'),
		degree: yup.string().required('Please enter degree'),
		gender: yup.string().required('Please select gender'),
		aboutMe: yup.string().required('Please enter about details'),
	})

	const {
		control,
		handleSubmit,
		reset,
		setValue,
		formState: { errors },
	} = useForm<FormValues>({
		resolver: yupResolver(FormSchema),
		defaultValues: {
			image: usersDr1,
			firstName: 'Rosa',
			lastName: 'Dodson',
			DOB: '11/06/1988',
			speciality: 'Orthopaedic',
			phoneNo: '1234567890',
			email: 'dr.example@example.com',
			webURL: 'https://www.xyz.com',
			degree: 'M.B.B.S',
			gender: 'Female',
			aboutMe:
				"There are many variations of passages of Lorem Ipsum available,but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look",
		},
	})

	/*
	 * handle form submission
	 */
	const onSubmitEvent = () => {
		reset()
	}

	/*
	 * handle Image Change
	 */
	const [selectedImage, setSelectedImage] = useState<any>()

	const handleImageChange = (event: any) => {
		const file = event.target.files[0]
		const reader = new FileReader()
		reader.onload = (e: any) => {
			setValue('image', e.target.result)
			setSelectedImage(e.target.result)
		}
		reader.readAsDataURL(file)
	}

	return (
		<>
			<PageBreadcrumb subName="Hospital" title="Edit" />

			<Row>
				<Col xs="12" md="8" className="mx-auto">
					<Card>
						<CardBody>
							<Form onSubmit={handleSubmit(onSubmitEvent)}>
								<FormGroup className="mb-3">
									<img
										src={selectedImage || usersDr1}
										alt="dr-1"
										className="thumb-lg rounded me-2"
									/>
									<label
										className="btn btn-de-primary btn-sm text-light"
										onChange={handleImageChange}
									>
										Add Avatar <input type="file" hidden />
									</label>
									{errors.image && (
										<span className="text-danger">{errors.image?.message}</span>
									)}
								</FormGroup>
								<Row className="form-group">
									<FormTextInput
										name="firstName"
										placeholder="First Name"
										control={control}
										containerClass="col-md-6 mb-3"
									/>

									<FormTextInput
										name="lastName"
										placeholder="Last Name"
										control={control}
										containerClass="col-md-6 mb-3"
									/>
								</Row>
								<Row className="form-group">
									<FormTextInput
										name="DOB"
										placeholder="Date of Birth"
										control={control}
										containerClass="col-md-4 mb-3"
									/>
									<FormTextInput
										name="speciality"
										placeholder="Speciality"
										control={control}
										containerClass="col-md-4 mb-3"
									/>
									<FormTextInput
										name="phoneNo"
										placeholder="Phone No"
										control={control}
										containerClass="col-md-4 mb-3"
									/>
								</Row>
								<Row className="form-group">
									<FormTextInput
										name="email"
										placeholder="Email"
										control={control}
										containerClass="col-md-6 mb-3"
									/>
									<FormTextInput
										name="webURL"
										placeholder="web URL"
										control={control}
										containerClass="col-md-6 mb-3"
									/>
								</Row>
								<Row className="form-group">
									<FormTextInput
										name="degree"
										placeholder="Degree"
										control={control}
										containerClass="col-md-6 mb-3"
									/>

									<SelectInput
										name="gender"
										control={control}
										containerClass="col-md-6 mb-3"
									>
										<option value="Male">Male</option>
										<option value="Female">Female</option>
									</SelectInput>
								</Row>
								<FormGroup>
									<TextAreaInput
										rows={5}
										placeholder="About Me..."
										name="aboutMe"
										control={control}
									/>
									<Button
										type="submit"
										size="sm"
										variant="de-primary"
										className="text-light px-4 mt-3 mb-0 me-1"
									>
										Update
									</Button>
									<Button
										type="button"
										size="sm"
										variant="de-danger"
										className="text-light px-4 mt-3 mb-0"
									>
										Cancel
									</Button>
								</FormGroup>
							</Form>
						</CardBody>
					</Card>
				</Col>
			</Row>
		</>
	)
}

export default DoctorEdit
