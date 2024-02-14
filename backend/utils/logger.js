const info = (...params) => {
  if (process.env.NODE_ENV !== 'test') {
    console.log(...params)
  }
}

const debug = (...params) => {
  if (process.env.NODE_ENV !== 'test' || process.env.VERBOSITY === 'debug') {
    console.debug(...params)
  }
}

const error = (...params) => {
  if (process.env.NODE_ENV !== 'test' || process.env.VERBOSITY === 'debug') {
    console.error(...params)
  }
}

module.exports = {
  info, debug, error
}