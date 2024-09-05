// como foi criado esse arquivo -> npx knex migrate:make notes
// pra executar e criar a tabela, no terminal -> npx knex migrate:latest

exports.up = knex => knex.schema.createTable("notes", table => {
    table.increments("id");
    table.text("title");
    table.text("description");
    table.integer("user_id").references("id").inTable("users")
  
    table.timestamp("created_at").default(knex.fn.now())
    table.timestamp("updated_at").default(knex.fn.now())
  });
  
  exports.down = knex => knex.schema.dropTable("notes");