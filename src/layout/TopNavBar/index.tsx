import { useThemeContext } from '@/context'
import EmailDropdown from './components/EmailDropdown'
import LanguageDropdown from './components/LanguageDropdown'
import NotificationDropdown from './components/NotificationDropdown'
import ProfileDropdown from './components/ProfileDropdown'
import { emails, notifications } from './data'
import { Link } from 'react-router-dom'

const TopNavbar = () => {
	const { settings, updateShowRightSideBar, updateSideNavMode } =
		useThemeContext()

	const handleLeftMenuCallBack = () => {
		if (settings.sideNavMode == 'default') {
			updateSideNavMode('sm')
		} else {
			updateSideNavMode('default')
		}
	}
	const handleRightSideBar = () => {
		updateShowRightSideBar(true)
	}

	return (
		<div className="topbar">
			<nav className="navbar-custom" id="navbar-custom">
				<ul className="list-unstyled topbar-nav float-end mb-0">
					<LanguageDropdown />

					<EmailDropdown emails={emails} />

					<NotificationDropdown notifications={notifications} />

					<ProfileDropdown />
					<li className="notification-list">
						<Link
							className="nav-link arrow-none nav-icon offcanvas-btn"
							to=""
							onClick={handleRightSideBar}
						>
							<i className="ti ti-settings ti-spin" />
						</Link>
					</li>
				</ul>
				<ul className="list-unstyled topbar-nav mb-0">
					<li>
						<button
							className="nav-link button-menu-mobile nav-icon"
							id="togglemenu"
							onClick={handleLeftMenuCallBack}
						>
							<i className="ti ti-menu-2" />
						</button>
					</li>
					<li className="hide-phone app-search">
						<form role="search" action="#" method="get">
							<input
								type="search"
								name="search"
								className="form-control top-search mb-0"
								placeholder="Type text..."
							/>
							<button type="submit">
								<i className="ti ti-search" />
							</button>
						</form>
					</li>
				</ul>
			</nav>
		</div>
	)
}

export default TopNavbar
