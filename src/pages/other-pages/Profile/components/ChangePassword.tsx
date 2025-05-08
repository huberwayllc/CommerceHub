import { ComponentContainerCard } from '@/components'
import { Button, Col, FormControl, FormGroup, FormLabel } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const ChangePassword = () => {
	return (
		<ComponentContainerCard title="Change Password">
			<FormGroup className="mb-3 row">
				<FormLabel className="col-xl-3 col-lg-3 text-end mb-lg-0 align-self-center">
					Current Password
				</FormLabel>
				<Col lg={9} xl={8}>
					<FormControl type="password" placeholder="Password" />
					<Link to="" className="text-primary font-12">
						Forgot password ?
					</Link>
				</Col>
			</FormGroup>
			<FormGroup className="mb-3 row">
				<FormLabel className="col-xl-3 col-lg-3 text-end mb-lg-0 align-self-center">
					New Password
				</FormLabel>
				<Col lg={9} xl={8}>
					<FormControl type="password" placeholder="New Password" />
				</Col>
			</FormGroup>
			<FormGroup className="mb-3 row">
				<FormLabel className="col-xl-3 col-lg-3 text-end mb-lg-0 align-self-center">
					Confirm Password
				</FormLabel>
				<Col lg={9} xl={8}>
					<FormControl type="password" placeholder="Re-Password" />
				</Col>
			</FormGroup>
			<FormGroup className="mb-3 row">
				<Col lg={9} xl={8} className="offset-lg-3">
					<Button variant="de-primary" type="submit" className="me-1">
						Change Password
					</Button>
					<Button variant="de-danger" type="button">
						Cancel
					</Button>
				</Col>
			</FormGroup>
		</ComponentContainerCard>
	)
}

export default ChangePassword
