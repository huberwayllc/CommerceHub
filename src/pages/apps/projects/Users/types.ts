export type UserType = {
	name: string
	image: string
}

export type RegularUserType = {
	user: {
		name: string
		image: string
	}
	role: string
	email: string
	contactNo: string
	status: 'Active' | 'Deactivated'
}
