const axios = require('axios');
const URL = 'https://swapi.co/api/people';

async function getPeople(name) {
  const url = `${URL}/?search=${name}&format=json`;
  const response = await axios.get(url);
  return response.data;
}

// getPeople('r2')
//   .then(function (results) {
//     console.log('resultado', results);
//   })
//   .catch(function (error) {
//     console.log('DEU RUIM', error);
//   })

module.exports = { getPeople };