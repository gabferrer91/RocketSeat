const {hash} = require('bcryptjs')
const errorHandler = require('../utils/errorHandler')

class UserCreateService {
    // UserRepository, informada no construtor, é uma classe com a lógica de criação de usuário no DB.
    constructor(UserRepository) {
        this.UserRepository = UserRepository
    }
    
    async execute({name, email, password}) {
        const hashedPass = await hash(password, 8)
        
        const emailValidation = await this.UserRepository.findByEmail(email)

        if(emailValidation) {
            throw new errorHandler("Email em uso.");
        }

        if (!name || !email || !password) {
            throw new errorHandler("Nome, email e senha devem ser informados.");
        }

        const userCreated = await this.UserRepository.create({name, email, password: hashedPass})
        return userCreated
    }

}

module.exports = {UserCreateService}

