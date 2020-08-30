const express = require('express');
const basicRecipeController = require('../controllers/basicRecipeController');
const authController = require('../controllers/authController');

const router = express.Router();

router.route('/').get(basicRecipeController.getAllBasicRecipies);

router.route('/').post(basicRecipeController.createBasicRecipe);

router.route('/:id').patch(basicRecipeController.updateBasicRecipe);

module.exports = router;
