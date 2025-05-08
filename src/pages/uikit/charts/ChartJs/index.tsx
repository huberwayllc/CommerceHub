import { ComponentContainerCard, PageBreadcrumb } from '@/components'
import { Col, Row } from 'react-bootstrap'
import Chart, { type ChartItem } from 'chart.js/auto'
import { useEffect } from 'react'
import {
	barChartConfig,
	donutChartConfig,
	lineChartConfig,
	pieChartConfig,
	polarChartConfig,
	radarChartConfig,
} from './data'

const ChartJs = () => {
	useEffect(() => {
		const lineChartTag = document.getElementById('lineChart') as ChartItem
		const lineChart = new Chart(lineChartTag, lineChartConfig)

		const donutChartTag = document.getElementById('doughnut') as ChartItem
		const donutChart = new Chart(donutChartTag, donutChartConfig)

		const barChartTag = document.getElementById('bar') as ChartItem
		const barChart = new Chart(barChartTag, barChartConfig)

		const polarChartTag = document.getElementById('polarArea') as ChartItem
		const polarChart = new Chart(polarChartTag, polarChartConfig)

		const pieChartTag = document.getElementById('pie') as ChartItem
		const pieChart = new Chart(pieChartTag, pieChartConfig)

		const radarChartTag = document.getElementById('radar') as ChartItem
		const radarChart = new Chart(radarChartTag, radarChartConfig)

		return () => {
			lineChart.destroy()
			donutChart.destroy()
			barChart.destroy()
			polarChart.destroy()
			pieChart.destroy()
			radarChart.destroy()
		}
	}, [])
	return (
		<>
			<PageBreadcrumb subName="Chartjs" title="Chartjs Charts" />
			<Row>
				<Col lg={12} xl={8}>
					<ComponentContainerCard title="Line Chart">
						<canvas id="lineChart" width={300} height={300} />
					</ComponentContainerCard>
				</Col>
				<Col lg={12} xl={4}>
					<ComponentContainerCard title="Donut Chart">
						<canvas id="doughnut" height={300} />
					</ComponentContainerCard>
				</Col>
				<Col lg={12} xl={8}>
					<ComponentContainerCard title="Bar Chart">
						<canvas id="bar" height={300} />
					</ComponentContainerCard>
				</Col>
				<Col lg={12} xl={4}>
					<ComponentContainerCard title="Polar Chart">
						<canvas id="polarArea" height={300} />
					</ComponentContainerCard>
				</Col>
			</Row>
			<Row>
				<Col lg={12} xl={6}>
					<ComponentContainerCard title="Pie Chart">
						<canvas id="pie" height={300} />
					</ComponentContainerCard>
				</Col>
				<Col lg={12} xl={6}>
					<ComponentContainerCard title="Radar Chart">
						<canvas id="radar" height={300} />
					</ComponentContainerCard>
				</Col>
			</Row>
		</>
	)
}

export default ChartJs
