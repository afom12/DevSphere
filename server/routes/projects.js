const express = require('express');
const router = express.Router();
const Project = require('../models/project');

router.get('/', async (req, res) => {
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post('/', async (req, res) => {
  const { title, description, link, tags } = req.body;

  const newProject = new Project({ title, description, link, tags });

  try {
    const savedProject = await newProject.save();
    res.status(201).json(savedProject);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
