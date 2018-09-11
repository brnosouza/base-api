import {Sequelize} from 'sequelize-typescript';
import Path = require('path');

const ENV = process.env;


const dbCon = () => {
    console.log('Connect to DB...');
    return new Sequelize({
        host: ENV.DATABASE_HOST,
        database: ENV.DATABASE_NAME,
        dialect: ENV.DATABASE_TYPE,
        username: ENV.DATABASE_USER,
        password: ENV.DATABASE_PASSWORD,
        port: parseInt(ENV.DATABASE_PORT, 10),
        modelPaths: [Path.join(__dirname, '..', '/models')]
    });
};

export default dbCon;