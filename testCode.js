const express = require("express");
const app = express();
const bodyParser = require("body-parser");

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Simulated user database
const users = [];

// Vulnerable registration endpoint
app.post("/register", (req, res) => {
  const { username } = req.body;

  // No proper validation on username
  users.push(username); // Vulnerable to injection attacks
  res.send(`User ${username} registered successfully!`);
  //   res.send("Testing ...");
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
// g
