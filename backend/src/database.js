const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://eduarda:eduarda@cluster0-p7k7b.mongodb.net/test?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  }
);

module.exports = mongoose;
