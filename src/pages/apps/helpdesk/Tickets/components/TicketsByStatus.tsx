import { ComponentContainerCard } from '@/components'
import { ApexOptions } from 'apexcharts'
import ReactApexChart from 'react-apexcharts'
import { Col } from 'react-bootstrap'

const TicketsByStatus = () => {
	const chartOpts: ApexOptions = {
		chart: {
			height: 305,
			type: 'pie',
			dropShadow: {
				enabled: true,
				top: 4,
				left: 0,
				// bottom: 0,
				// right: 0,
				blur: 2,
				color: '#45404a2e',
				opacity: 0.35,
			},
		},
		stroke: {
			show: true,
			width: 2,
			colors: ['transparent'],
		},
		series: [44, 55, 41, 17, 15],
		labels: ['Close', 'Open', 'Assigned', 'Approved', 'Resolved'],
		colors: ['#0abb87', '#7367f0', '#ff9f43', '#fd3c97', '#41cbd8'],
		legend: {
			show: true,
			position: 'bottom',
			horizontalAlign: 'center',
			// verticalAlign: 'middle',
			floating: false,
			fontSize: '14px',
			offsetX: 0,
			offsetY: 5,
		},
		responsive: [
			{
				breakpoint: 600,
				options: {
					chart: {
						height: 240,
					},
					legend: {
						show: false,
					},
				},
			},
		],
	}
	return (
		<Col lg="4">
			<ComponentContainerCard title="Tickets By Status">
				<ReactApexChart
					height={305}
					options={chartOpts}
					series={chartOpts.series}
					type="pie"
					className="apex-charts"
				/>
			</ComponentContainerCard>
		</Col>
	)
}

export default TicketsByStatus
