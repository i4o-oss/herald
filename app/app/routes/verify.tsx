import type { LoaderFunction } from '@remix-run/node'
import { auth } from '~/services/auth.server'

export const loader: LoaderFunction = async ({ request }) => {
	await auth.authenticate('email-link', request, {
		successRedirect: '/app',
		failureRedirect: '/login',
	})
}
