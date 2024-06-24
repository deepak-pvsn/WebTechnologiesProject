const express = require('express');
const router = express.Router();
const Paper = require('../models/Paper');

// Get all papers
router.get('/', async (req, res) => {
  try {
    const papers = await Paper.find();
    res.json(papers);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Add a new paper
router.post('/', async (req, res) => {
  const paper = new Paper(req.body);
  try {
    const newPaper = await paper.save();
    res.status(201).json(newPaper);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;