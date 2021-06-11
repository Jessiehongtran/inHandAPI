
exports.up = function(knex) {
  return knex.schema.createTable('friend', tbl => {
      tbl.increments()
      tbl.integer('requester_id')
         .unsigned()
         .notNullable()
         .references('user.id')
         .onDelete('CASCADE')
         .onUpdate('CASCADE')
      tbl.integer('receiver_id')
         .unsigned()
         .notNullable()
         .references('user.id')
         .onDelete('CASCADE')
         .onUpdate('CASCADE')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('friend')
};
