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

module.exports = {
  dummy,
  totalLikes,
  mostLikes,
  favoriteBlog
}