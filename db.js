// Creando un objeto knex

const knex = require('knex')({
 client: 'mysql',
 connection: {
	 host: process.env.DB_HOST, /* accediendo por variables de entorno */
	 user: process.env.DB_USER,
	 password: process.env.DB_PASSWORD,
	 database: process.env.DB_NAME,
 },
	pool: { min: 0, max: 10 }, /* esto indica que admite una conexión con máximo 10 hilos */

});

module.exports = knex ;
