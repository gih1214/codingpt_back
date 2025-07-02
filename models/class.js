module.exports = (sequelize, DataTypes) => {
  const Class = sequelize.define('Class', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    tableName: 'class',
    timestamps: false,
  });

  Class.associate = (models) => {
    Class.belongsToMany(models.curriculum, {
      through: models.curriculumclassmap,
      foreignKey: 'class_id',
      otherKey: 'curriculum_id',
      timestamps: false
    });
    Class.belongsToMany(models.product, {
      through: models.productclassmap,
      foreignKey: 'class_id',
      otherKey: 'product_id',
      timestamps: false
    });
    Class.belongsToMany(models.section, {
      through: models.classsectionmap,
      foreignKey: 'class_id',
      otherKey: 'section_id',
      timestamps: false
    });
  };  

  return Class;
};
