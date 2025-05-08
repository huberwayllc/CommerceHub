import {
	ComponentContainerCard,
	FormTextInput,
	SelectInput,
} from '@/components'
import { Col, FormCheck, FormGroup, Row } from 'react-bootstrap'
import FormCheckInput from 'react-bootstrap/esm/FormCheckInput'
import FormCheckLabel from 'react-bootstrap/esm/FormCheckLabel'
import { useForm } from 'react-hook-form'

const DeliveryAddress = () => {
	const { control } = useForm()
	return (
		<ComponentContainerCard title="Delivery Address">
			<form className="mb-0">
				<Row>
					<FormTextInput
						name="fName"
						label="First Name *"
						control={control}
						containerClass="col-md-6"
					/>
					<FormTextInput
						name="lName"
						label="Last Name *"
						control={control}
						containerClass="col-md-6"
					/>
				</Row>
				<Row>
					<FormTextInput
						name="dAddress"
						label="Delivery Address *"
						control={control}
						containerClass="col-md-6"
						labelClassName="my-2"
					/>
					<FormTextInput
						name="address"
						label="Address *"
						control={control}
						containerClass="col-md-6"
						labelClassName="my-2"
					/>
				</Row>
				<Row>
					<FormTextInput
						name="city"
						label="City *"
						control={control}
						containerClass="col-md-4"
						labelClassName="my-2"
					/>

					<SelectInput
						name="state"
						label="State *"
						control={control}
						containerClass="col-md-4"
						labelClassName="my-2"
					>
						<option>Select</option>
						<option>Gujarat</option>
						<option>New york</option>
						<option>California</option>
					</SelectInput>

					<SelectInput
						name="country"
						label="Country *"
						control={control}
						containerClass="col-md-4"
						labelClassName="my-2"
					>
						<option>Select</option>
						<option>India</option>
						<option>USA</option>
						<option>New Zealand</option>
					</SelectInput>
				</Row>

				<Row>
					<FormTextInput
						name="zipCode"
						label="Zip code *"
						control={control}
						containerClass="col-md-3"
						labelClassName="my-2"
					/>

					<FormTextInput
						name="email"
						label="Email Address *"
						type="email"
						control={control}
						containerClass="col-md-6"
						labelClassName="my-2"
					/>

					<FormTextInput
						name="mobileNo"
						label="Mobile No *"
						control={control}
						containerClass="col-md-3"
						labelClassName="my-2"
					/>
				</Row>
				<Row>
					<Col md={12}>
						<FormGroup className="mt-3">
							<FormCheck>
								<FormCheckInput type="checkbox" id="flexCheckDefault" />
								<FormCheckLabel htmlFor="flexCheckDefault">
									Confirm Shipping Address
								</FormCheckLabel>
							</FormCheck>
						</FormGroup>
					</Col>
				</Row>
			</form>
		</ComponentContainerCard>
	)
}

export default DeliveryAddress
