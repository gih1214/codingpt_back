module.exports = (sequelize, DataTypes) => {
    const ClassSectionMap = sequelize.define('ClassSectionMap', {
      class_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      section_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
    }, {
      tableName: 'class_section_map',
      timestamps: false,
    });
  
    ClassSectionMap.associate = (models) => {
      ClassSectionMap.belongsTo(models.class, { foreignKey: 'class_id' });
      ClassSectionMap.belongsTo(models.section, { foreignKey: 'section_id' });
    };
  
    return ClassSectionMap;
  };