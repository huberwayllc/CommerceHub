import { useThemeContext } from '@/context'
import EmailDropdown from './components/EmailDropdown'
import LanguageDropdown from './components/LanguageDropdown'
import NotificationDropdown from './components/NotificationDropdown'
import ProfileDropdown from './components/ProfileDropdown'
import { emails, notifications } from './data'
import { Link } from 'react-router-dom'
import Header from './components/Header'

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
				<Header/>
			</nav>
		</div>
	)
}

export default TopNavbar
