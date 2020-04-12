const path = require('path')
const env = require('dotenv')

env.config({ path: '../../.env' })

const DB_URL = `postgres://${process.env.DB_USER}:${process.env.DB_PWD}@${process.env.DB_URL}:${process.env.DB_PORT}/${process.env.NAME}`

const settings = {
	client: 'pg',
	connection: DB_URL,
	migrations: {
		directory: path.join(__dirname, 'migrations'),
		extension: 'ts'
	},
	seeds: {
		directory: path.join(__dirname, 'seeds'),
		extension: 'ts'
	}
}

module.exports = settings

export default settings
