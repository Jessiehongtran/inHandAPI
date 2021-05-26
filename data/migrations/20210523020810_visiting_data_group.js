
exports.up = function(knex) {
  return knex.schema.createTable('visit_data_group', tbl => {
      tbl.increments()
      tbl.integer('place_id')
         .notNullable()
         .unsigned()
         .references('hiking_place.id')
         .onDelete('CASCADE')
         .onUpdate('CASCADE')
      tbl.integer('group_id')
         .notNullable()
         .unsigned()
         .references('group.id')
         .onDelete('CASCADE')
         .onUpdate('CASCADE')
      tbl.integer('created_timeInt')
      tbl.integer('visit_timeInt').notNullable()
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('visit_data_group')
};
