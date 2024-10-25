const {registrar, leer} = require('./operaciones.js')
const process = require('process')

const elementos = process.argv[2];
const nombre = process.argv[3];
const edad = process.argv[4];
const animal = process.argv[5];
const color = process.argv[6];
const enfermedad = process.argv[7];

if(elementos === "registrar"){
    registrar(nombre, edad, animal, color, enfermedad)
}

if(elementos === "leer"){
    leer()
}
