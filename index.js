const express = require('express');
const sequelize = require('./db');
const Class = require('./models/class');

const app = express();
app.use(express.json());

const PORT = 3000;

// 📌 전체 클래스 조회
app.get('/classes', async (req, res) => {
  try {
    const classes = await Class.findAll();
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

    await sequelize.sync(); // 테이블 자동 생성
    console.log(`🚀 서버 실행 중: http://localhost:${PORT}`);
  } catch (err) {
    console.error('❌ DB 연결 실패:', err);
  }
});
