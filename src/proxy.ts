import { getSession } from '@shared-lib';
import { NextRequest, NextResponse } from 'next/server';

export async function proxy(request: NextRequest) {
	const session = await getSession();
	if (!session) return NextResponse.redirect(new URL('/sign-in', request.url));
	return NextResponse.next();
}

export const config = {
	matcher: ['/profile'],
};
