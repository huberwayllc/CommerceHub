const Footer = () => {
	return (
		<footer className="footer text-center text-sm-start">
			© {new Date().getFullYear()} CommerceHub{' '}
			<span className="text-muted d-none d-sm-inline-block float-end">
				Version: 0.0.1.{new Date().getFullYear()}
			</span>
		</footer>
	)
}

export default Footer
