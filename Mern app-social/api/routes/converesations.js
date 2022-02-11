const router = require("express").Router();
const ConversationModel = require("../models/Conversion");

//new conversion
router.post("/", async (req, res) => {
  const newConversation = new ConversationModel({
    members: [req.body.senderId, req.body.receiverId],
  });
  try {
    const savedConversation = await newConversation.save();
    res.status(200).json(savedConversation);
  } catch (error) {
    res.status(500).json(error.message);
  }
});

router.get("/:userId", async (req, res) => {
  try {
    const conversations = await ConversationModel.find({
      members: { $in: [req.params.userId] },
    });
    res.status(200).json(conversations);
  } catch (error) {
    res.status(500).json(error.message);
  }
});
module.exports = router;
