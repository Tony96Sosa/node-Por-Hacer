const argv = require('yargs')
    .command('crear', 'Crea un Por hacer', {
        descripcion: {
            demand: true,
            alias: 'd',
            desc: 'Descripcion de la tarea por hacer',
        }
    })
    .command('listar', 'Lista las tares Por hacer', {

    })
    .command('actualizar', 'Actualiza una Por hacer', {
        descripcion: {
            demand: true,
            alias: 'd',
            desc: 'Descripcion de la tarea por hacer',
        },
        completado: {
            alias: 'c',
            default: true,
            desc: 'Marca como completado o pendiente la tarea por hacer',
        }
    })
    .command('borrar', 'Borra una tarea Por hacer', {
        descripcion: {
            demand: true,
            alias: 'd',
            desc: 'Descripcion de la tarea por hacer',
        }
    })
    .help()
    .argv;

module.exports = {
    argv
}