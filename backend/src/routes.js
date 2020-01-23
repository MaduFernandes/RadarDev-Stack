const { Router } = require("express");
const axios = require("axios");

const Dev = require("./models/dev");

const routes = Router();

routes.post("/devs", async (request, response) => {
  const { github_user } = request.body;

  const apiResponse = await axios.get(
    `https://api.github.com/users/${github_user}`
  );

  const { name = login, avatar_url, bio, techs } = apiResponse.data;

  console.log(apiResponse.data);

  const techsArray = techs.split(",").map(tech => tech.trim());

  const dev = await Dev.create({
    github_user,
    name,
    avatar_url,
    bio,
    techs: techsArray
  });

  console.log(dev.data);

  return response.json(dev);
});

module.exports = routes;
