import { ComponentContainerCard } from '@/components'
import { ApexOptions } from 'apexcharts'
import ReactApexChart from 'react-apexcharts'
import { Col, Row } from 'react-bootstrap'
import { FiPhone } from 'react-icons/fi'

const HospitalSurveyChart = () => {
	const chartOpts: ApexOptions = {
		chart: {
			height: 335,
			type: 'area',
			toolbar: {
				show: false,
			},
			// dropShadow: {
			//   enabled: true,
			//   top: 12,
			//   left: 0,
			//   bottom: 0,
			//   right: 0,
			//   blur: 2,
			//   color: '#45404a2e',
			//   opacity: 0.35
			// },
		},
		colors: ['#67c8ff', '#6d81f5'],
		dataLabels: {
			enabled: false,
		},
		stroke: {
			show: true,
			curve: 'smooth',
			width: [2, 2],
			dashArray: [0, 4],
			lineCap: 'round',
		},
		series: [
			{
				name: 'OPD',
				data: [10, 10, 50, 20, 70, 20, 80, 30, 75, 40, 60, 60],
			},
			{
				name: 'General Patients',
				data: [0, 30, 10, 40, 30, 60, 50, 80, 70, 100, 90, 130],
			},
		],
		labels: [
			'Jan',
			'Feb',
			'Mar',
			'Apr',
			'May',
			'Jun',
			'Jul',
			'Aug',
			'Sep',
			'Oct',
			'Nov',
			'Dec',
		],

		yaxis: {
			labels: {
				offsetX: -12,
				offsetY: 0,
			},
		},
		grid: {
			borderColor: '#e0e6ed',
			strokeDashArray: 3,
			xaxis: {
				lines: {
					show: true,
				},
			},
			yaxis: {
				lines: {
					show: false,
				},
			},
		},
		legend: {
			show: true,
			position: 'top',
			horizontalAlign: 'right',
		},

		fill: {
			type: 'gradient',
			gradient: {
				type: 'vertical',
				opacityFrom: 0.28,
				opacityTo: 0.05,
			},
		},
	}
	return (
		<ComponentContainerCard
			title="Hospital Survey"
			label="This Month"
			menuItems={['Today', 'Last Week', 'Last Month', 'This Year']}
		>
			<Row className="position-absolute">
				<Col xs={12}>
					<div className="media my-2">
						<FiPhone className="align-self-center icon-md text-secondary" />
						<div className="media-body align-self-center ms-2">
							<h6 className="mt-0 mb-1 font-16">
								76% Deals Successfull{' '}
								<i className="fas fa-check text-success" />
							</h6>
							<p className="text-muted mb-0">
								This is a simple hero unit, a simple jumbotron-style component.
							</p>
						</div>
					</div>
				</Col>
			</Row>
			<div>
				<ReactApexChart
					className="apex-charts mt-3"
					height={335}
					options={chartOpts}
					series={chartOpts.series}
					type="area"
				/>
			</div>
		</ComponentContainerCard>
	)
}

export default HospitalSurveyChart
