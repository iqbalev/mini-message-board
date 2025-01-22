import pool from "./pool.js";

export async function fetchMessages() {
  const { rows } = await pool.query(
    "SELECT *, TO_CHAR(date, 'DD Mon YYYY, HH24:MI') AS formatted_date_Time FROM messages ORDER BY date DESC"
  );

  return rows.map((row) => ({
    ...row,
    date: row.formatted_date_time,
  }));
}

export async function addMessage(username, text) {
  await pool.query(
    `
    INSERT INTO messages (username, text) 
    VALUES ($1, $2)`,
    [username, text]
  );
}
