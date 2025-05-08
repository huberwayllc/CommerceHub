import { ComponentContainerCard, PageBreadcrumb } from '@/components'
import { useToggle } from '@/hooks'
import { kebabToTitleCase } from '@/utils'
import { useState } from 'react'
import {
	Button,
	Col,
	Row,
	Toast,
	ToastBody,
	ToastContainer,
	ToastHeader,
} from 'react-bootstrap'
import type { ToastPosition } from 'react-bootstrap/esm/ToastContainer'

import user5 from '@/assets/images/users/user-5.jpg'

import logoSm from '@/assets/images/logo-icon.svg'

const BasicToast = () => {
	const { isOpen, toggle } = useToggle(true)
	return (
		<ComponentContainerCard
			title="Basic"
			description="To encourage extensible and predictable toasts, we recommend a header and body."
		>
			<Toast show={isOpen} onClose={toggle} role="alert">
				<ToastHeader>
					<img src={logoSm} height={20} className="me-1" />
					<h5 className="me-auto my-0">Metrica</h5>
					<small>11 mins ago</small>
				</ToastHeader>
				<ToastBody>Hello, world! This is a toast message.</ToastBody>
			</Toast>
		</ComponentContainerCard>
	)
}

const TranslucentToast = () => {
	const { isOpen, toggle } = useToggle(true)
	return (
		<ComponentContainerCard
			title="Translucent"
			description="Toasts are slightly translucent, too, so they blend over whatever they might appear over."
		>
			<div className="bg-light p-3">
				<Toast show={isOpen} onClose={toggle} role="alert">
					<ToastHeader>
						<img src={logoSm} height={20} className="me-1" />
						<h5 className="me-auto my-0">Metrica</h5>
						<small>11 mins ago</small>
					</ToastHeader>
					<ToastBody>Hello, world! This is a toast message.</ToastBody>
				</Toast>
			</div>
		</ComponentContainerCard>
	)
}

const StackingToast = () => {
	const { isOpen, toggle } = useToggle(true)
	const { isOpen: toastOpen, toggle: toastToggle } = useToggle(true)
	return (
		<ComponentContainerCard
			title="Stacking"
			description="You can stack toasts by wrapping them in a toast container, which will vertically add some spacing."
		>
			<div className="bg-light p-3">
				<ToastContainer className="position-relative">
					<Toast show={isOpen} onClose={toggle} role="alert">
						<ToastHeader>
							<img src={logoSm} height={20} className="me-1" />
							<h5 className="me-auto my-0">Metrica</h5>
							<small>11 mins ago</small>
						</ToastHeader>
						<ToastBody>Hello, world! This is a toast message.</ToastBody>
					</Toast>
					<Toast show={toastOpen} onClose={toastToggle} role="alert">
						<ToastHeader>
							<img src={logoSm} height={20} className="me-1" />
							<h5 className="me-auto my-0">Metrica</h5>
							<small>11 mins ago</small>
						</ToastHeader>
						<ToastBody>Hello, world! This is a toast message.</ToastBody>
					</Toast>
				</ToastContainer>
			</div>
		</ComponentContainerCard>
	)
}

const CustomToast = () => {
	const { isOpen, toggle } = useToggle(true)
	const { isOpen: toastOpen, toggle: toastToggle } = useToggle(true)
	const { isOpen: toastOpen2, toggle: toastToggle2 } = useToggle(true)
	return (
		<ComponentContainerCard
			title="Custom content"
			description="Alternatively, you can also add additional controls and components to toasts."
		>
			<div className="bg-light p-3">
				<Toast
					show={isOpen}
					onClose={toggle}
					className="d-flex align-items-center mb-2"
					role="alert"
					aria-live="assertive"
					aria-atomic="true"
				>
					<ToastBody>Hello, world! This is a toast message.</ToastBody>
					<button
						type="button"
						className="btn-close ms-auto me-2"
						onClick={toggle}
					/>
				</Toast>
				<Toast
					show={toastOpen}
					onClose={toastToggle}
					className="mb-2"
					role="alert"
					aria-live="assertive"
					aria-atomic="true"
				>
					<ToastBody>
						Hello, world! This is a toast message.
						<div className="mt-2 pt-2 border-top">
							<Button
								variant="de-primary"
								size="sm"
								className="me-1"
								type="button"
							>
								Take action
							</Button>
							<Button variant="de-secondary" size="sm" onClick={toastToggle}>
								Close
							</Button>
						</div>
					</ToastBody>
				</Toast>
				<Toast
					show={toastOpen2}
					onClose={toastToggle2}
					className="toast d-flex align-items-center text-white bg-primary border-0"
					role="alert"
					aria-live="assertive"
					aria-atomic="true"
				>
					<ToastBody>Hello, world! This is a toast message.</ToastBody>
					<button
						type="button"
						className="btn-close btn-close-white ms-auto me-2"
						onClick={toastToggle2}
					/>
				</Toast>
			</div>
		</ComponentContainerCard>
	)
}

const ToastPlacements = () => {
	const { isOpen, toggle } = useToggle(true)
	const [position, setPosition] = useState<ToastPosition>('top-start')
	const placements: ToastPosition[] = [
		'top-start',
		'top-center',
		'top-end',
		'middle-start',
		'middle-center',
		'middle-end',
		'bottom-start',
		'bottom-center',
		'bottom-end',
	]
	return (
		<ComponentContainerCard
			title="Toast Placement"
			description="Place toasts with custom CSS as you need them."
		>
			<form>
				<div className="form-group mb-3">
					<label htmlFor="selectToastPlacement">Toast placement</label>
					<select
						className="form-select mt-2"
						onChange={(e) =>
							setPosition(e.currentTarget.value as ToastPosition)
						}
					>
						<option defaultChecked disabled>
							Select a position...
						</option>
						{placements.map((placement, idx) => {
							return (
								<option value={placement} key={idx}>
									{kebabToTitleCase(placement)}
								</option>
							)
						})}
					</select>
				</div>
			</form>
			<div
				aria-live="polite"
				aria-atomic="true"
				className="bg-dark position-relative bd-example-toasts"
				style={{ height: 200 }}
			>
				<ToastContainer
					position={position}
					className="position-absolute p-3"
					id="toastPlacement"
				>
					<Toast show={isOpen} onClose={toggle}>
						<ToastHeader>
							<img src={logoSm} height={20} className="me-1" />
							<h5 className="me-auto my-0">Metrica</h5>
							<small>11 mins ago</small>
						</ToastHeader>
						<ToastBody>Hello, world! This is a toast message.</ToastBody>
					</Toast>
				</ToastContainer>
			</div>
		</ComponentContainerCard>
	)
}

const CustomToast2 = () => {
	const { isOpen, toggle } = useToggle(true)
	return (
		<ComponentContainerCard
			title="Custom Toast"
			description="You can use custom toast."
		>
			<Toast
				show={isOpen}
				onClose={toggle}
				role="alert"
				aria-live="assertive"
				aria-atomic="true"
			>
				<div className="toast-header border-0">
					<button
						type="button"
						className="btn-close ms-auto "
						onClick={toggle}
					></button>
				</div>
				<ToastBody className="text-center">
					<img
						src={user5}
						className="d-block mx-auto rounded-circle thumb-md"
					/>
					<h5 className="fw-bold mt-3 mb-1">Charles Smith</h5>
					<p className="text-muted mb-0">UI/UX front end developer</p>
					<div className="mt-3 mb-2 d-inline-flex gap-1">
						<Button
							variant="outline-primary"
							className="btn-icon-circle btn-icon-circle-sm"
						>
							<i className="fab fa-facebook-f" />
						</Button>
						<Button
							variant="outline-info"
							className="btn-icon-circle btn-icon-circle-sm"
						>
							<i className="fab fa-twitter" />
						</Button>
						<Button
							variant="outline-pink"
							className="btn-icon-circle btn-icon-circle-sm"
						>
							<i className="fab fa-dribbble" />
						</Button>
					</div>
				</ToastBody>
			</Toast>
		</ComponentContainerCard>
	)
}

const Toasts = () => {
	return (
		<>
			<PageBreadcrumb title="Toasts" subName="Advanced UI" />
			<Row>
				<Col lg={6}>
					<BasicToast />
				</Col>
				<Col lg={6}>
					<TranslucentToast />
				</Col>
			</Row>
			<Row>
				<Col lg={6}>
					<StackingToast />
				</Col>
				<Col lg={6}>
					<CustomToast />
				</Col>
			</Row>
			<Row>
				<Col lg={6}>
					<ToastPlacements />
				</Col>
				<Col lg={6}>
					<CustomToast2 />
				</Col>
			</Row>
		</>
	)
}

export default Toasts
