const mongoose = require('mongoose');

const basicRecipeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Basic Reccipe Must have a name']
  },
  details: [
    {
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
    }
  ],
  rate: {
    type: Number
  },
  brandName: {
    type: String,
    default: 'Piatto'
  },
  baseQuantity: {
    type: Number
  },
  baseUnit: {
    type: String
  }
});

const BasicRecipe = mongoose.model('BasicRecipe', basicRecipeSchema);

module.exports = BasicRecipe;
