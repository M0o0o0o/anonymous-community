/* eslint-disable no-useless-catch */
const axios = require("axios").default;

module.exports = async (data) => {
  try {
    let location = "korea";
    const env = process.env.NODE_ENV;
    if (env !== undefined && env !== "test" && env !== "development") {
      location = data;
    }

    const URI = `http://api.weatherapi.com/v1/current.json?key=${process.env.WEATHERAPIKEY}&q=${location}`;

    const response = await axios.get(URI);

    return response.data.current.condition.icon;
  } catch (err) {
    return null;
  }
};
