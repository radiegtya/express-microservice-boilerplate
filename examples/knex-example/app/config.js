const knex = require('knex')(require('../knexfile')['development'])

export {
    knex
}
