const express = require("express");
const router = express.Router();

const { carts } = require("../../daos");
const cartExist = require("../../middlewares/cartExist.middleware");

// GET /carts
router.get("/", (_req, res, next) => {
  carts
    .getAll()
    .then((data) => {
      res.status(200).json(data);
    })
    .catch(next);
});

// GET /carts/:id
router.get("/:id", (req, res, next) => {
  carts
    .getById(req.params.id)
    .then((data) => {
      if (!data) {
        res.status(400).json({ error: "Cart not found" });
      } else {
        res.status(200).json(data);
      }
    })
    .catch(next);
});

// POST /carts
router.post("/", (req, res, next) => {
  carts
    .create(req.body)
    .then((id) => {
      res.status(201).json({id});
    })
    .catch(next);
});

// PUT /carts/:id
router.put("/:id", cartExist(carts), (req, res, next) => {
  carts
    .update(req.params.id, req.body)
    .then((data) => {
      res.status(200).json(data);
    })
    .catch(next);
});

// DELETE /carts/:id
router.delete("/:id", cartExist(carts), (req, res, next) => {
  carts
    .delete(req.params.id)
    .then((data) => {
      res.status(204).send();
    })
    .catch(next);
});

module.exports = router;
