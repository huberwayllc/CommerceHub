import { ComponentContainerCard } from '@/components'
import { ProgressBar } from 'react-bootstrap'

const SupportStatus = () => {
	return (
		<ComponentContainerCard title="Support Status">
			<div className="d-flex justify-content-between">
				<div className="align-self-center">
					<h4 className="mt-0 mb-1 text-dark">1530</h4>
					<h4 className="mt-0 text-truncate font-14 mb-0">Tickets</h4>
				</div>
				<div>
					<ul className="list-unstyled mb-2">
						<li className="mb-2">
							<i className="fas fa-minus text-pink" />
							&nbsp;
							<span>Open Tickets</span>
						</li>
						<li className="mb-2">
							<i className="fas fa-minus text-primary" />
							&nbsp;
							<span>Resolved Tickets</span>
						</li>
						<li>
							<i className="fas fa-minus text-success" />
							&nbsp;
							<span>Unresolved Tickets</span>
						</li>
					</ul>
				</div>
			</div>
			<ProgressBar>
				<ProgressBar
					label="70%"
					striped
					animated
					variant="primary"
					now={70}
					key={1}
				/>
				<ProgressBar label="25%" variant="pink" now={25} key={2} />
				<ProgressBar label="5%" variant="success" now={5} key={3} />
			</ProgressBar>
		</ComponentContainerCard>
	)
}

export default SupportStatus
