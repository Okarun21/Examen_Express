const { DataTypes, Model } = require('sequelize');
const sequelize = require('../db/database');

class Libro extends Model {
    
}

Libro.init ( {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  titulo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  autor: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  año_publicacion: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  genero: {
    type: DataTypes.STRING,
    allowNull: true,
  },
}, {
  sequelize,modelName:"Libros",tableName: "libros", timestamps: false
});

module.exports = Libro;
