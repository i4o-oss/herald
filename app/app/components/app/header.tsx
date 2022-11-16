import { Link } from '@remix-run/react'
import { Root } from '@radix-ui/react-navigation-menu'
import type { User } from '~/models/user.server'
import ProfileDropdown from '@components/app/profile-dropdown'
import { SlashIcon } from '@radix-ui/react-icons'
import Select from '@common/components/select'
import Nav from '@common/components/nav'

const projects = [
	{
		label: 'Aurelius',
		value: 'aurelius',
	},
	{
		label: 'Today',
		value: 'today',
	},
	{
		label: 'Remix',
		value: 'remix',
	},
	{
		label: 'Herald',
		value: 'herald',
	},
]

const projectTabs = [
	{
		label: 'Projects',
		href: '/projects',
	},
	{
		label: 'Settings',
		href: '/projects/settings',
	},
]

interface HeaderProps {
	user: User | null
}

export default function Header(props: HeaderProps) {
	const { user } = props

	return (
		<Root
			className={`flex h-40 w-full flex-col items-center justify-center border-b border-gray-700 transition-all duration-200 hover:opacity-100`}
		>
			<div className='container h-24 w-full flex items-center justify-between space-x-4 px-16'>
				<div className='flex h-full items-center justify-start'>
					<Link to='/'>
						<img
							className='w-8'
							src='/images/logo.png'
							alt='Herald Logo'
						/>
					</Link>
					<SlashIcon className='mx-2 h-[18px] w-[18px] text-gray-400' />
					<Select items={projects} />
				</div>
				<div className='flex h-full items-center justify-end space-x-4'>
					<ProfileDropdown user={user} />
				</div>
			</div>
			<div className='container w-full h-16 px-16'>
				<Nav items={projectTabs} />
			</div>
		</Root>
	)
}
