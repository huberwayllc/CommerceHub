import React, { useRef, useEffect } from "react"

interface AppLink {
	name: string
	description: string
	url: string
	icon?: string
}

interface AppsMenuProps {
	open: boolean
	setOpen: (open: boolean) => void
}

const huberwayLinks: AppLink[] = [
	{
		name: "HubConnect",
		description: "Sales and marketing",
		url: "https://app.huberway.com",
		icon: "https://dev.huberway.com/icon/sales.svg",
	},
	{
		name: "Website's",
		description: "Connect your website on Huberway",
		url: "/account/websites",
	},
	// Puoi aggiungere altri oggetti come necessario
]

const AppsMenu: React.FC<AppsMenuProps> = ({ open, setOpen }) => {
	const menuRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		const handleClickOutside = (e: MouseEvent) => {
			if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
				setOpen(false)
			}
		}
		document.addEventListener("mousedown", handleClickOutside)
		return () => document.removeEventListener("mousedown", handleClickOutside)
	}, [setOpen])

	if (!open) return null

	return (
		<div ref={menuRef} className="apps-dropdown">
			{huberwayLinks.map((app) => (
				<a
					key={app.name}
					href={app.url}
					onClick={(e) => app.url === "#" && e.preventDefault()}
					className={`app-link ${app.url === "#" ? "coming-soon" : ""}`}
				>
					{app.icon && (
						<img src={app.icon} alt={app.name} style={{ width: 20, marginRight: 8 }} />
					)}
					<div>
						<strong>{app.name}</strong>
						<div style={{ fontSize: "12px", color: "#666" }}>{app.description}</div>
					</div>
					{app.url === "#" && <span className="coming-soon-label">Coming Soon</span>}
				</a>
			))}
		</div>
	)
}

export default AppsMenu
