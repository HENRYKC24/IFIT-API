//configure environment variable
require("dotenv").config();

const object = {
    connectionLimit: 20,
    host: process.env.CLOUD_MYSQL_HOST,
    user: process.env.CLOUD_MYSQL_USER,
    password: process.env.CLOUD_MYSQL_PASSWORD,
    database: process.env.CLOUD_MYSQL_DATABASE,
}
module.exports = object;
