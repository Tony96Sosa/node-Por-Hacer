const fs = require('fs');
let listadoPorHacer = [];
const guardarDB = () => {
    let data = JSON.stringify(listadoPorHacer);
    fs.writeFile('db/data.json', data, (err) => {
        if (err) throw new Error('No se pudo grabar', err);
    });
}

const cargarDB = () => {
    try { //try and catch para manejar los erros de la solicitud a la DB
        listadoPorHacer = require('../db/data.json'); //me trae la base de datos Json a la variable de Array
    } catch (error) {
        listadoPorHacer = []; // si la DB esta vacia lo inicializa con un formato Json
    }
}

const crear = (descripcion) => {
    cargarDB(); // cargo la base datos primero para que el siguiente objeto se agregue al json que ya tengo en la DB
    let porHacer = {
        descripcion,
        completado: false,
    };
    listadoPorHacer.push(porHacer);
    guardarDB();
    return porHacer;
}
const getListado = () => {
    cargarDB();
    return listadoPorHacer;
}
const actualizar = (descripcion, completado = true) => {
    cargarDB();
    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion); // me devuelve la posicion donde encontro el elemento dentro del array sino me devuelve un -1
    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardarDB();
        return true;
    } else {
        return false;
    }
}
const borrar = (descripcion) => {
    cargarDB(); // alternativa propia
    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);
    if (index >= 0) {
        listadoPorHacer.splice(index, 1); // la funcion splice recibe el indice y el parametro 1 para borrar lo que este en esa posicion del array
        guardarDB();
        return true;
    } else {
        return false;
    }
    //otra alternativa
    // let nuevoListado = listadoPorHacer.filter(tarea =>{ // filter lo que hace es generar un nuevo array sin el elemento que estas buscando
    //     return tarea.descripcion !== descripcion;
    // })
    // if(nuevoListado.length===listadoPorHacer.length){
    //     return false;
    // }else{
    //     listadoPorHacer = nuevoListado;
    //     guardarDB();
    //     return true;
    // }
}
module.exports = {
    crear,
    getListado,
    actualizar,
    borrar,
}