const _ = require('lodash')

// eslint-disable-next-line no-unused-vars
const dummy = (blogs) => {
  // ...
  return 1
}

const totalLikes = (blogs) => {
  return blogs.length === 0
    ? 0
    : blogs.reduce((sum,blog) => {
      return sum + blog.likes
    },0)
}

const mostLikes = (blogs) => {
  return blogs.reduce((mostLikes,blog) => {
    return blog.likes>mostLikes
      ? blog.likes
      : mostLikes
  },0)
}

const favoriteBlog = (blogs) => {
  const mostLikesNumber = mostLikes(blogs)
  return blogs.filter((blog) => {
    return blog.likes === mostLikesNumber
  })

}

const mostBlogsAuthor = (blogs) => {

  if(blogs.length===0){
    throw new Error('Need blogs array to not be empty')
  }

  const authors = _.map(_.uniqBy(blogs, 'author'),(blog) => (blog.author))
  const blogCounts = _.map(authors,(authorName) => (
    {
      author: authorName,
      blogs:_.filter(blogs,(blog) => {
        return blog.author === authorName
      }).length
    }
  ))
  return _.maxBy(blogCounts, (blogCount) => (blogCount.blogs))

}

module.exports = {
  dummy,
  totalLikes,
  mostLikes,
  favoriteBlog,
  mostBlogsAuthor
}