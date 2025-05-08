import { ComponentContainerCard } from '@/components'
import { ReactTabulator, type ColumnDefinition } from 'react-tabulator'

import 'react-tabulator/css/bootstrap/tabulator_bootstrap.min.css'
import 'react-tabulator/lib/styles.css'

import user1 from '@/assets/images/users/user-1.jpg'
import user10 from '@/assets/images/users/user-10.jpg'
import user2 from '@/assets/images/users/user-2.jpg'
import user3 from '@/assets/images/users/user-3.jpg'
import user4 from '@/assets/images/users/user-4.jpg'
import user5 from '@/assets/images/users/user-5.jpg'
import user6 from '@/assets/images/users/user-6.jpg'
import user7 from '@/assets/images/users/user-7.jpg'
import user8 from '@/assets/images/users/user-8.jpg'
import user9 from '@/assets/images/users/user-9.jpg'

const editableColumns: ColumnDefinition[] = [
	{ title: 'User', field: 'image', formatter: 'html', width: 70 }, //define the table columns
	{ title: 'Name', field: 'name', editor: 'input' },
	{
		title: 'Task Progress',
		field: 'progress',
		hozAlign: 'left',
		formatter: 'progress',
		editor: true,
	},
	{
		title: 'Gender',
		field: 'gender',
		width: 95,
		editor: 'select',
		editorParams: { values: ['male', 'female'] },
	},
	{
		title: 'Rating',
		field: 'rating',
		formatter: 'star',
		hozAlign: 'center',
		width: 100,
		editor: true,
	},
	{ title: 'Color', field: 'col', width: 130, editor: 'input' },
	{
		title: 'Date Of Birth',
		field: 'dob',
		width: 130,
		sorter: 'date',
		hozAlign: 'center',
	},
	{
		title: 'Driver',
		field: 'car',
		width: 90,
		hozAlign: 'center',
		formatter: 'tickCross',
		sorter: 'boolean',
		editor: true,
	},
]

const data = [
	{
		id: 1,
		image: `<img alt='' style='width: 30px; height: 30px' class='rounded' src='${user1}'>`,
		name: 'Oli Bob',
		progress: 12,
		gender: 'male',
		rating: 1,
		col: 'red',
		dob: '19/02/1984',
		car: 1,
	},
	{
		id: 2,
		image: `<img alt='' style='width: 30px; height: 30px' class='rounded' src='${user2}'>`,
		name: 'Mary May',
		progress: 1,
		gender: 'female',
		rating: 2,
		col: 'blue',
		dob: '14/05/1982',
		car: true,
	},
	{
		id: 3,
		image: `<img alt='' style='width: 30px; height: 30px' class='rounded' src='${user3}'>`,
		name: 'Christine Lobowski',
		progress: 42,
		gender: 'female',
		rating: 0,
		col: 'green',
		dob: '22/05/1982',
		car: 'true',
	},
	{
		id: 4,
		image: `<img alt='' style='width: 30px; height: 30px' class='rounded' src='${user4}'>`,
		name: 'Brendon Philips',
		progress: 100,
		gender: 'male',
		rating: 1,
		col: 'orange',
		dob: '01/08/1980',
	},
	{
		id: 5,
		image: `<img alt='' style='width: 30px; height: 30px' class='rounded' src='${user5}'>`,
		name: 'Margret Marmajuke',
		progress: 16,
		gender: 'female',
		rating: 5,
		col: 'yellow',
		dob: '31/01/1999',
	},
	{
		id: 6,
		image: `<img alt='' style='width: 30px; height: 30px' class='rounded' src='${user6}'>`,
		name: 'Frank Harbours',
		progress: 38,
		gender: 'male',
		rating: 4,
		col: 'red',
		dob: '12/05/1966',
		car: 1,
	},
	{
		id: 1,
		image: `<img alt='' style='width: 30px; height: 30px' class='rounded' src='${user7}'>`,
		name: 'Oli Bob',
		progress: 12,
		gender: 'male',
		rating: 1,
		col: 'red',
		dob: '19/02/1984',
		car: 1,
	},
	{
		id: 2,
		image: `<img alt='' style='width: 30px; height: 30px' class='rounded' src='${user8}'>`,
		name: 'Mary May',
		progress: 1,
		gender: 'female',
		rating: 2,
		col: 'blue',
		dob: '14/05/1982',
		car: true,
	},
	{
		id: 3,
		image: `<img alt='' style='width: 30px; height: 30px' class='rounded' src='${user9}'>`,
		name: 'Christine Lobowski',
		progress: 42,
		gender: 'female',
		rating: 0,
		col: 'green',
		dob: '22/05/1982',
		car: 'true',
	},
	{
		id: 4,
		image: `<img alt='' style='width: 30px; height: 30px' class='rounded' src='${user10}'>`,
		name: 'Brendon Philips',
		progress: 100,
		gender: 'male',
		rating: 1,
		col: 'orange',
		dob: '01/08/1980',
	},
	{
		id: 5,
		image: `<img alt='' style='width: 30px; height: 30px' class='rounded' src='${user2}'>`,
		name: 'Margret Marmajuke',
		progress: 16,
		gender: 'female',
		rating: 5,
		col: 'yellow',
		dob: '31/01/1999',
	},
	{
		id: 6,
		image: `<img alt='' style='width: 30px; height: 30px' class='rounded' src='${user4}'>`,
		name: 'Frank Harbours',
		progress: 38,
		gender: 'male',
		rating: 4,
		col: 'red',
		dob: '12/05/1966',
		car: 1,
	},
]

const CustomersDetails = () => {
	return (
		<ComponentContainerCard title="Customers Details">
			<div className="table-responsive">
				<ReactTabulator
					columns={editableColumns}
					data={data}
					movableColumns={true}
					layout="fitColumns"
					pagination="local"
					paginationSize={10}
					initialSort={{ column: 'name', dir: 'asc' }}
					resizableRows={true}
				/>
			</div>
		</ComponentContainerCard>
	)
}

export default CustomersDetails
