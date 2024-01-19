
const getAgePlugin = require('get-age');


const getAge = (birthdate) => {
  if ( !birthdate ) return new Error('El birthdate es requerido');

  return getAgePlugin(birthdate);
}

module.exports = {
  getAge,
}

