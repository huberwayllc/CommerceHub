import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { PageBreadcrumb } from '@/components'
import TicketsByStatus from './components/TicketsByStatus'
import TicketsByRequestType from './components/TicketsByRequestType'
import AllTickets from './components/AllTickets'
import TicketsStatisticsCard from './components/TicketsStatisticsCard'
import { ticketsStatistics } from './data'

const Tickets = () => {
	return (
		<>
			<PageBreadcrumb subName="Helpdesk" title="Tickets" />
			<Row>
				<Col lg="4">
					{ticketsStatistics.map((ticket, idx) => {
						return (
							<React.Fragment key={idx}>
								<TicketsStatisticsCard tickets={ticket} />
							</React.Fragment>
						)
					})}
				</Col>
				<TicketsByStatus />
				<TicketsByRequestType />
			</Row>
			<AllTickets />
		</>
	)
}

export default Tickets
