import { ComponentContainerCard } from '@/components'
import { ApexOptions } from 'apexcharts'
import ReactApexChart from 'react-apexcharts'
import { Link } from 'react-router-dom'

const CustomerSatisfactionChart = () => {
	const chartOpts: ApexOptions = {
		chart: {
			height: 240,
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
		series: [65, 20, 10, 5],
		legend: {
			show: false,
			position: 'bottom',
			horizontalAlign: 'center',
			// verticalAlign: 'middle',
			floating: false,
			fontSize: '14px',
			offsetX: 0,
			offsetY: -13,
		},
		labels: ['Excellent', 'Very Good', 'Good', 'Fair'],
		colors: ['#2a76f4', '#fdb5c8', '#67c8ff', '#c693ff'],

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
	return (
		<ComponentContainerCard title="Customer Satisfaction">
			<div className="position-absolute bottom-50 start-50 translate-middle mb-n2">
				<h3 className="mb-0">94.5%</h3>
				<p className="mb-0 text-uppercase fw-semibold text-muted">Happiness</p>
			</div>
			<ReactApexChart
				className="apex-charts mb-2"
				height={240}
				options={chartOpts}
				series={chartOpts.series}
				type="donut"
			/>
			<ul className="list-inline mb-0 text-center">
				<li className="list-inline-item mb-2 mb-lg-0 fw-semibold">
					<i className="far fa-grin-stars text-primary font-16 align-middle me-1" />
					Excellent
				</li>
				<li className="list-inline-item mb-2 mb-lg-0 fw-semibold">
					<i
						className="far fa-smile me-1 mb-lg-0 font-16 align-middle"
						style={{ color: '#fdb5c8' }}
					/>
					Very Good
				</li>
				<li className="list-inline-item mb-2 fw-semibold">
					<i className="far fa-meh text-info me-1 font-16 align-middle" />
					Good
				</li>
				<li className="list-inline-item fw-semibold">
					<i
						className="far fa-frown  me-1 font-16 align-middle"
						style={{ color: '#c693ff' }}
					/>
					Fair
				</li>
			</ul>
			<hr className="hr-dashed" />
			<div className="media">
				<span className="thumb-sm justify-content-center d-flex align-items-center bg-soft-warning rounded-circle me-2">
					MT
				</span>
				<div className="media-body align-self-center">
					<p className="text-muted mb-0">
						There are many variations of passages of Lorem Ipsum available...
						<Link to="" className="text-primary">
							Read more
						</Link>
					</p>
				</div>
			</div>
		</ComponentContainerCard>
	)
}

export default CustomerSatisfactionChart
