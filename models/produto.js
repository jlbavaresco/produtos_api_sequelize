'use strict';
module.exports = (sequelize, DataTypes) => {
  const Produto = sequelize.define('produto', {
    nome: DataTypes.STRING,
    preco: DataTypes.DECIMAL,
    estoque: DataTypes.INTEGER
  });
  return Produto;
};
