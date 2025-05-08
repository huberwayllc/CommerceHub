import {
	Dropdown,
	DropdownDivider,
	DropdownItem,
	DropdownMenu,
	DropdownToggle,
	Image,
} from 'react-bootstrap'

import user4 from '@/assets/images/users/user-4.jpg'
import { useAuthContext } from '@/context'
import { useNavigate } from 'react-router-dom'

const ProfileDropdown = () => {
	const { removeSession } = useAuthContext()
	const navigate = useNavigate()

	const logout = () => {
		removeSession()
		navigate('/auth/login')
	}

	return (
		<Dropdown>
			<DropdownToggle as="a" className="nav-link nav-user" role="button">
				<div className="d-flex align-items-center">
					<Image src={user4} className="rounded-circle me-2 thumb-sm" />
					<div>
						<small className="d-none d-md-block font-11">Admin</small>
						<span className="d-none d-md-block fw-semibold font-12">
							Maria Gibson <i className="mdi mdi-chevron-down" />
						</span>
					</div>
				</div>
			</DropdownToggle>
			<DropdownMenu align="end">
				<DropdownItem href="#">
					<i className="ti ti-user font-16 me-1 align-text-bottom" /> Profile
				</DropdownItem>
				<DropdownItem href="#">
					<i className="ti ti-settings font-16 me-1 align-text-bottom" />{' '}
					Settings
				</DropdownItem>
				<DropdownDivider className="mb-0" />
				<DropdownItem onClick={() => logout()} href="#">
					<i className="ti ti-power font-16 me-1 align-text-bottom" /> Logout
				</DropdownItem>
			</DropdownMenu>
		</Dropdown>
	)
}

export default ProfileDropdown
