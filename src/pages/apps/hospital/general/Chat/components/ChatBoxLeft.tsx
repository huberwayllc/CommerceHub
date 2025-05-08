import {
	Button,
	FormControl,
	FormGroup,
	Nav,
	NavItem,
	NavLink,
	TabContainer,
	TabContent,
	TabPane,
} from 'react-bootstrap'
import SimpleBar from 'simplebar-react'
import {
	chatGeneralContact,
	chatGroupsContact,
	chatPersonalContact,
} from '../data'
import {
	ChatGeneralContactCard,
	ChatGroupsContactCard,
	ChatPersonalContactCard,
} from './ChatSidebarCard'
import React from 'react'

const ChatBoxLeft = () => {
	return (
		<div className="chat-box-left">
			<TabContainer defaultActiveKey="1">
				<Nav variant="tabs" className="mb-3" justify role="tablist">
					<NavItem>
						<NavLink eventKey="1" className="fw-semibold pt-0" role="tab">
							General
						</NavLink>
					</NavItem>
					<NavItem>
						<NavLink eventKey="2" className="fw-semibold pt-0" role="tab">
							Groups
						</NavLink>
					</NavItem>
					<NavItem>
						<NavLink eventKey="3" className="fw-semibold pt-0" role="tab">
							Personal
						</NavLink>
					</NavItem>
				</Nav>
				<div className="chat-search mb-3">
					<FormGroup>
						<div className="input-group">
							<FormControl
								type="text"
								id="chat-search"
								name="chat-search"
								placeholder="Search"
							/>
							<Button
								type="button"
								variant="de-primary"
								className="shadow-none"
							>
								<i className="la la-search" />
							</Button>
						</div>
					</FormGroup>
				</div>
				<SimpleBar className="chat-body-left">
					<TabContent className="chat-list">
						<TabPane eventKey={1}>
							{(chatGeneralContact || []).map((chat, idx) => (
								<React.Fragment key={idx}>
									<ChatGeneralContactCard chats={chat} />
								</React.Fragment>
							))}
						</TabPane>
						<TabPane eventKey={2}>
							{(chatGroupsContact || []).map((chat, idx) => (
								<React.Fragment key={idx}>
									<ChatGroupsContactCard chats={chat} />
								</React.Fragment>
							))}
						</TabPane>
						<TabPane eventKey={3}>
							{(chatPersonalContact || []).map((chat, idx) => (
								<React.Fragment key={idx}>
									<ChatPersonalContactCard chats={chat} />
								</React.Fragment>
							))}
						</TabPane>
					</TabContent>
				</SimpleBar>
			</TabContainer>
		</div>
	)
}

export default ChatBoxLeft
