const Blog = require('../models/blog')
const User = require('../models/user')

const initialBlogs = [
  {
    title: 'Blog post A',
    author: 'John Smith',
    url: 'URL12314',
    likes: 0
  },
  {
    title: 'Blog post B',
    author: 'Smith John',
    url: 'URL14123',
    likes: 0
  }
]

const initialUsers = [

  {
    username: 'root',
    name: 'Mr John Smith',
    password: 'password123'
  },
  {
    username: 'fueccoco',
    name: 'Mr John Fueccoco',
    password: 'superinsecurepassword'
  },
  {
    username: 'mawile',
    name: 'Ms Mawile',
    password: 'anotherinsecurepassword'
  }
]


// returns all blogs in DB, force wait
const blogsInDb = async() => {
  const blogs = await Blog.find({})
  return blogs.map(blog => blog.toJSON())
}

const usersInDb = async () => {
  const users = await User.find({})
  return users.map(u => u.toJSON())
}


module.exports = {
  initialBlogs, initialUsers, blogsInDb, usersInDb
}