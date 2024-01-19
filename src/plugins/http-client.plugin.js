
// Patron adaptador
const httpClientPlugin = {

  get: async(url) => {
    const response = await fetch(url);
    return await response.json();
  },
  post: async(url, body) => {},
  put: async(url, id, body) => {},
  delete: async(url, id) => {},

}


module.exports = {
  http: httpClientPlugin
}
