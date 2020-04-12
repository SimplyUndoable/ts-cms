import * as Router from 'koa-router'
import jwt from 'jsonwebtoken'
import bodyParser from 'koa-bodyparser'
import db from '../../db/connections'
import bcrypt from 'bcrypt'
import { COL_ID, COL_PASSWORD, TABLE_USER, User } from '../../../lib/User'

const secret = process.env.JWT_SECRET || 'secret'

export default (router: Router): Router => {
	router.post('/auth', bodyParser(), async (ctx) => {
		const { email, password } = ctx.request.body

		if (!email) ctx.throw(422, 'Username required.')
		if (!password) ctx.throw(422, 'Password required.')

		const dbUser: User = await db.first([COL_ID, COL_PASSWORD])
			.from(TABLE_USER)
			.where({ email })

		if (!dbUser) ctx.throw(401, 'No such user.')

		if (await bcrypt.compare(password, dbUser.password)) {
			const payload = { sub: dbUser.id }
			const token = jwt.sign(payload, secret)
			ctx.body = token
		} else {
			ctx.throw(401, 'Incorrect password.')
		}
	})

	return router
}
