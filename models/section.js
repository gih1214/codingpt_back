module.exports = (sequelize, DataTypes) => {
  const Section = sequelize.define('Section', {
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
    doc_concept: {
      type: DataTypes.JSON,
      allowNull: false
    },
  }, {
    tableName: 'section',
    timestamps: false,
  });

  Section.associate = (models) => {
    Section.hasMany(models.sectionlessonmap, { foreignKey: 'section_id' });
    Section.belongsToMany(models.class, {
      through: models.classsectionmap,
      foreignKey: 'section_id',
      otherKey: 'class_id',
      timestamps: false
    });
    Section.hasMany(models.studyheatmaplog, { foreignKey: 'section_id' });
  };  

  return Section;
};