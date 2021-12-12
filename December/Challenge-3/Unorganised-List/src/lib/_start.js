import { createRequire } from 'module'
const require = createRequire(import.meta.url)
const figlet = require('figlet')
const gradient = require('gradient-string')

export const startIntro = async () => {
  return new Promise((resolve, reject) => {
    figlet('Organizer', (err, data) => {
      if (err) reject(err)
      else resolve(gradient.rainbow(data))
    })
  })
}
