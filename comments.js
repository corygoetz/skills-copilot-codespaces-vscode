// Create web server
const express = require('express');
const app = express();

// Import comments
const comments = require('./comments');

// Get all comments
app.get('/comments', (req, res) => {
  res.json(comments);
});

// Get comments by ID
app.get('/comments/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const comment = comments.find(comment => comment.id === id);
  res.json(comment);
});

// Start server
app.listen(3000, () => {
  console.log('Server started');
});
// Path: comments.js
// Comments data
const comments = [
  {
    id: 1,