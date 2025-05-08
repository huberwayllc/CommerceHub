import React from 'react'
import { PageBreadcrumb } from '@/components'
import { Button, Col, FormControl, Row } from 'react-bootstrap'
import DepartmentCard from './components/DepartmentCard'
import { departmentsList, departmentsList1 } from './data'

const Departments = () => {
	return (
		<>
			<PageBreadcrumb subName="Hospital" title="Departments" />

			<div>
				<Row>
					<Col lg="6">
						<ul className="list-inline">
							<li className="list-inline-item">
								<h5 className="mt-0">
									Here the list of all Departments.{' '}
									<span className="badge badge-pink">6</span>
								</h5>
							</li>
						</ul>
					</Col>
					<Col lg="6">
						<div className="text-end">
							<ul className="list-inline">
								<li className="list-inline-item">
									<div className="input-group">
										<FormControl
											size="sm"
											type="text"
											id="example-input1-group2"
											name="example-input1-group2"
											placeholder="Search"
										/>
										<Button type="button" size="sm" variant="de-primary">
											<i className="fas fa-search" />
										</Button>
									</div>
								</li>
								<li className="list-inline-item">
									<Button type="button" size="sm" variant="de-primary">
										Add New Department
									</Button>
								</li>
							</ul>
						</div>
					</Col>
				</Row>
				<Row>
					{(departmentsList || []).map((data, idx) => (
						<React.Fragment key={idx}>
							<DepartmentCard item={data} />
						</React.Fragment>
					))}
				</Row>
				<Row>
					{(departmentsList1 || []).map((data, idx) => (
						<React.Fragment key={idx}>
							<DepartmentCard item={data} />
						</React.Fragment>
					))}
				</Row>
			</div>
		</>
	)
}

export default Departments
