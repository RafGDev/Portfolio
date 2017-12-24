const express = require("express");

const PORT = process.env.PORT || 3005;

const app = express();

app.use(express.static("build"));

app.get("*", (req, res) => {
  res.sendFile("index.html");
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
