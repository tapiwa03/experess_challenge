import express from 'express'
import { getUsers, getSingleUser } from './usersController'

const router = express.Router()

router.get('/', (req, res) => {
  res.send(
    `Hello there! Welcome to my simple API.
    There are 2 routes available. "/users" will return a list of all users.
    "/users/{ID}" will return a specific user by their ID`
  )
})

router.get('/users', (req, res) => {
  const users = getUsers()
  console.log(users)
  res.send(users)
})

router.get('/users/:id', (req, res) => {
  res.send(getSingleUser(req.params.id))
})

router.get('*', (req, res) => {
  res.status(404).send('This route does not exist')
})

router.post('*', (req, res) => {
  res.status(405).send('This method is not allowed')
})

router.put('*', (req, res) => {
  res.status(405).send('This method is not allowed')
})

router.patch('*', (req, res) => {
  res.status(405).send('This method is not allowed')
})

router.delete('*', (req, res) => {
  res.status(405).send('This method is not allowed')
})

export { router as indexRoute }
