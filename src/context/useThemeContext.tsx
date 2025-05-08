import { LayoutState, LayoutType, LayoutSideNavMode } from '@/types/layout'
import { ReactNode, createContext, useContext, useState } from 'react'

const ThemeContext = createContext<LayoutType | undefined>(undefined)

export function useThemeContext() {
	const context = useContext(ThemeContext)
	if (context === undefined) {
		throw new Error('useThemeContext must be used within an ThemeProvider')
	}
	return context
}

export function ThemeProvider({ children }: { children: ReactNode }) {
	const INIT_STATE: LayoutState = {
		sideNavMode: 'default',
		showRightSideBar: false,
	}

	const [settings, setSettings] = useState<LayoutState>(INIT_STATE)

	const updateSettings = (_newSettings: Partial<LayoutType['settings']>) => {
		setSettings({ ...settings, ..._newSettings })
	}

	const updateSideNavMode = (newSideNavMode: LayoutSideNavMode) => {
		if (newSideNavMode === 'default') {
			document.body.classList.contains('enlarge-menu') &&
				document.body.classList.remove('enlarge-menu')
		} else if (newSideNavMode === 'sm') {
			!document.body.classList.contains('enlarge-menu') &&
				document.body.classList.add('enlarge-menu')
		}

		updateSettings({ ...settings, sideNavMode: newSideNavMode })
	}

	const updateShowRightSideBar = (show: LayoutState['showRightSideBar']) =>
		setSettings({ ...settings, showRightSideBar: show })

	const resetSettings = () => {
		setSettings(INIT_STATE)
	}

	return (
		<ThemeContext.Provider
			value={{
				updateSideNavMode,
				settings,
				updateShowRightSideBar,
				resetSettings,
			}}
		>
			{children}
		</ThemeContext.Provider>
	)
}
