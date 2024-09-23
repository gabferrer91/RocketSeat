const knex = require("../database/knex")

class NotesController {
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
  
  async create(request, response) {
    const { title, description, tags, links } = request.body
    const user_id = request.user.id

    const [note_id] = await knex("notes").insert({
      title,
      description,
      user_id
    })

    const linksInsert = links.map(link => {
      return {
        note_id,
        url: link
      }
    })

    await knex("links").insert(linksInsert)

    const tagsInsert = tags.map(name => {
      return {
        note_id,
        name,
        user_id
      }
    })

    await knex("tags").insert(tagsInsert)

    response.json()
  }

  async show(req, res) {
    const {note_id} = req.params

    const note = await knex('notes').where({id: note_id}).first()
    const tagsFromNote = await knex('tags').where({note_id: note_id}).orderBy('name')
    const linksFromNote = await knex('links').where({note_id: note_id}).orderBy('created_at')

    return res.json({...note, tagsFromNote, linksFromNote})
  }
  
  async delete (req, res) {
    const {note_id} = req.params

    await knex('notes').where({id: note_id}).delete()          // {col name: const name}

    return res.json()
  }


  async index(req, res) {
    const user_id = req.user.id
    const { title, tags } = req.query
    let notes

    if (tags) {
      // const filterTags = tags.split(',').map(tag => tag.trim())
      const filterTags = tags.split(",").map((tag) => tag);

      notes = await knex("tags")
        .select([
          "notes.id",
          "notes.title",
          "notes.user_id",
        ])
        .where("notes.user_id", user_id)
        .whereLike("notes.title", `%${title}%`)
        .whereIn("name", filterTags)
        .innerJoin("notes", "notes.id", "tags.note_id")
        .groupBy('notes.id')
        .orderBy("notes.title")
        
    } else {
      notes = await knex("notes")
      .where({ user_id })
      .whereLike("title", `%${title}%`)
      .orderBy("title")
    }

    const userTags = await knex("tags").where({ user_id });
    const notesWithTags = notes.map((note) => {
      const noteTags = userTags.filter((tag) => tag.note_id === note.id);

      return {
        ...note,
        tags: noteTags,
      };
    })
    return res.json(notesWithTags)
  }
}

module.exports = NotesController




