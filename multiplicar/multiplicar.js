// Requerides
const fs = require('fs');
// Optionals
const colors = require('colors');

crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`EL valor ${base} no es un numero`);
            return;
        }
        if (!Number(limite)) {
            reject(`EL valor ${limite} no es un numero`);
            return;
        }

        let data = '';
        for (let i = 0; i <= limite; i++) {
            data += `${base} * ${ i } = ${base*i}\n`;
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(`tabla-${base}.txt`);
        });

    })
}

listarTabla = (base, limite) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`EL valor ${base} no es un numero`);
            return;
        }
        if (!Number(limite)) {
            reject(`EL valor ${limite} no es un numero`);
            return;
        }
        let data = '';
        for (let i = 0; i <= limite; i++) {
            data += (`${base} * ${ i } = ${base*i}\n`);
        }
        resolve(`${data}`);
    })
}

module.exports = {
    crearArchivo,
    listarTabla
}