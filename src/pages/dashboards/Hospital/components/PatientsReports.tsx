import { ComponentContainerCard } from '@/components'
import { ApexOptions } from 'apexcharts'
import ReactApexChart from 'react-apexcharts'
import { Col, Row } from 'react-bootstrap'

const PatientsReports = () => {
	const chartOpts: ApexOptions = {
		chart: {
			height: 210,
			type: 'bar',
			toolbar: {
				show: false,
			},
		},
		plotOptions: {
			bar: {
				horizontal: false,
				// endingShape: 'rounded',
				columnWidth: '25%',
			},
		},
		dataLabels: {
			enabled: false,
		},
		stroke: {
			show: true,
			width: 2,
			colors: ['transparent'],
		},
		colors: ['#4d79f6', '#e0e7fd'],
		series: [
			{
				name: 'Male',
				data: [68, 44, 55, 57, 56, 61, 58],
			},
			{
				name: 'Female',
				data: [51, 76, 85, 101, 98, 87, 105],
			},
		],
		xaxis: {
			categories: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Set'],
			axisBorder: {
				show: true,
				color: '#bec7e0',
			},
			axisTicks: {
				show: true,
				color: '#bec7e0',
			},
		},
		legend: {
			show: false,
			position: 'top',
			horizontalAlign: 'right',
		},

		fill: {
			opacity: 1,
		},
		// legend: {
		//     floating: true
		// },
		grid: {
			row: {
				colors: ['transparent', 'transparent'], // takes an array which will be repeated on columns
				opacity: 0.2,
			},
			borderColor: '#f1f3fa',
			strokeDashArray: 3,
		},
		tooltip: {
			y: {
				formatter: function (val) {
					return '' + val
				},
			},
		},
	}
	return (
		<ComponentContainerCard title="Patients Reports">
			<Row>
				<Col md={3} className="align-self-center">
					<div className="text-center">
						<div className="d-flex justify-content-center align-items-center thumb-lg bg-soft-primary rounded-circle mx-auto mb-2">
							<i className="las la-procedures align-self-center" />
						</div>
						<h4 className="mt-0 fw-bold">1200</h4>
						<h6 className="text-uppercase m-0 mb-2">Admit</h6>
						<p className="text-muted font-11">
							<span className="text-success">
								<i className="mdi mdi-arrow-up" />
								14.5%
							</span>{' '}
							Up From Last Week
						</p>
						<div className="d-grid">
							<button type="button" className="btn btn-soft-primary btn-sm">
								More Details
							</button>
						</div>
					</div>
				</Col>
				<Col md={6} className="align-self-center">
					<div className="apexchart-wrapper">
						<ReactApexChart
							height={210}
							options={chartOpts}
							series={chartOpts.series}
							type="bar"
							className="chart-gutters mb-n4"
						/>
						<div id="patient_dash_report" className="chart-gutters mb-n4" />
					</div>
				</Col>
				<Col md={3} className="align-self-center">
					<div className="text-center">
						<div className="d-flex justify-content-center align-items-center thumb-lg bg-soft-primary rounded-circle mx-auto mb-2">
							<i className="las la-wheelchair align-self-center" />
						</div>
						<h4 className="mt-0 fw-bold">351</h4>
						<h6 className="text-uppercase m-0 mb-2">Discharge</h6>
						<p className="text-muted font-11">
							<span className="text-success">
								<i className="mdi mdi-arrow-up" />
								14.5%
							</span>{' '}
							Up From Last Week
						</p>
						<div className="d-grid">
							<button type="button" className="btn btn-soft-primary btn-sm">
								More Details
							</button>
						</div>
					</div>
				</Col>
			</Row>
		</ComponentContainerCard>
	)
}

export default PatientsReports
