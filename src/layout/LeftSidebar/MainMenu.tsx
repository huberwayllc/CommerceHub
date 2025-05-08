import { findAllParent, findMenuItem, getMenuItemFromURL } from '@/common/menu'
import type { MenuItemTypes } from '@/common/menu-items'
import { Fragment, useCallback, useEffect, useRef, useState } from 'react'
import { Collapse, TabContent, TabPane } from 'react-bootstrap'
import { Link, useLocation } from 'react-router-dom'
import SimpleBar from 'simplebar-react'

import logoDark from '@/assets/images/logo-dark.png'
import logo from '@/assets/images/logo.png'

//style
import 'simplebar-react/dist/simplebar.min.css'

type AppMenuProps = {
	menuItems: MenuItemTypes[]
}

type SubMenus = {
	item: MenuItemTypes
	linkClassName?: string
	subMenuClassNames?: string
	activeMenuItems?: Array<string>
	toggleMenu?: (item: any, status: boolean) => void
	className?: string
}

const MenuItemWithChildren = ({
	item,
	linkClassName,
	subMenuClassNames,
	activeMenuItems,
	toggleMenu,
}: SubMenus) => {
	const [open, setOpen] = useState<boolean>(activeMenuItems!.includes(item.key))

	useEffect(() => {
		setOpen(activeMenuItems!.includes(item.key))
	}, [activeMenuItems, item])

	const toggleMenuItem = () => {
		const status = !open
		setOpen(status)
		if (toggleMenu) toggleMenu(item, status)
		return false
	}
	return (
		<li className={`nav-item ${open ? 'menuitem-active' : ''}`}>
			<Link
				to=""
				className={`nav-link ${linkClassName} ${activeMenuItems!.includes(item.key) ? 'active' : ''}`}
				data-bs-toggle="collapse"
				aria-expanded={open}
				data-menu-key={item.key}
				onClick={toggleMenuItem}
			>
				{item.label}
			</Link>
			<Collapse in={open}>
				<div>
					<ul className={`nav flex-column ${subMenuClassNames}`}>
						{(item.children || []).map((child, idx) => {
							return (
								<Fragment key={idx}>
									{child.children ? (
										<MenuItemWithChildren
											item={child}
											linkClassName={
												activeMenuItems!.includes(child.key) ? 'active' : ''
											}
											activeMenuItems={activeMenuItems}
											toggleMenu={toggleMenu}
										/>
									) : (
										<MenuItem
											item={child}
											className={
												activeMenuItems!.includes(child.key)
													? 'menuitem-active'
													: ''
											}
											linkClassName={
												activeMenuItems!.includes(child.key) ? 'active' : ''
											}
										/>
									)}
								</Fragment>
							)
						})}
					</ul>
				</div>
			</Collapse>
		</li>
	)
}

const MenuItemLink = ({ item, className }: SubMenus) => {
	return (
		<Link
			to={item.url!}
			target={item.target}
			className={`side-nav-link-ref nav-link ${className} ${location.pathname === item.url ? 'active' : ''} `}
			data-menu-key={item.key}
		>
			{item.label}
		</Link>
	)
}

const MenuItem = ({ item, className, linkClassName }: SubMenus) => {
	return (
		<li className={`nav-item ${className}`}>
			<MenuItemLink item={item} className={linkClassName} />
		</li>
	)
}
const MainMenu = ({ menuItems }: AppMenuProps) => {
	const location = useLocation()
	const menuRef = useRef(null)
	const [activeMenuItems, setActiveMenuItems] = useState<Array<string>>([])

	useEffect(() => {
		const navLink = document.querySelectorAll('.side-nav-link-ref')

		const navArray = [...navLink]

		const matchingMenuItem = navArray.find((x: any) => {
			return x.pathname === location.pathname
		})

		const menuKeys = []

		const itemCollapse: any = matchingMenuItem?.closest('.collapse')
		if (itemCollapse) {
			const itemKey: any =
				itemCollapse.previousElementSibling?.getAttribute('data-menu-key')
			menuKeys.push(itemKey)

			if (itemCollapse.closest('.nav')) {
				const menuItemKey: any = itemCollapse
					.closest('.nav')
					?.parentElement?.previousElementSibling?.getAttribute('data-menu-key')
				menuKeys.push(menuItemKey)
			}

			setActiveMenuItems(menuKeys)
		}
	}, [])

	/**
	 * toggle the menus
	 */
	const toggleMenu = (menuItem: MenuItemTypes, show: boolean) => {
		if (show) {
			setActiveMenuItems([
				menuItem['key'],
				...findAllParent(menuItems, menuItem),
			])
		}
	}

	// active menu items
	const activeMenu = useCallback(() => {
		const trimmedURL = location?.pathname?.replaceAll('', '')
		const matchingMenuItem = getMenuItemFromURL(menuItems, trimmedURL)

		if (matchingMenuItem) {
			const activeMt = findMenuItem(menuItems, matchingMenuItem.key)
			if (activeMt) {
				setActiveMenuItems([
					activeMt['key'],
					...findAllParent(menuItems, activeMt),
				])
			}

			setTimeout(function () {
				const activatedItem: any = document.querySelector(
					`#right-menu a[href="${trimmedURL}"]`
				)

				if (activatedItem != null) {
					const simplebarContent = document.querySelector('#right-menu')

					const offset = activatedItem!.offsetTop - 150

					scrollTo(simplebarContent, 100, 600)
					if (simplebarContent && offset > 100) {
						scrollTo(simplebarContent, offset, 600)
					}
				}
			}, 200)

			// scrollTo (Left Side Bar Active Menu)
			const easeInOutQuad = (t: number, b: number, c: number, d: number) => {
				t /= d / 2
				if (t < 1) return (c / 2) * t * t + b
				t--
				return (-c / 2) * (t * (t - 2) - 1) + b
			}

			const scrollTo = (element: any, to: any, duration: any) => {
				const start = element.scrollTop,
					change = to - start,
					increment = 20
				let currentTime = 0
				const animateScroll = function () {
					currentTime += increment
					const val = easeInOutQuad(currentTime, start, change, duration)
					element.scrollTop = val
					if (currentTime < duration) {
						setTimeout(animateScroll, increment)
					}
				}
				animateScroll()
			}
		}
	}, [location.pathname, menuItems])

	useEffect(() => {
		if (menuItems && menuItems.length > 0) activeMenu()
	}, [activeMenu, menuItems])

	return (
		<div className="main-menu-inner">
			<div className="topbar-left">
				<Link to="/" className="logo">
					<span style={{fontWeight: "bold", fontSize: "1rem"}}>
						Huberway
					</span>
				</Link>
			</div>
			<TabContent
				as={SimpleBar}
				style={{ height: '100%' }}
				className="menu-body navbar-vertical"
				data-simplebar
			>
				{(menuItems || []).map((item, idx) => {
					return (
						<TabPane
							ref={menuRef}
							key={idx}
							eventKey={`${idx}`}
							id="MetricaDashboard"
							className="main-icon-menu-pane"
							role="tabpanel"
							aria-labelledby="dasboard-tab"
						>
							{item.isTitle && (
								<div className="title-box">
									<h6 className="menu-title">{item.label}</h6>
								</div>
							)}
							{item.children && (
								<ul className="navbar-nav">
									{item.children.map((item, idx) => {
										return (
											<Fragment key={idx}>
												{item.children ? (
													<MenuItemWithChildren
														item={item}
														toggleMenu={toggleMenu}
														subMenuClassNames=""
														activeMenuItems={activeMenuItems}
														linkClassName="nav-link"
													/>
												) : (
													<MenuItem
														item={item}
														linkClassName={
															activeMenuItems!.includes(item.key)
																? 'active'
																: ''
														}
														className={
															activeMenuItems!.includes(item.key)
																? 'menuitem-active'
																: ''
														}
													/>
												)}
											</Fragment>
										)
									})}
								</ul>
							)}
						</TabPane>
					)
				})}
			</TabContent>
		</div>
	)
}

export default MainMenu
