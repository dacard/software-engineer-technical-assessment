CREATE TABLE IF NOT EXISTS dna(id SERIAL PRIMARY KEY, dna TEXT NOT NULL, created_at TIMESTAMP NOT NULL DEFAULT NOW());