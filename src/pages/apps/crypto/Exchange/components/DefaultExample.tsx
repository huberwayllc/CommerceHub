import { ComponentContainerCard } from '@/components'
import { ApexOptions } from 'apexcharts'
import { useEffect } from 'react'
import ReactApexChart from 'react-apexcharts'
import { Card, CardBody, Col, Row } from 'react-bootstrap'

const DefaultExample = () => {
	const chartOpts: ApexOptions = {
		chart: {
			height: 270,
			type: 'donut',
		},
		plotOptions: {
			pie: {
				donut: {
					size: '85%',
				},
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

		series: [50, 25, 25],
		legend: {
			show: true,
			position: 'bottom',
			horizontalAlign: 'center',
			// verticalAlign: 'middle',
			floating: false,
			fontSize: '13px',
			offsetX: 0,
			offsetY: 0,
		},
		labels: ['Binance', 'Kraken', 'Bittrex'],
		colors: ['#2a76f4', 'rgba(42, 118, 244, .5)', 'rgba(42, 118, 244, .18)'],

		responsive: [
			{
				breakpoint: 600,
				options: {
					plotOptions: {
						donut: {
							customScale: 0.2,
						},
					},
					chart: {
						height: 240,
					},
					legend: {
						show: false,
					},
				},
			},
		],
		tooltip: {
			y: {
				formatter: function (val) {
					return val + ' %'
				},
			},
		},
	}

	useEffect(() => {
		const script = document.createElement('script')

		script.src =
			'https://cdn.jsdelivr.net/gh/dejurin/crypto-converter-widget@1.5.2/dist/latest.min.js'
		script.async = true
		document.body.appendChild(script)
		return () => {
			document.body.removeChild(script)
		}
	}, [])

	return (
		<ComponentContainerCard title="Default Example">
			<Row>
				<Col md={4}>
					<ReactApexChart
						height={270}
						options={chartOpts}
						series={chartOpts.series}
						type="donut"
						className="apex-charts"
					/>
					<div id="ana_device" className="apex-charts" />
				</Col>
				<Col md={8} className="align-self-center">
					<Row>
						<Col xs={12} lg={4} className="col-xl">
							<Card>
								<CardBody>
									<Row className="align-items-center">
										<Col className="text-center">
											<span className="h4">$12450</span>
											<h6 className="text-uppercase text-muted mt-2 m-0">
												Binance
											</h6>
										</Col>
									</Row>
								</CardBody>
							</Card>
						</Col>
						<Col xs={12} lg={4} className="col-xl">
							<Card>
								<CardBody>
									<Row className="align-items-center">
										<Col className="text-center">
											<span className="h4">$5520</span>
											<h6 className="text-uppercase text-muted mt-2 m-0">
												Kraken
											</h6>
										</Col>
									</Row>
								</CardBody>
							</Card>
						</Col>
						<Col xs={12} lg={4} className="col-xl">
							<Card>
								<CardBody>
									<Row className="align-items-center">
										<Col className="text-center">
											<span className="h4">$2153</span>
											<h6 className="text-uppercase text-muted mt-2 m-0">
												Bittrex
											</h6>
										</Col>
									</Row>
								</CardBody>
							</Card>
						</Col>
					</Row>
					<div className="crypto-calcy w-100 mt-3">
						<crypto-converter-widget
							live
							shadow
							symbol
							fiat="united-states-dollar"
							crypto="bitcoin"
							amount="1"
							border-radius="0.60rem"
							background-color="#383a59"
							decimal-places="2"
						></crypto-converter-widget>
					</div>
				</Col>
			</Row>
		</ComponentContainerCard>
	)
}

export default DefaultExample
