import { userSchema } from './userSchema'

export default createSchema({
    name: 'default',
    types: schemaTypes.concat([userSchema]),
})