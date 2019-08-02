const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.render("");
});

app.use(process.env.PORT || 2000, () => {
  console.log("Server Started");
});
