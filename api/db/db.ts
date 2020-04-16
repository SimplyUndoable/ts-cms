import { Client } from 'pg/mod.ts'
import { QueryResult } from 'pg/query.ts'
import { DB_URL } from '../config/config.ts'

export const query = async (query: string, ): Promise<QueryResult> => {

	const client = new Client(DB_URL)

	await client.connect()

	const result = await client.query(query)

	await client.end()

	return result
}
