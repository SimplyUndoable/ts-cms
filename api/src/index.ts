import Koa from "koa"
import bodyParser from "koa-bodyparser"
import cors from '@koa/cors'
import logger from "koa-logger"
import env from 'dotenv'
import Router from "koa-router"

import errorHandler from './middleware/errorHandler'
import routes from './routes'

env.config({ path: '../.env' })

const app = new Koa()

const PORT = process.env.API_PORT || 4000

app.use(errorHandler)
app.use(bodyParser())
app.use(
	cors({
		origin: "*"
	})
)
app.use(logger())

const router = new Router()

router.get(`/`, async (ctx) => {
	try {
		ctx.body = {
			status: "success",
		}
	} catch (err) {
		console.error(err)
	}
})


app.use(routes(router).routes())

app.use(router.allowedMethods())
const server = app
	.listen(PORT, async () => {
		console.log(`Server listening on port: ${PORT}`)
	})
	.on("error", err => {
		console.error(err)
	})

export default server
