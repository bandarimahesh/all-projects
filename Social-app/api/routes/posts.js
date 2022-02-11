const router = require("express").Router();
const Post = require("../models/Post");
const User = require("../models/User");

//create post
router.post("/", async (req, res) => {
  const post = await new Post(req.body);
  try {
    await post.save();
    res.status(200).json("Post added to db");
  } catch (error) {
    res.status(404).json(error.message);
  }
});

//update post with

router.put("/:id", async (req, res) => {
  const post = await Post.findById(req.params.id);
  try {
    if (post.userId === req.body.userId) {
      await post.updateOne({ $set: req.body });
      res.status(200).json("Post has been updated successfully");
    } else {
      res.status(403).json("You can only update your post");
    }
  } catch (error) {
    res.status(500).json(error.message);
  }
});
// delete post

router.delete("/:id", async (req, res) => {
  const post = await Post.findById(req.params.id);
  try {
    if (post.userId === req.body.userId) {
      await post.deleteOne();
      res.status(200).json("Post has been deleted successfully");
    } else {
      res.status(403).json("You can only delete your post");
    }
  } catch (error) {
    res.status(500).json(error.message);
  }
});
// like|| dislike a post with
router.put("/:id/like", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post.likes.includes(req.body.userId)) {
      await post.updateOne({ $push: { likes: req.body.userId } });
      res.status(200).json("The post has been liked");
    } else {
      await post.updateOne({ $pull: { likes: req.body.userId } });
      res.status(200).json("The post has been disliked");
    }
  } catch (error) {
    res.status(500).json(error.message);
  }
});
// get a post

router.get("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    res.status(200).json(post);
  } catch (error) {
    res.status(403).json(error.message);
  }
});

// get timeline posts
router.get("/timeline/:userId", async (req, res) => {
  try {
    const currentUser = await User.findById(req.params.userId);
    const userPosts = await Post.find({ userId: currentUser._id });
    const friendPosts = await Promise.all(
      currentUser.following.map((friendId) => {
        return Post.find({ userId: friendId });
      })
    );
    res.json(userPosts.concat(...friendPosts));
  } catch (error) {
    res.status(500).json(error.message);
  }
});

// get users all posts
router.get("/profile/:username", async (req, res) => {
  try {
    const user = await User.findOne({ username: req.params.username });
    const posts = await Post.find({ userId: user._id });
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json(error.message);
  }
});
module.exports = router;
