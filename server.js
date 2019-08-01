const express = require("express");
const app = express();

app.use(process.env.PORT || 2000, () => {
  console.log("Server Started");
});
