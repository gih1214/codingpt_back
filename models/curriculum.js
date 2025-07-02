module.exports = (sequelize, DataTypes) => {
  const Curriculum = sequelize.define('Curriculum', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    },
  }, {
    tableName: 'curriculum',
    timestamps: false,
  });

  Curriculum.associate = (models) => {
    Curriculum.belongsToMany(models.class, {
      through: models.curriculumclassmap,
      foreignKey: 'curriculum_id',
      otherKey: 'class_id',
      timestamps: false
    });
    Curriculum.hasMany(models.productcurriculummap, { foreignKey: 'curriculum_id' });
  };

  return Curriculum;
};