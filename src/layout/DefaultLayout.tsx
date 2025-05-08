import { ReactNode, Suspense } from 'react'

// utils

const loading = () => <div />

type DefaultLayoutProps = {
	children?: ReactNode
}

const DefaultLayout = ({ children }: DefaultLayoutProps) => {
	return <Suspense fallback={loading()}>{children}</Suspense>
}

export default DefaultLayout
