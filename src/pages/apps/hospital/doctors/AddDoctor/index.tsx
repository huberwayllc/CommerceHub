import usersDrPro from '@/assets/images/users/dr-pro.png'
import {
	FormTextInput,
	PageBreadcrumb,
	SelectInput,
	TextAreaInput,
} from '@/components'
import { yupResolver } from '@hookform/resolvers/yup'
import { useState, type ChangeEvent } from 'react'
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

const AddDoctor = () => {
	/*
	 * form validation schema
	 */
	const FormSchema = yup.object({
		image: yup.string().required('Please add image'),
		firstName: yup.string().required('Please enter first name'),
		lastName: yup.string().required('Please enter last name'),
		DOB: yup.date().required('Please enter date of birth'),
		speciality: yup.string().required('Please enter speciality'),
		phoneNo: yup.number().min(5).required('Please enter phone number'),
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
	} = useForm({
		resolver: yupResolver(FormSchema),
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

	const handleImageChange = (event: ChangeEvent<any>) => {
		const file = event.target.files[0]
		const reader = new FileReader()
		reader.onload = (e: any) => {
			setValue('image', e.target.result, { shouldValidate: true })
			setSelectedImage(e.target.result)
		}
		reader.readAsDataURL(file)
	}

	return (
		<>
			<PageBreadcrumb subName="Hospital" title="Add Doctor" />
			<Row>
				<Col xs="12" lg="8" className="mx-auto">
					<Card>
						<CardBody>
							<Form onSubmit={handleSubmit(onSubmitEvent)}>
								<FormGroup className="mb-3">
									<img
										src={selectedImage || usersDrPro}
										alt="dr-pro"
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
										Save
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

export default AddDoctor
