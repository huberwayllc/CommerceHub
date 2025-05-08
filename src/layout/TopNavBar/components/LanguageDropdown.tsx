import {
	Dropdown,
	DropdownItem,
	DropdownMenu,
	DropdownToggle,
	Image,
} from 'react-bootstrap'

import usFlag from '@/assets/images/flags/us_flag.jpg'
import spainFlag from '@/assets/images/flags/spain_flag.jpg'
import germanyFlag from '@/assets/images/flags/germany_flag.jpg'
import frenchFlag from '@/assets/images/flags/french_flag.jpg'

const countryLanguage = [
	{
		language: 'English',
		flag: usFlag,
	},
	{
		language: 'Spanish',
		flag: spainFlag,
	},
	{
		language: 'German',
		flag: germanyFlag,
	},
	{
		language: 'French',
		flag: frenchFlag,
	},
]
const LanguageDropdown = () => {
	return (
		<Dropdown>
			<DropdownToggle as="a" className="nav-link  arrow-none nav-icon" href="#">
				<Image src={usFlag} className="thumb-xxs rounded-circle" />
			</DropdownToggle>
			<DropdownMenu>
				{countryLanguage.map((item, idx) => {
					return (
						<DropdownItem key={idx} href="#">
							<Image src={item.flag} height={15} className="me-2" />
							{item.language}
						</DropdownItem>
					)
				})}
			</DropdownMenu>
		</Dropdown>
	)
}

export default LanguageDropdown
