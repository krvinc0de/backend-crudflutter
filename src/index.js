const app = require('./app');
const { dbConection } = require('./database');

async function main(){
        //conectarse a db
        await dbConection();
        //iniico sv
        await app.listen(4000);
}

main();