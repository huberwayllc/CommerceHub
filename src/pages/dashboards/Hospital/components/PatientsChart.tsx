import { ComponentContainerCard } from '@/components'
import { ApexOptions } from 'apexcharts'
import ReactApexChart from 'react-apexcharts'
import { ProgressBar } from 'react-bootstrap'

const PatientsChart = () => {
	const chartOpts: ApexOptions = {
		chart: {
			type: 'radialBar',
			height: 255,
		},
		plotOptions: {
			radialBar: {
				offsetY: -10,
				startAngle: 0,
				endAngle: 270,
				hollow: {
					margin: 5,
					size: '50%',
					background: 'transparent',
				},
				track: {
					show: false,
				},
				dataLabels: {
					name: {
						fontSize: '18px',
					},
					value: {
						fontSize: '16px',
						color: '#50649c',
					},
				},
			},
		},
		colors: ['#2a76f4', '#67c8ff', '#fdb5c8'],
		stroke: {
			lineCap: 'round',
		},
		series: [71, 93, 10],
		labels: ['Active', 'Recovered', 'Deaths'],
		legend: {
			show: true,
			floating: true,
			position: 'left',
			offsetX: -10,
			offsetY: 0,
		},
		responsive: [
			{
				breakpoint: 480,
				options: {
					legend: {
						show: true,
						floating: true,
						position: 'left',
						offsetX: 10,
						offsetY: 0,
					},
				},
			},
		],
	}
	return (
		<ComponentContainerCard title="Covid-19 Patients">
			<div className="apexchart-wrapper">
				<ReactApexChart
					height={255}
					options={chartOpts}
					series={chartOpts.series}
					type="radialBar"
					className="apex-charts"
				/>
			</div>
			<span className="h4 fw-bold">1,41,520</span>
			<h6 className="text-uppercase text-muted mt-2 m-0 font-11">
				Total Covid-19 Reports
			</h6>
			<ProgressBar className="mt-3 rounded">
				<ProgressBar variant="primary" now={30} key={1} />
				<ProgressBar variant="info" now={70} key={2} />
			</ProgressBar>
			<ul className="list-unstyled mb-0">
				<li className="list-item mt-3 fw-semibold d-flex justify-content-between align-items-center">
					<span>
						<i className="fas fa-circle font-10 text-primary me-2" />
						Positive
					</span>
					<p className="align-self-center mb-0 fw-semibold">24,212</p>
				</li>
				<li className="list-item mt-2 fw-semibold d-flex justify-content-between align-items-center">
					<span>
						<i className="fas fa-circle font-10 text-info me-2" />
						Negative
					</span>
					<p className="align-self-center mb-0 fw-semibold">81,564</p>
				</li>
			</ul>
		</ComponentContainerCard>
	)
}

export default PatientsChart
