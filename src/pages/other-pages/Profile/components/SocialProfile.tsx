import { ComponentContainerCard } from '@/components'
import { Button } from 'react-bootstrap'

const SocialProfile = () => {
	return (
		<ComponentContainerCard title="Social Profile">
			<div className="button-list btn-social-icon">
				<Button
					type="button"
					variant="soft-primary"
					className="btn-icon-circle"
				>
					<i className="fab fa-facebook-f" />
				</Button>
				<Button
					type="button"
					variant="soft-info"
					className="btn-icon-circle ms-2"
				>
					<i className="fab fa-twitter" />
				</Button>
				<Button
					type="button"
					variant="soft-pink"
					className="btn-icon-circle  ms-2"
				>
					<i className="fab fa-dribbble" />
				</Button>
				<Button
					type="button"
					variant="soft-info"
					className="btn-icon-circle  ms-2"
				>
					<i className="fab fa-linkedin-in" />
				</Button>
				<Button
					type="button"
					variant="soft-danger"
					className="btn-icon-circle  ms-2"
				>
					<i className="fab fa-google-plus-g" />
				</Button>
			</div>
		</ComponentContainerCard>
	)
}

export default SocialProfile
