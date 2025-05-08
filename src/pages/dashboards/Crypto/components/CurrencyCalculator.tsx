import { CardBody, Col, Image, Row } from 'react-bootstrap'

import btcImg from '@/assets/images/small/btc.png'
import { ComponentContainerCard } from '@/components'
import { useEffect } from 'react'

const CurrencyCalculator = () => {
	useEffect(() => {
		const script = document.createElement('script')

		script.src =
			'https://cdn.jsdelivr.net/gh/dejurin/crypto-converter-widget@1.5.2/dist/latest.min.js'
		script.async = true
		document.body.appendChild(script)
		return () => {
			document.body.removeChild(script)
		}
	}, [])

	return (
		<ComponentContainerCard title="Currency Calculator">
			<Row>
				<Col md="4" className="align-self-center">
					<CardBody>
						<Image src={btcImg} className="img-fluid d-block mx-auto" />
					</CardBody>
				</Col>
				<Col md={8} className="align-self-center">
					<CardBody>
						<button
							type="button"
							className="btn btn-soft-secondary btn-icon-circle float-end"
						>
							<i className="fas fa-sync-alt" />
						</button>
						<span className="badge font-12 fw-bold bg-soft-secondary p-2 ">
							Balance
						</span>
						<h4 className="mb-0 font-20">
							122.5692.00 <small className="font-14">BTC</small>
						</h4>
						<p className="mb-1 text-muted">
							<span className="text-success">
								<i className="mdi mdi-arrow-up" />
								11.1%
							</span>{' '}
							Up from yesterday
						</p>
					</CardBody>
				</Col>
			</Row>
			<div className="crypto-calcy w-100 mt-3">
				<crypto-converter-widget
					live
					shadow
					symbol
					fiat="united-states-dollar"
					crypto="bitcoin"
					amount="1"
					border-radius="0.60rem"
					background-color="#383a59"
					decimal-places="2"
				></crypto-converter-widget>
			</div>
		</ComponentContainerCard>
	)
}

export default CurrencyCalculator
