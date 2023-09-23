const listHelper = require('../utils/list_helper')

test('dummy returns one', () => {
  const blogs = []

  const result = listHelper.dummy(blogs)
  expect(result).toBe(1)
})

describe('total likes', () => {

  const listWithOneBlog = [
    {
      _id: '5a422aa71b54a676234d17f8',
      title: 'Go To Statement Considered Harmful',
      author: 'Edsger W. Dijkstra',
      url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
      likes: 5,
      __v: 0
    }
  ]

  test('of a single blog', () => {
    expect(listHelper.totalLikes(listWithOneBlog)).toBe(listWithOneBlog[0].likes)
  })


  const listWithManyBlogs = [
    {
      _id: '5a422aa71b54a676234d17f8',
      title: 'Go To Statement Considered Harmful1',
      author: 'Edsger W. Dijkstra',
      url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
      likes: 5,
      __v: 0
    },
    {
      _id: '5a422aa71b54a676234d17f7',
      title: 'Go To Statement Considered Harmful2',
      author: 'Edsger W. Dijkstra',
      url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
      likes: 4,
      __v: 0
    },
    {
      _id: '5a422aa71b54a676234d17f6',
      title: 'Go To Statement Considered Harmful3',
      author: 'Edsger W. Dijkstra',
      url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
      likes: 7,
      __v: 0
    },
    {
      _id: '5a422aa71b54a676234d17f5',
      title: 'Go To Statement Considered Harmful4',
      author: 'Edsger W. Dijkstra',
      url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
      likes: 3,
      __v: 0
    }
    ,    {
      _id: '5a422aa71b54a676234d17f4',
      title: 'Go To Statement Considered Harmful5',
      author: 'Edsger W. Dijkstra',
      url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
      likes: 10,
      __v: 0
    }
  ]
  test('of five blogs is correct', () => {
    expect(listHelper.totalLikes(listWithManyBlogs)).toBe(29)
  })

  test('of no blogs is zero', () => {
    expect(listHelper.totalLikes([])).toBe(0)
  })

})

describe('highest number of likes', () => {

  const listWithOneBlog = [
    {
      _id: '5a422aa71b54a676234d17f8',
      title: 'Go To Statement Considered Harmful',
      author: 'Edsger W. Dijkstra',
      url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
      likes: 5,
      __v: 0
    }
  ]

  test('of a single blog', () => {
    expect(listHelper.mostLikes(listWithOneBlog)).toBe(listWithOneBlog[0].likes)
  })


  const listWithManyBlogs = [
    {
      _id: '5a422aa71b54a676234d17f8',
      title: 'Go To Statement Considered Harmful1',
      author: 'Edsger W. Dijkstra',
      url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
      likes: 5,
      __v: 0
    },
    {
      _id: '5a422aa71b54a676234d17f7',
      title: 'Go To Statement Considered Harmful2',
      author: 'Edsger W. Dijkstra',
      url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
      likes: 4,
      __v: 0
    },
    {
      _id: '5a422aa71b54a676234d17f6',
      title: 'Go To Statement Considered Harmful3',
      author: 'Edsger W. Dijkstra',
      url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
      likes: 7,
      __v: 0
    },
    {
      _id: '5a422aa71b54a676234d17f5',
      title: 'Go To Statement Considered Harmful4',
      author: 'Edsger W. Dijkstra',
      url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
      likes: 10,
      __v: 0
    }
    ,    {
      _id: '5a422aa71b54a676234d17f4',
      title: 'Go To Statement Considered Harmful5',
      author: 'Edsger W. Dijkstra',
      url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
      likes: 3,
      __v: 0
    }
  ]

  test('of five blogs is correct', () => {
    expect(listHelper.mostLikes(listWithManyBlogs)).toBe(10)
  })

  test('of no blogs is zero', () => {
    expect(listHelper.mostLikes([])).toBe(0)
  })
})

describe('favorite blog', () => {
  const listWithOneBlog = [
    {
      _id: '5a422aa71b54a676234d17f8',
      title: 'Go To Statement Considered Harmful',
      author: 'Edsger W. Dijkstra',
      url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
      likes: 5,
      __v: 0
    }
  ]

  test('of a single blog', () => {
    expect((listHelper.favoriteBlog(listWithOneBlog))[0]).toEqual(listWithOneBlog[0])
  })


  const listWithManyBlogs = [
    {
      _id: '5a422aa71b54a676234d17f8',
      title: 'Go To Statement Considered Harmful1',
      author: 'Edsger W. Dijkstra',
      url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
      likes: 5,
      __v: 0
    },
    {
      _id: '5a422aa71b54a676234d17f7',
      title: 'Go To Statement Considered Harmful2',
      author: 'Edsger W. Dijkstra',
      url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
      likes: 4,
      __v: 0
    },
    {
      _id: '5a422aa71b54a676234d17f6',
      title: 'Go To Statement Considered Harmful3',
      author: 'Edsger W. Dijkstra',
      url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
      likes: 7,
      __v: 0
    },
    {
      _id: '5a422aa71b54a676234d17f5',
      title: 'Go To Statement Considered Harmful4',
      author: 'Edsger W. Dijkstra',
      url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
      likes: 10,
      __v: 0
    }
    ,    {
      _id: '5a422aa71b54a676234d17f4',
      title: 'Go To Statement Considered Harmful5',
      author: 'Edsger W. Dijkstra',
      url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
      likes: 3,
      __v: 0
    }
  ]

  test('of five blogs is correct', () => {
    expect((listHelper.favoriteBlog(listWithManyBlogs))[0]).toEqual(listWithManyBlogs[3])
  })

  const listWithManyBlogsTwoEqualLikes = [
    {
      _id: '5a422aa71b54a676234d17f8',
      title: 'Go To Statement Considered Harmful1',
      author: 'Edsger W. Dijkstra',
      url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
      likes: 5,
      __v: 0
    },
    {
      _id: '5a422aa71b54a676234d17f7',
      title: 'Go To Statement Considered Harmful2',
      author: 'Edsger W. Dijkstra',
      url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
      likes: 10,
      __v: 0
    },
    {
      _id: '5a422aa71b54a676234d17f6',
      title: 'Go To Statement Considered Harmful3',
      author: 'Edsger W. Dijkstra',
      url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
      likes: 7,
      __v: 0
    },
    {
      _id: '5a422aa71b54a676234d17f5',
      title: 'Go To Statement Considered Harmful4',
      author: 'Edsger W. Dijkstra',
      url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
      likes: 10,
      __v: 0
    }
    ,    {
      _id: '5a422aa71b54a676234d17f4',
      title: 'Go To Statement Considered Harmful5',
      author: 'Edsger W. Dijkstra',
      url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
      likes: 3,
      __v: 0
    }
  ]

  test('of five blogs two equal most likes is correct', () => {
    const result = listHelper.favoriteBlog(listWithManyBlogsTwoEqualLikes)

    expect(result).toContainEqual(listWithManyBlogsTwoEqualLikes[3])
    expect(result).toContainEqual(listWithManyBlogsTwoEqualLikes[1])
    expect(result.length).toBe(2)

  })


  test('of no blogs is zero', () => {
    expect(listHelper.favoriteBlog([])).toEqual([])
  })
})

describe('most blogged author', () => {

  const listWithOneBlog = [
    {
      _id: '5a422aa71b54a676234d17f8',
      title: 'Go To Statement Considered Harmful',
      author: 'Edsger W. Dijkstra',
      url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
      likes: 5,
      __v: 0
    }
  ]

  test('of a single blog', () => {

    const expected = {
      author:'Edsger W. Dijkstra',
      blogs:1
    }

    expect((listHelper.mostBlogsAuthor(listWithOneBlog))).toEqual(expected)
  })

  const fiveBlogs = [
    {
      _id: '5a422aa71b54a676234d17f8',
      title: 'Go To Statement Considered Harmful1',
      author: 'Steve',
      url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
      likes: 5,
      __v: 0
    },
    {
      _id: '5a422aa71b54a676234d17f7',
      title: 'Go To Statement Considered Harmful2',
      author: 'Edsger W. Dijkstra',
      url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
      likes: 10,
      __v: 0
    },
    {
      _id: '5a422aa71b54a676234d17f6',
      title: 'Go To Statement Considered Harmful3',
      author: 'Edsger W. Dijkstra',
      url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
      likes: 7,
      __v: 0
    },
    {
      _id: '5a422aa71b54a676234d17f5',
      title: 'Go To Statement Considered Harmful4',
      author: 'Bob',
      url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
      likes: 10,
      __v: 0
    },
    {
      _id: '5a422aa71b54a676234d17f4',
      title: 'Go To Statement Considered Harmful5',
      author: 'Trevor',
      url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
      likes: 3,
      __v: 0
    }
  ]

  test('of five blogs', () => {
    const result = listHelper.mostBlogsAuthor(fiveBlogs)

    const expected = {
      author:'Edsger W. Dijkstra',
      blogs:2
    }

    expect(result).toEqual(expected)

  })

  const blogsWithTwoTopAuthors = [
    {
      _id: '5a422aa71b54a676234d17f8',
      title: 'Go To Statement Considered Harmful1',
      author: 'Trevor',
      url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
      likes: 5,
      __v: 0
    },
    {
      _id: '5a422aa71b54a676234d17f7',
      title: 'Go To Statement Considered Harmful2',
      author: 'Edsger W. Dijkstra',
      url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
      likes: 10,
      __v: 0
    },
    {
      _id: '5a422aa71b54a676234d17f6',
      title: 'Go To Statement Considered Harmful3',
      author: 'Edsger W. Dijkstra',
      url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
      likes: 7,
      __v: 0
    },
    {
      _id: '5a422aa71b54a676234d17f5',
      title: 'Go To Statement Considered Harmful4',
      author: 'Bob',
      url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
      likes: 10,
      __v: 0
    },
    {
      _id: '5a422aa71b54a676234d17f4',
      title: 'Go To Statement Considered Harmful5',
      author: 'Trevor',
      url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
      likes: 3,
      __v: 0
    }
  ]

  test('of five blogs with two equal top blogging authors. Only returns one, may be expanded eventually', () => {
    const result = listHelper.mostBlogsAuthor(blogsWithTwoTopAuthors)

    const expected = {
      author:'Trevor',
      blogs:2
    }

    expect(result).toEqual(expected)

  })

  test('of no blogs throws error', () => {
    expect(() => listHelper.mostBlogsAuthor([])).toThrow('Need blogs array to not be empty')
  })

})

describe('most liked author', () => {

  const listWithOneBlog = [
    {
      _id: '5a422aa71b54a676234d17f8',
      title: 'Go To Statement Considered Harmful',
      author: 'Edsger W. Dijkstra',
      url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
      likes: 5,
      __v: 0
    }
  ]

  test('of a single blog', () => {

    const expected = {
      author:'Edsger W. Dijkstra',
      likes:5
    }

    expect((listHelper.mostLikesAuthor(listWithOneBlog))).toEqual(expected)
  })

  const fiveBlogs = [
    {
      _id: '5a422aa71b54a676234d17f8',
      title: 'Go To Statement Considered Harmful1',
      author: 'Steve',
      url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
      likes: 5,
      __v: 0
    },
    {
      _id: '5a422aa71b54a676234d17f7',
      title: 'Go To Statement Considered Harmful2',
      author: 'Edsger W. Dijkstra',
      url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
      likes: 10,
      __v: 0
    },
    {
      _id: '5a422aa71b54a676234d17f6',
      title: 'Go To Statement Considered Harmful3',
      author: 'Edsger W. Dijkstra',
      url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
      likes: 7,
      __v: 0
    },
    {
      _id: '5a422aa71b54a676234d17f5',
      title: 'Go To Statement Considered Harmful4',
      author: 'Bob',
      url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
      likes: 10,
      __v: 0
    },
    {
      _id: '5a422aa71b54a676234d17f4',
      title: 'Go To Statement Considered Harmful5',
      author: 'Trevor',
      url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
      likes: 3,
      __v: 0
    }
  ]

  test('of five blogs', () => {
    const result = listHelper.mostLikesAuthor(fiveBlogs)

    const expected = {
      author:'Edsger W. Dijkstra',
      likes:17
    }

    expect(result).toEqual(expected)

  })

  const blogsWithTwoTopAuthors = [
    {
      _id: '5a422aa71b54a676234d17f8',
      title: 'Go To Statement Considered Harmful1',
      author: 'Trevor',
      url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
      likes: 6,
      __v: 0
    },
    {
      _id: '5a422aa71b54a676234d17f7',
      title: 'Go To Statement Considered Harmful2',
      author: 'Edsger W. Dijkstra',
      url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
      likes: 10,
      __v: 0
    },
    {
      _id: '5a422aa71b54a676234d17f6',
      title: 'Go To Statement Considered Harmful3',
      author: 'Edsger W. Dijkstra',
      url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
      likes: 7,
      __v: 0
    },
    {
      _id: '5a422aa71b54a676234d17f5',
      title: 'Go To Statement Considered Harmful4',
      author: 'Bob',
      url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
      likes: 10,
      __v: 0
    },
    {
      _id: '5a422aa71b54a676234d17f4',
      title: 'Go To Statement Considered Harmful5',
      author: 'Trevor',
      url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
      likes: 11,
      __v: 0
    }
  ]

  test('of five blogs with two equal top liked authors. Only returns one, may be expanded eventually', () => {
    const result = listHelper.mostLikesAuthor(blogsWithTwoTopAuthors)

    const expected = {
      author:'Trevor',
      likes:17
    }

    expect(result).toEqual(expected)

  })

  test('of no blogs throws error', () => {
    expect(() => listHelper.mostLikesAuthor([])).toThrow('Need blogs array to not be empty')
  })

})