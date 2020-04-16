import { hash, Variant, Version } from 'argon2/lib/mod.ts'

export const passwordEncrypt = async (password: string): Promise<string> => await hash(password, { 
	variant: Variant.Argon2id, 
	version: Version.V13 
})
