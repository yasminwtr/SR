const { response } = require('express')

const Pool = require('pg').Pool
const db = new Pool({
  host: 'localhost',
  database: 'application_database',
  user: 'postgres',
  password: '123',
  port: 5432
})

const getWorkers = (request, response) => {
    db.query('select * from person',
        (error, results) => {
            if (error) {
                throw error
            }
            response.status(200).json(results.rows)
        })
}

// const getUserById = (request, response) => {
//   const id = parseInt(request.params.id)

//   db.query('select * from userdata where id = $1',
//     [id], (error, results) => {
//       if (error) {
//         throw error
//       }
//       response.status(200).json(results.rows)
//     })
// }

// const createUser = (request, response) => {
//   try {
//     const { name, password, fullName, birthDate } = request.body

//     db.query('insert into userdata (name, password, fullName, birthDate)'
//       + 'values($1, $2)', [name, password, fullName, birthDate],
//       (error, results) => {
//         if (error) {
//           throw error
//         }
//         response.status(201).send('Usuário adicionado')
//       })
//   } catch (error) {
//     console.log("Erro: " + error)
//     response.status(500).send({
//       status: 500,
//       message: 'Erro ao inserir o registro. ' + error
//     })
//   }
// }

// const updateUser = (request, response) => {
//   try {
//     const id = parseInt(request.params.id)
//     const { name, password, fullName, birthDate } = request.body

//     db.query('update userdata set name = $1, password = $2, fullName = $3, birthDate= $4 where id=$5', [name, password, fullName, birthDate, id],
//       (error, results) => {
//         if (error) {
//           throw error
//         } response.status(201).send('Usuário atualizado com sucesso!')
//       })

//   } catch (error) {
//     console.log('Erro: ' + error);
//     response.status(400).send({
//       status: 400,
//       message: 'Erro ao atualizar o registro. ' + error
//     })
//   }
// }

// const deleteUser = (request, response) => {
//   try {
//     const id = parseInt(request.params.id)

//     db.query('delete from userdata where id = $1', [id],
//       (error, results) => {
//         if (error) {
//           throw error
//         } response.status(200).send('Usuário deletado com sucesso!')
//       })

//   } catch (error) {
//     console.log('Erro: ' + error);
//     response.status(400).send({
//       status: 400,
//       message: 'Erro ao deletar o usuário. ' + error
//     })
//   }
// }

const postPerson = (request, response) => {
  try {
    const { name, email, about, password, phoneNumber } = request.body
    console.log('valores postPerson:', { name, email, about, password, phoneNumber });

    db.query('INSERT INTO person ( email, pass, fullName, phoneNumber, about ) values ($1, $2, $3, $4, $5)',
      [email, password, name, phoneNumber, about], (error, results) => {
        response.status(201).send('Usuário adicionado')
      }
    )
  } catch (error) {
    console.log('Erro: ' + error);
    response.status(400).send({
      status: 400,
      message: 'Erro ao adicionar usuário. ' + error
    })
  }
}

const authenticate = (request, response) => {
  try {
    const { email, password } = request.body
    console.log('valores authenticate:', { email, password });

    db.query('SELECT * FROM person WHERE email = $1 AND pass = $2',
      [email, password], (error, results) => {
        console.log('error:', error, 'results:', results);
        if (error || results.rowCount === 0) {
          return response.status(401).send({
            status: 401,
            message: 'Erro ao autenticar o usuário. ' + error
          })
        } response.status(200).send({ user: results.rows[0] })
      })
  } catch (error) {
    console.log('Erro @ authenticate: ' + error);
    response.status(500).send({
      status: 500,
      message: 'Erro ao autenticar o usuário. ' + error
    })
  }
}

const getServices = (request, response) => {
  console.log('getServices');
  db.query('select * from service',
    (error, results) => {
      console.log('results', results);
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
}

const registerWorker = (request, response) => {
  try {
    const { idPerson, idService, descriptionService, priceService } = request.body
    console.log('valores registerWorker:', { idPerson, idService, descriptionService, priceService });

    db.query('INSERT INTO worker ( idPerson, idService, descriptionService, priceService ) values ($1, $2, $3, $4)',
      [idPerson, idService, descriptionService, priceService], (error, results) => {
        console.log('Error',error);
        response.status(201).send('Trabalhador adicionado')
      }
    )
  } catch (error) {
    console.log('Erro: ' + error);
    response.status(500).send({
      status: 500,
      message: 'Erro ao adicionar trabalhador. ' + error
    })
  }
}

module.exports = {
  getWorkers,
//   getUserById,
//   createUser,
//   updateUser,
//   deleteUser,
  postPerson,
  authenticate,
  getServices,
  registerWorker
}