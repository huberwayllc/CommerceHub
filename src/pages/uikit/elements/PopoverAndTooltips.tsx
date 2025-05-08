import { ComponentContainerCard, PageBreadcrumb } from '@/components'
import {
	Button,
	Col,
	OverlayTrigger,
	Popover,
	PopoverBody,
	PopoverHeader,
	Row,
	Tooltip,
} from 'react-bootstrap'
import type { Placement } from 'react-bootstrap/esm/types'

const placements: Placement[] = ['top', 'right', 'bottom', 'left']
const PopoversExample = () => {
	return (
		<ComponentContainerCard
			title="Popovers Example"
			description="Add small overlay content, like those found in iOS, to any element for housing secondary information."
		>
			<div className="button-items">
				{placements.map((placement, idx) => {
					return (
						<OverlayTrigger
							key={idx}
							placement={placement}
							trigger="click"
							overlay={
								<Popover>
									<PopoverBody>
										Vivamus sagittis lacus vel augue laoreet rutrum faucibus.
									</PopoverBody>
								</Popover>
							}
						>
							<button type="button" className="btn btn-de-primary">
								Popover on {placement}
							</button>
						</OverlayTrigger>
					)
				})}
				<OverlayTrigger
					placement="right"
					trigger="focus"
					overlay={
						<Popover>
							<PopoverHeader>Dismissible popover</PopoverHeader>
							<PopoverBody>
								And here's some amazing content. It's very engaging. Right?
							</PopoverBody>
						</Popover>
					}
				>
					<button tabIndex={0} className="btn btn-de-danger" role="button">
						Dismissible popover
					</button>
				</OverlayTrigger>
			</div>
		</ComponentContainerCard>
	)
}

const BootstrapTooltips = () => {
	return (
		<ComponentContainerCard
			title="Bootstrap Tooltips"
			description="Hover over the links below to see tooltips:"
		>
			<div className="button-items">
				{placements.map((placement, idx) => {
					return (
						<OverlayTrigger
							key={idx}
							trigger="hover"
							placement={placement}
							overlay={<Tooltip>Tooltip on top</Tooltip>}
						>
							<button
								type="button"
								className="btn btn-de-primary"
								title="Tooltip on top"
							>
								Tooltip on {placement}
							</button>
						</OverlayTrigger>
					)
				})}
				<OverlayTrigger
					trigger="hover"
					placement="top"
					overlay={
						<Tooltip className="custom-tooltip">
							This top tooltip is themed via CSS variables.
						</Tooltip>
					}
				>
					<Button variant="de-primary">Custom Tooltip</Button>
				</OverlayTrigger>
			</div>
		</ComponentContainerCard>
	)
}

const PopoverAndTooltips = () => {
	return (
		<>
			<PageBreadcrumb subName="UI Kit" title="Popover & Tooltips" />
			<Row>
				<Col lg={6}>
					<PopoversExample />
				</Col>
				<Col lg={6}>
					<BootstrapTooltips />
				</Col>
			</Row>
		</>
	)
}

export default PopoverAndTooltips
