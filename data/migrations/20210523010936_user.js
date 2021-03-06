
exports.up = function(knex) {
  return knex.schema.createTable('user', tbl => {
      tbl.increments()
      tbl.string("first_name").notNullable()
      tbl.string("last_name").notNullable()
      tbl.string("email").notNullable().unique()
      tbl.string("password").notNullable()
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('user')
};
