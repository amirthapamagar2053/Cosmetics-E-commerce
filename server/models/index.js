const Product = require("./product");
const User = require("./user");
const Order = require("./order");
const Category = require("./category");
const Brand = require("./brand");
const OrderDetail = require("./orderDetail");

Category.hasMany(Product);
Product.belongsTo(Category);

Brand.hasMany(Product);
Product.belongsTo(Brand);

User.hasMany(Order);
Order.belongsTo(User);

Order.hasMany(OrderDetail);
OrderDetail.hasOne(Order);

Product.hasMany(OrderDetail);
OrderDetail.hasOne(Product);

module.exports = {
  User,
  Order,
};
