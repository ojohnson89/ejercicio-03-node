//requireds
//const fs = require('fs'); //paquete nativo
// const fs = require('express'); //paquete importado
//const fs = require('./fs'); //archivos que nosotros creamos

const { argv } = require('./config/yargs');
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar')

switch (argv._[0]) {
    case 'listar':
        listarTabla(argv.base, argv.limite)

        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${archivo}`))
            .catch(e => console.log(e));
        break;
}