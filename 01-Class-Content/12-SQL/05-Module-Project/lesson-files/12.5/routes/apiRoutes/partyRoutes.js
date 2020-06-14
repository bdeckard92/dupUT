const express = require('express');
const router = express.Router();
const db = require('../../db/database');

// Get all parties
router.get('/parties', (req, res) => {
  const sql = `SELECT * FROM parties`;
  let params = [];
  db.all(sql, params, (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }

    res.json({
      message: 'success',
      data: rows
    });
  });
});

// Get single party
router.get('/party/:id', (req, res) => {
  const sql = `SELECT * FROM parties WHERE id = ?`;
  const params = [req.params.id];
  db.get(sql, params, (err, rows) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }

    res.json({
      message: 'success',
      data: rows
    });
  });
});

// Delete a party
router.delete('/party/:id', (req, res) => {
  const sql = `DELETE FROM parties WHERE id = ?`;
  const params = [req.params.id];
  db.run(sql, params, function(err, result) {
    if (err) {
      res.status(400).json({ error: res.message });
      return;
    }

    res.json({ message: 'deleted', changes: this.changes });
  });
});

module.exports = router;