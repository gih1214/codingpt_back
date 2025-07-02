const express = require('express');
const models = require('./models'); // models/index.js에서 모든 모델 + sequelize 로딩됨
const { sequelize, class: classModel } = models; // 소문자 'class' 사용 주의

const app = express();
app.use(express.json());

const PORT = 3000;

// 📌 전체 클래스 조회 API
app.get('/classes', async (req, res) => {
  try {
    const classes = await classModel.findAll();
    res.json(classes);
  } catch (err) {
    console.error('❌ 클래스 조회 오류:', err);
    res.status(500).json({ error: '서버 오류' });
  }
});

// ✅ 서버 시작 + DB 연결
app.listen(PORT, async () => {
  try {
    await sequelize.authenticate();
    console.log('✅ DB 연결 성공');

    await sequelize.sync(); // 자동 테이블 생성 (옵션: { force: false } )
    console.log(`🚀 서버 실행 중: http://localhost:${PORT}`);
  } catch (err) {
    console.error('❌ DB 연결 실패:', err);
  }
});
