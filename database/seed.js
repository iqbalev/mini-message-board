import dotenv from "dotenv";
import pkg from "pg";
const { Client } = pkg;

dotenv.config();

const SQL = `
    CREATE TABLE IF NOT EXISTS messages (
        id SERIAL PRIMARY KEY,
        username VARCHAR (20) NOT NULL,
        date TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
        text VARCHAR NOT NULL
    );
    
    INSERT INTO messages (username, text)
    VALUES
    ('Iqbalev', 'What''s new? sorted messages from newest to oldest, form validation, "Back to Home" button, refined details page layout, and some minor adjustments.' ),
    ('Iqbalev', 'Now with PostgreSQL!'),
    ('Iqbalev', 'New version is out!')
`;

async function main() {
  console.log("Seeding...");

  const client = new Client({
    connectionString: `postgresql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@localhost:${process.env.DB_PORT}/${process.env.DB_NAME}`,
  });

  try {
    await client.connect();
    await client.query(SQL);
    console.log("Seeding completed!");
  } catch (error) {
    console.error("Something went wrong.", error);
  } finally {
    await client.end();
    console.log("Database connection ended.");
  }
}

main();
