const express = require("express");
const mongoose = require("mongoose");
const routes = require("../src/routes");

const app = express();

mongoose.connect(
  "mongodb+srv://eduarda:eduarda@cluster0-p7k7b.mongodb.net/test?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

app.use(express.json());
app.use(routes);

app.listen(3333);
