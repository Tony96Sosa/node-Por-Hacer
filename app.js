const { argv } = require('./config/yargs');
// console.log(argv);
const color = require('colors');
const porHacer = require('./por-hacer/por-hacer');
let comando = argv._[0];
switch (comando) {
    case 'crear':
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        // console.log('Crear por hacer');
        break;
    case 'listar':
        let listado = porHacer.getListado(argv.descripcion);
        for (let tarea of listado) {
            console.log('===Por-Hacer===='.green);
            console.log(`Descripción: ${tarea.descripcion}`);
            console.log(`Estado: ${tarea.completado}`);
            console.log('================='.green);
        }
        // console.log('Mostrar todas las tareas por hacer');
        break;
    case 'actualizar':
        // console.log('Actualizar una tarea por hacer');
        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log(actualizado);
        break;
    case 'borrar':
        let borrado = porHacer.borrar(argv.descripcion);
        console.log(borrado);
        break;
    default:
        console.log('Se ingreso un comando incorrecto');
}