module.exports = (sequelize, DataTypes) => {
  const Lesson = sequelize.define('Lesson', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    order_no: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type:
      DataTypes.STRING
    },
  }, {
    tableName: 'lesson',
    timestamps: false,
  });

  Lesson.associate = (models) => {
    Lesson.hasMany(models.myclassstatus, { foreignKey: 'lesson_id' });
    Lesson.hasMany(models.sectionlessonmap, { foreignKey: 'lesson_id' });
    Lesson.hasMany(models.lessonslidemap, { foreignKey: 'lesson_id' });
    Lesson.hasMany(models.studyheatmaplog, { foreignKey: 'lesson_id' });
  };  

  return Lesson;
}