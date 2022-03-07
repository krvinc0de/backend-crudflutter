const mongose = require('mongoose');
const db = 'apiClients'
const dbConection = async() => {
    try {
        console.log('Esperando la conexion con el servicio mongod');
        await mongose.connect(`mongodb://localhost/${db}`);
        console.log('Conectado a ' + db);

    } catch (error) {

        throw new Error(error);

    }
}

module.exports = {
    dbConection
};