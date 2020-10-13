const router = new require("express").Router();
const ProductModel = require("./../models/Product");

// GET : /api/products/
router.get("/", async (req, res, next) => {
  try {
    const products = await ProductModel.find().limit(20).sort({ _id: -1 }); // products est un array d'objets JS
    res.json(products); // ici on le converti en String JSON
  } catch (err) {
    next(err);
  }
});


router.get("/sort", async (req, res, next) => {
  try {
    if (!req.query.sort) throw new Error("Missing sort query parameter");
    const products = await ProductModel.find().sort({ [req.query.sort] : req.query.direction === "asc" ? 1 : -1 });
    res.json(products);
  } catch (err) {
    next(err);
  }
});


// GET : /api/products/un-id-mongo (récupérer un produit de la bdd grâce à son _id )
router.get("/:id", async (req, res, next) => {
  try {
    const product = await ProductModel.findById(req.params.id);
    res.json(product);
  } catch (err) {
    next(err);
  }
});

// POST : /api/products (créer un nouveau produit)
router.post("/", async (req, res, next) => {
  try {
    const newProduct = await ProductModel.create(req.body); // req.body contient TOUJOURS les informations postées
    res.json(newProduct);
  } catch (err) {
    next(err);
  }
});

// DELETE : /api/products/un-id-de-mongodb (supprimer un produit de la bdd grâce à son _id)
router.delete("/:id", async (req, res, next) => {
  try {
    const deletedProduct = await ProductModel.findByIdAndDelete(req.params.id); // req.params.id correspond à l'id passé en URL
    res.json(deletedProduct);
  } catch (err) {
    next(err);
  }
});

// PATCH : /api/products/un-id-mongo (mettre à jour un produit)
router.patch("/:id", async (req, res, next) => {
  try {
    const updatedProduct = await ProductModel.findByIdAndUpdate(
      req.params.id, // req.params.id correspond à l'id passé en URL
      req.body, // les données de mise à jour
      { new: true } // cette option est requise si vous souhaitez récupérer le document mis à jour, sinon, l'ancienne version est retournée par défaut
    );
    res.json(updatedProduct);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
