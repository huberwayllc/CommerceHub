import avatar1 from '@/assets/images/users/user-1.jpg'
import avatar2 from '@/assets/images/users/user-2.jpg'
import avatar4 from '@/assets/images/users/user-4.jpg'
import avatar5 from '@/assets/images/users/user-5.jpg'
import avatar7 from '@/assets/images/users/user-7.jpg'
import avatar8 from '@/assets/images/users/user-8.jpg'
import avatar9 from '@/assets/images/users/user-9.jpg'
import avatar10 from '@/assets/images/users/user-10.jpg'

export type ClientType = {
	name: string
	description: string
	image: string
}

export const clients: ClientType[] = [
	{
		name: 'Charles Fang',
		description:
			'it is a long established fact that a reader will be distracted when looking at its layout.',
		image: avatar8,
	},
	{
		name: 'Wendy Keen',
		description:
			'There are many variations of passages of Lorem Ipsum available, but the majority have .',
		image: avatar4,
	},
	{
		name: 'Marvin Turner',
		description:
			'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those.',
		image: avatar5,
	},
	{
		name: 'Charles Fang',
		description:
			'Bonorum et Malorum` by Cicero are also reproduced in their exact original form.',
		image: avatar1,
	},
	{
		name: 'Joseph Cate',
		description:
			'All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks.',
		image: avatar9,
	},
	{
		name: 'Robert Kipp',
		description:
			'Latin words, consectetur, from a Lorem Ipsum passage, and going through.',
		image: avatar10,
	},
	{
		name: 'Nancy Perdue',
		description:
			'Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics.',
		image: avatar7,
	},
	{
		name: 'Joseph Cate',
		description:
			'Contrary to popular belief, consectetur, from a Lorem Ipsum is not simply random text.',
		image: avatar2,
	},
]
