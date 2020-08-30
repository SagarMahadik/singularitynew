const Recipe = require('../models/recipeModel');
const catchAsync = require('../utils/catchAsync');
const factory = require('./handlerFactory');

exports.createRecipe = factory.createOne(Recipe);

exports.getAllRecipies = factory.getAll(Recipe);

exports.updateRecipe = factory.updateOne(Recipe);
