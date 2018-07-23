// Update with your config settings.
require('dotenv').load()

module.exports = {

    development: {
        client: process.env.DB_CONNECTION || 'mysql',
        connection: {
            host:     process.env.DB_HOST || '127.0.0.1',
            port:     process.env.DB_PORT || '3306',
            user:     process.env.DB_USERNAME || 'root',
            password: process.env.DB_PASSWORD || '',
            database: process.env.DB_DATABASE || 'my_db'
        },
        pool: {
            min: 2,
            max: 10
        },
        migrations: {
            tableName: 'knex_migrations'
        }
    },

    staging: {
        client: process.env.DB_CONNECTION || 'mysql',
        connection: {
            host:     process.env.DB_HOST || '127.0.0.1',
            port:     process.env.DB_PORT || '3306',
            user:     process.env.DB_USERNAME || 'username',
            password: process.env.DB_PASSWORD || 'password',
            database: process.env.DB_DATABASE || 'my_db'
        },
        pool: {
            min: 2,
            max: 10
        },
        migrations: {
            tableName: 'knex_migrations'
        }
    },

    production: {
        client: process.env.DB_CONNECTION || 'mysql',
        connection: {
            host:     process.env.DB_HOST || '127.0.0.1',
            port:     process.env.DB_PORT || '3306',
            user:     process.env.DB_USERNAME || 'username',
            password: process.env.DB_PASSWORD || 'password',
            database: process.env.DB_DATABASE || 'my_db'
        },
        pool: {
            min: 2,
            max: 10
        },
        migrations: {
            tableName: 'knex_migrations'
        }
    }

};
