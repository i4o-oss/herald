import type { ActionFunction, LoaderFunction } from '@remix-run/node'
import { redirect } from '@remix-run/node'
import { auth } from '~/services/google-auth.server'

export const loader: LoaderFunction = () => redirect('/login')

export const action: ActionFunction = ({ request }) => {
	return auth.authenticate('google', request, {
		successRedirect: '/app',
	})
}
