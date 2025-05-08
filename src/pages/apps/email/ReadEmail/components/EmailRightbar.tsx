import smallSm1 from '@/assets/images/small/sm-1.jpg'
import smallSm2 from '@/assets/images/small/sm-2.jpg'
import user5 from '@/assets/images/users/user-5.jpg'

import {
	Button,
	ButtonGroup,
	Card,
	CardBody,
	Col,
	Dropdown,
	DropdownItem,
	DropdownMenu,
	DropdownToggle,
	Row,
} from 'react-bootstrap'
import { Link } from 'react-router-dom'

const EmailRightbar = ({ handleShows }: any) => {
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
					<Dropdown drop="start">
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
			<div className="btn-toolbar" role="toolbar">
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
			</div>
			<Card className="mt-3">
				<CardBody>
					<div className="media mb-4">
						<img
							className="d-flex me-2 rounded-circle thumb-md"
							src={user5}
							alt="Generic placeholder image"
						/>
						<div className="media-body align-self-center">
							<h5 className="font-14 m-0">Humberto D. Champion</h5>
							<small className="text-muted">support@domain.com</small>
						</div>
					</div>
					<h4 className="mt-0 font-15">This Week's Top Stories</h4>
					<p>Dear Lorem Ipsum,</p>
					<p>
						Praesent dui ex, dapibus eget mauris ut, finibus vestibulum enim.
						Quisque arcu leo, facilisis in fringilla id, luctus in tortor. Nunc
						vestibulum est quis orci varius viverra. Curabitur dictum volutpat
						massa vulputate molestie. In at felis ac velit maximus convallis.
					</p>
					<p>
						Sed elementum turpis eu lorem interdum, 🏆sed porttitor eros
						commodo. Nam eu venenatis tortor, id lacinia diam. Sed aliquam in
						dui et porta. Sed bibendum orci non tincidunt ultrices. Vivamus
						fringilla, mi lacinia dapibus condimentum, ipsum urna lacinia lacus,
						vel tincidunt mi nibh sit amet lorem.
					</p>
					<p>Sincerly,</p>
					<hr />
					<Row>
						<Col xs="auto">
							<Card>
								<img src={smallSm1} alt="Card image cap" />
								<div className="py-1 text-center">
									<Link to="" className="text-muted">
										Download
										<i className="dripicons-download ms-1" />
									</Link>
								</div>
							</Card>
						</Col>
						<Col xs="auto">
							<Card>
								<img src={smallSm2} alt="Card image cap" />
								<div className="py-1 text-center">
									<Link to="" className="text-muted">
										Download
										<i className="dripicons-download ms-1" />
									</Link>
								</div>
							</Card>
						</Col>
					</Row>
					<Link
						to=""
						className="btn btn-de-primary btn-sm me-1"
						onClick={handleShows}
					>
						<i className="mdi mdi-reply" /> Reply
					</Link>
					<Link to="" className="btn btn-de-primary btn-sm">
						Forward <i className="mdi mdi-share" />
					</Link>
				</CardBody>
			</Card>
		</div>
	)
}

export default EmailRightbar
