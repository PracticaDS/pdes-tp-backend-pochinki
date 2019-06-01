import request from 'supertest'
import app from '../server'

describe('API', () => {

  it('requesting /api gives a status ok', (done) => {
    request(app)
      .get('/api/')
      .expect(200, { status: 'ok' }, done)
  })

  it('get empty user list', (done) => {
    request(app)
      .get('/api/users')
      .expect([], done)
  })

  it('saving new user and retreiving it', (done) => {
    request(app)
      .post('/api/users')
      .send({ username: 'gasvel' })
      .expect(200, done)
    request(app)
      .get('/api/users/1')
      .expect(200, done)
  })

})
