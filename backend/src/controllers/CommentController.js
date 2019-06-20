const Post = require('../models/Post');

module.exports = {
  async store(req, res) {
    const post = await Post.findById(req.params.id);

    const comment = req.body;

    post.comment = comment;

    await post.save();

    return res.json(post);
  },
};
