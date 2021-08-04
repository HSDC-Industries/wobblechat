const request = require('supertest');
const server = 'http://localhost:3000';

describe('Route integration', () => {
  describe('/api/hello', () => {
    describe('GET', () => {
      it('responds with 200 status and application/json content type', () => {
        return request(server)
          .get('/api/hello')
          .expect('Content-Type', /application\/json/)
          .expect(200);
      })
    })
  })

  //test /api/users - POST to /signup, POST to /login, POST to /logout
  describe('/api/users', () => {
    xdescribe('/signup', () => {
      it('responds with 200 status and application/json content type', () => {
        return request(server)
          .post('/api/users/signup')
          //to test signup, need to create new username
          .send({ username: 'annie', password: 'test' })
          .expect('Content-Type', /application\/json/)
          .expect(200);
      })
    })
    describe('/login', () => {
      it('responds with 200 status and application/json', () => {
        return request(server)
          .post('/api/users/login')
          .send({ username: 'annie', password: 'test' })
          .expect('Content-Type', /application\/json/)
          .expect(200);
      })
    })
    describe('/logout', () => {
      it('responds with 200 status', () => {
        return request(server)
          .post('/api/users/login')
          .send({ username: 'annie', password: 'test' })
          .expect(200);
      })
    })
  })
  //test /api/questions - GET to /, POST to /, GET to /:id
  describe('/api/questions', () => {
    describe('GET /', () => {
      it('responds with 200 status and application/json', () => {
        return request(server)
          .get('/api/questions')
          .expect('Content-Type', /application\/json/)
          .expect(200);
      })
    })
    xdescribe('POST /', () => {
      it('responds with 200 status and application/json', () => {
        return request(server)
          .post('/api/questions')
          .set('Cookie', ['ssid=1'])
          .send({ title: 'It\'s a test!', description: '...right?' })
          .expect('Content-Type', /application\/json/)
          .expect(200);
      })
    })
    describe('GET /:id', () => {
      it('responds with 200 status and application/json', () => {
        return request(server)
          .get('/api/questions/4')
          .expect('Content-Type', /application\/json/)
          .expect(200);
      })
    })
  })
  //test /api/messages - POST to /
  describe('/api/messages', () => {
    it('responds with 200 status and application/json', () => {
      return request(server)
        .post('/api/messages')
        .send({ questionId: 7, content: 'answer testtest' })
        .expect('Content-Type', /application\/json/)
        .expect(200);
    })
  })
})