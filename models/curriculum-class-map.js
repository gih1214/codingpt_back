module.exports = (sequelize, DataTypes) => {
    const CurriculumClassMap = sequelize.define('CurriculumClassMap', {
        curriculum_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        class_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
    }, {
      tableName: 'curriculum_class_map',
      timestamps: false,
    });
  
    CurriculumClassMap.associate = (models) => {
      CurriculumClassMap.belongsTo(models.curriculum, { foreignKey: 'curriculum_id' });
      CurriculumClassMap.belongsTo(models.class, { foreignKey: 'class_id' });
    };
  
    return CurriculumClassMap;
  };
  