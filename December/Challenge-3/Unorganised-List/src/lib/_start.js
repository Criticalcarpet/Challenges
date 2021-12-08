import { createRequire } from 'module'
const require = createRequire(import.meta.url)
const figlet = require('figlet')
const gradient = require('gradient-string')

export const startIntro = async () => {
  figlet('Organizer', (err, data) => {
    if (err) {
      console.log('Something went wrong...')
      console.dir(err)
      return Promise.reject(err)
    }
    console.log(gradient.rainbow(data))
    return Promise.resolve('DONE')
  })

  return Promise.resolve('DONE')
}
