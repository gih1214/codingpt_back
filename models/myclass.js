module.exports = (sequelize, DataTypes) => {
  const MyClass = sequelize.define('MyClass', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    product_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
  }, {
    tableName: 'myclass',
    timestamps: false,
  });

  MyClass.associate = (models) => {
    MyClass.belongsTo(models.user, { foreignKey: 'user_id' });
    MyClass.belongsTo(models.product, { foreignKey: 'product_id' });
    MyClass.hasMany(models.myclassstatus, { foreignKey: 'myclass_id' });
  };

  return MyClass;
};