const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import itemControllers module for handling item-related operations
const itemControllers = require("./controllers/itemControllers");
const recipeControllers = require("./controllers/recipeControllers");
const ingredientControllers = require("./controllers/ingredientControllers");
const instructionControllers = require("./controllers/instructionControllers");
const categoryControllers = require("./controllers/categoryControllers");
const { hashPassword } = require("./services/auth");
const userControllers = require("./controllers/userControllers");
const userMiddleware = require("./middlewares/userMiddleware");
const authControllers = require("./controllers/authControllers");
const loginMiddleware = require("./middlewares/loginMiddleware");
const favoriteControllers = require("./controllers/favoriteControllers");

// Route to get a list of items
router.get("/items", itemControllers.browse);
router.get("/recipes", recipeControllers.browse);

// Route to get a specific item by ID
router.get("/items/:id", itemControllers.read);
router.get("/recipes/:id", recipeControllers.readById);
router.get("/recipes/ingredients/:id", ingredientControllers.readById);
router.get("/recipes/instructions/:id", instructionControllers.readById);
router.get("/category", categoryControllers.browse);
router.get("/category/:id", categoryControllers.readById);

// Route to add a new item
router.post("/items", itemControllers.add);

// Route to add a new user
router.post("/user", userMiddleware, hashPassword, userControllers.add);

// Login
router.post("/login", loginMiddleware, authControllers.login);

// Favorite
router.post("/recipes/:id/favorite", favoriteControllers.add);
router.delete(
  "/recipes/:id/deleteFavorite",
  favoriteControllers.deleteFavorite
);
/* ************************************************************************* */

module.exports = router;
