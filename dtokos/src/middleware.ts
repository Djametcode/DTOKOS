import { NextResponse } from "next/server";
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {

    const test = request.cookies.has("token")
    console.log(test)

    if (!test) {
        return NextResponse.redirect(new URL("/login", request.url))
    }

    return NextResponse.next()
}

export const config = {
    matcher: ["/landing"]
}