const router = new require("express").Router();
const UserModel = require("./../models/User");
const auth = require("./../auth");

router.get("/", async (req, res, next) => {
  try {
    const users = await UserModel.find().limit(100);
    res.json(users);
  } catch (err) {
    next(err);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const user = await UserModel.findById(req.params.id);
    res.json(user);
  } catch (err) {
    next(err);
  }
});

router.patch("/:id", auth.authenticate, async (req, res, next) => {
  console.log(req.body);
  try {
    const updatedUser = await UserModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updatedUser);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
