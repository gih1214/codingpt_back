const fs = require('fs');
const path = require('path');
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const models = {};
const basename = path.basename(__filename);

// ✅ 1단계: 모델 정의만 먼저 모두 등록
fs.readdirSync(__dirname)
  .filter(file => {
    return (
      file !== basename &&
      file.endsWith('.js')
    );
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, DataTypes);

    // 모델 이름을 소문자로 저장: models.class, models.user 등
    const modelKey = model.name.toLowerCase();
    models[modelKey] = model;
  });

// ✅ 2단계: 모든 모델을 등록한 후 associate 실행
Object.values(models).forEach(model => {
  if (typeof model.associate === 'function') {
    model.associate(models);
  }
});

// ✅ 3단계: 디버깅용 로그 출력
console.log('✅ 모델 로딩 완료:', Object.keys(models));

// ✅ 4단계: Sequelize 인스턴스도 함께 export
models.sequelize = sequelize;
models.Sequelize = Sequelize;

module.exports = models;
