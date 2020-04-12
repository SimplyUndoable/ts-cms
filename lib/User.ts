export const TABLE_USER = 'user'

export const COL_ID = 'id'
export const COL_EMAIL = 'email'
export const COL_PASSWORD = 'password'

export interface User {
    [COL_ID]: number;
    [COL_EMAIL]: string;
    [COL_PASSWORD]: string;
}
