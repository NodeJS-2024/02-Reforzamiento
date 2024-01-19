
// console.log('Hola Mundo desde app.js');

const { emailTemplate } = require('./js-foundation/01-template');
require('./js-foundation/02-destructuring');
// const { getUserById } = require('./js-foundation/03-callbacks');
const { getUserById } = require('./js-foundation/04-arrow');

// console.log(emailTemplate);

const id = 1;

// getUserById(id, function( error, user ) {
//   if ( error ) {
//     throw new Error(error);
//   }

//   // console.log({ user });

//   // callback hell no recomentado
//   // getUserById(2, function( error, user2 ) {
//   //   if ( error ) {
//   //     throw new Error(error);
//   //   }  
  
//   //   console.log({user, user2});
  
//   // });
  

// });

// Convertido a arrow fuctions
getUserById(id, ( error, user ) => {

  if ( error ) {
    throw new Error(error);
  }

  // console.log({ user });

});



// Factory method
const { getUUID, getAge } = require('./plugins');
const { builMakePerson } = require('./js-foundation/05-factory');

const makePerson = builMakePerson({ getUUID, getAge });

const obj = { name: 'John', birthdate: '1994-12-10' };

const john = makePerson( obj );

console.log({ john });
