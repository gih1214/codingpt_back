const { Sequelize } = require('sequelize');
require('dotenv').config(); // .env 파일 불러오기

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: 'postgres',
    logging: true, // SQL 로그 보기 원하면 true
  }
);

module.exports = sequelize;