import { PageBreadcrumb } from '@/components'
import { Col, Row } from 'react-bootstrap'
import UserCard from './components/UserCard'
import { users } from './data'
import RegularUsers from './components/RegularUsers'

const Users = () => {
	return (
		<>
			<PageBreadcrumb title="Users" subName="Projects" />

			<Row>
				{users.map((user, idx) => (
					<Col key={idx} lg={4}>
						<UserCard image={user.image} name={user.name} />
					</Col>
				))}
			</Row>

			<Row>
				<Col xs={12}>
					<RegularUsers />
				</Col>
			</Row>
		</>
	)
}

export default Users
