const fs = require('fs');

const archivo = 'citas.json'
function registrar(nombre, edad, animal, color, enfermedad) {
    try {
        let data = fs.readFileSync(archivo, 'utf-8');
        cita = JSON.parse(data);
        cita.push({nombre, edad, animal, color, enfermedad})
        fs.writeFileSync(archivo, JSON.stringify(cita));
        console.log("Cita guardada con exito")
    } catch (error) {
        console.error('Error al guardar', error)
    }
};

function leer() {
    const data = fs.readFileSync(archivo, 'utf-8');
    datos = JSON.parse(data);
    console.log(datos)
}

module.exports = { registrar, leer }