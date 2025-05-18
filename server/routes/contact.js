
const express = require('express');
const router = express.Router();
const ContactMessage = require('../models/ContactMessage');

router.post('/', async (req, res) => {
  const { name, email, message } = req.body;

  const newMessage = new ContactMessage({ name, email, message });

  try {
    const savedMessage = await newMessage.save();
    res.status(201).json({ message: 'Message sent successfully!', data: savedMessage });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
