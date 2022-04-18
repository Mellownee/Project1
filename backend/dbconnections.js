//this is connects to my tables in postgres
//I MADE A NEW DATABASE TITLED project one to put the tables into

const Pool = require('pg').Pool;
const pool = new Pool({
    user:'postgres',
    host:'localhost',
    database:'projectone',
    //make sure your postgress password matches
    password:'password',
    port:5432
});

module.exports=pool;