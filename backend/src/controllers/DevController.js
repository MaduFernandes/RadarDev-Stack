const axios = require("axios");
const Dev = require("../models/dev");
const stringArray = require("../utils/stringArray");

module.exports = {
  async index(request, response, next) {
    const devs = await Dev.find();

    return response.json(devs);
  },

  async store(request, response) {
    const { github_user, techs, latitude, longitude } = request.body;

    let dev = await Dev.findOne({ github_user });

    if (!dev) {
      const apiResponse = await axios.get(
        `https://api.github.com/users/${github_user}`
      );

      const { name = login, avatar_url, bio } = apiResponse.data;

      const techsArray = stringArray(techs);

      const location = {
        type: "Point",
        coordinates: [longitude, latitude]
      };

      dev = await Dev.create({
        github_user,
        name,
        avatar_url,
        bio,
        techs: techsArray,
        location
      });
    }

    return response.json(dev);
  }
};
