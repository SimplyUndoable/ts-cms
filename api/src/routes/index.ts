import * as Router from "koa-router"
import jwt from 'jsonwebtoken'
import bodyParser from "koa-bodyparser"
import db from '../../db/connections'
import bcrypt from 'bcrypt'

const secret = process.env.JWT_SECRET || 'secret'

export default (router: Router) => {
    router.post('/auth', bodyParser(), async (ctx) => {
        const {username, password} = ctx.request.body

        if (!username) ctx.throw(422, 'Username required.')
        if (!password) ctx.throw(422, 'Password required.')

        const dbUser = await db.first(['id', 'password'])
            .from('users')
            .where({username})

        if (!dbUser) ctx.throw(401, 'No such user.')

        if (await bcrypt.compare(password, dbUser.password)) {
            const payload = {sub: dbUser.id}
            const token = jwt.sign(payload, secret)
            ctx.body = token
        } else {
            ctx.throw(401, 'Incorrect password.')
        }
    })

    return router
}
