
// const axios = require('axios');

import axios from 'axios';

// const buildHttpClient = (headers) => {}

// Patron adaptador
export const httpClientPlugin = {

  get: async(url: string) => {
    // const response = await fetch(url);
    // return await response.json();

    const { data } = await axios.get(url);
    return data;
  },
  post: async(url: string, body: any) => {},
  put: async(url: string, id: number, body: any) => {},
  delete: async(url: string, id: number) => {},

}


// module.exports = {
//   http: httpClientPlugin
// }
