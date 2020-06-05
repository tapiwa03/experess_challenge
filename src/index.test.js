import supertest from 'supertest'
import http from 'http'
import app from './app'
import {
  describe,
  it,
  expect,
  beforeAll,
  afterAll
} from 'jest-without-globals'

describe('Test Endpoints', () => {
  let server
  let request

  beforeAll((done) => {
    server = http.createServer(app)
    server.listen(done)
    request = supertest(server)
  })

  afterAll((done) => {
    server.close(done)
  })

  it('returns 200 for root path', async () => {
    const response = await request.get('/')
    expect(response.status).toBe(200)
  })

  it('returns an array of users', async () => {
    const response = await request.get('/users')
    expect(response.body.length).toBeGreaterThan(5)
  })

  it('returns an array with a single user when id passed', async () => {
    const response = await request.get('/users/1')
    expect(response.body.length).toBe(1)
  })

  it('returns 404 on non-existent get routes', async () => {
    const response = await request.get('/nothing')
    expect(response.status).toBe(404)
  })

  it('returns 405 on disallowed methods', async () => {
    let response = await request.post('/')
    expect(response.status).toBe(405)

    response = await request.put('/')
    expect(response.status).toBe(405)

    response = await request.patch('/')
    expect(response.status).toBe(405)

    response = await request.delete('/')
    expect(response.status).toBe(405)
  })
})
