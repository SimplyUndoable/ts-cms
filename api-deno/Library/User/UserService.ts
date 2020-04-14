import { User, COL_PASSWORD } from '../../../lib/User.ts'
import UserDao from './UserDao.ts'
import { passwordEncrypt } from '../utils.ts'
// import { verify } from 'argon2/mod.ts'

export const create = async (record: User): Promise<User> => {

	record[COL_PASSWORD] = await passwordEncrypt(record[COL_PASSWORD])

	return UserDao.create(record)
}

export default { create }
