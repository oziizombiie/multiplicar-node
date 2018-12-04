//requireds
const fs = require('fs')

let crearArchivo = (base) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`El valor introducido ${ base } no es un número`)
            return;
        }

        let j = '';
        for (let i = 1; i <= 10; i++) {
            j += `${base} * ${i} = ${base * i}\n`
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, `${j}`, (err) => {
            if (err) throw reject(err)
            else
                resolve(`tabla-${base}.txt`)
        });

    });
}

module.exports = {
    crearArchivo

}