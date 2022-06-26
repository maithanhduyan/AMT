import express from "express";
import {
  getAllProducts,
  createProduct,
  getProductById,
  updateProduct,
  deleteProduct,
} from "../controllers/ProductController.js";

import {
  createUser,
  deleteUser,
  getAllUsers,
  getUserById,
  updateUser,
} from "../controllers/UserController.js";

const router = express.Router();

/**
 * AUTH
 * http://localhost:5000/api/users/
 * */
router.get("/users/", getAllUsers);
router.get("/users/:id", getUserById);
router.post("/users/", createUser);
router.patch("/users/:id", updateUser);
router.delete("/users/:id", deleteUser);

/**
 * PRODUCT
 * http://localhost:5000/api/products/
 *
 */
router.get("/products/", getAllProducts);
router.get("/products/:id", getProductById);
router.post("/products/", createProduct);
router.patch("/products/:id", updateProduct);
router.delete("/products/:id", deleteProduct);

export default router;
