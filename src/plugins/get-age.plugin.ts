
// const getAgePlugin = require('get-age');


export const getAge = (birthdate: string) => {
  // if ( !birthdate ) return new Error('El birthdate es requerido');

  // return getAgePlugin(birthdate);
  return new Date().getFullYear() - new Date(birthdate).getFullYear();
}

// module.exports = {
//   getAge,
// }

