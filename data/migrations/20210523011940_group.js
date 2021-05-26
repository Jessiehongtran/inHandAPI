
exports.up = function(knex) {
  return knex.schema.createTable('group', tbl => {
      tbl.increments()
      tbl.string('group_name').notNullable()
      tbl.string('group_description')
      //do we need created_at?? why do we need it?
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('group')
};
