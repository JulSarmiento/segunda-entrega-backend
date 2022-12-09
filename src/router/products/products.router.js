const express = require("express");
const router = express.Router();

const { products } = require("../../daos");
const productExist = require("../../middlewares/productExist.middleware");

// GET /products
router.get("/", productExist(products), (req, res, next) => {
  if(!req.products){
    products
    .getAll()
    .then((data) => {
      res.status(200).json(data);
    })
    .catch(next);
  }
});

// GET /products/:id
router.get("/:id", productExist(products), (req, res, next) => {
  if(req.products){
    products
    .getById(req.params.id)
    .then((data) => {
      if (!data) {
        res.status(400).json({ error: "Product not found" });
      } else {
        res.status(200).json(data);
      }
    })
    .catch(next);
  }
});

// POST /products
router.post("/", (req, res, next) => {
  products
    .create(req.body)
    .then((id) => {
      res.status(201).json({id});
    })
    .catch(next);
});

// PUT /products/:id
router.put("/:id", productExist(products), (req, res, next) => {
  products
    .update(req.params.id, req.body)
    .then((data) => {
      res.status(200).json(data);
    })
    .catch(next);
});

// DELETE /products/:id
router.delete("/:id", productExist(products), (req, res, next) => {
  products
    .deleteById(req.params.id)
    .then((data) => {
      res.status(200).json({
        success: true,
        message: `Product "${req.params.id}" deleted`,
      });
    })
    .catch(next);
});

module.exports = router;
