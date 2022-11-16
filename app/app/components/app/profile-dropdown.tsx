import type { ReactNode } from 'react'
import { Link, useFetcher } from '@remix-run/react'
import type { User } from '~/models/user.server'
import DropdownMenu from '@common/components/dropdown'
import Avatar from '@common/components/avatar'
import {
	ExitIcon,
	GearIcon,
	LayersIcon,
	PersonIcon,
} from '@radix-ui/react-icons'
import { PrimaryButton } from '@common/components/buttons'

interface Props {
	user: User | null
}

export default function ProfileDropdown(props: Props) {
	const { user } = props
	const { Form } = useFetcher()

	const profileMenuItems = [
		{
			icon: <LayersIcon />,
			label: 'Dashboard',
			link: '/dashboard',
			onSelect: (e: Event) => e.preventDefault(),
		},
		{
			icon: <GearIcon />,
			label: 'Settings',
			link: '/settings',
			onSelect: (e: Event) => e.preventDefault(),
		},
	]

	const profileMenuSecondaryItems = [
		{
			icon: (<ExitIcon />) as ReactNode,
			label: (
				<Form action='/app/app/routes/logout' method='post'>
					<button
						className='flex h-full w-full items-center justify-start'
						type='submit'
					>
						Logout
					</button>
				</Form>
			) as ReactNode,
			onSelect: (e: Event) => e.preventDefault(),
		},
	]

	return (
		<div className='flex h-full items-center justify-end'>
			{user ? (
				<DropdownMenu
					items={profileMenuItems}
					secondaryItems={profileMenuSecondaryItems}
					trigger={
						<button className='flex h-8 w-8 items-center justify-center overflow-hidden rounded-full bg-gray-600'>
							<Avatar
								src={user?.image || ''}
								alt='User Profile Image'
								fallback={
									user?.name?.charAt(0)?.toUpperCase() || (
										<PersonIcon className='text-white' />
									)
								}
							/>
						</button>
					}
				/>
			) : (
				<Link to='/login'>
					<PrimaryButton className='inline-flex justify-center rounded-md border border-transparent'>
						Login
					</PrimaryButton>
				</Link>
			)}
		</div>
	)
}
