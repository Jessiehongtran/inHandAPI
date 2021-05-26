
exports.up = function(knex) {
  return knex.schema.createTable('story', tbl => {
      tbl.increments()
      tbl.integer('created_timeInt')
      tbl.string('content')
      tbl.integer('user_id')
         .notNullable()
         .unsigned()
         .references('user.id')
         .onDelete('CASCADE')
         .onUpdate('CASCADE')
      tbl.integer('place_id')
         .notNullable()
         .unsigned()
         .references('hiking_place.id')
         .onDelete('CASCADE')
         .onUpdate('CASCADE')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('story')
};
