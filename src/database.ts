import * as mysql from 'mysql2/promise'

// singleton
export class Database {

    private static instance: mysql.Pool;

    private constructor(){}

    public static getInstance(): mysql.Pool{
        if(!Database.instance) {
            Database.instance = mysql.createPool({
                host: process.env.MYSQL_HOST,
                user: process.env.MYSQL_USER,
                password: process.env.MYSQL_PASSWORD,
                database: process.env.MYSQL_DATABASE,
                port: parseInt(process.env.MYSQL_PORT), // a porta que está sendo exposta pra minha máquina, já a "3306" é a porta que expôe para o container
                waitForConnections: true,
                connectionLimit: 10,
                queueLimit: 0,
            });
        }

        return Database.instance;
    }
}

// criando uma nova conexão com o banco
// 1000 usuários - 1000 conexões

// pool - X conexões