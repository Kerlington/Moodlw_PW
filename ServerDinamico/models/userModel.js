const pool = require('./connection')


module.exports.getAlu = async() => {
    try {
        const sql = "SELECT * FROM Aluno"
        let result = await pool.query(sql)
        return result
    } catch (error) {
        console.error(error)
        return error
    }
}

module.exports.getDis = async() => {
    try {
        const sql = "SELECT * FROM Disciplina"
        let result = await pool.query(sql)
        return result
    } catch (error) {
        console.error(error)
        return error
    }
}
module.exports.getTur = async() => {
    try {
        const sql = "SELECT * FROM Turma"
        let result = await pool.query(sql)
        return result
    } catch (error) {
        console.error(error)
        return error
    }
}
module.exports.getInsc = async() => {
    try {
        const sql = "SELECT * FROM Inscricao"
        let result = await pool.query(sql)
        return result
    } catch (error) {
        console.error(error)
        return error
    }
}

module.exports.getUser = async(id) => {
    try {
        const sql = "SELECT * FROM USER WHERE USER_ID = ?"
        let result = await pool.query(sql,[id])
        return result
    } catch (error) {
        console.error(error)
        return error
    }
}