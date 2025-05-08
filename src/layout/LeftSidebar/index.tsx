import { getTwoColumnMenuItems } from '@/common/menu'
import IconMenu from './IconMenu'
import { TabContainer } from 'react-bootstrap'
import MainMenu from './MainMenu'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

const LeftSidebar = () => {
	const menuItems = getTwoColumnMenuItems()
	const location = useLocation()
	const [activeTabKey, setActiveTabKey] = useState<string>('0')

	useEffect(() => {
		const navLink = document.querySelectorAll('.side-nav-link-ref')
		const navArray = [...navLink]
		const matchingMenuItem = navArray.find((x: any) => {
			return x.pathname === location.pathname
		})

		const keyId: any = matchingMenuItem
			?.closest('.tab-pane')
			?.getAttribute('id')
		const activeKey = keyId?.split('-').slice(-1).toString()

		setActiveTabKey(activeKey)
	}, [])

	const activeMenuItem = (e: string) => {
		setActiveTabKey(e)
	}

	return (
		<div className="leftbar-tab-menu">
			<TabContainer activeKey={activeTabKey} defaultActiveKey={0}>
				<IconMenu
					menuItems={getTwoColumnMenuItems()}
					activeMenuItems={activeMenuItem}
				/>
				<MainMenu menuItems={menuItems} />
			</TabContainer>
		</div>
	)
}

export default LeftSidebar
