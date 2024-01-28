const supertest = require('supertest')
const mongoose = require('mongoose')
const app = require('../app')
const api = supertest(app)
const helper = require('./test_helper')
const Blog = require('../models/blog')


beforeEach(async () => {
  await Blog.deleteMany({})
  await Blog.insertMany(helper.initialBlogs)

  // const blogObjects = helper.initialBlogs
  //   .map(blog => new Blog(blog))
  // const promiseArray = blogObjects.map(blog => blog.save())
  // await Promise.all(promiseArray)
})

describe('when there is initially some blogs saved', () => {


  test('all blogs are returned', async () => {
    const response = await api.get('/api/blogs')
    expect(response.body).toHaveLength(helper.initialBlogs.length)
  })

  test('blogs have id as property and not _id', async () => {
    const response = await api.get('/api/blogs')

    expect(response.body[0].id).toBeDefined()
  })

  test('a specific blog is within the returned blogs', async () => {
    const response = await api.get('/api/blogs')

    const titles = response.body.map(r => r.title)

    expect(titles).toContain('Blog post A')

  })

})

describe('addition of a new blog', () => {

  test('new blog is created successfully', async () => {
    const newBlog = {
      title: 'A new blog for this test',
      author: 'Jane Smith',
      url: 'Url for test blog',
      likes: 5
    }

    await api
      .post('/api/blogs')
      .send(newBlog)
      .expect(201)
      .expect('Content-Type', /application\/json/)

    const response = await api.get('/api/blogs')
    expect(response.body).toHaveLength(helper.initialBlogs.length+1)

    const titles = response.body.map(r => r.title)
    expect(titles).toContain('A new blog for this test')
    // blogsResult

  })

  test('adding blog with no likes defaults to 0', async () => {
    const newBlog = {
      title: 'A newer blog with no likes entry',
      author: 'Smith Jane',
      url: 'Url for blog with no likes'
    }

    await api
      .post('/api/blogs')
      .send(newBlog)
      .expect(201)
      .expect('Content-Type', /application\/json/)

    const response = await api.get('/api/blogs')

    const titles = response.body.map(r => r.title)
    expect(titles).toContain('A newer blog with no likes entry')

    const zeroLikesBlog = response.body.filter(b => (b.title === 'A newer blog with no likes entry'))

    expect(zeroLikesBlog[0].likes).toEqual(0)

  })

  test('adding blog with no title does not add', async () => {
    const newBlog = {
      author: 'Author who hates titles',
      url: 'Url for blog with no title',
      likes: 5
    }

    await api
      .post('/api/blogs')
      .send(newBlog)
      .expect(400)

    const response = await api.get('/api/blogs')
    expect(response.body).toHaveLength(helper.initialBlogs.length)

  })

})

describe('deletion of a blog', () => {

  test('succeeds with a status code 204 if id is valid', async() => {

    const blogsAtStart = await helper.blogsInDb()
    const blogToDelete = await blogsAtStart[0]

    await api
      .delete(`/api/blogs/${blogToDelete.id}`)
      .expect(204)

    const blogsAtEnd = await helper.blogsInDb()

    expect(blogsAtEnd).toHaveLength(
      helper.initialBlogs.length-1
    )

    const titles = blogsAtEnd.map(r => r.title)

    expect(titles).not.toContain(blogToDelete.title)

  })
  test('deleting a blog not in database doesnt remove a blog', async() => {

    const blogsAtStart = await helper.blogsInDb()

    // hackily generate an ID not in the database
    var idNotInDB = new mongoose.Types.ObjectId().toString()
    const idsInDB = blogsAtStart.map(r => r.id)
    while(idNotInDB in idsInDB){
      idNotInDB = new mongoose.Types.ObjectId().toString()
    }

    await api
      .delete(`/api/blogs/${idNotInDB}`)
      .expect(204)

    const blogsAtEnd = await helper.blogsInDb()

    expect(blogsAtEnd).toHaveLength(
      helper.initialBlogs.length
    )

  })

})


describe('updating a blog', () => {

  test('succeeds when updating an existing blog', async() => {

    const blogsAtStart = await helper.blogsInDb()
    const blogToBeUpdated = blogsAtStart[0]

    blogToBeUpdated.likes = blogToBeUpdated.likes + 1
    blogToBeUpdated.title = blogToBeUpdated.title + ' the second coming'
    blogToBeUpdated.author = 'Actually it was Steve'

    await api
      .put(`/api/blogs/${blogToBeUpdated.id}`)
      .send(blogToBeUpdated)
      .expect(200)
      .expect('Content-Type', /application\/json/)

    const blogsAtEnd = await helper.blogsInDb()
    expect(blogsAtEnd).toHaveLength(helper.initialBlogs.length)

    const titles = blogsAtEnd.map(r => r.title)
    expect(titles).toContain(helper.initialBlogs[0].title + ' the second coming')

    const authors = blogsAtEnd.map(r => r.author)
    expect(authors).toContain('Actually it was Steve')

  })

})


// describe('deletion of a blog', () => {
//   test('succeeds with status code 204 if id is valid', async () => {
//     const blogsInitial = await helper.
//   })
// })

afterAll(async () => {
  await mongoose.connection.close()
})

