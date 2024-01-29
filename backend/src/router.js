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
const addRecipeControllers = require("./controllers/addRecipeControllers");
const commentControllers = require("./controllers/commentControllers");
const adminControllers = require("./controllers/adminControllers");
const updateRecipeControllers = require("./controllers/updateRecipeControllers");
const multer = require("./middlewares/multerMiddleware");

// Route to get a list of items
router.get("/items", itemControllers.browse);
router.get("/recipes", recipeControllers.browse);
router.get("/recipes/ingredients", ingredientControllers.browse);

// Route to get a specific item by ID
router.get("/items/:id", itemControllers.read);
router.get("/recipes/:id", recipeControllers.readById);
router.get("/recipes/ingredients/:id", ingredientControllers.readById);
router.get("/recipes/instructions/:id", instructionControllers.readById);
router.get("/category", categoryControllers.browse);
router.get("/category/:id", categoryControllers.readById);
router.get("/recipes/:id/comment", commentControllers.browse);

// Route to add a new item
router.post("/items", itemControllers.add);

// Route to add a new user
router.post("/user", userMiddleware, hashPassword, userControllers.add);
router.get("/user", userControllers.browse);
router.delete("/user/:id", userControllers.deleteById);

// Login
router.post("/login", loginMiddleware, authControllers.login);

// Logout
router.get("/logout", authControllers.logout);

// Favorite
router.post("/recipes/:id/favorite", favoriteControllers.add);
router.delete(
  "/recipes/:id/deleteFavorite",
  favoriteControllers.deleteFavorite
);
// Add new recipe
router.post("/recipes/add", multer, addRecipeControllers.addRecipe);

// Admin delete recipe
router.delete("/admin/recipes/:id/delete", adminControllers.deleteRecipe);

// Admin update recipe
// router.put("/recipes/:id/update", updateRecipeControllers.updateRecipe);
router.put("/recipes/update/:id", updateRecipeControllers.updateRecipe);

/* ************************************************************************* */

// Route to add a new comment
router.post("/recipes/:id/comment", commentControllers.addComment);

module.exports = router;
