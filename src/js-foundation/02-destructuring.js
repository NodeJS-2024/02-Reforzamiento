
// Variables de entorno

// console.log(process.env.PORT ?? 3000);
// console.log(process.env);

const { SHELL, USERNAME } = process.env;

// console.table({ SHELL, USERNAME });

const characters = [ 'Flash', 'Superman', 'Batman' ];

const [ _, __, batman ] = characters;

// console.log(batman);