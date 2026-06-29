const { neon } = require('@neondatabase/serverless');

async function handler(req, res) {
  const sql = neon(process.env.DATABASE_URL);

  if (req.method === 'GET') {
    const rows = await sql`
      SELECT id, username, wpm, accuracy, created_at
      FROM scores
      ORDER BY wpm DESC, accuracy DESC
    `;
    return res.status(200).json(rows);
  }

  if (req.method === 'POST') {
    const { username, wpm, accuracy } = req.body;
    if (!username || wpm == null || accuracy == null) {
      return res.status(400).json({ error: 'Missing required fields' });
    }
    const rows = await sql`
      INSERT INTO scores (username, wpm, accuracy)
      VALUES (${username}, ${wpm}, ${accuracy})
      RETURNING id
    `;
    return res.status(201).json({ id: rows[0].id });
  }

  return res.status(405).json({ error: 'Method not allowed' });
}

module.exports = handler;
