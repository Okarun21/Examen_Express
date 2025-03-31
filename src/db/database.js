const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('biblioteca', 'root', '123456789', {
  host: 'localhost',
  dialect: 'mysql',
  port: 3306,
});

sequelize.authenticate()
  .then(() => console.log('Conexión a la base de datos establecida'))
  .catch(err => console.error('Error al conectar a la base de datos:', err));

module.exports = sequelize;
