import { config } from 'dotenv/dotenv.ts'
let env
try {
	 env = config({ path: '../../.env' })
} catch(e){
	 env = {}
}


export const API_HOST = env.API_HOST || 'localhost'
export const API_PORT = parseInt(env.API_PORT) || 4000
export const DB_URL = `postgres://${env.DB_USER}:${env.DB_PWD}@${env.DB_URL}:${env.DB_PORT}/${env.NAME}`
