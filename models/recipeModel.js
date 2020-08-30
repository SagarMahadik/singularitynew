const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Recipe Must have a name']
  },
  rate: {
    type: Number
  },
  brandName: {
    type: String,
    default: 'Piatto'
  },
  recipeUrl: {
    type: String
  },
  baseQuantity: {
    type: Number
  },
  baseUnit: {
    type: String
  },
  rawMaterialDetails: [
    {
      name: {
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
  basicRecipeDetails: [
    {
      name: {
        type: String,
        required: [true, 'Basic Reccipe Must have a name']
      },
      details: [
        {
          name: {
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
    }
  ]
});

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;
