const {sqliteConn} = require('../database/db_connection')

class UserRepository {
    async findByEmail(email) {
        const database = await sqliteConn()
        const user = await database.get(`select * from users where email = (?)`, [email])
        return user
    }

    async create({name, email, password}) {
        const database = await sqliteConn()
        const userId = await database.run(`
            insert into users (name, email, password) values (?, ?, ?)`, 
            [name, email, password])

        return {id: userId}
    }
}


module.exports = {UserRepository}

