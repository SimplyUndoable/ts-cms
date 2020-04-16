import { Http } from 'drash/mod.ts'
import { API_HOST, API_PORT } from './config/config.ts'

const server = new Http.Server({
	address: `${API_HOST}:${API_PORT}`,
	response_output: 'application/json',
	resources: []
})
  
server.run()

console.log(`App is running on http://${API_HOST}:${API_PORT}`)
