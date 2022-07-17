const { response, request } = require('express')

const Pool = require('pg').Pool
const db = new Pool({
  host: 'localhost',
  database: 'postgres',
  user: 'postgres',
  password: 'yasmin',
  port: 5432
})

const getUserById = (request, response) => {
  const id = parseInt(request.params.id)

  db.query('select * from person where idperson = $1',
    [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
}

const getWorkerById = (request, response) => {
  const id = parseInt(request.params.id)

  db.query('select * from worker where idperson = $1',
    [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
}

const updateUser = (request, response) => {
  try {
    const id = parseInt(request.params.id)
    const { email, password, phoneNumber } = request.body

    db.query('update person set email = $1, pass = $2, phoneNumber =  $3 where idperson = $4',
      [email, password, phoneNumber, id],
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
    const idPerson = parseInt(request.params.id)

    if (!isNaN(idPerson)) {
      db.query('delete from person where idperson = $1', [idPerson],
        (error, results) => {
          if (error) {
            throw error
          } response.status(201).send('Usuário deletado com sucesso!')
        })

    } else {
      throw Error('Erro ao deletar o usuário. ID não existe!')

    }
  } catch (error) {
    console.log(error);
    response.status(400).send({
      status: 400,
      message: 'Erro ao deletar o usuário. ' + error
    })
  }
}

const postPerson = (request, response) => {
  try {
    const { name, email, password, phoneNumber } = request.body
    console.log('valores postPerson:', { name, email, password, phoneNumber });

    db.query('INSERT INTO person ( email, pass, fullName, phoneNumber ) values ($1, $2, $3, $4)',
      [email, password, name, phoneNumber], (error, results) => {
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
  db.query('SELECT * FROM service',
    (error, results) => {
      console.log('results', results);
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
}

const getUsers = (request, response) => {
  db.query('SELECT * FROM person',
    (error, results) => {
      console.log('results', results);
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
}

const getWorkers = (request, response) => {
  db.query('SELECT * FROM worker',
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
    const { idPerson, idService, descriptionService, priceService, city, localization, whatsapp } = request.body
    console.log('valores registerWorker:', { idPerson, idService, descriptionService, priceService, city, localization, whatsapp });

    db.query('INSERT INTO worker ( idPerson, idService, descriptionService, priceService, city, localization, whatsapp ) values ($1, $2, $3, $4, $5, $6, $7)',
      [idPerson, idService, descriptionService, priceService, city, localization, whatsapp], (error, results) => {
        console.log('Error', error);
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

const deleteWorkerService = (request, response) => {
  try {
    const idPerson = parseInt(request.params.id)
    const { idService } = request.body
    console.log('valores deleteWorkerService:', { idPerson, idService });
    console.log('request body', request.body)

    db.query('DELETE FROM worker WHERE idPerson = $1 and idService = $2',
      [idPerson, idService], (error, results) => {
        console.log('Error', error);
        response.status(201).send('Serviço removido com sucesso!')
      }
    )
  } catch (error) {
    console.log('Erro: ' + error);
    response.status(400).send({
      status: 400,
      message: 'Erro ao remover serviço. ' + error
    })
  }
}

const getWorkersByServiceId = (request, response) => {
  const { idService } = request.query
  console.log('getWorkersByServiceId', getWorkersByServiceId);
  db.query(`SELECT 
        idWorker, 
        worker.idPerson,
        person.idPerson,
        person.email, 
        person.fullname, person.phoneNumber,
        worker.idService,
        service.titleService,
        descriptionService,
        priceService,
        city,
        localization,
        whatsapp 
        FROM worker
        INNER JOIN
        service
        ON service.idService = worker.idService
        INNER JOIN 
        person 
        ON person.idPerson = worker.idPerson 
        WHERE worker.idService = $1`,
      [idService], (error, results) => {
      console.log('results', results);
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
}

const getServicesFromUser = (request, response) => {
  const idperson = parseInt(request.params.id)
  console.log('request.params',request.params);
  console.log('@@@@@!!!!!!!!!!!@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ getServicesFromUser', idperson, request);
  db.query(`SELECT 
              worker.idworker,
              person.fullname,
              phoneNumber,
              descriptionService,
              priceService,
              city,
              localization,
              whatsapp,
              titleservice,
              email
            FROM worker
            INNER JOIN person
            ON worker.idperson = person.idperson
            INNER JOIN service
            ON service.idservice = worker.idservice
            WHERE worker.idperson = $1`,
    [idperson], (error, results) => {
      console.log('results', results);
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
}

module.exports = {
  updateUser,
  deleteUser,
  getWorkersByServiceId,
  getWorkers,
  getWorkerById,
  postPerson,
  authenticate,
  getServices,
  registerWorker,
  getUsers,
  getUserById,
  deleteWorkerService,
  getServicesFromUser
}