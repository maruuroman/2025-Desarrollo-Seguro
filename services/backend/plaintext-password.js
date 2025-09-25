
const knexConfig = require('./src/knexfile').default;
const knex = require('knex');

const db = knex(knexConfig.development);

async function main() {
  const users = await db('users').select('id', 'username', 'email', 'password');
  console.log('Usuarios y contraseñas en texto plano:');
  console.table(users);
  process.exit(0);
}

main();