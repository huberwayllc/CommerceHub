import React from 'react'

type PrivateRouteProps = {
	component: React.ComponentType
}

const PrivateRoute = ({ component: RouteComponent }: PrivateRouteProps) => {
	return <RouteComponent />
}

export default PrivateRoute
