import {
	Dropdown,
	DropdownItem,
	DropdownMenu,
	DropdownToggle,
	Image,
} from 'react-bootstrap'
import { EmailType } from '../types'
import { Link } from 'react-router-dom'
import SimpleBar from 'simplebar-react'

import 'simplebar-react/dist/simplebar.min.css'

function timeSince(date: Date) {
	if (typeof date !== 'object') {
		date = new Date(date)
	}

	const seconds = Math.floor((new Date().valueOf() - date.valueOf()) / 1000)
	let intervalType: string

	let interval = Math.floor(seconds / 31536000)
	if (interval >= 1) {
		intervalType = 'year'
	} else {
		interval = Math.floor(seconds / 2592000)
		if (interval >= 1) {
			intervalType = 'month'
		} else {
			interval = Math.floor(seconds / 86400)
			if (interval >= 1) {
				intervalType = 'day'
			} else {
				interval = Math.floor(seconds / 3600)
				if (interval >= 1) {
					intervalType = 'hr'
				} else {
					interval = Math.floor(seconds / 60)
					if (interval >= 1) {
						intervalType = 'min'
					} else {
						interval = seconds
						intervalType = 'second'
					}
				}
			}
		}
	}
	if (interval > 1 || interval === 0) {
		intervalType += 's'
	}
	return interval + ' ' + intervalType + ' ago'
}

const EmailDropdown = ({ emails }: { emails: EmailType[] }) => {
	return (
		<Dropdown className="notification-list">
			<DropdownToggle
				as="a"
				className="nav-link arrow-none nav-icon"
				role="button"
			>
				<i className="ti ti-mail" />
			</DropdownToggle>
			<DropdownMenu align="end" className="dropdown-lg pt-0">
				<h6 className="dropdown-item-text font-15 m-0 py-3 border-bottom d-flex justify-content-between align-items-center">
					Emails <span className="badge bg-soft-primary badge-pill">3</span>
				</h6>
				<SimpleBar className="notification-menu" data-simplebar>
					{emails.map((email, idx) => {
						return (
							<DropdownItem key={idx} href="#" className="py-3">
								<small className="float-end text-muted ps-2">
									{timeSince(email.createdAt)}
								</small>
								<div className="media">
									<div className="avatar-md bg-soft-primary">
										<Image
											src={email.image}
											className="thumb-sm rounded-circle"
										/>
									</div>
									<div className="media-body align-self-center ms-2 text-truncate">
										<h6 className="my-0 fw-normal text-dark">{email.title}</h6>
										<small className="text-muted mb-0">
											{email.description}
										</small>
									</div>
								</div>
							</DropdownItem>
						)
					})}
				</SimpleBar>
				<Link to="" className="dropdown-item text-center text-primary">
					View all <i className="fi-arrow-right" />
				</Link>
			</DropdownMenu>
		</Dropdown>
	)
}

export default EmailDropdown
