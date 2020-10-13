const router = new require("express").Router();
const MessageModel = require("./../models/Message");

// GET /api/messages
router.get("/", async (req, res, next) => {
  try {
    const users = await MessageModel.find();
    res.json(users);
  } catch (err) {
    next(err);
  }
});

// GET /api/messages/to/:id
router.get("/to/:id", async (req, res, next) => {
  try {
    const posts = await MessageModel.find({ to: req.params.id })
      .populate("to")
      .populate("from");
    res.json(posts);
  } catch (err) {
    next(err);
  }
});

// POST /api/messages
router.post("/", async (req, res, next) => {
  const { to, from, message } = req.body; // syntaxe par destructuration
  
  try {
    const posts = await MessageModel.create({
      to,
      from,
      message,
      date: Date.now(),
    });
    res.json(posts);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
