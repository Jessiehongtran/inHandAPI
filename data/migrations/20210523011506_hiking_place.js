
exports.up = function(knex) {
  return knex.schema.createTable('hiking_place', tbl => {
      tbl.increments()
      tbl.string('place_name').notNullable()
      tbl.string('place_description')
      tbl.float('place_latitude')
      tbl.float('place_longitude')
      tbl.string('place_address_label')
      tbl.string('place_banner')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('hiking_place')
};
