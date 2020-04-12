import * as Knex from 'knex'
import { COL_EMAIL, COL_ID, COL_PASSWORD, TABLE_USER } from '../../../lib/User'


export async function up(knex: Knex): Promise<any> {
	knex.schema.createTable(TABLE_USER, (builder) => {
		builder.increments(COL_ID)
		builder.string(COL_EMAIL)
		builder.string(COL_PASSWORD)
	})
}


export async function down(knex: Knex): Promise<any> {
	knex.schema.dropTable(TABLE_USER)
}

