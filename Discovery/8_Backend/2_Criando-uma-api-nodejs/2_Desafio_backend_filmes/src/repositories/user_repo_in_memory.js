// classe para simular as acoes no DB e fazer os teste automatizados com o jest

class UserRepoInMemory {
    users = []
    
    async create({name, email, password}) {
        const user = {
            id: Math.floor(Math.random() * 1000) + 1,
            name,
            email,
            password
        }
        this.users.push(user)
        return user
    }

    async findByEmail(email) {
        return this.users.find(user => user.email === email)
    }
}

module.exports = {UserRepoInMemory}