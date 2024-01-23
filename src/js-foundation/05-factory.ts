import { getUUID } from '../plugins/get-id.plugin';
import { getAge } from '../plugins/get-age.plugin';
// const { getUUID } = require('../plugins/get-id.plugin');
// const { getAge } = require('../plugins/get-age.plugin');

// const { getUUID, getAge } = require('../plugins');

// const makeBuildPerson = () => {

//   return () => {

//     return {

//     }

//   }

// }

// const buildPerson = ({ name, birthdate }) => {
  
//   return {
//     id: getUUID(),
//     name,
//     birthdate,
//     age: getAge(birthdate)
//   }
  
// }

// const obj = { name: 'John', birthdate: '1994-12-10' };

// const john = buildPerson(obj);

// console.log({ john });

interface BuildMakerPersonOptions {
  getUUID: () => string;
  getAge: (birthdate: string) => number
}

interface PersonOptions {
  name: string;
  birthdate: string;
}

export const builMakePerson = ({ getUUID, getAge }: BuildMakerPersonOptions) => {

  return ({ name, birthdate }: PersonOptions) => {
  
    return {
      id: getUUID(),
      name,
      birthdate,
      age: getAge(birthdate)
    }
    
  }

}

// module.exports = {
//   // buildPerson,
//   builMakePerson,
// }


