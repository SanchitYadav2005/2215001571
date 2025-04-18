const express = require("express");
const router = express.Router();
const { users, posts, comments } = require("../controllers/controller");

router
  .get("users", users)
  .get("users/:userid/posts", posts)
  .get("posts/:postid/comments", comments);

module.exports = router;
