import express from 'express'
import cors from 'cors'
import { indexRoute } from './routes'
import { generateRandomUsers } from './utils'

const app = express()
app.use(cors())
app.use('', indexRoute)
generateRandomUsers()

export default app
