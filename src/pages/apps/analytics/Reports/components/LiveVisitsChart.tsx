import { ComponentContainerCard } from '@/components'
import { ApexOptions } from 'apexcharts'
import { useEffect, useState } from 'react'
import ReactApexChart from 'react-apexcharts'
import { Col, ProgressBar, Row } from 'react-bootstrap'

type RangeType = {
	max: number
	min: number
}

function getRangeRandom(yrange: RangeType) {
	return Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min
}
const LiveVisitsChart = () => {
	const [seriesRange, setSeriesRange] = useState([70, 60])

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
			height: 265,
		},
		plotOptions: {
			radialBar: {
				inverseOrder: true,
				hollow: {
					margin: 5,
					size: '60%',
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
		colors: ['#1ccab8', '#2a76f4'],
		stroke: {
			lineCap: 'round',
			width: 2,
		},
	}
	return (
		<ComponentContainerCard title="Live Visits Our New Site / Traffic Sources">
			<Row>
				<Col lg={6}>
					<ReactApexChart
						height={265}
						options={chartOpts}
						series={chartOpts.series}
						type="radialBar"
						className="apex-charts"
					/>
				</Col>
				<Col lg={6} className="align-self-center">
					<h4>80</h4>
					<h6>Right Now</h6>
					<ProgressBar className="mb-2 rounded">
						<ProgressBar
							striped
							animated
							variant="primary"
							label="55%"
							now={55}
							key={1}
						/>
						<ProgressBar variant="secondary" label="28%" now={28} key={2} />
						<ProgressBar variant="warning" label="17%" now={17} key={3} />
					</ProgressBar>
					<ul className="list-unstyled mb-0">
						<li className="list-item">
							<i className="mdi mdi-circle-medium text-primary" />
							<span>Organic</span>
						</li>
						<li className="list-item">
							<i className="mdi mdi-circle-medium text-secondary" />
							<span>Direct</span>
						</li>
						<li className="list-item">
							<i className="mdi mdi-circle-medium text-warning" />
							<span>Campaign</span>
						</li>
					</ul>
				</Col>
			</Row>
		</ComponentContainerCard>
	)
}

export default LiveVisitsChart
