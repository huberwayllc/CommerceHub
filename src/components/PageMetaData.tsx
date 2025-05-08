import { Helmet } from 'react-helmet'

const PageMetaData = ({ title }: { title: string }) => {
	return (
		<Helmet>
			<title>{title} | Huberway - Admin & Dashboard Template</title>
		</Helmet>
	)
}

export default PageMetaData
