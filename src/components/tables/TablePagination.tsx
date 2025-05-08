import { Button, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const TablePagination = ({ btnText }: { btnText: string }) => {
	return (
		<Row>
			<Col>
				<Button size="sm" variant="de-secondary" className="px-4 ">
					{btnText}
				</Button>
			</Col>
			<Col xs="auto">
				<nav aria-label="...">
					<ul className="pagination pagination-sm mb-0">
						<li className="page-item disabled">
							<Link className="page-link" to="" tabIndex={-1}>
								Previous
							</Link>
						</li>
						<li className="page-item active">
							<Link className="page-link" to="">
								1
							</Link>
						</li>
						<li className="page-item">
							<Link className="page-link" to="">
								2 <span className="sr-only">(current)</span>
							</Link>
						</li>
						<li className="page-item">
							<Link className="page-link" to="">
								3
							</Link>
						</li>
						<li className="page-item">
							<Link className="page-link" to="">
								Next
							</Link>
						</li>
					</ul>
				</nav>
			</Col>
		</Row>
	)
}

export default TablePagination
