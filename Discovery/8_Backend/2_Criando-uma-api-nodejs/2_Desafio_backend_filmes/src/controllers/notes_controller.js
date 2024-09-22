const {sqliteConn} = require('../database/db_connection')
const errorHandler = require('../utils/errorHandler')


class notes_controller {
    
    async create(req, res) {
        const {user_id} = req.usuario
        const {title, description, rating} = req.body

        if(!title || !description || !rating) {
            throw new errorHandler("Todos os campos devem ser preenchidos.")
        }

        const database = await sqliteConn()
        
        const userExists = await database.get('select * from users where id = ?', [user_id])
        if(!userExists) {
            throw new errorHandler("Usuário não existe.")
        }
        
        await database.run(`insert into movie_notes (title, description, rating, user_id) values (?, ?, ?, ?)`, 
            [title, description, rating, user_id])

        const newNote = await database.all(`select * from movie_notes where user_id = ?`, [user_id])
        res.json(newNote)
    }
    
    
    async delete(req, res) {
        const {user_id} = req.usuario
        const {note_id} = req.params
        
        const database = await sqliteConn()
        const noteFound = await database.get(`
            select * from movie_notes 
            where id = ? and user_id = ?`, 
            [note_id, user_id])
        
            if(!noteFound) {
            throw new errorHandler("Nota não encontrada.")
        }

        await database.run('delete from movie_notes where id = ?', [note_id])
        res.send('Nota deletada.')
    }



    async read(req, res) {
        const {user_id} = req.usuario
        const {title, note_id} = req.query

        const database = await sqliteConn()

        if(!user_id) {
            throw new errorHandler("Usuário não informado.");
        }

        let sql = `select * from movie_notes where 1=1 and user_id = ?`
        const params = [user_id]

        if(title) {
            sql += ` and title like ?`
            params.push(`%${title}%`)
        }

        if(note_id) {
            sql += ` and id = ?`
            params.push(note_id)
        }

        const noteExists = await database.all(sql, params)
        res.json(noteExists)
    }
    
    async update(req, res) {
        const {user_id} = req.usuario
        const {title, description, rating} = req.body
        const {note_id} = req.params

        const database = await sqliteConn()
        const noteFound = await database.get(`select * from movie_notes where id = ? and user_id = ?`, 
            [note_id, user_id])
        
        if(!noteFound) {
            throw new errorHandler("Nota não existe.")
        }

        const newTitle = title ?? noteFound.title
        const newDescription = description ?? noteFound.description
        const newRating = rating ?? noteFound.rating

        await database.run(`update movie_notes 
                            set title = ?, description = ?, rating = ?, updated_at = datetime() 
                            where id = ?`,
            [newTitle, newDescription, newRating, note_id])
        
        const updatedRegister = await database.all(`select * from movie_notes where id = ?`, [note_id])
        res.json(updatedRegister)
    }
}



module.exports = {notes_controller}
