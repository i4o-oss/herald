import type { ActionFunction } from '@remix-run/node'
import { auth } from '~/services/auth.server'
import { auth as googleAuth } from '~/services/google-auth.server'

export const action: ActionFunction = async ({ request }) => {
	await auth.logout(request, { redirectTo: '/app' })
	await googleAuth.logout(request, { redirectTo: '/app' })
}
