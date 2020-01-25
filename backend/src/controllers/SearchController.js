const Dev = require("../models/dev");
const stringArray = require("../utils/stringArray");

module.exports = {
  async index(request, response) {
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
  }

  //  async update({ });

  // async delete();
};
