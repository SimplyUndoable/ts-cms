import Koa from 'koa'

export default async (ctx: Koa.Context, next: Koa.Next): Promise<void> => {
	try {
		await next()
	} catch (e) {
		ctx.status = e.status || 500
		ctx.body = e.message
		ctx.app.emit('error', e, ctx)
	}
}
