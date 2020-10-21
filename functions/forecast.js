const fetch = require('node-fetch');

const apiUrl = 'https://api.openweathermap.org/data/2.5/onecall';

exports.handler = async event => {
  try {
    const {
      lat,
      lon,
    } = event.queryStringParameters;

    const response = await fetch(`${apiUrl}?units=metric&lat=${lat}&lon=${lon}&appid=${process.env.FORECAST_API_KEY}`);
    const data = await response.json();

    return {
      statusCode: 200,
      body: JSON.stringify(data)
    };
  } catch (err) {
    console.error(JSON.stringify({
      statusCode: 500,
      body: error.toString()
    }));
  }
};
