import { Col, Row } from 'react-bootstrap'
import { PageBreadcrumb } from '@/components'
import ChatBoxLeft from './components/ChatBoxLeft'
import ChatBoxRight from './components/ChatBoxRight'

const Chat = () => {
	return (
		<>
			<PageBreadcrumb subName="Hospital" title="Chat" />
			<Row>
				<Col xs="12">
					<ChatBoxLeft />
					<ChatBoxRight />
				</Col>
			</Row>
		</>
	)
}

export default Chat
