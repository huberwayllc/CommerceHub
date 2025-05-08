import { Col, Row } from 'react-bootstrap'
import flame from '@/assets/images/small/flame.png'
import { ComponentContainerCard } from '@/components'

const PatientMedicalReport = () => {
	return (
		<Col lg="6">
			<ComponentContainerCard title="Patient Medical Report">
				<Row>
					<Col xs="2">
						<img src={flame} alt="small/flame" className="img-fluid" />
					</Col>
					<Col xs="8" className="align-self-center">
						<p className="skill-detail">
							Contrary to popular belief, Lorem Ipsum is not simply random text.
							It has roots in a piece of classical Latin literature from 45 BC,
							making it over 2000 years old. Richard McClintock, a Latin
							professor at Hampden-Sydney College in Virginia, looked up one of
							the more obscure Latin words.
						</p>
					</Col>
				</Row>
				<div className="skills mt-4">
					<div className="skill-box">
						<h4 className="skill-title">Blood Pressure</h4>
						<div className="progress-line">
							<span data-percent={50} style={{ width: '50%' }}>
								<span className="percent-tooltip">110 Normal</span>
							</span>
						</div>
					</div>
					<div className="skill-box">
						<h4 className="skill-title">Diabetes</h4>
						<div className="progress-line">
							<span data-percent={64} style={{ width: '64%' }}>
								<span className="percent-tooltip">64 Normal</span>
							</span>
						</div>
					</div>
					<div className="skill-box">
						<h4 className="skill-title">Hemoglobin</h4>
						<div className="progress-line">
							<span data-percent={51} style={{ width: '51%' }}>
								<span className="percent-tooltip text-danger">11% Low</span>
							</span>
						</div>
					</div>
					<div className="skill-box">
						<h4 className="skill-title">Vitamin B-12</h4>
						<div className="progress-line">
							<span data-percent={95} style={{ width: '95%' }}>
								<span className="percent-tooltip">95% Normal</span>
							</span>
						</div>
					</div>
				</div>
			</ComponentContainerCard>
		</Col>
	)
}

export default PatientMedicalReport
