import { ComponentContainerCard, PageBreadcrumb } from '@/components'
import {
	Badge,
	Card,
	CardBody,
	Col,
	Modal,
	ModalBody,
	ModalHeader,
	Nav,
	NavLink,
	Row,
	TabContainer,
	TabContent,
	TabPane,
} from 'react-bootstrap'
import { FiFolder, FiLock } from 'react-icons/fi'
import { documents, pdfFiles, projects } from './data'
import { Fragment } from 'react'
import { Link } from 'react-router-dom'
import clsx from 'clsx'
import { useToggle } from '@/hooks'

const Projects = () => {
	return (
		<>
			{projects.map((project, idx) => {
				return (
					<Fragment key={idx}>
						<h4
							className={clsx('card-title', idx === 0 ? ' mt-0 mb-3' : 'my-3')}
						>
							{project.title}
						</h4>
						<div className="file-box-content">
							{project.files.map((file, idx) => {
								return (
									<div key={idx} className="file-box me-2">
										<Link to="" className="download-icon-link">
											<i className="las la-download file-download-icon" />
										</Link>
										<div className="text-center">
											<i
												className={`lar la-${file.icon} text-${file.variant}`}
											/>
											<h6 className="text-truncate">{file.name}</h6>
											<small className="text-muted">
												{file.date} / {file.size}MB
											</small>
										</div>
									</div>
								)
							})}
						</div>
					</Fragment>
				)
			})}
		</>
	)
}

const PdfFiles = () => {
	return (
		<>
			{pdfFiles.map((pdf, idx) => {
				return (
					<Fragment key={idx}>
						<h4
							className={clsx('card-title', idx === 0 ? ' mt-0 mb-3' : 'my-3')}
						>
							{pdf.title}
						</h4>
						<div className="file-box-content">
							{pdf.files.map((file, idx) => {
								return (
									<div key={idx} className="file-box me-2">
										<Link to="" className="download-icon-link">
											<i className="las la-download file-download-icon" />
										</Link>
										<div className="text-center">
											<i
												className={`lar la-${file.icon} text-${file.variant}`}
											/>
											<h6 className="text-truncate">{file.name}</h6>
											<small className="text-muted">
												{file.date} / {file.size}MB
											</small>
										</div>
									</div>
								)
							})}
						</div>
					</Fragment>
				)
			})}
		</>
	)
}
const Documents = () => {
	return (
		<>
			{documents.map((document, idx) => {
				return (
					<Fragment key={idx}>
						<h4
							className={clsx('card-title', idx === 0 ? ' mt-0 mb-3' : 'my-3')}
						>
							{document.title}
						</h4>
						<div className="file-box-content">
							{document.files.map((file, idx) => {
								return (
									<div key={idx} className="file-box me-2">
										<Link to="" className="download-icon-link">
											<i className="las la-download file-download-icon" />
										</Link>
										<div className="text-center">
											<i
												className={`lar la-${file.icon} text-${file.variant}`}
											/>
											<h6 className="text-truncate">{file.name}</h6>
											<small className="text-muted">
												{file.date} / {file.size}MB
											</small>
										</div>
									</div>
								)
							})}
						</div>
					</Fragment>
				)
			})}
		</>
	)
}

const FileManager = () => {
	const { isOpen, toggle } = useToggle()
	return (
		<>
			<PageBreadcrumb title="Files" subName="Advanced UI" />
			<Row>
				<TabContainer defaultActiveKey="1">
					<Col lg={3}>
						<ComponentContainerCard
							title="Categories"
							menuItems={['Create Folder', 'Delete', 'Settings']}
						>
							<div className="files-nav">
								<Nav
									className="flex-column nav-pills"
									id="files-tab"
									aria-orientation="vertical"
								>
									<NavLink eventKey="1">
										<FiFolder className="align-self-center icon-dual-file icon-sm me-2" />
										<div className="d-inline-block align-self-center">
											<h5 className="m-0">Projects</h5>
											<small>80GB/200GB Used</small>
										</div>
									</NavLink>
									<NavLink eventKey="2">
										<FiFolder className="align-self-center icon-dual-file icon-sm me-2" />
										<div className="d-inline-block align-self-center">
											<h5 className="m-0">Pdf Files</h5>
											<small>80GB/200GB Used</small>
										</div>
									</NavLink>
									<NavLink eventKey="3" className="align-items-center">
										<FiFolder className="align-self-center icon-dual-file icon-sm me-2" />
										<div className="d-inline-block align-self-center">
											<h5 className="m-0">Documents</h5>
											<small>80GB/200GB Used</small>
										</div>
										<Badge bg="success" className="ms-auto font-10">
											8
										</Badge>
									</NavLink>
									<NavLink eventKey="4" className="mb-0" onClick={toggle}>
										<FiLock className="align-self-center icon-dual-file icon-sm me-2" />
										<div className="d-inline-block align-self-center">
											<h5 className="m-0">Files Lock</h5>
											<small>80GB/200GB Used</small>
										</div>
									</NavLink>
								</Nav>
							</div>
						</ComponentContainerCard>
						<Card>
							<CardBody>
								<small className="float-end">62%</small>
								<h6 className="mt-0">620GB / 1TB Used</h6>
								<div className="progress" style={{ height: 5 }}>
									<div
										className="progress-bar bg-success"
										role="progressbar"
										style={{ width: '62%' }}
										aria-valuenow={62}
										aria-valuemin={0}
										aria-valuemax={100}
									/>
								</div>
							</CardBody>
						</Card>
					</Col>
					<Col lg={9}>
						<div>
							<TabContent>
								<div className="float-end">
									<div className="add-file btn btn-primary position-relative overflow-hidden">
										<i className="las la-cloud-upload-alt me-2 font-15" />
										Upload File
										<input type="file" name="file" className="add-file-input" />
									</div>
								</div>
								<TabPane eventKey="1" className="fade show" id="files-projects">
									<Projects />
								</TabPane>
								<TabPane eventKey="2" className="fade" id="files-pdf">
									<PdfFiles />
								</TabPane>
								<TabPane eventKey="3" className="fade" id="files-documents">
									<Documents />
								</TabPane>
								<TabPane eventKey="4" className="fade" id="files-hide">
									<h4 className="mt-0 card-title mb-3">Hide</h4>
								</TabPane>
							</TabContent>
						</div>
					</Col>
				</TabContainer>
			</Row>

			{/* security model */}
			<Modal
				show={isOpen}
				onHide={toggle}
				centered
				className="fade hide-modal"
				tabIndex={-1}
				role="dialog"
				aria-hidden="true"
			>
				<ModalHeader>
					<h6 className="modal-title mt-0" id="exampleModalLabel">
						Enter Password
					</h6>
					<button type="button" className="btn-close" onClick={toggle} />
				</ModalHeader>
				<ModalBody>
					<form className="form-horizontal">
						<div className="mb-4 mt-2 ">
							<span className="thumb-xl justify-content-center d-flex align-items-center bg-soft-danger rounded-circle mx-auto">
								<i className="las la-lock" />
							</span>
						</div>
						<div className="input-group">
							<input
								type="password"
								className="form-control"
								placeholder="Password"
								aria-label="Password"
								aria-describedby="HideCard"
							/>
							<button
								className="btn btn-de-primary"
								type="button"
								id="HideCard"
							>
								<i className="las la-key" />
							</button>
						</div>
						<div className="text-end mt-1">
							<Link to="" className="text-primary font-12">
								<i className="las la-lock" /> Forgot password?
							</Link>
						</div>
					</form>
				</ModalBody>
			</Modal>
		</>
	)
}

export default FileManager
