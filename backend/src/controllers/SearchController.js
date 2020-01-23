const dev = require("../models/dev");

module.exports = {
  async index(request, response) {
    console.log(request.query);

    return response.json({ devs: [] });
  }
};
