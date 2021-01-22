const express = require('express');
const router = express.Router();
const db = require('../../db/connection');

// Get all parties
router.get('/parties', (req, res) => {
  db.query(`SELECT * FROM parties`, (err, rows) => {
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
  db.query(sql, params, (err, rows) => {
      if (err) {
        res.status(400).json({ 
          error: err.message 
        });
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
  db.query(sql, req.params.id, (err, result) => {
      if (err) {
        res.status(400).json({ error: res.message });
        return;
      } else if (!result.affectedRows) {
        res.json({
          message: 'Party not found',
        })
      } else {
        res.json({ 
          message: 'deleted', 
          changes: result.affectedRows 
        });
    }
  });
});

module.exports = router;
