// llaves despues de una constante es una destructuracion 
const argv = require('yargs')
    .command('listar', 'Muestreo de tabla de multiplicar', {
        base: {
            demand: true,
            alias: 'b'
        },
        limite: {
            alias: 'l',
            default: 10
        }
    })
    .command('crear', 'Crea un archivo de texto con las tablas de multiplicar', {
        base: {
            demand: true,
            alias: 'b'
        },
        limite: {
            alias: 'l',
            default: 10
        }
    })
    .help()
    .argv;

const { crearArchivo } = require('./multiplicar/multiplicar')
let comando = argv._[0]

switch (comando) {
    case 'listar':
        console.log(comando);

        break;

    case 'crear':
        console.log(comando);
        crearArchivo(argv.base)
            .then(archivo => console.log(`Archivo creado: ${ archivo}`))
            .catch(e => console.log(e))
        break;

    default:
        console.log('Comando no localizado');

        break;
}

//console.log(comando);
//console.log(process.argv);
//let argv2 = process.argv;
//let parametro = argv[2];
//se hace array y toma el valor que se encuentra en segunda posicion
//let base = parametro.split('=')[1]
//console.log('Limite:', argv.limite);
//console.log(argv2);

console.log(argv);



/**/