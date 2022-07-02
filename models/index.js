// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');


// Foo.hasOne(Bar, {
//   onDelete: 'RESTRICT',
//   onUpdate: 'RESTRICT'
// });
// Bar.belongsTo(Foo);

// Categories have many Products
Category.hasMany(Product, {
  onDelete: 'SET NULL',
  onUpdate: 'CASCADE',
});
// Products belongsTo Category
Product.belongsTo(Category, {
  through: 'Category',
  foreignKey: 'category_id'
});

// Movie.belongsToMany(Actor, { through: 'ActorMovies' });

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {through: 'ProductTag', foreignKey: 'tag_id'});

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {through: 'ProductTag', foreignKey: 'tag_id' });

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
