import { config } from 'dotenv/dotenv.ts'

const env = config({ path: '../.env' })

export const API_HOST = env.API_HOST || '127.0.0.1'
export const API_PORT = parseInt(env.API_PORT) || 4000
export const DB_URL = `postgres://${env.DB_USER}:${env.DB_PWD}@${env.DB_URL}:${env.DB_PORT}/${env.NAME}`
