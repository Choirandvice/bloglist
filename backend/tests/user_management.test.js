const bcrypt = require('bcrypt')
const User = require('../models/user')
const helper = require('./test_helper')
const supertest = require('supertest')
const app = require('../app')
const api = supertest(app)
const mongoose = require('mongoose')
mongoose.set('bufferTimeoutMS', 30000)
const logger = require('../utils/logger')



beforeEach(async () => {

  await User.deleteMany({})

  logger.debug('__saving_user___')


  for (const eachUser of helper.initialUsers){
    const passwordHash = await bcrypt.hash(eachUser.password, 10)
    const user = new User({ username:eachUser.username, name:eachUser.name, passwordHash })
    await user.save()

    logger.debug('__saved_a_user___')

  }

  logger.debug('__saved_users___')

},100000)


describe('user creation', () => {

  test('creation succeeds with a fresh username', async () => {
    const usersAtStart = await helper.usersInDb()

    const newUser = {
      username: 'mluukkai',
      name: 'Matti Luukkainen',
      password: 'salainen',
    }

    await api
      .post('/api/users')
      .send(newUser)
      .expect(201)
      .expect('Content-Type', /application\/json/)

    const usersAtEnd = await helper.usersInDb()
    expect(usersAtEnd).toHaveLength(usersAtStart.length + 1)

    const usernames = usersAtEnd.map(u => u.username)
    expect(usernames).toContain(newUser.username)
  },100000)

  test('creation fails with non-unique username', async () => {
    const usersAtStart = await helper.usersInDb()

    const newUser = {
      username: 'root',
      name: 'Doppleganger',
      password: 'sneaky',
    }

    await api
      .post('/api/users')
      .send(newUser)
      .expect(400)

    const usersAtEnd = await helper.usersInDb()
    expect(usersAtEnd).toHaveLength(usersAtStart.length)

  },100000)

  test('creation fails with too short a username', async () => {
    const usersAtStart = await helper.usersInDb()

    const newUser = {
      username: 'jo',
      name: 'Josephine Buckminster',
      password: 'password01',
    }

    await api
      .post('/api/users')
      .send(newUser)
      .expect(400)

    const usersAtEnd = await helper.usersInDb()
    expect(usersAtEnd).toHaveLength(usersAtStart.length)

  },100000)


  test('creation fails with no content', async () => {
    const usersAtStart = await helper.usersInDb()

    const newUser = {
      username: 'insecurity',
      name: 'John Smith',
    }

    await api
      .post('/api/users')
      .send(newUser)
      .expect(400)

    const usersAtEnd = await helper.usersInDb()
    expect(usersAtEnd).toHaveLength(usersAtStart.length)

  },100000)


  test('creation fails with no username', async () => {
    const usersAtStart = await helper.usersInDb()

    const newUser = {
      name: 'John Smith',
      password: 'aijshdkjahw',
    }

    await api
      .post('/api/users')
      .send(newUser)
      .expect(400)

    const usersAtEnd = await helper.usersInDb()
    expect(usersAtEnd).toHaveLength(usersAtStart.length)

  },100000)


  test('creation fails with no password', async () => {
    const usersAtStart = await helper.usersInDb()

    const newUser = {
      username: 'insecurity',
      name: 'John Smith',
    }

    await api
      .post('/api/users')
      .send(newUser)
      .expect(400)

    const usersAtEnd = await helper.usersInDb()
    expect(usersAtEnd).toHaveLength(usersAtStart.length)

  },100000)


  test('creation fails with too short a password', async () => {
    const usersAtStart = await helper.usersInDb()

    const newUser = {
      username: 'insecurity',
      name: 'John Smith',
      password: 'pw',
    }

    await api
      .post('/api/users')
      .send(newUser)
      .expect(400)

    const usersAtEnd = await helper.usersInDb()
    expect(usersAtEnd).toHaveLength(usersAtStart.length)

  },100000)
})

describe('user login', () => {

  test('login succeeds with correct login data', async () => {

    const userLogin = {
      username: helper.initialUsers[0].username,
      password: helper.initialUsers[0].password
    }

    const result = await api
      .post('/api/login')
      .send(userLogin)
      .expect(200)


    expect(result.body.token).toBeDefined()

  },100000)

  test('login fails with bad login data', async () => {


    const userLogin = {
      username: helper.initialUsers[0].username,
      password: 'jhgkjhgkjhg'
    }

    await api
      .post('/api/login')
      .send(userLogin)
      .expect(401)




  },100000)


})


afterAll(async () => {
  await mongoose.connection.close()
})