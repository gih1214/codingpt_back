module.exports = (sequelize, DataTypes) => {
    const LessonSlideMap = sequelize.define('LessonSlideMap', {
      lesson_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      slide_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
    }, {
      tableName: 'lesson_slide_map',
      timestamps: false,
    });
  
    LessonSlideMap.associate = (models) => {
      LessonSlideMap.belongsTo(models.lesson, { foreignKey: 'lesson_id' });
      LessonSlideMap.belongsTo(models.slide, { foreignKey: 'slide_id' });
    };
  
    return LessonSlideMap;
  };
  