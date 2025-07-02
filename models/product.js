module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
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
    type: {
      type: DataTypes.STRING,
      allowNull: false
    },
    price: {
      type: DataTypes.INTEGER, allowNull: false,
      defaultValue: 0
    },
    lecture_intro: {
      type: DataTypes.JSON,
      allowNull: false
    },
  }, {
    tableName: 'product',
    timestamps: false,
  });

  Product.associate = (models) => {
    Product.hasMany(models.myclass, { foreignKey: 'product_id' });
    Product.hasMany(models.productreviewmap, { foreignKey: 'product_id' });
    Product.hasMany(models.productrelatedproductmap, { foreignKey: 'product_id' });
    Product.hasMany(models.productrelatedproductmap, { foreignKey: 'relatedproduct_id', as: 'relatedProduct' });
    Product.hasMany(models.productcurriculummap, { foreignKey: 'product_id' });
    Product.belongsToMany(models.class, {
      through: models.productclassmap,
      foreignKey: 'product_id',
      otherKey: 'class_id',
      timestamps: false
    });
    Product.hasMany(models.storecategoryproductmap, { foreignKey: 'product_id' });
    Product.hasMany(models.studyheatmaplog, { foreignKey: 'product_id' });
  };

  return Product;
};