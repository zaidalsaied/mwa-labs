const express = require("express");
require("dotenv").config();

const path = require("path");

const app = express();

const server = app.listen(process.env.PORT, () => {
  const port = server.address().port;
});

app.use(express.static(path.join(__dirname, "public")));
