import { NextResponse } from "next/server"

export function middleware(request) {
    const token =request.cookies.get("next-auth.session-token")||
    request.cookies.get("__Secure-next-auth.session-token");

    const currentUrl = request.nextUrl.pathname
    if (token && (
        currentUrl.startsWith("/login") ||
        currentUrl.startsWith("/signup") ||
        currentUrl.startsWith("/forgetPassword") ||
        currentUrl.startsWith("/verifyCode")
    )) {
        return NextResponse.rewrite(new URL("/", request.url))
    }


    if(!token)
        return NextResponse.rewrite(new URL("/login",request.url))

    return NextResponse.next()
}

export const config ={
    matcher :["/cart", "/allOrders", "/checkout", "/changePassword", "/login", "/signup", "/forgetPassword", "/verifyCode"]
}