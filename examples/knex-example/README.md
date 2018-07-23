# Knex Example

This is an example about how to use Knex inside Micro Express. Knex.js is a "batteries included" SQL query builder for Postgres, MySQL, etc.

In this example we make "contacts" CRUD microservice example with:

- database, migration, and seeder using knex (https://knexjs.org/)

- validation using Joi (https://github.com/hapijs/joi), and

- manual versioning strategy 


## Installation

- Make sure that NodeJs and Npm installed on your PC (we suggest using NodeJs >= 8.x)

- Make sure that MySQL installed on your PC and a database already created (we're using "test" database in this example inside .env config)

```
$ git clone https://github.com/radiegtya/express-microservice-boilerplate/examples/knex-example
$ cd knex-example
$ npm install
$ npm i -g nodemon
$ npm install -g knex # this is to install knex cli
$ knex migrate:latest # migrate database
$ npm start
```

## Knex Operations

- make a migration
```
$ knex migrate:make migration_name
```

- make and run seeder
```
$ knex seed:make table_seeder_name
$ knex seed:run
```

More info https://knexjs.org/
