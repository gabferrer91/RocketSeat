const {UserCreateService} = require('./userService')
const {UserRepoInMemory} = require('../repositories/user_repo_in_memory')
const errorHandler = require('../utils/errorHandler')

describe('UserCreateService', () => {
    let userRepoInMemory = null
    let userCreateService = null

    beforeEach(() => {
        userRepoInMemory = new UserRepoInMemory()
        userCreateService = new UserCreateService(userRepoInMemory)
    })

    it('should create a user', async () => {
        const user ={
            name: 'user test',
            email: 'p8b0J@example.com',
            password: '123456'
        }
    
        const userCreated = await userCreateService.execute(user)
        expect(userCreated).toHaveProperty('id')
    })

    
    it('should not create a user with an existing email', async () => {
        const user1 = {
            name: 'user test 1',
            email: 'p8b0J@example.com',
            password: '123'
        }

        const user2 = {
            name: 'user test 2',
            email: 'p8b0J@example.com',
            password: '456'
        }

        await userCreateService.execute(user1)
        await expect(userCreateService.execute(user2)).rejects.toEqual(new errorHandler("Email em uso."))
    })
})

