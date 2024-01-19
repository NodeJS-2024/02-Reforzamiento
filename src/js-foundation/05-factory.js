

// const makeBuildPerson = () => {

//   return () => {

//     return {

//     }

//   }

// }


const buildPerson = ({ name, birthdate }) => {
  
  return {
    id: new Date().getTime(),
    name,
    birthdate,
    age: new Date().getFullYear() - new Date(birthdate).getFullYear()
  }
  
}


const obj = { name: 'John', birthdate: '1994-12-10' };

const john = buildPerson(obj);

console.log({ john });



