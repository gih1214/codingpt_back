module.exports = (sequelize, DataTypes) => {
  const Slide = sequelize.define('Slide', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    contents: {
      type: DataTypes.JSON,
      allowNull: false
    },
  }, {
    tableName: 'slide',
    timestamps: false,
  });

  Slide.associate = (models) => {
    Slide.hasMany(models.lessonslidemap, { foreignKey: 'slide_id' });
  };  

  return Slide;
};