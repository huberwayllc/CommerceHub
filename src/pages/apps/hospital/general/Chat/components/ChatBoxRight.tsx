import React from 'react'
import { Link } from 'react-router-dom'
import SimpleBar from 'simplebar-react'
import { chatMessages } from '../data'
import ChatMsgCard from './ChatMsgCard'
import { Button, Col, FormControl, Row } from 'react-bootstrap'

import usersDr4 from '@/assets/images/users/dr-4.jpg'
import usersDr5 from '@/assets/images/users/dr-5.jpg'

const ChatBoxRight = () => {
	return (
		<div className="chat-box-right">
			<div className="chat-header">
				<Link to="" className="media">
					<div className="media-left">
						<img
							src={usersDr4}
							alt="user"
							className="rounded-circle thumb-sm"
						/>
					</div>
					<div className="media-body">
						<div>
							<h6 className="m-0">Mary Schneider</h6>
							<p className="mb-0">Last seen: 2 hours ago</p>
						</div>
					</div>
				</Link>
				<div className="chat-features">
					<div className="d-none d-sm-inline-block">
						<Link to="">
							<i className="la la-phone" />
						</Link>
						<Link to="">
							<i className="la la-video" />
						</Link>
						<Link to="">
							<i className="la la-trash-alt" />
						</Link>
						<Link to="">
							<i className="la la-ellipsis-v" />
						</Link>
					</div>
				</div>
			</div>
			<SimpleBar className="chat-body">
				<div className="chat-detail">
					{(chatMessages || []).map((msg, idx) => (
						<React.Fragment key={idx}>
							<ChatMsgCard chatMessages={msg} />
						</React.Fragment>
					))}
				</div>
			</SimpleBar>
			<div className="chat-footer">
				<Row>
					<Col xs="12" md="9">
						<span className="chat-admin">
							<img
								src={usersDr5}
								alt="user"
								className="rounded-circle thumb-sm"
							/>
						</span>
						<FormControl type="text" placeholder="Type something here..." />
					</Col>
					<Col xs="3" className="text-end">
						<div className="d-none d-sm-inline-flex align-items-center chat-features">
							<Button type="submit">
								<i className="la la-send" />
							</Button>
							<Link to="">
								<i className="la la-camera" />
							</Link>
							<Link to="">
								<i className="la la-paperclip" />
							</Link>
							<Link to="">
								<i className="la la-microphone" />
							</Link>
						</div>
					</Col>
				</Row>
			</div>
		</div>
	)
}

export default ChatBoxRight
