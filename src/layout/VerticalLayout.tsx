import { Preloader } from '@/components'
import { useThemeContext } from '@/context'
import { useViewPort } from '@/hooks'
import { ReactNode, Suspense, lazy, useEffect } from 'react'
const RightSidebar = lazy(() => import('./RightSidebar'))
const Topbar = lazy(() => import('./TopNavBar'))
const LeftSidebar = lazy(() => import('./LeftSidebar'))
const Footer = lazy(() => import('./Footer'))

type VerticalLayoutProps = {
	children: ReactNode
}

const VerticalLayout = ({ children }: VerticalLayoutProps) => {
	const { updateSideNavMode } = useThemeContext()

	const { width } = useViewPort()

	useEffect(() => {
		if (document.body && width <= 1024) {
			!document.body.classList.contains('enlarge-menu-all') &&
				document.body.classList.add('enlarge-menu-all')
		}
		return () => {
			document.body.classList.contains('enlarge-menu-all') &&
				document.body.classList.remove('enlarge-menu-all')
		}
	}, [width])

	useEffect(() => {
		if (width < 1324) {
			updateSideNavMode('sm')
		} else if (width >= 1324) {
			updateSideNavMode('default')
		}
	}, [width])

	return (
		<Suspense fallback={<div />}>
			<Suspense fallback={<div />}>
				<LeftSidebar />
			</Suspense>
			<Suspense fallback={<div />}>
				<Topbar />
			</Suspense>
			<div className="page-wrapper">
				<div className="page-content-tab">
					<div className="container-fluid px-0 px-md-2">
						<Suspense fallback={<Preloader />}>{children}</Suspense>
					</div>
					<Suspense fallback={<div />}>
						<RightSidebar />
					</Suspense>
					<Suspense fallback={<div />}>
						<Footer />
					</Suspense>
				</div>
			</div>
		</Suspense>
	)
}

export default VerticalLayout
