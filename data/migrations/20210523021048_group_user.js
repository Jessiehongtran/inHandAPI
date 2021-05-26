
exports.up = function(knex) {
  return knex.schema.createTable('group_user', tbl => {
      tbl.increments()
      tbl.integer('group_id')
         .notNullable()
         .unsigned()
         .references('group.id')
         .onDelete('CASCADE')
         .onUpdate('CASCADE')
      tbl.integer('user_id')
         .notNullable()
         .unsigned()
         .references('user.id')
         .onDelete('CASCADE')
         .onUpdate('CASCADE')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('group_user')
};
