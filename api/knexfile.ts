import * as path from 'path'
import * as env from 'dotenv'

env.config({path: '../.env'})

const BASE_PATH = path.join(__dirname, 'db')
const DB_URL = `postgres://${process.env.DB_USER}:${process.env.DB_PWD}@${process.env.DB_URL}:${process.env.DB_PORT}/${process.env.NAME}`

const settings = {
    client: 'pg',
    connection: DB_URL,
    migrations: {
        directory: path.join(BASE_PATH, 'migrations'),
        extension: 'ts'
    },
    seeds: {
        directory: path.join(BASE_PATH, 'seeds'),
        extension: 'ts'
    }
}

module.exports = settings

export default settings
