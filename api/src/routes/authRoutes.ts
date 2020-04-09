import {Context} from "koa"
import Router from "koa-router"

export default (ctx: Context, router: Router) => {
    router.get('/', () => {
        ctx.body = 'testing'
    })
};
