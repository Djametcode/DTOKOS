import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
    let cookies = request.cookies.get("token")
    console.log(cookies)
    let second = request.cookies.getAll()
    console.log(second)

    const test = request.cookies.has("token")
    console.log(test)

}

export const config = {
    matcher: "/landing"
}