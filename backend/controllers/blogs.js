const blogsRouter = require('express').Router()
const Blog = require('../models/blog')
const User = require('../models/user')
// const logger = require('../utils/logger')

const jwt = require('jsonwebtoken')



blogsRouter.get('/', async (request, response) => {
  const blogs = await Blog.find({})
    .populate('user', { username: 1, name:1, id:1 })
  response.json(blogs)
})


blogsRouter.post('/', async (request, response) => {

  // const decodedToken = jwt.verify(getTokenFrom(request), process.env.SECRET)
  const decodedToken = jwt.verify(request.token, process.env.SECRET)
  if(!decodedToken.id){
    return response.status(401).json({ error: 'token invalid' })
  }
  const user = await User.findById(decodedToken.id)

  const newBlog = new Blog({
    title: request.body.title,
    author: request.body.author,
    url: request.body.url,
    likes: request.body.likes,
    user: user.id
  })

  const savedBlog = await newBlog.save()

  user.blogs = user.blogs.concat(savedBlog._id)

  await user.save()

  response.status(201).json(savedBlog)
})

blogsRouter.delete('/:id', async (request,response) => {
  await Blog.findByIdAndRemove(request.params.id)
  response.status(204).end()
})

blogsRouter.put('/:id', async (request, response, next) => {

  const blog = new Blog(request.body)

  await Blog.findByIdAndUpdate(request.params.id, blog, { new: true })
    .then(updatedBlog => {
      response.json(updatedBlog)
    })
    .catch(error => next(error))

})

module.exports = blogsRouter