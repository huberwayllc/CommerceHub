import React from 'react'
import { PageBreadcrumb } from '@/components'
import { Row } from 'react-bootstrap'
import ProfileCard from './components/ProfileCard'
import { clientData, clientData2, profileData } from './data'
import ClientCard from './components/ClientCard'

const Cantacts = () => {
	return (
		<>
			<PageBreadcrumb subName="Apps" title="Cantacts" />
			<div>
				<Row>
					{(profileData || []).map((profile, idx) => (
						<React.Fragment key={idx}>
							<ProfileCard profiles={profile} />
						</React.Fragment>
					))}
				</Row>
				<Row>
					{(clientData || []).map((client, idx) => (
						<React.Fragment key={idx}>
							<ClientCard clients={client} />
						</React.Fragment>
					))}
				</Row>
				<Row>
					{(clientData2 || []).map((client, idx) => (
						<React.Fragment key={idx}>
							<ClientCard clients={client} />
						</React.Fragment>
					))}
				</Row>
			</div>
		</>
	)
}

export default Cantacts
