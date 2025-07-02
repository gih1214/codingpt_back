module.exports = (sequelize, DataTypes) => {
    const StoreCategoryProductMap = sequelize.define('StoreCategoryProductMap', {
      category_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      product_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
    }, {
      tableName: 'storecategory_product_map',
      timestamps: false,
    });
  
    StoreCategoryProductMap.associate = (models) => {
      StoreCategoryProductMap.belongsTo(models.storecategory, { foreignKey: 'category_id' });
      StoreCategoryProductMap.belongsTo(models.product, { foreignKey: 'product_id' });
    };
  
    return StoreCategoryProductMap;
  };