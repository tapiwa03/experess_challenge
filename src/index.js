import express from 'express'
import cors from 'cors'
import { indexRoute } from './routes'
import { generateRandomUsers } from './utils'

const app = express()
app.use(cors())
app.use('', indexRoute)
app.listen(3000, () => {
  generateRandomUsers()
  console.log('Listening on port 3000!')
})
