const router = require("express").Router();
const MessageModel = require("../models/Messages");

router.post("/", async (req, res) => {
  const newMessage = new MessageModel(req.body);

  try {
    const savedMessage = await newMessage.save();
    res.status(200).json(savedMessage);
  } catch (error) {
    res.status(500).json(error.message);
  }
});

router.get("/:conversationId", async (req, res) => {
  try {
    const receivedMessages = await MessageModel.find({
      conversionId: req.params.conversationId,
    });
    res.status(200).json(receivedMessages);
  } catch (error) {
    res.status(500).json(error.message);
  }
});
module.exports = router;
