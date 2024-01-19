const { v4: uuidv4 } = require('uuid');
const getAge = require('get-age');

// const makeBuildPerson = () => {

//   return () => {

//     return {

//     }

//   }

// }


const buildPerson = ({ name, birthdate }) => {
  
  return {
    id: uuidv4(),
    name,
    birthdate,
    age: getAge(birthdate)
  }
  
}


const obj = { name: 'John', birthdate: '1994-12-10' };

const john = buildPerson(obj);

console.log({ john });


