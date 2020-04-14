import { Query } from 'sql_builder/mod.ts'
import { query } from '../../db/db.ts'
import { User, TABLE_USER } from '../../../lib/User.ts'

export const create = async (record: User): Promise<User> => {

	const builder = new Query()

	const sql = builder
		.table(TABLE_USER)
		.insert(record)
		.build()

	const result = await query(sql)

	return result as unknown as User
}

export default { create }
