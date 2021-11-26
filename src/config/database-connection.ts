import { createConnection} from "typeorm";


createConnection({
    username: 'root',
    password: '',
    host: 'localhost',
    database: 'truequelibros',
    type: "mysql",
    port: 3306,
    synchronize: true,
    entities: [
        "model/**/*.ts"
    ],
}).then((connection) => {
    console.log('Connection successfull');

});
