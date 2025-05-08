import backgroundImage from '@/assets/images/p-1.png'
import { Preloader } from '@/components'
import { Suspense, type ReactNode } from 'react'
import { CardBody, Col, Row } from 'react-bootstrap'

const AuthLayout = ({ children }: { children: ReactNode }) => {
	return (
		<div
			className="auth-page"
			style={{
				backgroundImage: `url(${backgroundImage})`,
				backgroundSize: 'cover',
				backgroundPosition: 'center center',
			}}
		>
			<div className="container-md">
				<Row className="vh-100 d-flex justify-content-center">
					<Col xs={12} className="align-self-center">
						<CardBody>
							<Row>
								<Col lg={4} className="mx-auto">
									<Suspense fallback={<Preloader />}>{children}</Suspense>
								</Col>
							</Row>
						</CardBody>
					</Col>
				</Row>
			</div>
		</div>
	)
}

export default AuthLayout
