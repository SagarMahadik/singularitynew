const mongoose = require('mongoose');

const menuProductSchema = new mongoose.Schema({
  productName: {
    type: String,
    required: [true, 'Product must have a name']
  },
  category: {
    type: String,
    enum: [
      'Cakes',
      'Gelatos',
      'Desserts',
      'Beverages',
      'Breakfast',
      'Salads',
      'Pasta',
      'Sandwitches',
      'Burgers'
    ],
    required: true
  },
  SubCategory: {
    type: String
  },
  cuisine: {
    type: String
  },
  productPrice: {
    type: String,
    required: [true, 'Product must have a price']
  }
});

const MenuProduct = mongoose.model('MenuProduct', menuProductSchema);

module.exports = MenuProduct;
