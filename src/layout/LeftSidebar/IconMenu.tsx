import { Nav, NavItem, NavLink, OverlayTrigger, Tooltip } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import SimpleBar from 'simplebar-react'
import type { IconType } from 'react-icons'

import logoSm from '@/assets/images/logo-icon.svg'
import 'simplebar-react/dist/simplebar.min.css'

/**
 * Renders the application icon sidebar menu
 */
type Item = {
  key: string
  label: string
  isTitle?: boolean
  icon?: string | JSX.Element | IconType
  url?: string
  parentKey?: string
  target?: string
  children?: Item[]
}

type AppMenuProps = {
  menuItems: Item[]
  activeMenuItems: (key: string) => void
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
            {(menuItems || []).map((item, idx) => (
              <NavItem key={item.key || idx}>
                <NavLink
                  eventKey={idx.toString()}
                  onClick={() => activeMenuItems(idx.toString())}
                >
                  <OverlayTrigger
                    placement="right"
                    trigger="focus"
                    overlay={<Tooltip>{item.label}</Tooltip>}
                  >
                    <span className="menu-icon">
                      {typeof item.icon === 'string' ? (
                        <i className={`ti ti-${item.icon}`} />
                      ) : typeof item.icon === 'function' ? (
                        <item.icon />
                      ) : (
                        item.icon
                      )}
                    </span>
                  </OverlayTrigger>
                </NavLink>
              </NavItem>
            ))}
          </Nav>
        </SimpleBar>
      </div>
      <div className="pro-metrica-end" />
    </div>
  )
}

export default IconMenu
