import { ApexOptions } from 'apexcharts'
import ReactApexChart from 'react-apexcharts'
import { Card, CardBody } from 'react-bootstrap'

const TaskChart = () => {
	const chartOpts: ApexOptions = {
		chart: {
			height: 310,
			type: 'radialBar',
		},
		plotOptions: {
			radialBar: {
				hollow: {
					margin: 10,
					size: '55%',
					background: 'transparent',
				},
				dataLabels: {
					name: {
						fontSize: '18px',
					},
					value: {
						fontSize: '16px',
						color: '#50649c',
					},
					total: {
						show: true,
					},
				},
				track: {
					show: true,
				},
			},
		},
		colors: ['#7680ff', '#80e6e6', '#7ebcff'],
		stroke: {
			lineCap: 'round',
		},
		series: [71, 63, 100],
		labels: ['Completed', 'Active', 'Assigned'],
		legend: {
			show: true,
			position: 'bottom',
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
		<Card>
			<CardBody>
				<div className="apexchart-wrapper">
					<ReactApexChart
						className="apex-charts"
						height={310}
						options={chartOpts}
						series={chartOpts.series}
						type="radialBar"
					/>
				</div>
			</CardBody>
		</Card>
	)
}

export default TaskChart
