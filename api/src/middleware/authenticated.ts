import {Context, Next} from "koa"
import * as jwt from 'jsonwebtoken'

const secret = process.env.JWT_SECRET || 'secret'
export default async (ctx: Context, next: Next) => {
    if (!ctx.headers.authorization) ctx.throw(403, 'No Token')

    const token = ctx.headers.authorization.split(' ')[1]
    try {
        jwt.verify(token, secret)
    } catch (err) {
        ctx.throw(err.status || 403, err.text)
    }
    await next()
}
