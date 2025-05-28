const mongoose = require('mongoose');







const BlogPostSchema = new mongoose.Schema({

  title: { type: String, required: true },
  content: String,
  author: String,
  tags: [String],
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('BlogPost', BlogPostSchema);
