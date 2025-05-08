import { Link } from 'react-router-dom'
import { ChatContactType } from '../data'

const ChatGeneralContactCard = ({ chats }: { chats: ChatContactType }) => {
	const { image, sender, date, status, message, unreadCount } = chats
	return (
		<Link to="" className={`media ${unreadCount ? 'new-message' : ''}`}>
			<div className="media-left">
				<img src={image} alt="user" className="rounded-circle thumb-md" />
				<span
					className={`round-10 bg-${status === 'online' ? 'success' : 'secondary'}`}
				/>
			</div>
			<div className="media-body">
				<div className="d-inline-block">
					<h6>{sender}</h6>
					<p>{message}</p>
				</div>
				<div>
					<span>{date}</span>
					{unreadCount ? <span>{unreadCount}</span> : ''}
				</div>
			</div>
		</Link>
	)
}

const ChatGroupsContactCard = ({ chats }: { chats: ChatContactType }) => {
	const { icon, sender, date, message, unreadCount, bgColor } = chats
	return (
		<Link to="" className={`media ${unreadCount ? 'new-message' : ''}`}>
			<div className="media-left">
				<div className="avatar-box thumb-md align-self-center me-2">
					<span
						className={`thumb-md justify-content-center d-flex align-items-center bg-soft-${bgColor} rounded-circle me-2`}
					>
						<i className={icon} />
					</span>
				</div>
			</div>
			<div className="media-body">
				<div>
					<h6>{sender}</h6>
					<p>{message}</p>
				</div>
				<div>
					<span>{date}</span>
					{unreadCount ? <span>{unreadCount}</span> : ''}
				</div>
			</div>
		</Link>
	)
}

const ChatPersonalContactCard = ({ chats }: { chats: ChatContactType }) => {
	const { image, sender, date, status, message, unreadCount } = chats
	return (
		<Link to="" className={`media ${unreadCount ? 'new-message' : ''}`}>
			<div className="media-left">
				<img src={image} alt="user" className="rounded-circle thumb-md" />
				<span
					className={`round-10 bg-${status === 'online' ? 'success' : 'secondary'}`}
				/>
			</div>
			<div className="media-body">
				<div className="d-inline-block">
					<h6>{sender}</h6>
					<p>{message}</p>
				</div>
				<div>
					<span>{date}</span>
					{unreadCount ? <span>{unreadCount}</span> : ''}
				</div>
			</div>
		</Link>
	)
}

export {
	ChatGeneralContactCard,
	ChatGroupsContactCard,
	ChatPersonalContactCard,
}
