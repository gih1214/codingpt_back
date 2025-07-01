const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const Class = sequelize.define('Class', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true // GENERATED ALWAYS AS IDENTITY와 대응
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  tableName: 'class', // 실제 DB 테이블 이름
  timestamps: false   // createdAt, updatedAt 비활성화
});

module.exports = Class;
