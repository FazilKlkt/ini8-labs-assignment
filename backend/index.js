const express = require("express");
const sqlite3 = require("sqlite3").verbose();
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

const db = new sqlite3.Database("registration.db", (err) => {
  if (err) throw err;
  console.log("Connected to the database!");
});

db.run(
  `
  CREATE TABLE IF NOT EXISTS Registration (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    date_of_birth TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  )
`,
  (err) => {
    if (err) throw err;
    console.log("Registration table created or already exists");
  }
);

const routes = [
  {
    method: "POST",
    path: "/registrations",
    description: "Create a new registration",
  },
  {
    method: "GET",
    path: "/registrations",
    description: "Retrieve a list of all registered users",
  },
  {
    method: "GET",
    path: "/registrations/:id",
    description: "Retrieve a specific registration by ID",
  },
  {
    method: "PUT",
    path: "/registrations/:id",
    description: "Update an existing registration",
  },
  {
    method: "DELETE",
    path: "/registrations/:id",
    description: "Delete a registration",
  },
  {
    method: "GET",
    path: "/routes",
    description:
      "Retrieve a list of all registered routes and their descriptions",
  },
];

app.post("/registrations", (req, res) => {
  const { name, email, date_of_birth } = req.body;
  db.run(
    "INSERT INTO Registration (name, email, date_of_birth) VALUES (?, ?, ?)",
    [name, email, date_of_birth],
    function (err) {
      if (err) {
        if (err.code === "SQLITE_CONSTRAINT") {
          return res.status(400).json({ error: err.message });
        }
        return res.status(500).json({ error: "Error creating registration" });
      }
      res.status(201).json({ id: this.lastID, name, email, date_of_birth });
    }
  );
});

app.get("/registrations", (req, res) => {
  db.all("SELECT * FROM Registration", (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
});

app.get("/registrations/:id", (req, res) => {
  const id = req.params.id;
  db.get("SELECT * FROM Registration WHERE id = ?", [id], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    if (!result) return res.status(404).json({ error: err.message });
    res.json(result);
  });
});

app.put("/registrations/:id", (req, res) => {
  const id = req.params.id;
  const { name, email, date_of_birth } = req.body;
  db.run(
    "UPDATE Registration SET name = ?, email = ?, date_of_birth = ? WHERE id = ?",
    [name, email, date_of_birth, id],
    function (err) {
      if (err) {
        if (err.code === "SQLITE_CONSTRAINT") {
          return res.status(400).json({ error: err.message });
        }
        return res.status(500).json({ error: err.message });
      }
      if (this.changes === 0)
        return res.status(404).json({ error: err.message });
      res.json({ id, name, email, date_of_birth });
    }
  );
});

app.delete("/registrations/:id", (req, res) => {
  const id = req.params.id;
  db.run("DELETE FROM Registration WHERE id = ?", [id], function (err) {
    if (err) return res.status(500).json({ error: err.message });
    if (this.changes === 0) return res.status(404).json({ error: err.message });
    res.sendStatus(204);
  });
});

app.get("/routes", (req, res) => {
  res.json(routes);
});

app.listen(3000, () => {
  console.log("server running on port 3000");
});
