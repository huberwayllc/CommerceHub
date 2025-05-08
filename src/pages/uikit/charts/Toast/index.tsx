import { PageBreadcrumb } from '@/components'
import { Card, CardBody, CardTitle, Col, Row } from 'react-bootstrap'
import {
	AreaChart,
	BarChart,
	BoxPlotChart,
	BubbleChart,
	BulletChart,
	ColumnChart,
	HeatmapChart,
	LineChart,
	PieChart,
	RadialBarChart,
	ScatterChart,
	TreemapChart,
} from '@toast-ui/react-chart'
import {
	areaChartOpts,
	barChartOpts,
	boxPlotChartOpts,
	bubbleChartOpts,
	bulletChartOpts,
	columnChartOpts,
	heatmapChartOpts,
	lineChartOpts,
	pieChartOpts,
	radialbarChartOpts,
	scatterChartOpts,
	treemapChartOpts,
} from './data'

const Toast = () => {
	return (
		<>
			<PageBreadcrumb subName="Charts" title="Toast" />
			<Row>
				<Col lg={6}>
					<Card>
						<CardBody>
							<CardTitle className="mb-4">Bar charts</CardTitle>
							<BarChart
								data={barChartOpts.data}
								options={barChartOpts.options}
							/>
						</CardBody>
					</Card>
				</Col>
				<Col lg={6}>
					<Card>
						<CardBody>
							<CardTitle className="mb-4">Column charts</CardTitle>
							<ColumnChart
								data={columnChartOpts.data}
								options={columnChartOpts.options}
							/>
						</CardBody>
					</Card>
				</Col>
			</Row>
			<Row>
				<Col lg={6}>
					<Card>
						<CardBody>
							<CardTitle className="mb-4">Line charts</CardTitle>
							<LineChart
								data={lineChartOpts.data}
								options={lineChartOpts.options}
							/>
						</CardBody>
					</Card>
				</Col>
				<Col lg={6}>
					<Card>
						<CardBody>
							<CardTitle className="mb-4">Area charts</CardTitle>
							<AreaChart
								data={areaChartOpts.data}
								options={areaChartOpts.options}
							/>
						</CardBody>
					</Card>
				</Col>
			</Row>
			<Row>
				<Col lg={6}>
					<Card>
						<CardBody>
							<CardTitle className="mb-4">Bubble charts</CardTitle>
							<BubbleChart
								data={bubbleChartOpts.data}
								options={bubbleChartOpts.options}
							/>
						</CardBody>
					</Card>
				</Col>
				<Col lg={6}>
					<Card>
						<CardBody>
							<CardTitle className="mb-4">Scatter charts</CardTitle>
							<ScatterChart
								data={scatterChartOpts.data}
								options={scatterChartOpts.options}
							/>
						</CardBody>
					</Card>
				</Col>
			</Row>
			<Row>
				<Col lg={6}>
					<Card>
						<CardBody>
							<CardTitle className="mb-4">Pie charts</CardTitle>
							<PieChart
								data={pieChartOpts.data}
								options={pieChartOpts.options}
							/>
						</CardBody>
					</Card>
				</Col>
				<Col lg={6}>
					<Card>
						<CardBody>
							<CardTitle className="mb-4">Boxplot charts</CardTitle>
							<BoxPlotChart
								data={boxPlotChartOpts.data}
								options={boxPlotChartOpts.options}
							/>
						</CardBody>
					</Card>
				</Col>
			</Row>
			<Row>
				<Col lg={6}>
					<Card>
						<CardBody>
							<CardTitle className="mb-4">Heatmap charts</CardTitle>
							<HeatmapChart
								data={heatmapChartOpts.data}
								options={heatmapChartOpts.options}
							/>
						</CardBody>
					</Card>
				</Col>
				<Col lg={6}>
					<Card>
						<CardBody>
							<CardTitle className="mb-4">Treemap charts</CardTitle>
							<TreemapChart
								data={treemapChartOpts.data}
								options={treemapChartOpts.options}
							/>
						</CardBody>
					</Card>
				</Col>
			</Row>
			<Row>
				<Col lg={6}>
					<Card>
						<CardBody>
							<CardTitle className="mb-4">Bullet charts</CardTitle>
							<BulletChart
								data={bulletChartOpts.data}
								options={bulletChartOpts.options}
							/>
						</CardBody>
					</Card>
				</Col>
				<Col lg={6}>
					<Card>
						<CardBody>
							<CardTitle className="mb-4">Radial charts</CardTitle>
							<RadialBarChart
								data={radialbarChartOpts.data}
								options={radialbarChartOpts.options}
							/>
						</CardBody>
					</Card>
				</Col>
			</Row>
		</>
	)
}

export default Toast
