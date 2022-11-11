import { Outlet } from '@remix-run/react'
import { json } from '@remix-run/node'
import type { LoaderFunction } from '@remix-run/node'
import { auth } from '~/services/auth.server'

export const loader: LoaderFunction = async ({ request }) => {
	// If the user is here, it's already authenticated, if not redirect them to
	// the login page.
	const user = await auth.isAuthenticated(request)
	return json({ user })
}

export default function App() {
	return (
		<main className='flex h-full w-full flex-col items-center justify-start'>
			<Outlet />
		</main>
	)
}
