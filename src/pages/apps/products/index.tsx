import { Button, Card, CardBody, Col, Row, Dropdown } from 'react-bootstrap'
import { ActivityCard, PageBreadcrumb } from '@/components'
import { FaPlus } from "react-icons/fa";
import { FaChevronDown } from 'react-icons/fa';

const Products = () => {
	return (
		<>
			<PageBreadcrumb subName="Apps" title="Prodotti" />

			<div className="d-inline-flex align-items-center gap-2 mb-4">
				<Button style={{ height: '45px' }}><FaPlus /> Nuovo prodotto</Button>
				<Button style={{ height: '45px' }} className='bg-transparent text-black'>Modifica tutto in blocco</Button>

				{/* Dropdown per Importa o Esporta */}
				<Dropdown>
					<Dropdown.Toggle style={{ height: '45px' }} className="bg-transparent text-black d-flex align-items-center gap-1">
					importa o esporta i prodotti <FaChevronDown />
					</Dropdown.Toggle>

					<Dropdown.Menu>
						<Dropdown.Item style={{height: "40px"}} href="#importa">Importa i prodotti</Dropdown.Item>
						<Dropdown.Item style={{height: "40px"}} href="#esporta">Esporta tutto</Dropdown.Item>
					</Dropdown.Menu>
				</Dropdown>
			</div>

			<Row>
				<Col lg={4}>
					{/* ... */}
				</Col>

				<Col lg={4}>
					<Card>
						<CardBody>
							<div className="d-flex">
								<h2 className="m-0 align-self-center">80</h2>
								<div className="d-block ms-2 align-self-center">
									<span className="text-warning">Right now</span>
									<h5 className="my-1">Traffic Sources</h5>
									<p className="mb-0 text-muted">
										It is a long established fact that a reader will be of a
										page when looking at its layout.
										<a href="#" className="text-primary">
											Read More <i className="las la-arrow-right" />
										</a>
									</p>
								</div>
							</div>
						</CardBody>
					</Card>
				</Col>

				<Col lg={4}>
					<ActivityCard height={400} />
				</Col>
			</Row>
		</>
	)
}

export default Products
