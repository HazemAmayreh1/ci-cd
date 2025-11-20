const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("CI/CD WORKING");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servers runnings ons ${PORT}`));
