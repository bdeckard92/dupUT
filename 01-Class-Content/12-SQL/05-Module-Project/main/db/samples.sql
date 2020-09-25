INSERT INTO votes (voter_id, candidate_id)
VALUES (1, 1);

SELECT * FROM parties;
SELECT * FROM voters ORDER BY last_name;

SELECT candidates.*, parties.name AS party_name
FROM candidates
LEFT JOIN parties ON candidates.party_id = parties.id;

SELECT candidates.*, parties.name AS party_name, COUNT(candidate_id) AS count
FROM votes
LEFT JOIN candidates ON votes.candidate_id = candidates.id
LEFT JOIN parties ON candidates.party_id = parties.id
GROUP BY candidate_id ORDER BY count DESC;

UPDATE candidates SET party_id = 2 WHERE id = 1;
UPDATE voters SET email = 'test@test.com' WHERE id = 1;

DELETE FROM parties WHERE id = 1; 
DELETE FROM candidates WHERE id = 1;
DELETE FROM voters WHERE id = 1; 