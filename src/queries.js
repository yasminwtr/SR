const { response } = require('express')

const Pool = require('pg').Pool
const db = new Pool({
    host: 'localhost',
    database: 'user',
    user: 'postgres',
    password: '123',
    port: 5432
})

const getUsers = (request, response) => {
    db.query('select * from userdata order by name',
        (error, results) => {
            if (error) {
                throw error
            }
            response.status(200).json(results.rows)
        })
}

const getUserById = (request, response) => {
    const id = parseInt(request.params.id)

    db.query('select * from userdata where id = $1',
        [id], (error, results) => {
            if (error) {
                throw error
            }
            response.status(200).json(results.rows)
        })
}

const createUser = (request, response) => {
    try {
        const { name, password, fullName, birthDate } = request.body

        db.query('insert into userdata (name, password, fullName, birthDate)'
            + 'values($1, $2)', [name, password, fullName, birthDate],
            (error, results) => {
                if (error) {
                    throw error
                }
                response.status(201).send('Usuário adicionado')
            })
    } catch (error) {
        console.log("Erro: " + error)
        response.status(500).send({
            status: 500,
            message: 'Erro ao inserir o registro. ' + error
        })
    }
}

const updateUser = (request, response) => {
    try {
        const id = parseInt(request.params.id)
        const { name, password, fullName, birthDate } = request.body

        db.query('update userdata set name = $1, password = $2, fullName = $3, birthDate= $4 where id=$5', [name, password, fullName, birthDate, id],
            (error, results) => {
                if (error) {
                    throw error
                } response.status(201).send('Usuário atualizado com sucesso!')
            })

    } catch (error) {
        console.log('Erro: ' + error);
        response.status(400).send({
            status: 400,
            message: 'Erro ao atualizar o registro. ' + error
        })
    }
}

const deleteUser = (request, response) => {
    try {
        const id = parseInt(request.params.id)

        db.query('delete from userdata where id = $1', [id],
            (error, results) => {
                if (error) {
                    throw error
                } response.status(200).send('Usuário deletado com sucesso!')
            })

    } catch (error) {
        console.log('Erro: ' + error);
        response.status(400).send({
            status: 400,
            message: 'Erro ao deletar o usuário. ' + error
        })
    }
}

module.exports = {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
}