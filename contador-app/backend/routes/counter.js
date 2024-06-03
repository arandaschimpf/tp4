const express = require('express');
const router = express.Router();
const Counter = require('../models/Counter');

router.post('/increment', async (req, res) => {
  try {
    let counter = await Counter.findOne();
    if (!counter) {
      counter = new Counter();
      await counter.save();
    }
    counter.value += 1;
    await counter.save();
    res.json(counter);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
