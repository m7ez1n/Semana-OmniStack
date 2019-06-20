const Post = require('../models/Post');

module.exports = {
  async store(req, res) {
    const post = await Post.findById(req.params.id);

    post.comment = req.body;

    await post.save();

    return res.json(post);
  },
};
