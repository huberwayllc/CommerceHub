import { ComponentContainerCard } from '@/components'
import {
	Image,
	Nav,
	NavItem,
	NavLink,
	TabContainer,
	TabContent,
	TabPane,
} from 'react-bootstrap'
import { coinMarket } from '../data'
import { Link } from 'react-router-dom'
import SimpleBar from 'simplebar-react'
import 'simplebar-react/dist/simplebar.min.css'

const CoinMarket = () => {
	return (
		<ComponentContainerCard title="Coin Market">
			<TabContainer defaultActiveKey="1">
				<Nav className="nav-tabs" role="tablist">
					<NavItem>
						<NavLink eventKey="1" className="fw-semibold pt-0" role="tab">
							Dollor
						</NavLink>
					</NavItem>
					<NavItem>
						<NavLink eventKey="2" className="fw-semibold pt-0" role="tab">
							BTC
						</NavLink>
					</NavItem>
					<NavItem>
						<NavLink eventKey="3" className="fw-semibold pt-0" role="tab">
							ETH
						</NavLink>
					</NavItem>
				</Nav>
				<TabContent>
					<TabPane eventKey="1" role="tabpanel">
						<SimpleBar style={{ height: 250 }}>
							<ul className="list-unsyled m-0 ps-0 mt-1">
								{coinMarket.map((coin, idx) => {
									return (
										<li
											key={idx}
											className="align-items-center d-flex justify-content-between py-1 border-bottom"
										>
											<Link to="" className="my-1">
												<Image src={coin.image} className="me-1" height={20} />
												{coin.name}-USD
											</Link>
											<span className="text-muted">${coin.price}</span>
											<span className={`text-${coin.variant}`}>
												{coin.variant == 'danger' ? '-' : ''} {coin.change}%
											</span>
										</li>
									)
								})}
							</ul>
						</SimpleBar>
					</TabPane>
					<TabPane
						eventKey="2"
						className="tab-pane"
						id="BTC_ex"
						role="tabpanel"
						data-simplebar
						style={{ height: 210 }}
					>
						<SimpleBar style={{ height: 210 }}>
							<ul className="list-unsyled m-0 ps-0 mt-1">
								{coinMarket.map((coin, idx) => {
									return (
										<li
											key={idx}
											className="align-items-center d-flex justify-content-between py-1 border-bottom"
										>
											<Link to="" className="my-1">
												<Image src={coin.image} className="me-1" height={20} />
												{coin.name}-BTC
											</Link>
											<span className="text-muted">${coin.price}</span>
											<span className={`text-${coin.variant}`}>
												{coin.variant == 'danger' ? '-' : ''} {coin.change}%
											</span>
										</li>
									)
								})}
							</ul>
						</SimpleBar>
					</TabPane>
					<TabPane
						eventKey="3"
						className="tab-pane"
						id="ETH_ex"
						role="tabpanel"
						data-simplebar
						style={{ height: 210 }}
					>
						<SimpleBar style={{ height: 210 }}>
							<ul className="list-unsyled m-0 ps-0 mt-1">
								{coinMarket.map((coin, idx) => {
									return (
										<li
											key={idx}
											className="align-items-center d-flex justify-content-between py-1 border-bottom"
										>
											<Link to="" className="my-1">
												<Image src={coin.image} className="me-1" height={20} />
												{coin.name}-ETH
											</Link>
											<span className="text-muted">${coin.price}</span>
											<span className={`text-${coin.variant}`}>
												{coin.variant == 'danger' ? '-' : ''} {coin.change}%
											</span>
										</li>
									)
								})}
							</ul>
						</SimpleBar>
					</TabPane>
				</TabContent>
			</TabContainer>
		</ComponentContainerCard>
	)
}

export default CoinMarket
