const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://eduarda:eduarda@cluster0-p7k7b.mongodb.net/test?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  },
  function(err) {
    if (err) throw err;
    console.log("Banco conectado com sucesso");
  }
);

module.exports = mongoose;
