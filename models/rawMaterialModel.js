const mongoose = require('mongoose');

const rawMaterialSchema = new mongoose.Schema({
  rawMaterial: {
    type: String,
    required: [true, 'Please enter the raw material']
  },
  brandName: {
    type: String
  },
  supplier: {
    type: String
  },
  type: {
    type: String
  },
  baseQuantity: {
    type: Number,
    required: true
  },
  baseUnit: {
    type: String,
    required: true
  },
  rate: {
    type: Number,
    required: true
  },
  quantityInRecipe: {
    type: Number
  },
  costOfRawMaterial: {
    type: Number
  },
  recipeUnit: {
    type: String
  },
  displayRateUnit: {
    type: String
  }
});

const RawMaterial = mongoose.model('RawMaterial', rawMaterialSchema);

module.exports = RawMaterial;
