import { ComponentContainerCard } from '@/components'
import { Col, Row } from 'react-bootstrap'
import { FiFacebook, FiTwitter } from 'react-icons/fi'

const SocialReport = () => {
	return (
		<ComponentContainerCard title="Social Report">
			<Row>
				<Col className="border-end">
					<div className="d-flex justify-content-center align-items-center thumb-lg bg-soft-primary rounded-circle mx-auto">
						<FiFacebook className="align-self-center" />
					</div>
					<div className="text-center">
						<h3 className="text-dark">184k</h3>
						<h6 className="font-14 text-dark">Followers</h6>
					</div>
				</Col>
				<Col>
					<div className="d-flex justify-content-center align-items-center thumb-lg bg-soft-info rounded-circle mx-auto">
						<FiTwitter className="align-self-center" />
					</div>
					<div className="text-center">
						<h3 className="text-dark">101k</h3>
						<h6 className="font-14 text-dark">Followers</h6>
					</div>
				</Col>
			</Row>
		</ComponentContainerCard>
	)
}

export default SocialReport
