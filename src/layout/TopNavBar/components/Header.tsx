import React, { useEffect, useState, useRef } from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import { IoIosSearch } from "react-icons/io";
import { SquaresPlusIcon, StarIcon, Cog6ToothIcon } from "@heroicons/react/24/outline";
import AppsMenu from "./AppsMenu";
import IconButton from "@mui/material/IconButton";
import { RxHamburgerMenu } from "react-icons/rx";

interface User {
	email: string;
	name: string;
	id: number | null;
	company?: any;
	sub_accounts?: any;
	subscription?: any;
}

interface PageData {
	title: string;
	button: string | null;
	buttonLink: string | null;
}


interface HeaderProps {
	onActionClick?: () => void;
}

const Header: React.FC<HeaderProps> = ({ onActionClick }) => {
	const [user, setUser] = useState<User>({ email: "", name: "", id: null });
	const [menuVisible, setMenuVisible] = useState(false);
	const [iaOpen, setIaOpen] = useState(false);
	const [appsOpen, setAppsOpen] = useState(false);
	const [searchQuery, setSearchQuery] = useState("");
	const [showSearch, setShowSearch] = useState(false);
	const navigate = useNavigate();
	const [sidebarOpen, setSidebarOpen] = useState(false);
	const location = useLocation();
	const menuRef = useRef<HTMLDivElement>(null);
	const searchInputRef = useRef<HTMLInputElement>(null);

	useEffect(() => {
		if (sidebarOpen) {
			document.body.classList.add("enlarge-menu");
		} else {
			document.body.classList.remove("enlarge-menu");
		}
	}, [sidebarOpen]);

	const handleLogout = () => {
		document.cookie.split(";").forEach((cookie) => {
			const [name] = cookie.split("=");
			document.cookie = `${name}=; Path=/; Domain=.huberway.com; Expires=Thu, 01 Jan 1970 00:00:00 UTC; Secure; SameSite=Strict`;
		});
		navigate("/account/login");
	};

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
				setMenuVisible(false);
			}
		};
		document.addEventListener("mousedown", handleClickOutside);
		return () => document.removeEventListener("mousedown", handleClickOutside);
	}, []);

	
	const getPageData = (): PageData => {
		const path = location.pathname;

		const pageMap: { [key: string]: { title: string; button?: string; buttonLink?: string } } = {
			"/dashboard": { title: "Dashboard" },
			"/websites": { title: "Websites", button: "+ Add Website", buttonLink: "/account/websites" },
			"/apps/categories": { title: "Categorie"},
			"/apps/products": { title: "Prodotti", button: "+ Aggiungi Prodotto", buttonLink: "/apps/products/new" },
			"/apps/customers": { title: "Clienti" },
			"/apps/settings": { title: "Impostazioni" },
			"/shipments/rules": { title: "Regole" },
			"/apps/orders": { title: "Ordini" },
			"/shipments/overview": { title: "Panoramica" },
			"/shipments/carriers": { title: "Corrieri" },
			"/shipments/pack-and-go": { title: "PACK & GO" },
			"/shipments/default-settings": { title: "Spedizioni" },
			"/shipments/rates": { title: "Tariffe Spedizione" },
			"/shipments/print-options": { title: "Opzioni di stampa" },
			"/shipments/boxes": { title: "Scatole" },
			"/shipments/insurance": { title: "Assicurazione" },
			"/account/profile": { title: "Profilo" },
			"/account/pricing": { title: "Abbonamenti" },
		};
		const matchedEntry = Object.entries(pageMap).find(([url]) =>
			path.startsWith(url)
		);
		if (matchedEntry) {
			const { title, button = null, buttonLink = null } = matchedEntry[1];
			return { title, button, buttonLink };
		}
		return { title: "Huberway", button: null, buttonLink: null };
	};



	const pageData = getPageData();

	const handleActionClick = () => {
		if (onActionClick) return onActionClick();
		if (pageData.buttonLink) navigate(pageData.buttonLink);
	};

	useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) => {
			if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
				e.preventDefault();
				searchInputRef.current?.focus();
			}
		};
		window.addEventListener("keydown", handleKeyDown);
		return () => window.removeEventListener("keydown", handleKeyDown);
	}, []);

	return (
		<>
			<header className="hw-header">
				<div className="hw-header-left">
					<IconButton
						className="show-on-mobile"
						onClick={() => setSidebarOpen(!sidebarOpen)}
						title="Toggle sidebar"
					>
						<RxHamburgerMenu style={{color: "black"}}/>
					</IconButton>
					<h1 className="hw-section-title">{pageData.title}</h1>
					<span className="hw-separator" />
					<div className="hw-search-wrapper">
						<IoIosSearch style={{fontSize: "30px"}} className="hw-search-icon" />
						<input
							ref={searchInputRef}
							className="hw-search-input"
							placeholder="Search..."
							value={searchQuery}
							onChange={(e) => setSearchQuery(e.target.value)}
							onFocus={() => setShowSearch(true)}
						/>
						<kbd className="hw-kbd">Ctrl k</kbd>
					</div>
				</div>

				<div className="hw-header-right" ref={menuRef}>
					<span className="hw-separator" />
					<button
						className="hw-icon-button-circle"
						onClick={() => setAppsOpen(!appsOpen)}
						title="App menu"
					>
						<SquaresPlusIcon className="hw-icon" />
					</button>
					<AppsMenu open={appsOpen} setOpen={setAppsOpen} />
					<a className="hw-icon-button" href="https://app.huberway.com/settings">
						<Cog6ToothIcon className="hw-icon" />
					</a>
					<Link to="/account/pricing" style={{height: "36px"}} className="hw-button primary">
						<StarIcon /> Upgrade
					</Link>
                    <span className="hw-separator" />
					{pageData.button && (
						<button className="hw-button primary" onClick={handleActionClick}>
							{pageData.button}
						</button>
					)}
					<div onClick={() => setMenuVisible(!menuVisible)} className="hw-avatar-wrapper">
						<Avatar sx={{ bgcolor: "#3b82f6" }}>
							{(user.name || "U").charAt(0).toUpperCase()}
						</Avatar>
					</div>
				</div>
			</header>
		</>
	);
};

export default Header;
