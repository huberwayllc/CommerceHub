import React from 'react'
import {
	Button,
	ButtonGroup,
	ButtonToolbar,
	Card,
	Col,
	Dropdown,
	DropdownItem,
	DropdownMenu,
	DropdownToggle,
	Row,
} from 'react-bootstrap'
import EmailCard from './EmailCard'
import { emails } from '../data'

const EmailRightSidebar = () => {
	return (
		<div className="email-rightbar">
			<div className="float-end d-flex justify-content-between">
				<ButtonGroup className="ms-1">
					<Dropdown>
						<DropdownToggle variant="de-secondary" size="sm">
							<i className="fas fa-question-circle" />
						</DropdownToggle>

						<DropdownMenu>
							<DropdownItem href="#">Updates</DropdownItem>
							<DropdownItem href="#">Social</DropdownItem>
							<DropdownItem href="#">Team Manage</DropdownItem>
						</DropdownMenu>
					</Dropdown>
				</ButtonGroup>
				<ButtonGroup className="ms-1">
					<Dropdown>
						<DropdownToggle variant="de-secondary" size="sm">
							<i className="fas fa-cog" />
						</DropdownToggle>

						<DropdownMenu>
							<DropdownItem href="#">Display density</DropdownItem>
							<DropdownItem href="#">Themes</DropdownItem>
							<DropdownItem href="#">Help</DropdownItem>
						</DropdownMenu>
					</Dropdown>
				</ButtonGroup>
			</div>
			<ButtonToolbar>
				<ButtonGroup>
					<Button type="button" size="sm" variant="de-secondary">
						<i className="fas fa-inbox" />
					</Button>
					<Button type="button" size="sm" variant="de-secondary">
						<i className="fas fa-exclamation-circle" />
					</Button>
					<Button type="button" size="sm" variant="de-secondary">
						<i className="fas fa-trash" />
					</Button>
				</ButtonGroup>
				<ButtonGroup className="ms-1">
					<Dropdown>
						<DropdownToggle variant="de-secondary" size="sm">
							<i className="fas fa-folder" />
							<i className="mdi mdi-chevron-down ms-1" />
						</DropdownToggle>

						<DropdownMenu>
							<DropdownItem href="#">Updates</DropdownItem>
							<DropdownItem href="#">Social</DropdownItem>
							<DropdownItem href="#">Team Manage</DropdownItem>
						</DropdownMenu>
					</Dropdown>
				</ButtonGroup>
				<ButtonGroup className="ms-1">
					<Dropdown>
						<DropdownToggle variant="de-secondary" size="sm">
							<i className="fas fa-tag" />
							<i className="mdi mdi-chevron-down ms-1" />
						</DropdownToggle>

						<DropdownMenu>
							<DropdownItem href="#">Updates</DropdownItem>
							<DropdownItem href="#">Social</DropdownItem>
							<DropdownItem href="#">Team Manage</DropdownItem>
						</DropdownMenu>
					</Dropdown>
				</ButtonGroup>
				<ButtonGroup className="ms-1">
					<Dropdown>
						<DropdownToggle variant="de-secondary" size="sm">
							More
							<i className="mdi mdi-chevron-down ms-1" />
						</DropdownToggle>

						<DropdownMenu>
							<DropdownItem href="#">Mark as Unread</DropdownItem>
							<DropdownItem href="#">Mark as Important</DropdownItem>
							<DropdownItem href="#">Add to Tasks</DropdownItem>
							<DropdownItem href="#">Add Star</DropdownItem>
							<DropdownItem href="#">Mute</DropdownItem>
						</DropdownMenu>
					</Dropdown>
				</ButtonGroup>
			</ButtonToolbar>
			<Card className="my-3">
				<ul className="message-list">
					{(emails || []).map((email, idx) => (
						<React.Fragment key={idx}>
							<EmailCard emails={email} />
						</React.Fragment>
					))}
				</ul>
			</Card>
			<Row className="mb-3">
				<Col xs="7" className="align-self-center">
					Showing 1 - 20 of 1,524
				</Col>
				<Col xs="5">
					<ButtonGroup className="float-end">
						<Button
							type="button"
							size="sm"
							variant="de-secondary"
							className="waves-effect mb-0"
						>
							<i className="fa fa-chevron-left" />
						</Button>
						<Button
							type="button"
							size="sm"
							variant="de-secondary"
							className="waves-effect mb-0"
						>
							<i className="fa fa-chevron-right" />
						</Button>
					</ButtonGroup>
				</Col>
			</Row>
		</div>
	)
}

export default EmailRightSidebar
