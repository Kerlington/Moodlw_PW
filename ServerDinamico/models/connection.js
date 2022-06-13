const util = require ('util')
const mysql = require('mysql')

const pool = mysql.createPool({
    host: "remotemysql.com",
    user:"qCqfuCSt1E",
    password: "r67I0BFF31",
    database: "qCqfuCSt1E",
    connectionLimit:10
})

pool.getConnection((err, connection)=>{
    if (err){
        console.error(err.code)
    }
    if(connection){
        connection.release()
    }

    return
})

pool.query = util.promisify(pool.query)
module.exports = pool

