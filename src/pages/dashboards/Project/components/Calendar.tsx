import { ComponentContainerCard } from '@/components'
import { LitePicker } from 'react-litepicker'

const Calendar = () => {
	return (
		<ComponentContainerCard title="Calendar">
			<div className="dash-datepick">
				<LitePicker inlineMode />
			</div>
		</ComponentContainerCard>
	)
}

export default Calendar
