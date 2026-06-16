-- Run this in the Neon SQL Editor (dashboard) to create the scores table
CREATE TABLE scores (
  id SERIAL PRIMARY KEY,
  username VARCHAR(100) NOT NULL,
  wpm INTEGER NOT NULL,
  accuracy INTEGER NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);
