import { ComponentContainerCard } from '@/components'
import {
	Button,
	Col,
	FormControl,
	FormGroup,
	FormLabel,
	FormSelect,
	InputGroup,
} from 'react-bootstrap'

const PersonalInformation = () => {
	return (
		<ComponentContainerCard title="Personal Information">
			<FormGroup className="mb-3 row">
				<FormLabel className="col-xl-3 col-lg-3 text-end mb-lg-0 align-self-center">
					First Name
				</FormLabel>
				<Col lg={9} xl={8}>
					<FormControl type="text" defaultValue="Rosa" />
				</Col>
			</FormGroup>
			<FormGroup className="mb-3 row">
				<FormLabel className="col-xl-3 col-lg-3 text-end mb-lg-0 align-self-center">
					Last Name
				</FormLabel>
				<Col lg={9} xl={8}>
					<FormControl type="text" defaultValue="Dodson" />
				</Col>
			</FormGroup>
			<FormGroup className="mb-3 row">
				<FormLabel className="col-xl-3 col-lg-3 text-end mb-lg-0 align-self-center">
					Company Name
				</FormLabel>
				<Col lg={9} xl={8}>
					<FormControl type="text" defaultValue="MannatThemes" />
					<span className="form-text text-muted font-12">
						We'll never share your email with anyone else.
					</span>
				</Col>
			</FormGroup>
			<FormGroup className="mb-3 row">
				<FormLabel className="col-xl-3 col-lg-3 text-end mb-lg-0 align-self-center">
					Contact Phone
				</FormLabel>
				<Col lg={9} xl={8}>
					<InputGroup>
						<span className="input-group-text">
							<i className="las la-phone" />
						</span>
						<FormControl
							type="text"
							defaultValue={+123456789}
							placeholder="Phone"
							aria-describedby="basic-addon1"
						/>
					</InputGroup>
				</Col>
			</FormGroup>
			<FormGroup className="mb-3 row">
				<FormLabel className="col-xl-3 col-lg-3 text-end mb-lg-0 align-self-center">
					Email Address
				</FormLabel>
				<Col lg={9} xl={8}>
					<InputGroup>
						<span className="input-group-text">
							<i className="las la-at" />
						</span>
						<FormControl
							type="text"
							defaultValue="rosa.dodson@demo.com"
							placeholder="Email"
							aria-describedby="basic-addon1"
						/>
					</InputGroup>
				</Col>
			</FormGroup>
			<FormGroup className="mb-3 row">
				<FormLabel className="col-xl-3 col-lg-3 text-end mb-lg-0 align-self-center">
					Website Link
				</FormLabel>
				<Col lg={9} xl={8}>
					<InputGroup>
						<span className="input-group-text">
							<i className="la la-globe" />
						</span>
						<input
							type="text"
							className="form-control"
							defaultValue=" https://mannatthemes.com/"
							placeholder="Email"
							aria-describedby="basic-addon1"
						/>
					</InputGroup>
				</Col>
			</FormGroup>
			<FormGroup className="mb-3 row">
				<FormLabel className="col-xl-3 col-lg-3 text-end mb-lg-0 align-self-center">
					USA
				</FormLabel>
				<Col lg={9} xl={8}>
					<FormSelect>
						<option>London</option>
						<option>India</option>
						<option>USA</option>
						<option>Canada</option>
						<option>Thailand</option>
					</FormSelect>
				</Col>
			</FormGroup>
			<FormGroup className="mb-3 row">
				<Col lg={9} xl={8} className="offset-lg-3">
					<div className="d-inline-flex gap-1 align-items-center">
						<Button variant="de-primary" type="submit">
							Submit
						</Button>
						<Button variant="de-danger" type="button">
							Cancel
						</Button>
					</div>
				</Col>
			</FormGroup>
		</ComponentContainerCard>
	)
}

export default PersonalInformation
