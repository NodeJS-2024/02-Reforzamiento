

const users = [
  {
    id: 1,
    name: 'John Doe',
  },
  {
    id: 2,
    name: 'Jane Doe',
  }
];


function getUserById( id, callback ) {

  const user = users.find( function( user ) {
    return user.id === id;
  });

  if ( !user ) {
    return callback(`El usuario no se encontro con el id: ${ id }`);
  }

  return callback(null, user);
  // console.log({ user });

}

// getUserById(1);

module.exports = {
  getUserById
}







