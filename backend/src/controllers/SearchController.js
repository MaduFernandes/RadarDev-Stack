const Dev = require("../models/dev");

module.exports = {
  async index(request, response, next) {
    const { latitude, longitude, techs } = request.query;

    const myUser = await Dev.findOne({ github_user: "MaduFernandes" }).catch(
      Error()
    );

    const devs = await Dev.find({
      techs: {
        $in: myUser.techs
      },
      location: {
        $near: {
          $geometry: {
            type: "Point",
            coordinates: [longitude, latitude]
          },
          $maxDistance: 10000
        }
      }
    });

    return response.json({ devs });
  },

  async index(require, response, next) {
    var id = require.body.id;

    Dev.findByIdAndDelete(id).exec();
    response.redirect("/backend/src/models/dev.js");

    return console.log({ Devs: "removido" });
  }
};
