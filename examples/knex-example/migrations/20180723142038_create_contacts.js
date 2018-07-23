exports.up = function(knex, Promise) {
    return knex.schema.createTable('contacts', function(t) {
        t.increments('id').unsigned().primary()
        t.string('name', 30)
        t.string('address', 100).nullable()
    })
}

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('contacts');
}
