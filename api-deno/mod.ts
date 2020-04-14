import { Application } from 'oak/mod.ts'
import { API_HOST, API_PORT } from './config/config.ts'
import router from './Library/routes.ts'

const app = new Application()

app.use(router.routes())
app.use(router.allowedMethods())

console.log(`App is running on http://${API_HOST}:${API_PORT}`)
await app.listen({ port: API_PORT, hostname: API_HOST })
