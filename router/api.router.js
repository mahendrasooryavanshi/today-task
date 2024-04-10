const express = require("express");
const router = express.Router();
const productController = require("../controller/product.controller");
const { productValidation } = require("../validation/product.validation");
router.post("/create", [productValidation], productController.create);
router.get("/products", productController.products);
router.put("/update/:productId", productController.update);
router.delete("/delete", productController.delete);
module.exports = router;
