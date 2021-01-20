const axios = require('axios');
const locationUtility = require('./utilities/locationUtilities');

module.exports = {
  index,
}

function index(req, res) {
  const cities = locationUtility.getCities();
  res.json({cities})
}