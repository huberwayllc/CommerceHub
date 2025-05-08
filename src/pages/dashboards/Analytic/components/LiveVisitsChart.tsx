import { ComponentContainerCard } from '@/components'
import { ApexOptions } from 'apexcharts'
import { useEffect, useState } from 'react'
import ReactApexChart from 'react-apexcharts'
import { CardTitle, Col, ProgressBar, Row } from 'react-bootstrap'

type RangeType = {
	max: number
	min: number
}

function getRangeRandom(yrange: RangeType) {
	return Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min
}

const LiveVisitsChart = () => {
	const [seriesRange, setSeriesRange] = useState([71, 63])

	useEffect(() => {
		setInterval(() => {
			setSeriesRange([
				getRangeRandom({ min: 10, max: 100 }),
				getRangeRandom({ min: 10, max: 100 }),
			])
		}, 3000)

		return () => {
			setInterval(() => {
				setSeriesRange([
					getRangeRandom({ min: 10, max: 100 }),
					getRangeRandom({ min: 10, max: 100 }),
				])
			}, 3000)
		}
	}, [])
	const chartOpts: ApexOptions = {
		chart: {
			type: 'radialBar',
			height: 295,
			offsetY: -30,
			offsetX: 20,
		},
		plotOptions: {
			radialBar: {
				inverseOrder: true,
				hollow: {
					margin: 5,
					size: '55%',
					background: 'transparent',
				},
				track: {
					show: true,
					background: '#ddd',
					strokeWidth: '10%',
					opacity: 1,
					margin: 5, // margin is in pixels
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
		series: seriesRange,
		labels: ['Domestic', 'International'],
		legend: {
			show: true,
			position: 'bottom',
			offsetX: -40,
			offsetY: -5,
			formatter: function (val, opts) {
				return val + ' - ' + opts.w.globals.series[opts.seriesIndex] + '%'
			},
		},

		stroke: {
			lineCap: 'round',
		},
		colors: ['#2a76f4', '#38c4fa'],
	}
	return (
		<ComponentContainerCard
			title="Live Visits Our New Site"
			label="Today"
			menuItems={['Today', 'Yesterday', 'Last Week']}
		>
			<ReactApexChart
				height={295}
				className="apex-charts"
				options={chartOpts}
				series={chartOpts.series}
				type="radialBar"
			/>
			<div>
				<Row>
					<Col className="col-lg">
						<CardTitle as="h4" className="mt-0 mb-2">
							Traffic Sources
						</CardTitle>
						<div className="traffic-card">
							<h4 className="my-2">80</h4>
							<p className="mb-2 fw-semibold">Right Now</p>
						</div>
					</Col>
					<Col lg="auto" className="align-self-center">
						<ul className="list-unstyled url-list mb-0">
							<li>
								<i className="fas fa-caret-right font-16 text-primary" />
								<span>Organic</span>
							</li>
							<li>
								<i className="fas fa-caret-right font-16 text-success" />
								<span>Direct</span>
							</li>
							<li>
								<i className="fas fa-caret-right font-16 text-gray" />
								<span>Campaign</span>
							</li>
						</ul>
					</Col>
				</Row>
				<ProgressBar className="mb-1">
					<ProgressBar striped variant="primary" label="55%" now={55} key={1} />
					<ProgressBar striped variant="info" label="28%" now={28} key={2} />
					<ProgressBar
						striped
						variant="soft-primary"
						label="17%"
						now={17}
						key={3}
					/>
				</ProgressBar>
			</div>
		</ComponentContainerCard>
	)
}

export default LiveVisitsChart
