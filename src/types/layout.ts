type LayoutSideNavMode = 'default' | 'sm'

type LayoutState = {
	sideNavMode: LayoutSideNavMode
	showRightSideBar: boolean
}

type LayoutType = {
	settings: LayoutState
	updateSideNavMode: (newSidenav: LayoutSideNavMode) => void
	updateShowRightSideBar: (show: LayoutState['showRightSideBar']) => void
	resetSettings: () => void
}

export type { LayoutSideNavMode, LayoutState, LayoutType }
