import { createConnection } from "typeorm";

createConnection({
    username: 'root',
    password: 'root',
    host: 'localhost',
    database: 'truequelibro',
    type: "mysql",
    port: 3306,
    synchronize: true,
    entities: [
        "src/model/**/*.ts"
    ],
}).then((connection) => {
    console.log('Connection successfull');

});
