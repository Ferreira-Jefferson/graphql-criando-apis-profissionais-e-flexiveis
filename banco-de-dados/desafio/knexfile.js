const ENV = require('./.env')
  
module.exports = {
  client: 'mysql',
  connection: {
    database: 'desafio-cap-04',
    user:     ENV.USER,
    password: ENV.PASSWORD
  },
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    tableName: 'knex_migrations'
  }
};
