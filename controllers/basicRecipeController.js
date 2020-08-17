const BasicRecipe = require('../models/basicRecipeModel');
const catchAsync = require('../utils/catchAsync');
const factory = require('./handlerFactory');

exports.createBasicRecipe = factory.createOne(BasicRecipe);

exports.getAllBasicRecipies = factory.getAll(BasicRecipe);

exports.updateBasicRecipe = factory.updateOne(BasicRecipe);
