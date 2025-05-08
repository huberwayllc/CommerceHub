import { PageBreadcrumb } from '@/components'
import { Col, Row } from 'react-bootstrap'
import { clients } from './data'
import ClientCard from './components/ClientCard'

const Clients = () => {
	return (
		<>
			<PageBreadcrumb title="Clients" subName="Projects" />

			<Row>
				{clients.map((client, idx) => (
					<Col lg={3} key={idx}>
						<ClientCard
							description={client.description}
							image={client.image}
							name={client.name}
						/>
					</Col>
				))}
			</Row>
		</>
	)
}

export default Clients
