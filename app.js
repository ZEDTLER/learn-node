// Requieres
const argv = require('./config/yargs').argv;
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');
// Optionals
const colors = require('colors');


let comando = argv._[0];
switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite)
            .then((archivo) => {
                console.log(`${archivo}`)
            }).catch(e => console.log(e));
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then((archivo) => {
                console.log(`Archivo creado:`, colors.green(archivo))
            }).catch(e => console.log(e));
        break;
    default:
        console.log('Comando no reconocido');
}
// console.log(argv);
// console.log(process.argv);



// let param = argv[2];
// let base = param.split('=')[1]
// console.log(argv.base);
// console.log(argv2);