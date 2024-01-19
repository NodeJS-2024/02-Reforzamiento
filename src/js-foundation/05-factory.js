// const { getUUID } = require('../plugins/get-id.plugin');
// const { getAge } = require('../plugins/get-age.plugin');

const { getUUID, getAge } = require('../plugins');

// const makeBuildPerson = () => {

//   return () => {

//     return {

//     }

//   }

// }


const buildPerson = ({ name, birthdate }) => {
  
  return {
    id: getUUID(),
    name,
    birthdate,
    age: getAge(birthdate)
  }
  
}

const obj = { name: 'John', birthdate: '1994-12-10' };

const john = buildPerson(obj);

console.log({ john });



