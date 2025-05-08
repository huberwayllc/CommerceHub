import { Nav, NavItem, NavLink, OverlayTrigger, Tooltip } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import SimpleBar from 'simplebar-react'

import logoSm from '@/assets/images/logo-icon.svg'
import user4 from '@/assets/images/users/user-4.jpg'

import 'simplebar-react/dist/simplebar.min.css'

/**
 * Renders the application menu
 */
type Item = {
	key: string
	label: string
	isTitle?: boolean
	icon?: string
	url?: string
	parentKey?: string
	target?: string
	children?: Item[]
}

type AppMenuProps = {
	menuItems: Item[]
	activeMenuItems: any
}

const IconMenu = ({ menuItems, activeMenuItems }: AppMenuProps) => {
	return (
		<div className="main-icon-menu">
			<Link to="/" className="logo logo-metrica d-block text-center">
				<span>
					<img src={logoSm} alt="logo-small" className="logo-sm" />
				</span>
			</Link>
			<div className="main-icon-menu-body">
				<SimpleBar
					className="position-reletive h-100"
					data-simplebar
					style={{ overflowX: 'hidden' }}
				>
					<Nav className="nav nav-tabs" role="tablist" id="tab-menu">
						{(menuItems || []).map((item, idx) => {
							return (
								<NavItem key={idx}>
									<NavLink
										eventKey={idx}
										id="dashboard-tab"
										onClick={() => activeMenuItems(idx)}
									>
										<OverlayTrigger
											placement="right"
											trigger="focus"
											overlay={<Tooltip>{item.label}</Tooltip>}
										>
											<i className={`ti ti-${item.icon} menu-icon`} />
										</OverlayTrigger>
									</NavLink>
								</NavItem>
							)
						})}
					</Nav>
				</SimpleBar>
			</div>
			<div className="pro-metrica-end">

			</div>
		</div>
	)
}

export default IconMenu
