
const axios = require('axios');

// const buildHttpClient = (headers) => {}

// Patron adaptador
const httpClientPlugin = {

  get: async(url) => {
    // const response = await fetch(url);
    // return await response.json();

    const { data } = await axios.get(url);
    return data;
  },
  post: async(url, body) => {},
  put: async(url, id, body) => {},
  delete: async(url, id) => {},

}


module.exports = {
  http: httpClientPlugin
}
