// @ts-ignore
const environment = process.env.NODE_ENV || 'development'

// @ts-ignore
import config from './knexfile'

import knex from 'knex'

export default knex(config)
