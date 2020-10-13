const router = new require("express").Router();
const HeroeModel = require("./../models/Heroe");

router.get("/", async (req, res, next) => {
  try {
    const heroes = await HeroeModel.find();
    res.json(heroes);
  } catch (err) {
    next(err);
  }
});

router.get("/publishers", async (req, res, next) => {
  try {
    const publishers = await HeroeModel.distinct("biography.publisher", {
      $nor: [{ "biography.publisher": "" }, { "biography.publisher": "null" }],
    });
    res.json(publishers);
  } catch (err) {
    next(err);
  }
});

router.get("/races", async (req, res, next) => {
  try {
    const races = await HeroeModel.distinct("appearance.race", {
      $nor: [{ "biography.publisher": "" }, { "biography.publisher": "null" }],
    });
    res.json(races);
  } catch (err) {
    next(err);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    res.json(await HeroeModel.findById(req.params.id));
  } catch (err) {
    next(err);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    res.json(await HeroeModel.findByIdAndDelete(req.params.id));
  } catch (err) {
    next(err);
  }
});

module.exports = router;
