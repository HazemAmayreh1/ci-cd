const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("CI/CD WORKING ");
});

app.listen(3000, () => console.log("Server running on ports 3000"));
