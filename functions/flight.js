const fetch = require('node-fetch');

const apiUrl = 'https://tequila-api.kiwi.com/v2/search';

exports.handler = async event => {
  try {
    const {
      fly_from,
      fly_to,
      max_stopovers,
      dateFrom,
      dateTo,
      curr
    } = event.queryStringParameters;

    const response = await fetch(`${apiUrl}?fly_from=${fly_from}&fly_to=${fly_to}&max_stopovers=${max_stopovers}&dateFrom=${dateFrom}&dateTo=${dateTo}&curr=${curr}`, {
      headers: {
        apikey: process.env.FLIGHT_API_KEY
      }
    });
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
