const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.json({
    message: process.env.MESSAGE || "No message set",
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
