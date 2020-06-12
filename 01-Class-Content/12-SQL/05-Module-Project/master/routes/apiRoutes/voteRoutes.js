const express = require('express');
const router = express.Router();
const db = require('../../db/database');
const inputCheck = require('../../utils/inputCheck');

// Get the total votes for all the candidates
router.get('/votes', (req, res) => {
  const sql =  `SELECT candidates.*, parties.name AS party_name, 
                COUNT(candidate_id) 
                AS count FROM votes 
                LEFT JOIN candidates ON votes.candidate_id = candidates.id 
                LEFT JOIN parties ON candidates.party_id = parties.id 
                GROUP BY candidate_id 
                ORDER BY count DESC`;
  const params = [];
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

// Create a vote record
router.post('/vote', ({body}, res) => {
  // Data validation 
  const errors = inputCheck(body, 'voter_id', 'candidate_id');
  if (errors) {
    res.status(400).json({ error: errors });
    return;
  }
  
  const sql = `INSERT INTO votes (voter_id, candidate_id) VALUES (?,?)`;
  const params = [body.voter_id, body.candidate_id];
  // use ES5 function, not arrow to use this 
  db.run(sql, params, function(err, result) {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }

    res.json({
      message: 'success',
      data: body,
      id: this.lastID
    });
  });
});

module.exports = router;