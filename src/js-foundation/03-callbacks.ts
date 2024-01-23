interface User {
  id: number;
  name: string;
}

export const users: User[] = [
  {
    id: 1,
    name: 'John Doe',
  },
  {
    id: 2,
    name: 'Jane Doe',
  }
];


export const getUserById = ( id: number, callback: (err?: string, user?: User) => void) => {

  const user = users.find( function( user ) {
    return user.id === id;
  });

  if ( !user ) {
    return callback(`El usuario no se encontro con el id: ${ id }`);
  }

  return callback(undefined, user);
  // console.log({ user });

}

// getUserById(1);

// module.exports = {
//   getUserById
// }







