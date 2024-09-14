const { hash, compare } = require('bcryptjs')
const appError = require('../utils/appError');
const sqliteConnection = require('../database/sqlite');

class usersController {
/**
 * Controller é a parte inteligente, responsável por processar as requisições da aplicação.
 * 
 * Geralmente, em um controller há até estes cinco métodos abaixo:
 * 
 *  index - GET para listar vários registros
 *   show - GET para exibir um registro específico
 * create - POST para criar um registro
 * update - PUT atualizar um registro
 * delete - DELETE para remover um registro
 */

    async create(req, res) {
        const {name, email, password} = req.body
        
        const database = await sqliteConnection()
        const checkUserExists = await database.get('select * from users where email = (?)', [email])

        if(checkUserExists) {
            throw new appError("Email já está em uso.");
        }

        const hashedPass = await hash(password, 8)
        await database.run('insert into users (name, email, password) values ((?),(?),(?))', 
            [name, email, hashedPass]
        )
        
        return res.status(201).json()        // 201 é o código http padrão para 'created'
    }


    async update(req, res) {
        const {name, email, password, old_password} = req.body      // no body definido na requisição no Insomnia
        const user_id = req.user.id                                 // nos params obrigatorios do endpoint
        
        const database = await sqliteConnection()
        const user = await database.get('select * from users where id = (?)', [user_id])
        
        // erro se usuario nao foi encontrado na query com o id informado 
        if(!user) {
            throw new appError("Usuário não encontrado.");
        }


        // erro se o email informado no corpo for de um user com outro id (email em uso por outros)
        const userWithUpdatedEmail = await database.get('select * from users where email = (?)', [email])
        if(userWithUpdatedEmail && userWithUpdatedEmail.id !== user.id) {
            throw new appError("Este email já está em uso.");
        }


        // erro se a nova senha foi informada e a senha antiga nao
        if(password && !old_password) {
            throw new appError("Informar a senha antiga.");
        }

        if(password && old_password) {
            const compareOldPass = await compare(old_password, user.password)
            
            if (!compareOldPass) {
                throw new appError("Senha antiga não confere.")
            }

            user.password = await hash(password, 8)
        }
        
        // se nao for passado nome ou email no corpo do body, pegar o que já existe no usuario
        const newName = name ?? user.name
        const newemail = email ?? user.email

        await database.run(
            `update users set 
              name = ?
            , email = ?
            , updated_at = DATETIME()
            where id = ?`, 
            [newName, newemail, user_id]
        )
        
        const userAfterUpdate = await database.get('select * from users where id = (?)', [user_id])

        return res.status(200).json(userAfterUpdate)
    }
}


module.exports = usersController

