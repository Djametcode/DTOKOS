import { NextResponse } from "next/server";
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {

    if (request.nextUrl.pathname.startsWith('/landing')) {

        const test = request.cookies.has("token")
        console.log(test)

        if (!test) {
            return NextResponse.redirect(new URL("/login", request.url))
        }

        return NextResponse.next()
    }

    if (request.nextUrl.pathname.startsWith('/login')) {
        return console.log("middleware works")
    }

}

// export const config = {
//     matcher: ["/landing"]
// }